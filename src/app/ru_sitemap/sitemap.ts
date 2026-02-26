import { ArrList } from "@/types/translateTypes";
import { MetadataRoute } from "next";
import { getTranslations } from "next-intl/server";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://skoinvesting.vercel.app/ru/catalog";

  const currentDate = "2026-02-12T18:20:51.266Z";

  const t = await getTranslations("header");
  const links = (await t.raw("headerBottom")) as Array<ArrList>;

  return links.flatMap((item, _) => {
    const mainEntry = {
      url: `${baseUrl}${item.link}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
    };

    const subEntries =
      item.list.length > 0
        ? item.list.map((subItem, _) => ({
            url: `${baseUrl}${item.link}${subItem.link}`,
            lastModified: currentDate,
            changeFrequency: "monthly" as const,
            priority: 0.8,
          }))
        : [];

    const threeEntries = (item.list ?? []).flatMap((subItem) =>
      (subItem.list ?? []).map((subItemThree) => ({
        url: `${baseUrl}${item.link}${subItem.link}${subItemThree.link}`,
        lastModified: currentDate,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
    );

    return [
      {
        url: baseUrl,
        lastModified: currentDate,
        changeFrequency: "monthly" as const,
      },
      mainEntry,
      ...subEntries,
      ...threeEntries,
    ];
  });}
