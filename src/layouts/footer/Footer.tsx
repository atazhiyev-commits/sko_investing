import type { FC } from "react";
import clsx from "clsx";

import FooterUp from "./FooterTop";
import FooterBottom from "./FooterBottom";

import "./footer.scss";

interface Props {
  className?: string;
}

const Footer: FC<Props> = ({ className }) => {
  return (
    <footer className={clsx("footer", className)}>
      <FooterUp />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
