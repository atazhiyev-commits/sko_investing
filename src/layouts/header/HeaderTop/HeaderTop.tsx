import { useState } from "react";
import { Link } from "@/i18n/navigation";

import HeaderMenu from "./HeaderMenu";
import SideMenu from "@/components/sideMenu";
import { useTranslations } from "next-intl";

import { Eye, Menu } from "lucide-react";
import logo from "@/assets/images/logo/logo.svg";
import SocMedia from "@/section/socMedia";

import Image from "next/image";

import "./../header.scss";
import { usePathname } from "@/i18n/navigation";

const HeaderTop = () => {
  const [toggled, setToggled] = useState(false);
  const t = useTranslations("header");
  const catalogPath = usePathname();

  console.log(catalogPath)

  return (
    <div className="header__UP">
      <div className="header__search">
        <form action={`catalog/${catalogPath}/search`} className="form">
          <input
            className="search__input"
            type="search"
            name="q"
            id="searchSKO"
            placeholder={t("seacrhPlaceholder")}
          />
        </form>
      </div>
      <HeaderMenu link={"lang"} />

      <nav className="header__nav">
        <button
          className="header__nav-burgerMenu"
          onClick={() => setToggled(!toggled)}
        >
          <Menu className="burger" size={32} />
        </button>
        <SocMedia className="header__nav-socMedia" />

        <ul className="header__nav-global_setting">
          <button className="eyes" onClick={() => {}}>
            <Eye size={24} />
          </button>
          {/* <LanguageSwitcher /> */}
        </ul>
        <div className="header__logo">
          <Link href={"/"} className="header__logo-link">
            <Image src={logo} alt="Logo" />
            <span>SKO</span>
          </Link>
        </div>
      </nav>

      <SideMenu toggled={toggled} setToggled={setToggled} />
    </div>
  );
};

export default HeaderTop;
