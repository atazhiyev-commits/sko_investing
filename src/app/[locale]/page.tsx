import Hero from "@/layouts/hero";
import Helper from "@/layouts/helpers";
import FAQ from "@/section/faq";
import Defense from "@/section/defense";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import NewsSection from "@/layouts/news";

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.layout' });

  return {
    title: t('title'),
    description: t('description'),

    openGraph: {
      title: t('openGraph.title'),
      description: t('openGraph.description'),
    },
    keywords: t('keywords').split(', '),
  }
};

export default async function Home() {

  return (
    <div className={`app`}>
      <Hero />
      <main className="main">
        <NewsSection />
        <Helper />
        <FAQ />
        <Defense />
      </main>
    </div>
  );
}
