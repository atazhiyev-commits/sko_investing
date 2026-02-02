import { getTranslations } from "next-intl/server";
import clsx from "clsx";

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.catalog.listCatalog.technical-conditions' });

  return {
    title: t('title'),
    description: t('description'),
  }
};

const InvestorGuide = async () => {
  return (
    <div className={clsx("InvestorGuide")}>
      <h2 className="title-section">Технические условия и подключения</h2>
    </div>
  );
};

export default InvestorGuide;
