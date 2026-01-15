import { Link } from "@/i18n/navigation";
import "./style.scss";

interface BtnLinkProps {
  name: string;
  src: string;
}

export const BtnLink: React.FC<BtnLinkProps> = ({ name, src }) => {
  return (
    <Link href={src} className="btnLink">
      <span className="btnLink__text">{name}</span>
    </Link>
  );
};
