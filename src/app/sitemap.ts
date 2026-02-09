import { ArrList } from "@/types/translateTypes";
import { MetadataRoute } from "next";
import { getTranslations } from "next-intl/server";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://skoinvesting.vercel.app/catalog";
  const RU_baseUrl = "https://skoinvesting.vercel.app/ru/catalog";

  const currentDate = new Date();

  const t = await getTranslations("header");
  const links = (await t.raw("headerBottom")) as Array<ArrList>;

  return links.flatMap((item, _) => {
    const mainEntry = {
      url: `${baseUrl}${item.link}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
      // alternates: {
      //   languages: {
      //     ru: `${RU_baseUrl}${item.link}`,
      //   },
      // },
    };

    const subEntries =
      item.list.length > 0
        ? item.list.map((subItem, _) => ({
            url: `${baseUrl}${item.link}${subItem.link}`,
            lastModified: currentDate,
            changeFrequency: "monthly" as const,
            priority: 0.8,
            // alternates: {
            //   languages: {
            //     ru: `${RU_baseUrl}${item.link}${subItem.link}`,
            //   },
            // },
          }))
        : [];

    const threeEntries = (item.list ?? []).flatMap((subItem) =>
      (subItem.list ?? []).map((subItemThree) => ({
        url: `${baseUrl}${item.link}${subItem.link}${subItemThree.link}`,
        lastModified: currentDate,
        changeFrequency: "monthly" as const,
        priority: 0.7,
        // alternates: {
        //   languages: {
        //     ru: `${RU_baseUrl}${subItem.link}${subItemThree.link}`,
        //   },
        // },
      })),
    );

    return [
      {
        url: baseUrl,
        lastModified: currentDate,
        changeFrequency: "monthly" as const,
        // alternates: {
        //   languages: {
        //     ru: RU_baseUrl,
        //   },
        // }
      },
      mainEntry,
      ...subEntries,
      ...threeEntries,
    ];
  });

  // return [
  //   {
  //     url: "https://skoinvesting.vercel.app/ru",
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 1,
  //   },
  //   {
  //     url: `${baseUrl}/investor-guide`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.8,
  //   },
  //   {
  //     url: `${baseUrl}/investor-guide/business-registration`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.7,
  //   },
  //   {
  //     url: `${baseUrl}/investor-guide/gov-support`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.7,
  //   },
  //   {
  //     url: `${baseUrl}/investor-guide/gov-support/support-measures`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.6,
  //   },
  //   {
  //     url: `${baseUrl}/investor-guide/gov-support/investment-contract`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.6,
  //   },
  //   {
  //     url: `${baseUrl}/investor-guide/gov-support/industrialization-map`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.6,
  //   },
  //   {
  //     url: `${baseUrl}/investor-guide/gov-support/land-without-auction`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.6,
  //   },
  //   {
  //     url: `${baseUrl}/investor-guide/gov-support/land-auction`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.6,
  //   },
  //   {
  //     url: `${baseUrl}/investor-guide/construction`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.7,
  //   },
  //   {
  //     url: `${baseUrl}/investor-guide/construction/construction-permit`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.6,
  //   },
  //   {
  //     url: `${baseUrl}/investor-guide/construction/operation-permit`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.6,
  //   },
  //   {
  //     url: `${baseUrl}/investor-guide/technical-conditions`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.7,
  //   },
  //   {
  //     url: `${baseUrl}/investor-guide/technical-conditions/get-technical-conditions`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.6,
  //   },
  //   {
  //     url: `${baseUrl}/investor-guide/technical-conditions/water-connection`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.6,
  //   },
  //   {
  //     url: `${baseUrl}/investor-guide/technical-conditions/heat-connection`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.6,
  //   },
  //   {
  //     url: `${baseUrl}/investor-guide/faq`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.5,
  //   },

  //   {
  //     url: `${baseUrl}/investment-opportunities`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.8,
  //   },
  //   {
  //     url: `${baseUrl}/investment-opportunities/investment-potential-region`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.7,
  //   },
  //   {
  //     url: `${baseUrl}/investment-opportunities/completed-projects`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.7,
  //   },
  //   {
  //     url: `${baseUrl}/investment-opportunities/special-economic-zone-qyzyljar`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.7,
  //   },
  //   {
  //     url: `${baseUrl}/investment-opportunities/public-private-partnership`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.7,
  //   },

  //   {
  //     url: `${baseUrl}/regulatory-acts`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.8,
  //   },
  //   {
  //     url: `${baseUrl}/regulatory-acts/eakimat-resolutions`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.7,
  //   },

  //   {
  //     url: `${baseUrl}/about-region`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.8,
  //   },
  //   {
  //     url: `${baseUrl}/about-region/region-info`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.7,
  //   },
  //   {
  //     url: `${baseUrl}/about-region/economy`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.7,
  //   },
  //   {
  //     url: `${baseUrl}/about-region/infrastructure-and-tariffs`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.7,
  //   },
  //   {
  //     url: `${baseUrl}/about-region/banks`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.7,
  //   },
  //   {
  //     url: `${baseUrl}/about-region/hotels`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.7,
  //   },
  //   {
  //     url: `${baseUrl}/about-region/success-stories`,
  //     lastModified: currentDate,
  //     changeFrequency: "monthly",
  //     priority: 0.7,
  //   },
  // ];
}
