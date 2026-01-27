import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ru", "kz", "chi"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});
