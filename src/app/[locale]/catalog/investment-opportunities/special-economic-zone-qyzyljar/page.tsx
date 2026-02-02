import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import PDFViewer from "@/components/PDF/PDFViewer";

import "./page.scss";

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.catalog.listCatalog.special-economic-zone-qyzyljar' });

  return {
    title: t('title'),
    description: t('description'),
  }
};

const InvestmentOpportunities = () => {

  return (
    <div className={clsx("special-economic-zone-qyzyljar")}>
      <h2 className="title-section titleInvest">
        Специальная экономическая зона «Qyzyljar»
      </h2>
      <PDFViewer src={"/pdf/special-economic-zone-qyzyljar.pdf"} />
    </div>
  );
};

export default InvestmentOpportunities;
