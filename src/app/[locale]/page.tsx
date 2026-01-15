import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Hero from "@/layouts/hero";
import Helper from "@/layouts/helpers";
import FAQ from "@/section/faq";
import Defense from "@/section/defense";

export const metadata: Metadata = {
  title: "ИНВЕСТИРУЙТЕ В СЕВЕРО КАЗАХСТАНСКУЯ ОБЛАСТЬ",
  description:
    "СЕВЕРО КАЗАХСТАНСКАЯ ОБЛАСТЬ, Получить земельный участок в аренду без торгов," +
    " Посмотреть меры поддержки," +
    " Банки второго уровня," +
    " Реализовать инвестиционный проект," +
    " Выбрать место для реализации проекта",
};

export default async function Home() {
  const t = await getTranslations("header");

  return (
    <div className={`app`}>
      <Hero />
      <main className="main">
        <Helper />
        <FAQ />
        <Defense />
      </main>
    </div>
  );
}
