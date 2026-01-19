"use client";
import type { FC } from "react";
import { useTranslations } from "next-intl";
import clsx from "clsx";

import SocMedia from "@/section/socMedia";
import Container from "@/components/container/Container";
import Image from "next/image";

import logo from "@/assets/images/logo/logo.svg";
import gerb from "@/assets/images/logo/gerb.svg";
import { Link } from "@/i18n/navigation";

interface Props {
  className?: string;
}

const FooterTop: FC<Props> = ({ className }) => {
  const t = useTranslations();

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
                <Link href={"/"}>
                  <Image src={logo} alt="Логотип" />
                </Link>
              </div>
            </div>

            <SocMedia />
          </div>

          <div className="footer__menu">
            <h2 className="title-footer">{t("footer.forInvestors")}</h2>
            <nav className="footer__menu-list">
              <li className="menu-item">
                <Link href={"/catalog/investor-guide"}>
                  {t("footer.listInvestor.guide")}
                </Link>
              </li>
              <li className="menu-item">
                <Link href={"/catalog/investment-opportunities"}>
                  {t("footer.listInvestor.opportunities")}
                </Link>
              </li>
              <li className="menu-item">
                <Link href={"/catalog/regulatory-acts"}>
                  {t("footer.listInvestor.regulations")}
                </Link>
              </li>
              <li className="menu-item">
                <Link href={"/catalog/about-region"}>
                  {t("footer.listInvestor.aboutRegion")}
                </Link>
              </li>
            </nav>
          </div>

          <div className="footer__navigation">
            <h2 className="title-footer">{t("footer.navigate")}</h2>
            <nav className="footer__navigation-list">
              <ul className="footer__navigation-list">
                <li className="item-list">
                  <Link href={"/news"} className="item_link">
                    {t("footer.listNavigate.news")}
                  </Link>
                </li>
                <li className="item-list">
                  <Link href={"/#helpers"} className="item_link">
                    {t("header.headerMenu.howHelp")}
                  </Link>
                </li>
                <li className="item-list">
                  <Link href={"/#defense"} className="item_link">
                    {t("header.headerMenu.protectionInvest")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="footer__contact">
            <h2 className="title-footer">{t("footer.contacts")}</h2>
            <div className="contacts">
              <div className="phone">
                <h3 className="phone-title">
                  {t("footer.contactItems.phone")}
                </h3>
                <p className="number">+7 777 123 1234</p>
              </div>
              <div className="phone">
                <h3 className="phone-title">
                  {t("footer.contactItems.homephone")}:{" "}
                </h3>
                <p className="number">+7 7152 123 123</p>
              </div>
              <div className="email">
                <h3 className="phone-title">
                  {t("footer.contactItems.email")}
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
