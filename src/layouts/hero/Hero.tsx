"use client";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { useA11yStore } from "@/shared/store/a11y";

import Container from "@/components/container/Container";
import CarouselHero from "@/components/Carousel/CarouselHero";
import { BottomItem } from "./../header/HeaderBottom";
import { Dot } from "lucide-react";

import { images } from "./backgroundImages";

import "./hero.scss";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const t = useTranslations("hero");
  const listHero = t.raw("list") as BottomItem[];
  const { a11yMode } = useA11yStore() as { a11yMode: boolean };

  return (
    <section className={clsx("hero", className)}>
      <div className="hero__bg">
        {!a11yMode && <CarouselHero
          imageList={images}
          countNews={1}
          className="hero__bg"
          classNameImg="imageBack"
        />}
      </div>
      <Container>
        <div className="hero__content">
          <h1 className="hero__title">{t("title")}</h1>
          <nav className="hero__content-nav">
            <h2 className="title-section">{t("Iwant")}</h2>
            <ul className="hero__ul">
              {listHero.map((item: any, index: number) => (
                <li className="item-hero" key={index}>
                  <Dot strokeWidth={3.8} />
                  <Link href={item.link}>{item.name}</Link>
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
