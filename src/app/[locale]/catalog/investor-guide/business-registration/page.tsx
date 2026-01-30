import { type FC } from "react";
import Link from "next/link";
import clsx from "clsx";
import PDFViewer from "@/components/PDF/PDFViewer";

import "./page.scss";
import { getTranslations } from "next-intl/server";

interface Props {
  className?: string;
}

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.catalog' });

  return {
    title: "Business Registration | SKO Investing",
    description: "Business Registration Guide | SKO Investing",

    openGraph: {
      title: t('openGraph.title'),
      description: t('openGraph.description'),
    },
    keywords: t('keywords').split(', '),
  }
};

const BusinessRegistration: FC<Props> = ({ className }) => {
  return (
    <>
      <h2 className={clsx("businessRegistration", className)}>
        Регистрация бизнеса
      </h2>
      <PDFViewer src={"/pdf/business-registration.pdf"} />
      <Link href="https://egov.kz/cms/ru/articles/Kak-otkryt-IP">
        Как открыть ИП
      </Link>

      <table className="business-table">
        <thead>
          <tr>
            <th>Название</th>
            <th>Ссылка</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Уведомление о начале деятельности в качестве индивидуального
              предпринимателя
            </td>
            <td>https://egov.kz/cms/ru/services/reg_ip</td>
          </tr>
          <tr>
            <td>Регистрация юридических лиц/Регистрация бизнеса</td>
            <Link className="link-table" href="https://egov.kz/cms/ru/articles/registraciya-yuridicheskih-lits">
              https://egov.kz/cms/ru/services/business_registration/pass042com_mu
            </Link>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default BusinessRegistration;
