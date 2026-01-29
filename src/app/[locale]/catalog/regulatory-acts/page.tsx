import { type FC } from "react";
import clsx from "clsx";
import { BtnLink } from "@/components/btnLink/BtnLink";

import { getTranslations } from "next-intl/server";
import { LawType } from "@/types/translateTypes";

import "./page.scss";

interface Props {
  params: { locale: string };
  className?: string;
}

const InvestorGuide: FC<Props> = async ({ params, className }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'defense' });
  const listRaws = t.raw('lawList');

  return (
    <div className={clsx("laws", className)}>
      <h2 className="title-section">Законы</h2>
      <div className="listLaws">
        {listRaws.map((lawCategory: LawType, index: number) => (
          <div className="block_laws" key={index}>
            <h3 className="title_law">{lawCategory.title}</h3>
            {lawCategory.laws.map((law, index) => (
              <BtnLink
                key={index}
                src={law.src}
                name={law.name}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestorGuide;
