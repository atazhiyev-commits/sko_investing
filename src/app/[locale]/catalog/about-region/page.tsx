import { type FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
}

const AboutTheRegion: FC<Props> = ({ className }) => {
  return (
    <div className={clsx("AboutTheRegion", className)}>
      <h2 className="title-section">AboutTheRegion</h2>
    </div>
  );
};

export default AboutTheRegion;
  