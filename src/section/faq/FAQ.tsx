import clsx from "clsx";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import type { FAQlist } from "@/types/translateTypes";

import AccordionFAQ from "@/components/Accordion/AccordionFAQ";
import Container from "@/components/container/Container";

import "./faq.scss";

interface faqSectionProps {
  className?: string;
}

const FAQ: React.FC<faqSectionProps> = ({ className }) => {
  const t = useTranslations();
  const res = t.raw("faq.list") as Array<FAQlist>;
  const max = 3;

  return (
    <section className={clsx("faq", className)}>
      <Container>
        <header className="faq__header">
          <h2 className="title-section">{t("faq.title")}</h2>
          <Link href={"/catalog/investor-guide/faq#title_catalog"} className="btn-section">
            {t("faq.faqBtn")}
          </Link>
        </header>
        <div className="faq__content">
          {res.map(
            (item, index: number) =>
              index < max && (
                <AccordionFAQ
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              )
          )}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
