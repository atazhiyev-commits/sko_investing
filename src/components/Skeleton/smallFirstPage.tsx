import type { FC } from "react";
import clsx from "clsx";
import Skeleton from "@mui/material/Skeleton";

import "./skeleton.scss";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const FirsPageSmallCard: FC<Props> = ({ children, className }) => {
  return (
    <section className={clsx("firstPage__skeleton", className)}>
      <div className="small_card">
        <Skeleton variant="rectangular" className="skeleton_img" />
        <Skeleton variant="rectangular" className="skeleton_img" />
        <Skeleton variant="rectangular" className="skeleton_img" />
        <Skeleton variant="rectangular" className="skeleton_img" />
      </div>
      {children}
    </section>
  );
};

export default FirsPageSmallCard;
