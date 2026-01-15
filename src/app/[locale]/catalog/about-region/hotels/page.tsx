import clsx from "clsx";
import { type FC } from "react";

interface Props {
  className?: string;
}

const Hotels: FC<Props> = ({ className }) => {
  return (
    <>
      <h2 className={clsx("catalog__hotels", className)}>Hotels</h2>
    </>
  );
};

export default Hotels;
