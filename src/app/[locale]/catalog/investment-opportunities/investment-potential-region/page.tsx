import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import { TisersPDF } from "./tisersPDF";
import { BtnLink } from "@/components/btnLink/BtnLink";

import "./page.scss";

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.catalog.listCatalog.investment-potential-region' });

  return {
    title: t('title'),
    description: t('description'),
  }
};

const InvestmentOpportunities = async () => {
  const t = await getTranslations({ locale: "ru", namespace: "catalog.opportunities" });
  const tisers = t.raw("tisers");

  return (
    <div className={clsx("InvestmentOpportunities")}>
      <h2 className="title-section titleInvest">
        Инвестиционный потенциал региона
      </h2>
      <div className="listLaws">
        {tisers.map((tiser: { name: string; link: string }, index: number) => (
          <BtnLink key={index} name={tiser.name} src={`?tisers=${tiser.link}`} />
        ))}
      </div>
      <h3 className="titleLaw">Слайд</h3>
      <TisersPDF />
    </div>
  );
};

export default InvestmentOpportunities;
