// lib/gtag.ts
export const GA_MEASUREMENT_ID = "G-3DK4DTG5KH";

export const logEvent = (name: string, params?: Record<string, any>) => {
  console.log("logEvent");
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", name, params);
    console.log("logEvent");
  }
};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
