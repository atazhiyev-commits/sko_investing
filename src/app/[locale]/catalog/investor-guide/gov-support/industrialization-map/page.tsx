import clsx from "clsx";
import { type FC } from "react";

interface Props {
  className?: string;
}

const BusinessRegistration: FC<Props> = ({  className }) => {
  return (
    <>
      <h2 className={clsx("BusinessRegistration", className)}>
        Включение в Единую карту индустриализации
      </h2>
    </>
  );
};

export default BusinessRegistration;
