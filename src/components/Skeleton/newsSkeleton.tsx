import type { FC } from "react";
import clsx from "clsx";
import Skeleton from "@mui/material/Skeleton";

import "./skeleton.scss";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const NewsSkeleton: FC<Props> = ({ children, className }) => {
  return (
    <section className={clsx("news_skeleton", className)}>
      <div className="skeletonCard_news">
        <Skeleton variant="rectangular" className="img" />
        <Skeleton variant="rectangular" className="text" />
      </div>
      <div className="skeletonCard_news">
        <Skeleton variant="rectangular" className="img" />
        <Skeleton variant="rectangular" className="text" />
      </div>
      <div className="skeletonCard_news">
        <Skeleton variant="rectangular" className="img" />
        <Skeleton variant="rectangular" className="text" />
      </div>

      {children}
    </section>
  );
};

export default NewsSkeleton;
