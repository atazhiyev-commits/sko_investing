"use client";
import { type FC } from "react";
import clsx from "clsx";

import "./page.scss";

import PDFViewer from "@/components/PDF/PDFViewer";
import Link from "next/link";

interface Props {
  className?: string;
}

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
