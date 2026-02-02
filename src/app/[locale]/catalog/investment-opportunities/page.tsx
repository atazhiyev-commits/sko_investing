import clsx from "clsx";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.catalog.listCatalog.investment-opportunities' });

  return {
    title: t('title'),
    description: t('description'),
  }
};

const InvestmentOpportunities = () => {
  return (
    <div className={clsx("InvestmentOpportunities")}>
      <h2 className="title-section titleInvest">InvestmentOpportunities</h2>
    </div>
  );
};

export default InvestmentOpportunities;
