"use client"
import type { FC } from "react";

// import { useTranslation } from "react-i18next";
import clsx from "clsx";
import Container from "@/components/container/Container";

import { Facebook, Instagram, Send } from "lucide-react";
import logo from "@/assets/images/logo/logo.svg";
import gerb from "@/assets/images/logo/gerb.svg";
// import { lang } from "@/shared/store/lg";
// import SocMedia from "@/sections/socMedia";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import Image from "next/image";

interface Props {
  className?: string;
}

const FooterTop: FC<Props> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <section className={clsx("footer", className)} id="contact">
      <Container>
        <div className="footer__inner">
          <div className="footer__icons">
            <div className="iconGlav">
              <div className="gerb">
                <Link href={"https://primeminister.kz/"}>
                  <Image src={gerb} alt="Герб" />
                </Link>
              </div>
              <div className="logo">
                <Link href={ "/"}>
                  <Image src={logo} alt="Логотип" />
                </Link>
              </div>
            </div>

            {/* <SocMedia /> */}
          </div>

          <div className="footer__menu">
            <h2 className="title-footer">{("footer.forInvestors")}</h2>
            <nav className="footer__menu-list">
              <li className="menu-item">
                <Link href={ "/catalog/investor-guide"}>
                  {t("footer.listInvestor.guide")}
                </Link>
              </li>
              <li className="menu-item">
                <Link href={ "/catalog/investment-opportunities"}>
                  {t("footer.listInvestor.opportunities")}
                </Link>
              </li>
              <li className="menu-item">
                <Link href={ "/catalog/regulatory-acts"}>
                  {t("footer.listInvestor.regulations")}
                </Link>
              </li>
              <li className="menu-item">
                <Link href={ "/catalog/about-region"}>
                  {("footer.listInvestor.aboutRegion")}
                </Link>
              </li>
            </nav>
          </div>

          <div className="footer__navigation">
            <h2 className="title-footer">{("footer.navigate")}</h2>
            <nav className="footer__navigation-list">
              <ul className="footer__navigation-list">
                <li className="item-list">
                  <Link href={ "/news"} className="item_link">
                    {("footer.listNavigate.news")}
                  </Link>
                </li>
                <li className="item-list">
                  <Link href={ "/#helpers"} className="item_link">
                    {("header.headerMenu.howHelp")}
                  </Link>
                </li>
                <li className="item-list">
                  <Link href={ "/#defense"} className="item_link">
                    {("header.headerMenu.protectionInvest")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="footer__contact">
            <h2 className="title-footer">{("footer.contacts")}</h2>
            <div className="contacts">
              <div className="phone">
                <h3 className="phone-title">
                  {("footer.contactItems.phone")}:{" "}
                </h3>
                <p className="number">+7 777 123 1234</p>
              </div>
              <div className="phone">
                <h3 className="phone-title">
                  {("footer.contactItems.homephone")}:{" "}
                </h3>
                <p className="number">+7 7152 123 123</p>
              </div>
              <div className="email">
                <h3 className="phone-title">
                  {("footer.contactItems.email")}
                </h3>
                <p className="mail">test@mailgov.kz</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FooterTop;
