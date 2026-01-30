"use client";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";

import "./catalogcss.scss"

export default function CatalogPage() {
  const location = usePathname() || "";
  const lastPart = location
    .split("/")
    .filter((segment) => segment.length > 0)
    .pop();

  console.log(lastPart)
  const t = useTranslations(`Metadata.catalog.listCatalog.${lastPart}`);

  return (
    <h1 id="title_catalog" className="title-section catalog__head-title">
      {t("title")}
    </h1>
  );
}
