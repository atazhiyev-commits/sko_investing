import { type FC } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import clsx from "clsx";

interface Props {
  link: string;
  className?: string;
}

const HeaderMenu: FC<Props> = ({ link, className }) => {
  const t = useTranslations("header");

  return (
    <div className={clsx("header__menu", className)}>
      <ul className="header__menu-menuList">
        <li className="item-li header-item">
          <Link href={link + "/#helpers"} className="item_link">
            {t("headerMenu.howHelp")}
          </Link>
        </li>
        <li className="item-li header-item">
          <Link href={link + "/#defense"} className="item_link">
            {t("headerMenu.protectionInvest")}
          </Link>
        </li>
        <li className="item-li header-item">
          <Link href={link + "/#contact"} className="item_link">
            {t("headerMenu.contacts")}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenu;
