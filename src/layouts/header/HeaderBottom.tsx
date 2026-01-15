import { ChevronDown } from "lucide-react";
import DropDown from "@/components/dropdown";
import type { LayoutType } from "@/types/translateTypes";

import "./header.scss";
import { useTranslations } from "next-intl";
import Link from "next/link";

export type BottomItem = {
  label: string;
  link: string;
  list?: {
    name: string;
    link: string;
    list?: {
      name: string;
      link: string;
    }[];
  }[];
};

const HeaderBottom = () => {
  const t = useTranslations("header");

  const nameBottom = t.raw("headerBottom") as LayoutType[];

  return (
    <div className="header__bottom">
      {nameBottom.map((item, index) => (
        <div key={index} className="header__bottom-item_link header-item">
          <Link
            href={"/catalog" + item.link}
            // state={{ name: item.label }}
            className="link"
          >
            {item.label}
            <ChevronDown className="chevronDown" size={18} />
          </Link>

          {item.list && item.list.length > 0 && (
            <DropDown
              list={item.list}
              basePath={+"/catalog" + item.link}
              className="dropdown"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default HeaderBottom;
