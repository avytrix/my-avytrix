import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Create Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Rate limiter: 1 request per day per identifier (IP or email)
export const contactFormRateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(1, "1 d"), // 1 request per day
  analytics: true,
  prefix: "contact_form",
});

// Check rate limit for both IP and email
export async function checkRateLimit(ip: string, email: string): Promise<{
  success: boolean;
  error?: string;
  resetAt?: Date;
}> {
  // Check IP rate limit
  const ipResult = await contactFormRateLimiter.limit(`ip:${ip}`);
  if (!ipResult.success) {
    const resetAt = new Date(ipResult.reset);
    return {
      success: false,
      error: `You have already submitted a request today. Please try again after ${resetAt.toLocaleDateString()}.`,
      resetAt,
    };
  }

  // Check email rate limit
  const emailResult = await contactFormRateLimiter.limit(`email:${email.toLowerCase()}`);
  if (!emailResult.success) {
    const resetAt = new Date(emailResult.reset);
    return {
      success: false,
      error: `This email has already been used to submit a request today. Please try again after ${resetAt.toLocaleDateString()}.`,
      resetAt,
    };
  }

  return { success: true };
}
