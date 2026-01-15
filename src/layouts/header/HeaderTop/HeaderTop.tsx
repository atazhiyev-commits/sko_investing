import { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { useA11yStore } from "@/app/a11";
// import { BASE_URL } from "@/shared/store/env";
// import { lang } from "@/shared/store/lg";

// import LanguageSwitcher from "@/shared/ui/LanguageSwitcher";
import HeaderMenu from "./HeaderMenu";
import SideMenu from "@/components/sideMenu";

import { Eye, Menu } from "lucide-react";
// import logo from "@/assets/images/logo/logo.svg";
// import SocMedia from "@/sections/socMedia";

import "./../header.scss";
import Link from "next/link";

const HeaderTop = () => {
  const [toggled, setToggled] = useState(false);
  // const { t } = useTranslation();

  // const toggle = useA11yStore((s: any) => s.toggleA11yMode);

  return (
    <div className="header__UP">
      <div className="header__search">
        <form action={`/catalog/search`} className="form">
          <input
            className="search__input"
            type="search"
            name="q"
            id="searchSKO"
            placeholder={("header.seacrhPlaceholder")}
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
        {/* <SocMedia className="header__nav-socMedia" /> */}

        <ul className="header__nav-global_setting">
          <button className="eyes" onClick={() => {}}>
            <Eye size={24} />
          </button>
          {/* <LanguageSwitcher /> */}
        </ul>
        {/* <div className="header__logo">
          <Link href={lang + "/"} className="header__logo-link">
            <img src={logo} alt="Logo" />
            <span>SKO</span>
          </Link>
        </div> */}
      </nav>

      <SideMenu toggled={toggled} setToggled={setToggled} />
    </div>
  );
};

export default HeaderTop;
