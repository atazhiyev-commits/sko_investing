import Link from "next/link";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import clsx from "clsx";
import PDFCatalog from "@/components/pdfCatalog/PDFCatalog";

import "./page.scss";

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.catalog.listCatalog.business-registration' });

  return {
    title: t('title'),
    description: t('description'),
    viewport: 'width=device-width, initial-scale=1.0',
  }
};

const BusinessRegistration = () => {
  return (
    <>
      <h2 className={clsx("businessRegistration")}>
        Регистрация бизнеса
      </h2>
      {<PDFCatalog src={"/pdf/business-registration.pdf"} widthProps={40} />}
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
