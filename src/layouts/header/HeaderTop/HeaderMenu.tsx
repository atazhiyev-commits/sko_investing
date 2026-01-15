import { type FC } from "react";
// import { HashLink } from "react-router-hash-link";
import clsx from "clsx";
import Link from "next/link";
// import { useTranslation } from "react-i18next";

interface Props {
  link: string;
  className?: string;
}

const HeaderMenu: FC<Props> = ({ link, className }) => {
  // const { t } = useTranslation();

  return (
    <div className={clsx("header__menu", className)}>
      <ul className="header__menu-menuList">
        <li className="item-li header-item">
          <Link href={link + "/#helpers"} className="item_link">
            {("header.headerMenu.howHelp")}
          </Link>
        </li>
        <li className="item-li header-item">
          <Link href={link + "/#defense"} className="item_link">
            {("header.headerMenu.protectionInvest")}
          </Link>
        </li>
        <li className="item-li header-item">
          <Link href={link + "/#contact"} className="item_link">
            {("header.headerMenu.contacts")}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenu;
