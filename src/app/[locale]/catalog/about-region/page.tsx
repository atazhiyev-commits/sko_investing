import { type FC } from "react";
import clsx from "clsx";
import { Metadata } from "next";

interface Props {
  className?: string;
}

export const metadata: Metadata = {
  title: "О регионе",
  description: "О регионе - Северо Казахстанская область - инвестиционный портал",

  verification: {
    google: "1MwFBGJzBOEzqk6-jXSDjtBRvcYRfOEkhyvip1wG-cg",
  },
};


const AboutTheRegion: FC<Props> = ({ className }) => {
  return (
    <div className={clsx("AboutTheRegion", className)}>
      <h2 className="title-section">AboutTheRegion</h2>
    </div>
  );
};

export default AboutTheRegion;
