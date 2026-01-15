import type { FC } from "react";
import clsx from "clsx";
import Skeleton from "@mui/material/Skeleton";

import "./skeleton.scss";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const PageNewsSkeleton: FC<Props> = ({ children, className }) => {
  return (
    <div className={clsx("pageNewsSkeleton", className)}>
      <Skeleton className="pageNewsSkeleton__title" />
      <Skeleton className="pageNewsSkeleton__date" />
      <Skeleton variant="rectangular" className="pageNewsSkeleton__img" />
      <Skeleton className="pageNewsSkeleton__desc" />
      <Skeleton className="pageNewsSkeleton__desc" />
      <Skeleton className="pageNewsSkeleton__desc" />

      {children}
    </div>
  );
};

export default PageNewsSkeleton;
