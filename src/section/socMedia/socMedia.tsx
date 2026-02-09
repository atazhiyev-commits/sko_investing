import type { FC } from "react";
import { FacebookIcon, Instagram, Send } from "lucide-react";
import clsx from "clsx";

import "./socMedia.scss";
import Link from "next/link";

interface Props {
  className?: string;
}

const SocMedia: FC<Props> = ({ className }) => {
  return (
    <ul className={clsx("socMedia", className)}>
      <li className="socItem">
        <Link className="soc_link" aria-label="facebook website" href="https://www.facebook.com/rsk.sko/">
          <FacebookIcon className="iconMedia" size={20} />
        </Link>
      </li>
      <li className="socItem">
        <Link className="soc_link" aria-label="instagram website" href="https://www.instagram.com/sko_kz/">
          <Instagram className="iconMedia" size={20} />
        </Link>
      </li>
      <li className="socItem">
        <Link className="soc_link" aria-label="telegram website" href="https://t.me/s/skonews">
          <Send className="iconMedia" size={20} />
        </Link>
      </li>
    </ul>
  );
};

export default SocMedia;
