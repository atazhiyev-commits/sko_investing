import type { FC } from "react";
// import { useTranslation } from "react-i18next";
import clsx from "clsx";

import Container from "@/components/container/Container";

import CSI from "@/assets/logo/CSI.svg";
import Link from "next/link";
import Image from "next/image";

interface Props {
  className?: string;
}

const FooterBottom: FC<Props> = ({ className }) => {
  // const { t } = useTranslation();

  return (
    <section className={clsx("footerBottom", className)}>
      <Container>
        <div className="footerBottom__content">
          <p className="footerBottom__nameCompany">© 2025 АО "НК “INVEST SKO</p>
          <Link href={"https://csi.kz"} className="footerBottom__corruption">
            {("footer.bottom.corruption")}
          </Link>
          <Link href={"https://csi.kz"} className="footerBottom__csi">
            <p className="textCSI">{("footer.bottom.development")}: </p>
            <Image src={CSI} alt="CSI logo" className="logo" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FooterBottom;
