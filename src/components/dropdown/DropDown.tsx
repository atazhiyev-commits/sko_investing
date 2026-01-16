import { type FC } from "react";
import clsx from "clsx";
import { Link } from "@/i18n/navigation";
// import type { List } from "@/types/translateTypes";

import "./dropDown.scss";

interface Props {
  list: any;
  nameDrop?: string;
  basePath: string;
  children?: React.ReactNode;
  className?: string;
}

const DropDown: FC<Props> = ({ list, basePath, children, className }) => {
  return (
    <div className={clsx("dropDown", className)}>
      <div className="dropDown__content">
        {list.map((item: any, index: number) => (
          <Link
            href={basePath + item?.link}
            key={index}
            className="dropDown__content-name"
          >
            {item.name}
          </Link>
        ))}
        {children}
      </div>
    </div>
  );
};

export default DropDown;
