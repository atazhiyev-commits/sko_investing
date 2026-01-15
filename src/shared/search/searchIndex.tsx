import type { FAQtype, LayoutType } from "@/types/translateTypes";
import { useTranslations } from "next-intl";

export const useSearchIndex = () => {
  const t = useTranslations();
  const newsIndex = t.raw("news") as LayoutType;
  const helpersIndex = t.raw("helpers") as LayoutType;
  const defenseIndex = t.raw("defense") as LayoutType;
  const heroIndex = t.raw("hero") as LayoutType;
  const faqIndex = t.raw("faq") as FAQtype;
  const catalogIndex = t.raw("header") as any;

  const SearchIndex = [
    {
      title: newsIndex?.title,
      link: newsIndex?.link,
      list: newsIndex?.list,
    },
    {
      title: helpersIndex.title,
      link: helpersIndex?.link,
      list: helpersIndex.list,
    },
    {
      title: defenseIndex.title,
      link: defenseIndex?.link,
      list: defenseIndex?.list,
    },
    {
      link: heroIndex?.link,
      list: heroIndex?.list,
    },
    {
      title: faqIndex.title,
      link: faqIndex?.link,
      list: faqIndex?.list,
    },
    {
      title: "catalog",
      link: "catalog",
      list: catalogIndex?.headerBottom,
    },
  ];

  return SearchIndex;
};
