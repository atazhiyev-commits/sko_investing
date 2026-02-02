import { type FC } from "react";
import clsx from "clsx";

import "./page.scss"
import { getTranslations } from "next-intl/server";

interface Props {
  className?: string;
}

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> })=> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.catalog.listCatalog.region-info' });

  return {
    title: t('title'),
    description: t('description'),
  }
};

const AboutTheRegion: FC<Props> = ({ className }) => {
  return (
    <div className={clsx("AboutTheRegion", className)}>
      <h2 className="title-section">О регионе</h2>
    </div>
  );
};

export default AboutTheRegion;
  