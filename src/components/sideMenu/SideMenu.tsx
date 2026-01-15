"use client";
import { type FC } from "react";
import Link from "next/link";
import clsx from "clsx";
// import { lang } from "@/shared/store/lg";
import { Menu, MenuItem } from "react-pro-sidebar";
// import type { LayoutType } from "@/types/translateTypes";
import { useTranslations } from "next-intl";

import { X } from "lucide-react";

import "./sidemenu.scss";
import dynamic from "next/dynamic";

interface Props {
  className?: string;
  toggled: boolean;
  setToggled?: any;
  children?: React.ReactNode;
}

const Sidebar = dynamic(
  () => import('react-pro-sidebar').then(m => m.Sidebar),
  { ssr: false }
);

const SideMenu: FC<Props> = ({ toggled, setToggled, children, className }) => {
  const t = useTranslations();
  const nameBottom = t.raw("header.headerBottom") as Array<any>;

  return (
    <section className={clsx("sideMenu", className)}>
      <Sidebar
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        rtl={true}
        breakPoint="all"
        className="sidebar"
        backgroundColor="#fff"
        collapsedWidth="350px"
        collapsed
      >
        <Menu className="menu">
          <button className="menu__close" onClick={() => setToggled(false)}>
            <X />
          </button>
          <MenuItem
            component={<Link href={"/#helpers"} />}
            className="menu-item"
            onClick={() => setToggled(false)}
          >
            {t("header.headerMenu.howHelp")}
          </MenuItem>
          <MenuItem
            component={<Link href={"/#defense"} />}
            className="menu-item"
            onClick={() => setToggled(false)}
          >
            {t("header.headerMenu.protectionInvest")}
          </MenuItem>
          <MenuItem
            component={<Link href={"/#contact"} />}
            className="menu-item"
            onClick={() => setToggled(false)}
          >
            {t("header.headerMenu.contacts")}
          </MenuItem>
          {nameBottom.map((item, index: number) => (
            <MenuItem
              key={index}
              component={<Link href={"/catalog" + item.link} />}
              className="menu-item"
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
      {children}
    </section>
  );
};

export default SideMenu;
