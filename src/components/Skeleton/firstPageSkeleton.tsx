import type { FC } from "react";
import clsx from "clsx";
import Skeleton from "@mui/material/Skeleton";

import "./skeleton.scss";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const FirsPageBigCard: FC<Props> = ({ children, className }) => {
  return (
    <div className={clsx("firstPage__skeleton", className)}>
      <div className="big_card">
        <Skeleton variant="rectangular" className="big_img" />
      </div>
      {children}
    </div>
  );
};

export default FirsPageBigCard;
