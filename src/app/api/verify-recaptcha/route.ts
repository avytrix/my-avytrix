import { NextRequest, NextResponse } from "next/server";

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || "6Lfp93QrAAAAANc1UFOxBOv-IBIb0anR-lAXgKOI";

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json({ success: false, error: "No token provided" }, { status: 400 });
    }

    // Verify the token with Google
    const verifyUrl = "https://www.google.com/recaptcha/api/siteverify";
    const response = await fetch(verifyUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await response.json();

    if (data.success && data.score >= 0.5) {
      return NextResponse.json({
        success: true,
        score: data.score,
        action: data.action,
      });
    } else {
      return NextResponse.json({
        success: false,
        score: data.score || 0,
        error: "reCAPTCHA verification failed",
        errorCodes: data["error-codes"],
      });
    }
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
