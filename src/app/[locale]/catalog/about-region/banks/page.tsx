import clsx from "clsx";
import { type FC } from "react";

import "./page.scss";
import { Metadata } from "next";

interface Props {
  className?: string;
}

export const metadata: Metadata = {
  title: "Банки второго уровня в Петропавловске и СКО | Список и контакты",
  description: "Актуальный справочник банков второго уровня (БВУ) в Северо-Казахстанской области. Адреса, прямые контакты и финансовые услуги для инвесторов и бизнеса.",

  verification: {
    google: "1MwFBGJzBOEzqk6-jXSDjtBRvcYRfOEkhyvip1wG-cg",
  },
  alternates: {
    canonical: 'https://invest-sko.kz/banks',
  }
};


const Banks: FC<Props> = ({ className }) => {
  return (
    <div className="bank-page">
      <h2 className={clsx("bank-page__title", className)}>
        Банки второго уровня в СКО
      </h2>
      <div className="bank-page__content">
        <table className="banks-table">
          <thead>
            <tr>
              <th>№</th>
              <th>Наименование</th>
              <th>Адрес, контакты</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2</td>
              <td>РФ АО «Фонд развития предпринимательства «ДАМУ» по СКО</td>
              <td>
                ул. Жамбыла Жабаева, 191
                <br />
                Контакт-центр: 1408, 8-800-080-18-90
                <br />
                +7 (7152) 55-98-10
                <br />
                +7 (7152) 55-98-16
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>АО "Alatau city bank"</td>
              <td>
                ул. Жамбыла Жабаева, 194а
                <br />
                Контакт-центр: 7711
              </td>
            </tr>

            <tr>
              <td>4</td>
              <td>АО "Bereke Bank"</td>
              <td>
                ул. Амангельды, 151а
                <br />
                Контакт-центр: 5030
              </td>
            </tr>

            <tr>
              <td>5</td>
              <td>АО "Forte Bank"</td>
              <td>
                ул. Карима Сутюшева, 21
                <br />
                Контакт-центр: 7575
              </td>
            </tr>

            <tr>
              <td>6</td>
              <td>АО "Home Credit Bank"</td>
              <td>
                ул. Жамбыла Жабаева, 139
                <br />
                Контакт-центр: 7979, 7373
              </td>
            </tr>

            <tr>
              <td>7</td>
              <td>АО "Банк ЦентрКредит"</td>
              <td>
                ул. Ибрая Алтынсарина, 166
                <br />
                Контакт-центр: 505 (физ. лица), 605 (юр. лица)
              </td>
            </tr>

            <tr>
              <td>8</td>
              <td>АО "Евразийский Банк"</td>
              <td>
                ул. Ибрая Алтынсарина, 168а
                <br />
                Контакт-центр:
                <br />
                +7-771-000-77-22
                <br />
                +7-700-000-77-22
                <br />
                +7-702-000-77-22
                <br />
                +7 (7152) 55-19-90
              </td>
            </tr>

            <tr>
              <td>9</td>
              <td>АО "Народный Банк Казахстана"</td>
              <td>
                ул. Конституции Казахстана, 36
                <br />
                Контакт-центр: 7111
              </td>
            </tr>

            <tr>
              <td>10</td>
              <td>АО "НурБанк"</td>
              <td>
                ул. Абая Кунанбаева, 80а
                <br />
                Контакт-центр: 2552
                <br />
                +7 (7152) 34-04-27
              </td>
            </tr>

            <tr>
              <td>11</td>
              <td>АО "Фридом Банк Казахстана"</td>
              <td>
                ул. Интернациональная, 64а
                <br />
                Контакт-центр: 595
                <br />
                +7 (7172) 59-55-95
              </td>
            </tr>

            <tr>
              <td>12</td>
              <td>АО "Банк ВТБ"</td>
              <td>
                ул. Абая Кунанбаева, 65
                <br />
                Контакт-центр: 5050
              </td>
            </tr>

            <tr>
              <td>13</td>
              <td>АО "Kaspi Bank"</td>
              <td>
                ул. Конституции Казахстана, 39
                <br />
                Контакт-центр: 9999
                <br />
                +7 (727) 258-59-65
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Banks;
