import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { getMessages } from "next-intl/server";
import { SpeedInsights } from "@vercel/speed-insights/next"

import Header from "@/layouts/header";
import Footer from "@/layouts/footer";

import "@/styles/App.scss";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://skoinvesting.vercel.app/'),
    applicationName: 'SKO Investing',
    authors: [{ name: 'CSI' }, { name: 'CSI', url: 'https://csi.kz' }],
    creator: 'Smart Derek',
    generator: 'Next.js',
    publisher: 'Smart Derek',
    icons: {
      icon: '/favicon_small.png',
    },
    verification: {
      google: "1MwFBGJzBOEzqk6-jXSDjtBRvcYRfOEkhyvip1wG-cg",
      yandex: "5c4086505fb4b8db",
    },
    openGraph: {
      siteName: 'SKO Investing',
      type: 'website',
      title: 'СКО инвестиции',
      description: "Инвестиции в СКО, Северо-Казахстанская область",
      images: '/favicon_small.png',
    },

    appleWebApp: {
      title: 'СКО инвестиции',
    },
  }
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
            <SpeedInsights />
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
