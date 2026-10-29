"use client";

import { useSyncExternalStore } from "react";

// The choice lives in sessionStorage; this event tells the banner it changed
const EVENT = "cookie-consent-change";
const subscribe = (onChange: () => void) => {
  window.addEventListener(EVENT, onChange);
  return () => window.removeEventListener(EVENT, onChange);
};

const choose = (value: "accepted" | "declined") => {
  sessionStorage.setItem("cookieConsent", value);
  window.dispatchEvent(new Event(EVENT));
};

export default function CookieConsent() {
  // Server render and hydration show nothing; the client shows the banner until a choice is stored
  const showBanner = useSyncExternalStore(subscribe, () => !sessionStorage.getItem("cookieConsent"), () => false);

  if (!showBanner) return null;

  return (
    <div
      id="cookie-consent-banner"
      className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-[1000] shadow-lg"
    >
      <div className="container mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          We use cookies to improve your browsing experience, personalize content and understand our traffic. By
          clicking &quot;Accept&quot;, you agree to our use of cookies.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => choose("accepted")}
            className="bg-[#0058EE] hover:bg-[#00358f] text-white text-sm font-medium py-2 px-6 rounded-full transition-colors"
          >
            Accept
          </button>
          <button
            onClick={() => choose("declined")}
            className="bg-gray-600 hover:bg-gray-700 text-white text-sm font-medium py-2 px-6 rounded-full transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
