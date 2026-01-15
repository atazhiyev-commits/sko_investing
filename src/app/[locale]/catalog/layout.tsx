"use client";
import clsx from "clsx";
import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

import Container from "@/components/container/Container";
import ButtonAside from "@/components/asideBtn";
import type { LayoutType } from "@/types/translateTypes";

import { MoveLeft } from "lucide-react";

import "./catalogcss.scss";

const Catalog = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations("header");
  const location = usePathname() || "";

  const lastPart = location
    .split("/")
    .filter((segment) => segment.length > 0)
    .pop();

  const nameBottom = t.raw("headerBottom") as Array<LayoutType>;
  const seacrh = t.raw("search") as { label: string; link: string };

  return (
    <section className={clsx("catalog")}>
      <div className="catalog__head">
        <Container className="catalog__head-container">
          <h2 className="title-section catalog__head-title">
            {lastPart === "search" ? t("search.label") : "Каталог"}
          </h2>
        </Container>
      </div>

      <Container>
        <Link href={"/"} className="breadcrumb">
          <span className="linkBack">
            <MoveLeft className="move-left" /> {t("goto")}
          </span>
        </Link>
        <div className="catalog__content">
          <aside className="catalog__content-aside">
            {nameBottom.map((item, index) => (
              <ButtonAside
                key={index}
                name={item.label}
                activeLink={item.link}
                list={item.list}
              />
            ))}
            <ButtonAside
              name={seacrh.label}
              activeLink={seacrh.link}
              list={[]}
              className="catalog__content-aside-anylink"
            />
          </aside>
          <div className="catalog__content-info">
            <div className="content">{children}</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Catalog;
