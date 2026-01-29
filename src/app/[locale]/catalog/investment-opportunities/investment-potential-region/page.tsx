"use client";
import { type FC } from "react";
import clsx from "clsx";
import { BtnLink } from "@/components/btnLink/BtnLink";
import PDFViewer from "@/components/PDF/PDFViewer";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

import "./page.scss";

interface Props {
  className?: string;
}

const InvestmentOpportunities: FC<Props> = ({ className }) => {
  const searchParams = useSearchParams();
  const searchQuery = (searchParams && searchParams.get("tisers")) || "";
  const t = useTranslations("catalog.opportunities");
  const tisers = t.raw("tisers");

  return (
    <div className={clsx("InvestmentOpportunities", className)}>
      <h2 className="title-section titleInvest">
        Инвестиционный потенциал региона
      </h2>
      <div className="listLaws">
        {tisers.map((tiser: { name: string; link: string }, index: number) => (
          <BtnLink key={index} name={tiser.name} src={`?tisers=${tiser.link}`} />
        ))}
      </div>
      <h3 className="titleLaw">Слайд</h3>
      <PDFViewer src={"/pdf/tisers/" + searchQuery + ".pdf"} />
    </div>
  );
};

export default InvestmentOpportunities;
