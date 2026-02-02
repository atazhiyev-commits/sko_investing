import clsx from "clsx";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.catalog.listCatalog.get-technical-conditions' });

  return {
    title: t('title'),
    description: t('description'),
  }
};

const InvestorGuide = async () => {
  return (
    <div className={clsx("InvestorGuide")}>
      <h2 className="title-section">Получение технических условий</h2>
    </div>
  );
};

export default InvestorGuide;
