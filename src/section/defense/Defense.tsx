"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import clsx from "clsx";

import Container from "@/components/container/Container";

import "./defense.scss";

interface DefenseProps {
  className?: string;
}

const Defense: React.FC<DefenseProps> = ({ className }) => {
  const t = useTranslations("defense");

  return (
    <section className={clsx("defense", className)} id="defense">
      <Container>
        <header className="defense__header">
          <h2 className="title-section">{t("title")}</h2>
          <Link href={"defense"} className="btn-section">
            {t("button")}
          </Link>
        </header>
        <div className="defense__content">text</div>
      </Container>
    </section>
  );
};

export default Defense;
