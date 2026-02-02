import { getTranslations } from "next-intl/server";
import clsx from "clsx";

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.catalog.listCatalog.operation-permit' });

  return {
    title: t('title'),
    description: t('description'),
  }
};
const BusinessRegistration = () => {
  return (
    <>
      <h2 className={clsx("BusinessRegistration")}>
        operation-permit
      </h2>
    </>
  );
};

export default BusinessRegistration;
