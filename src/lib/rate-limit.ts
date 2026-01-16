import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Lazy initialization to avoid build-time errors
let rateLimiter: Ratelimit | null = null;

function getRateLimiter() {
  if (!rateLimiter) {
    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL!,
      token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    });

    rateLimiter = new Ratelimit({
      redis,
      limiter: Ratelimit.fixedWindow(1, "1 d"), // 1 request per day
      analytics: true,
      prefix: "contact_form",
    });
  }
  return rateLimiter;
}

// Check rate limit for both IP and email
export async function checkRateLimit(ip: string, email: string): Promise<{
  success: boolean;
  error?: string;
  resetAt?: Date;
}> {
  const limiter = getRateLimiter();

  // Check IP rate limit
  const ipResult = await limiter.limit(`ip:${ip}`);
  if (!ipResult.success) {
    const resetAt = new Date(ipResult.reset);
    return {
      success: false,
      error: `You have already submitted a request today. Please try again after ${resetAt.toLocaleDateString()}.`,
      resetAt,
    };
  }

  // Check email rate limit
  const emailResult = await limiter.limit(`email:${email.toLowerCase()}`);
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
