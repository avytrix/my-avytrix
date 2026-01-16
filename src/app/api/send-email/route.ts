import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { siteConfig } from "@/lib/config";
import {
  getCustomerEmailTemplate,
  getVilihaNotificationTemplate,
} from "@/lib/email-templates";
import { checkRateLimit } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);

// Verified domain email
const FROM_EMAIL = `${siteConfig.email.fromName} <${siteConfig.email.fromEmail}>`;

// Validation schema for contact form
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must be less than 50 characters"),
  email: z
    .string()
    .min(5, "Email must be at least 5 characters")
    .max(254, "Email must be less than 254 characters")
    .email("Please enter a valid email address"),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be less than 100 characters"),
  service: z.string().min(1, "Please select a service"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: "Validation failed", details: result.error.issues },
        { status: 400 }
      );
    }

    const { name, email, company, service, message } = result.data;

    // Get client IP address
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim() ||
               request.headers.get("x-real-ip") ||
               "unknown";

    // Check rate limit (1 per day per IP and email)
    const rateLimitResult = await checkRateLimit(ip, email);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { success: false, error: rateLimitResult.error },
        { status: 429 }
      );
    }

    // Send thank you email to customer
    const customerEmailResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Thank You for Contacting Viliha",
      html: getCustomerEmailTemplate(name),
    });

    if (customerEmailResult.error) {
      console.error("Failed to send customer email:", customerEmailResult.error);
      return NextResponse.json(
        { success: false, error: `Failed to send email: ${customerEmailResult.error.message}` },
        { status: 500 }
      );
    }

    // Send notification email to Viliha
    const vilihaEmailResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: siteConfig.email.notificationEmail,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: getVilihaNotificationTemplate({
        name,
        email,
        company,
        service,
        message,
      }),
    });

    if (vilihaEmailResult.error) {
      console.error("Failed to send notification email:", vilihaEmailResult.error);
      // Don't fail the request if notification email fails - customer email was sent
    }

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
