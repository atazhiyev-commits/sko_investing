import clsx from "clsx";
import { hotels } from "./hotels";
import Link from "next/link";

import "./page.scss";

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
            <th>E-mail</th>
            {/* <th>Сайт</th> */}
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
              <td>
                {email}
                {website && <Link href={website}> {website}</Link>}
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Hotels;
