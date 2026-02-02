import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { hotels } from "./hotels";

import "./page.scss";

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> })=> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.catalog.listCatalog.economy' });

  return {
    title: t('title'),
    description: t('description'),

  }
};

const Hotels = () => {
  return (
    <>
      <h2 className={clsx("catalog__hotels")}></h2>
      <table className="hotels-table">
        <thead>
          <tr>
            <th>№</th>
            <th>Имя</th>
            <th>Адрес</th>
            <th>Контакты</th>
            <th>E-mail и сайт</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map(({ id, name, address, phones, email, website }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{address}</td>
              <td className="td-phones">
                {phones.map((phone, index) => (
                  <div key={index}>{phone}</div>
                ))}
              </td>
              <td className="desktop">
                {email}
                {website && <Link href={website}> {website}</Link>}
              </td>
              <Link className="mobile" href={`mailto:${email}`}>mail</Link>
              {website && <Link className="mobile" href={website}> {website}</Link>}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Hotels;
