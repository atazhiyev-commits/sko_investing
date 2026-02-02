import clsx from "clsx";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.catalog.listCatalog.land-without-auction' });

  return {
    title: t('title'),
    description: t('description'),
  }
};

const BusinessRegistration = () => {
  return (
    <>
      <h2 className={clsx("BusinessRegistration")}>
        Получение земельного участка без торгов
      </h2>
    </>
  );
};

export default BusinessRegistration;
