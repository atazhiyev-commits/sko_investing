import clsx from "clsx";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> })=> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.catalog.listCatalog.about-region' });

  return {
    title: t('title'),
    description: t('description'),

  }
};


const AboutTheRegion = () => {
  return (
    <div className={clsx("AboutTheRegion")}>
      <h2 className="title-section">AboutTheRegion</h2>
    </div>
  );
};

export default AboutTheRegion;
