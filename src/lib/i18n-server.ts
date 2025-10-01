import i18next from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";

export async function initI18n(lng: string) {
  const i18nInstance = i18next.createInstance();

  await i18nInstance
    .use(
      resourcesToBackend((lng: string) =>
        import(`../../public/locales/${lng}/index`).then((mod) => ({
          default: mod.default,
        }))
      )
    )
    .init({
      lng,
      fallbackLng: "vi",
      interpolation: {
        escapeValue: false,
      },
    });

  return i18nInstance;
}
