import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Form from 'next/form'

import HeaderMenu from "./HeaderMenu";
import SideMenu from "@/components/sideMenu";
import LocaleSwitcher from "@/shared/ui/LanguageSwitcher";
import SocMedia from "@/section/socMedia";

import { Eye, Menu } from "lucide-react";
import logo from "@/assets/images/logo/logo.svg";

import Image from "next/image";
import { useA11yStore } from "@/shared/store/a11y";

import "./../header.scss";

const HeaderTop = () => {
  const [toggled, setToggled] = useState(false);
  const { toggleA11yMode } = useA11yStore() as any;

  const t = useTranslations("header");
  const catalogPath = usePathname();

  const handleSearch = () => {
    return `/catalog/search${catalogPath ? `?from=${catalogPath}` : ""}`;
  }

  return (
    <div className="header__UP" id="header_top">
      <div className="header__search">
        <Form action={handleSearch()} className="form">
          <input
            className="search__input"
            type="search"
            name="q"
            id="searchSKO"
            placeholder={t("seacrhPlaceholder")}
          />
        </Form>
      </div>
      <HeaderMenu link={""} />

      <nav className="header__nav">
        <button
          className="header__nav-burgerMenu"
          onClick={() => setToggled(!toggled)}
        >
          <Menu className="burger" size={32} />
        </button>
        <SocMedia className="header__nav-socMedia" />

        <ul className="header__nav-global_setting">
          <button
            className="eyes"
            onClick={() => toggleA11yMode()}>
            <Eye size={24} />
          </button>
          <LocaleSwitcher />
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
