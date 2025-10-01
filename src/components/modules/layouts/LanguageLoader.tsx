"use client";

import { useEffect } from "react";
import i18n from "@/lib/i18n-client";

export default function LanguageLoader() {
  useEffect(() => {
    const lang = localStorage.getItem("lang") || "vi";
    i18n.changeLanguage(lang);
  }, []);

  return null;
}
