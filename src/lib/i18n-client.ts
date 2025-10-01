"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";

// Chỗ này: dùng index.ts đã gộp sẵn tất cả object
void i18n
  .use(initReactI18next)
  .use(
    resourcesToBackend((lng: string) =>
      import(`../../public/locales/${lng}/index.ts`).then((mod) => ({
        default: mod.default,
      }))
    )
  )
  .init({
    lng: "vi",
    fallbackLng: "vi",
    interpolation: {
      escapeValue: false,
    },
    ns: [],
    defaultNS: undefined,
  });

export default i18n;
