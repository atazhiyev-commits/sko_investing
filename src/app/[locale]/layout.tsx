import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { getMessages } from "next-intl/server";

import Header from "@/layouts/header";
import Footer from "@/layouts/footer";

import "@/styles/App.scss";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  applicationName: 'SKO Investing',

  title: "Северо Казахстанская область - инвестиционный портал",
  description: "Все об инвестиционном климате Северо-Казахстанской области: льготы, проекты, СЭЗ и поддержка бизнеса, новости",

  openGraph: {
    // Название сайта в соцсетях и над ссылкой в поиске
    siteName: 'SKO Investing',
    title: 'ИНВЕСТИРУЙТЕ В СЕВЕРО-КАЗАХСТАНСКУЮ ОБЛАСТЬ',
    description: 'Инвестиционный портал СКО',
    type: 'website',
  },

  appleWebApp: {
    title: 'SKO Investing',
  },

  verification: {
    google: "1MwFBGJzBOEzqk6-jXSDjtBRvcYRfOEkhyvip1wG-cg",
    yandex: "5c4086505fb4b8db",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <AppRouterCacheProvider>
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
