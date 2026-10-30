import { z } from "zod";

// Shared by the contact form (browser) and the contact Worker (worker/src/index.ts), so both enforce the same rules

export const serviceOptions = [
  "Custom Software Development",
  "Web Development",
  "Mobile App Development",
  "Other",
];

export const disposableDomains = [
  "tempmail.com", "throwaway.email", "guerrillamail.com", "mailinator.com",
  "temp-mail.org", "10minutemail.com", "fakeinbox.com", "trashmail.com",
  "yopmail.com", "getnada.com", "mohmal.com", "dispostable.com",
  "mailnesia.com", "tempr.email", "discard.email", "throwawaymail.com",
];

// Zod validation schema
export const contactSchema = z.object({
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

export type ContactFormData = z.infer<typeof contactSchema>;

export const isDisposableEmail = (email: string) => {
  const domain = email.split("@")[1]?.toLowerCase();
  return disposableDomains.some((d) => domain?.includes(d));
};
