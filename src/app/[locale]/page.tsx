import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Hero from "@/layouts/hero";
import Helper from "@/layouts/helpers";
import FAQ from "@/section/faq";
import Defense from "@/section/defense";
import NewsSection from "@/layouts/news";

export const metadata: Metadata = {
  title: "Северо Казахстанская область - инвестиционный портал",
  description:
    "СЕВЕРО КАЗАХСТАНСКАЯ ОБЛАСТЬ, Получить земельный участок в аренду без торгов," +
    " Посмотреть меры поддержки, " +
    " Банки второго уровня, " +
    " Реализовать инвестиционный проект, " +
    " Выбрать место для реализации проекта ",
};

export default async function Home() {
  const t = await getTranslations("header");

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
