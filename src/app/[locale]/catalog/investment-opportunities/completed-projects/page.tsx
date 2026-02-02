import { getTranslations } from "next-intl/server";
import clsx from "clsx";

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.catalog.listCatalog.completed-projects' });

  return {
    title: t('title'),
    description: t('description'),
  }
};

const InvestmentOpportunities = () => {
  return (
    <div className={clsx("InvestmentOpportunities")}>
      <h2 className="title-section titleInvest">Завершенные инвестиционные проекты</h2>
    </div>
  );
};

export default InvestmentOpportunities;
