import { type FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
}

const InvestorGuide: FC<Props> = async ({ className }) => {
  return (
    <div className={clsx("InvestorGuide", className)}>
      <h2 className="title-section">InvestorGuide</h2>
    </div>
  );
};

export default InvestorGuide;
