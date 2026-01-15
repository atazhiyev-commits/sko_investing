import clsx from "clsx";
import { type FC } from "react";

interface Props {
  className?: string;
}

const BusinessRegistration: FC<Props> = ({  className }) => {
  return (
    <>
      <h2 className={clsx("BusinessRegistration", className)}>
        Заключение инвестиционного контракта
      </h2>
    </>
  );
};

export default BusinessRegistration;
