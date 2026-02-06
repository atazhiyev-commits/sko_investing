import clsx from "clsx";
import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import Container from "@/components/container/Container";
import ButtonAside from "@/components/asideBtn";
import type { LayoutType } from "@/types/translateTypes";

import { MoveLeft } from "lucide-react";
import CatalogPage from "./Catalog";
import LoadingCatalog from "../loadingCatalog";

import "./catalogcss.scss";

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.catalog' });

  return {
    title: t('title'),
    description: t('description'),

    openGraph: {
      title: t('openGraph.title'),
      description: t('openGraph.description'),
    },
    keywords: t('keywords').split(', '),
  }
};

const Catalog = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations("header");

  const nameBottom = t.raw("headerBottom") as Array<LayoutType>;
  const seacrh = t.raw("search") as { label: string; link: string };

  return (
    <section className={clsx("catalog")}>
      <div className="catalog__head">
        <Container className="catalog__head-container">
          <CatalogPage />
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
            <div className="content">
              <Suspense fallback={<LoadingCatalog />}>
                {children}
              </Suspense>
            </div>
          </div>
        </div>
      </Container>
    </section >
  );
};

export default Catalog;
