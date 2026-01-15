import { type FC } from "react";
// import { HashLink } from "react-router-hash-link";
// import { useTranslation } from "react-i18next";
import clsx from "clsx";
// import { lang } from "@/shared/store/lg";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
// import type { LayoutType } from "@/types/translateTypes";

import { X } from "lucide-react";

import "./sidemenu.scss";
import Link from "next/link";

interface Props {
  className?: string;
  toggled: boolean;
  setToggled?: any;
  children?: React.ReactNode;
}

const SideMenu: FC<Props> = ({ toggled, setToggled, children, className }) => {
  // const { t } = useTranslation();
  // const nameBottom = t("header.headerBottom", {
  //   returnObjects: true,
  // }) as Array<LayoutType>;

  return (
    <section
      className={clsx("sideMenu", className)}
      style={{
        direction: "rtl",
      }}
    >
      <Sidebar
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="all"
        rtl
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
            {"header.headerMenu.howHelp"}
          </MenuItem>
          <MenuItem
            component={<Link href={"/#defense"} />}
            className="menu-item"
            onClick={() => setToggled(false)}
          >
            {"header.headerMenu.protectionInvest"}
          </MenuItem>
          <MenuItem
            component={<Link href={"/#contact"} />}
            className="menu-item"
            onClick={() => setToggled(false)}
          >
            {"header.headerMenu.contacts"}
          </MenuItem>
          {/* {nameBottom.map((item, index: number) => (
            <MenuItem
              key={index}
              component={<Link href={lang + "/catalog" + item.link} />}
              className="menu-item"
            >
              {item.label}
            </MenuItem>
          ))} */}
        </Menu>
      </Sidebar>
      {children}
    </section>
  );
};

export default SideMenu;
