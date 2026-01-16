"use client";
import { useState, type FC } from "react";
import clsx from "clsx";
import { BtnLink } from "@/components/btnLink/BtnLink";
import PDFViewer from "@/components/PDF/PDFViewer";

interface Props {
  className?: string;
}

const InvestmentOpportunities: FC<Props> = ({ className }) => {
  const [linkSlide, setLinkSlide] = useState();

  return (
    <div className={clsx("InvestmentOpportunities", className)}>
      <h2 className="title-section titleInvest">
        Инвестиционный потенциал региона
      </h2>
      <div className="listLaws">
        <BtnLink name="Слайд 1" src="tisers/FERTILIZER-AND-PESTICIDE" />
        <BtnLink name="Слайд 2" src="tisers/FLAX-PROCESSING" />
        <BtnLink name="Слайд 3" src="tisers/PASSENGER-AND-FREIGHT" />
        <BtnLink name="Слайд 4" src="tisers/PASTA-PRODUCTION" />
        <h3 className="titleLaw">Text</h3>
      </div>
      <PDFViewer src={""} />
    </div>
  );
};

export default InvestmentOpportunities;
