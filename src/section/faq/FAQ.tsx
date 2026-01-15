import clsx from "clsx";
import type { FAQlist } from "@/types/translateTypes";

import AccordionFAQ from "@/components/Accordion/AccordionFAQ";
import Container from "@/components/container/Container";

import "./faq.scss";
import { useTranslations } from "next-intl";

interface faqSectionProps {
  className?: string;
}

const FAQ: React.FC<faqSectionProps> = ({ className }) => {
  const t = useTranslations();
  const res = t.raw("faq.list") as Array<any>;
  const max = 3;

  return (
    <section className={clsx("faq", className)}>
      <Container>
        <h2 className="title-section">{t("faq.title")}</h2>
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
