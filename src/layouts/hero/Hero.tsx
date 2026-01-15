"use client";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import Link from "next/link";

import Container from "@/components/container/Container";
import CarouselHero from "@/components/Carousel/CarouselHero";
import { ChevronRight } from "lucide-react";
// import { useLang } from "@/shared/store/language";

import { images } from "./backgroundImages";
import { BottomItem } from "../header/HeaderBottom";

import "./hero.scss";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const t = useTranslations("hero");

  const listHero = t.raw("list") as BottomItem[];

  return (
    <section className={clsx("hero", className)}>
      <div className="hero__bg">
        <CarouselHero
          imageList={images}
          countNews={1}
          className="hero__bg"
          classNameImg="imageBack"
        />
      </div>

      <Container>
        <div className="hero__content">
          <h1 className="hero__title">{t("title")}</h1>

          <nav className="hero__content-nav">
            <h2 className="title-section">{t("Iwant")}</h2>
            <ul className="hero__ul">
              {listHero.map((item: any, index: number) => (
                <li className="item-hero" key={index}>
                  <ChevronRight />
                  <Link href={"/" + "ru" + item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
