import { getTranslations } from "next-intl/server";
import clsx from "clsx";

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.catalog.listCatalog.water-connection' });

  return {
    title: t('title'),
    description: t('description'),
  }
};

const InvestorGuide = async () => {
  return (
    <div className={clsx("InvestorGuide")}>
      <h2 className="title-section">Подключение к водоснабжению и водоотведению</h2>
    </div>
  );
};

export default InvestorGuide;
