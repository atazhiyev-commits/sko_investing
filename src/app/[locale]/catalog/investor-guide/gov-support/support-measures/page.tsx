import clsx from "clsx";
import { type FC } from "react";

interface Props {
  className?: string;
}

const BusinessRegistration: FC<Props> = ({  className }) => {
  return (
    <>
      <h2 className={clsx("BusinessRegistration", className)}>
        Меры государственной поддержки
      </h2>
    </>
  );
};

export default BusinessRegistration;
