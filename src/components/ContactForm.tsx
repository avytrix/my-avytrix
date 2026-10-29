"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import Script from "next/script";
import { Asterisk, CircleAlert } from "lucide-react";
import { z } from "zod";
import { siteConfig } from "@/lib/config";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const serviceOptions = [
  "Custom Software Development",
  "Web Development",
  "Mobile App Development",
  "Other",
];

const disposableDomains = [
  "tempmail.com", "throwaway.email", "guerrillamail.com", "mailinator.com",
  "temp-mail.org", "10minutemail.com", "fakeinbox.com", "trashmail.com",
  "yopmail.com", "getnada.com", "mohmal.com", "dispostable.com",
  "mailnesia.com", "tempr.email", "discard.email", "throwawaymail.com",
];

// Zod validation schema
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Full name can only contain letters, spaces, hyphens, and apostrophes"),
  email: z
    .string()
    .min(5, "Email must be at least 5 characters")
    .max(254, "Email must be less than 254 characters")
    .email("Please enter a valid email address"),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be less than 100 characters"),
  service: z
    .string()
    .min(1, "Please select a service"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Required field label component
function RequiredLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="flex items-center gap-1 mb-2 font-medium">
      {children}
      <Asterisk className="w-3 h-3 text-red-500" />
    </label>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    service: "Web Development",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectOpen, setSelectOpen] = useState(false);
  const formLoadTime = useRef(0);

  // Start the bot-detection timer on mount (reading the clock during render is impure)
  useEffect(() => {
    formLoadTime.current = Date.now();
  }, []);

  // Close select when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!(e.target as Element).closest(".custom-select-wrapper")) {
        setSelectOpen(false);
      }
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const isDisposableEmail = (email: string) => {
    const domain = email.split("@")[1]?.toLowerCase();
    return disposableDomains.some((d) => domain?.includes(d));
  };

  const sanitizeInput = (str: string) => {
    return str
      .replace(/[<>]/g, "")
      .replace(/javascript:/gi, "")
      .replace(/on\w+=/gi, "")
      .trim();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormError("");
    setErrors({});

    // Bot detection - form filled too fast (silent honeypot)
    const timeTaken = Date.now() - formLoadTime.current;
    if (timeTaken < 3000) {
      // Silently reject bot submissions
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      return;
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      company: sanitizeInput(formData.company),
      service: formData.service,
      message: sanitizeInput(formData.message),
    };

    // Validate with Zod
    const result = contactSchema.safeParse(sanitizedData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      setFormError("Please fix the errors below and try again.");
      return;
    }

    // Check for disposable email
    if (isDisposableEmail(sanitizedData.email)) {
      setErrors({ email: "Please use a valid business email address" });
      setFormError("Please use a valid business email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Get reCAPTCHA token
      let recaptchaToken = "";

      if (window.grecaptcha) {
        try {
          recaptchaToken = await new Promise<string>((resolve, reject) => {
            window.grecaptcha.ready(async () => {
              try {
                const token = await window.grecaptcha.execute(siteConfig.recaptchaSiteKey, {
                  action: "contact_submit",
                });
                resolve(token);
              } catch (err) {
                reject(err);
              }
            });
          });
        } catch (err) {
          console.error("reCAPTCHA execution error:", err);
          setFormError("Security verification failed. Please refresh the page and try again.");
          setIsSubmitting(false);
          return;
        }
      } else {
        setFormError("Security verification is loading. Please try again in a moment.");
        setIsSubmitting(false);
        return;
      }

      if (!recaptchaToken) {
        setFormError("Security verification failed. Please refresh the page and try again.");
        setIsSubmitting(false);
        return;
      }

      // Verify reCAPTCHA on server
      const verifyResponse = await fetch("/api/verify-recaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: recaptchaToken }),
      });

      const verifyResult = await verifyResponse.json();

      if (!verifyResult.success) {
        setFormError("Security verification failed. Please try again.");
        setIsSubmitting(false);
        return;
      }

      // Send email via Resend API
      const emailResponse = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sanitizedData),
      });

      const emailResult = await emailResponse.json();

      if (emailResult.success) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", company: "", service: "Web Development", message: "" });
        formLoadTime.current = Date.now(); // Reset bot detection timer
        setTimeout(() => setShowSuccess(false), 10000);
      } else if (emailResponse.status === 429) {
        // Rate limit exceeded
        setFormError("Email cannot be sent. You have already submitted a request today. Please try again tomorrow.");
      } else {
        setFormError("Email cannot be sent. Please try again later or contact us directly.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormError("Sorry, something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${siteConfig.recaptchaSiteKey}`}
        strategy="afterInteractive"
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Success Alert */}
        {showSuccess && (
          <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-sm font-medium">Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.</p>
          </div>
        )}

        {/* Form Error Alert */}
        {formError && (
          <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            <CircleAlert className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm font-medium">{formError}</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="form-group">
            <RequiredLabel>Full Name</RequiredLabel>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
              className={`w-full p-3 border rounded-md bg-white focus:ring-2 focus:ring-[#0058EE] focus:border-transparent outline-none ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            <p className="mt-1 text-xs text-gray-400">2-50 characters</p>
          </div>

          {/* Email */}
          <div className="form-group">
            <RequiredLabel>Email Address</RequiredLabel>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@company.com"
              className={`w-full p-3 border rounded-md bg-white focus:ring-2 focus:ring-[#0058EE] focus:border-transparent outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          {/* Company */}
          <div className="form-group">
            <RequiredLabel>Company</RequiredLabel>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Your Company Name"
              className={`w-full p-3 border rounded-md bg-white focus:ring-2 focus:ring-[#0058EE] focus:border-transparent outline-none ${
                errors.company ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
            <p className="mt-1 text-xs text-gray-400">2-100 characters</p>
          </div>

          {/* Service Select */}
          <div className="form-group">
            <RequiredLabel>Service of Interest</RequiredLabel>
            <div className="custom-select-wrapper relative">
              <div
                onClick={() => setSelectOpen(!selectOpen)}
                className={`custom-select-trigger flex justify-between items-center w-full p-3 border rounded-md bg-white cursor-pointer ${
                  errors.service ? "border-red-500" : "border-gray-300"
                }`}
              >
                <span>{formData.service}</span>
                <div
                  className={`arrow w-2.5 h-2.5 border-r-2 border-b-2 border-gray-400 transform transition-transform ${
                    selectOpen ? "-rotate-135" : "rotate-45"
                  }`}
                />
              </div>
              {selectOpen && (
                <div className="custom-options absolute top-full left-0 w-full bg-white rounded-b-md z-10 max-h-48 overflow-y-auto border border-gray-300">
                  {serviceOptions.map((option) => (
                    <span
                      key={option}
                      onClick={() => {
                        setFormData({ ...formData, service: option });
                        setSelectOpen(false);
                      }}
                      className={`custom-option block px-4 py-2 hover:bg-[#0058EE] hover:text-white cursor-pointer ${
                        formData.service === option ? "bg-[#0058EE] text-white" : ""
                      }`}
                    >
                      {option}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service}</p>}
          </div>
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message" className="block mb-2 font-medium">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your project..."
            className={`w-full p-3 border rounded-md bg-white focus:ring-2 focus:ring-[#0058EE] focus:border-transparent outline-none ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
          <p className="mt-1 text-xs text-gray-400">10-1000 characters</p>
        </div>

        {/* Consent & reCAPTCHA Notice */}
        <div className="form-group space-y-4">
          <div className="text-xs text-gray-500">
            *By submitting this form, you have read and agreed to {siteConfig.name}&apos;{" "}
            <a href="/terms-conditions" target="_blank" className="text-[#0058EE] underline">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="/privacy-policy" target="_blank" className="text-[#0058EE] underline">
              Privacy Policy
            </a>
            . This site is protected by reCAPTCHA and the Google{" "}
            <a href="https://policies.google.com/privacy" target="_blank" className="text-[#0058EE] underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="https://policies.google.com/terms" target="_blank" className="text-[#0058EE] underline">
              Terms of Service
            </a>{" "}
            apply.
          </div>
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-submit w-full md:w-auto flex justify-center items-center gap-2 bg-[#0058EE] hover:bg-[#00358f] text-white font-semibold py-3 px-8 rounded-full transition-colors disabled:bg-[#0058EE]/70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <span>Send Message</span>
            )}
          </button>
        </div>
      </form>

      {/* Success Modal */}
      {showSuccess && (
        <div
          className="success-modal-overlay fixed inset-0 bg-black/60 z-[2000] flex items-center justify-center"
          onClick={() => setShowSuccess(false)}
        >
          <div className="success-modal-content bg-white p-8 rounded-lg text-center max-w-md w-full relative">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black"
            >
              &times;
            </button>
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-4">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
            <p className="text-gray-600">
              Your message has been sent successfully. Our team will reach out to you soon.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
