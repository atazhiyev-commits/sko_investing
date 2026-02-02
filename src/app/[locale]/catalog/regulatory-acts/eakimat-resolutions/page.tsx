import "./page.scss";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.catalog.listCatalog.eakimat-resolutions' });

  return {
    title: t('title'),
    description: t('description'),
  }
};
const eAkitmatResolutionsPage = () => {
  return <h2>Постановление еАкимата</h2>;
}

export default eAkitmatResolutionsPage;