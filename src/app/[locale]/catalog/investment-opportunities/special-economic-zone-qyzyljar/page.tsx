import { type FC } from "react";
import clsx from "clsx";

import "./page.scss";
import PDFViewer from "@/components/PDF/PDFViewer";

interface Props {
  className?: string;
}

const InvestmentOpportunities: FC<Props> = ({ className }) => {
  return (
    <div className={clsx("special-economic-zone-qyzyljar", className)}>
      <h2 className="title-section titleInvest">
        Специальная экономическая зона «Qyzyljar»
      </h2>
      <PDFViewer src={"/pdf/special-economic-zone-qyzyljar.pdf"} />
    </div>
  );
};

export default InvestmentOpportunities;
