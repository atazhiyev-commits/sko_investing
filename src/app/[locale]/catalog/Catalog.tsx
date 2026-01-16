"use client";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function CatalogPage() {
  const t = useTranslations("header");

  const location = usePathname() || "";
  const seacrh = t.raw("search") as { label: string; link: string };

  const lastPart = location
    .split("/")
    .filter((segment) => segment.length > 0)
    .pop();

  return (
    <h2 className="title-section catalog__head-title">
      {lastPart === "search" ? t("search.label") : "Каталог"}
    </h2>
  );
}
