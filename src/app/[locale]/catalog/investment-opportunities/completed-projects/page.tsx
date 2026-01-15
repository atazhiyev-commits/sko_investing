import { type FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
}

const InvestmentOpportunities: FC<Props> = ({ className }) => {
  return (
    <div className={clsx("InvestmentOpportunities", className)}>
      <h2 className="title-section titleInvest">Завершенные инвестиционные проекты</h2>
    </div>
  );
};

export default InvestmentOpportunities;
