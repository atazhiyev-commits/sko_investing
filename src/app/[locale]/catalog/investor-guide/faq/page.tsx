import type { FAQlist } from "@/types/translateTypes";
import AccordionFAQ from "@/components/Accordion/AccordionFAQ";
import clsx from "clsx";
import { useTranslations } from "next-intl";

// import "./forinvestor.scss"

const FAQpage = () => {
  const t = useTranslations("faq");
  const listFAQ = t.raw("list") as Array<FAQlist>;

  return (
    <section className={clsx("faq-page")}>
      <h2 className="">{t("forInvestors")}</h2>
      <div className="faq-page__content">
        {listFAQ.map((item, index: number) => (
          <div className="faq-page__item" key={index}>
            <AccordionFAQ
              question={item.question}
              answer={item.answer}
              className="accord"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQpage;
