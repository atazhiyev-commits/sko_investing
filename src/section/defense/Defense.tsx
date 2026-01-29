"use client";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import clsx from "clsx";

import Container from "@/components/container/Container";

import "./defense.scss";
import CarouselLaws from "@/components/carouselLaws/carouselLaws";

interface DefenseProps {
  className?: string;
}

const Defense: React.FC<DefenseProps> = ({ className }) => {
  const t = useTranslations("defense");
  const listRaws = t.raw("lawList");

  return (
    <section className={clsx("defense", className)} id="defense">
      <Container>
        <header className="defense__header">
          <h2 className="title-section">{t("title")}</h2>
          <Link href={"/catalog/regulatory-acts"} className="btn-section">
            {t("button")}
          </Link>
        </header>
        <div className="defense__content">{<CarouselLaws lawsList={listRaws} />}</div>
      </Container>
    </section>
  );
};

export default Defense;
