// lib/gtag.ts
export const GA_MEASUREMENT_ID = "G-3DK4DTG5KH";

export const logEvent = (name: string, params?: Record<string, any>) => {
  if (typeof window === "undefined") return;

  // Đợi GA4 khởi tạo (window.gtag có sẵn)
  const waitForGtag = () => {
    if (typeof (window as any).gtag !== "function") {
      setTimeout(waitForGtag, 200);
      return;
    }

    (window as any).gtag("event", name, params);
    console.log("📤 Sent GA4 event:", name, params);
  };

  waitForGtag();
};


declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
