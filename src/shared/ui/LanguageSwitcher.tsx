import { type FC } from "react";
import { usePathname } from "@/i18n/navigation";
import clsx from "clsx";

interface Props {
  className?: string;
}

const LanguageSwitcher: FC<Props> = ({ className }) => {
  // const navigate = useNavigate();
  const location = usePathname();

  const segments = location.split("/").filter(Boolean);
  const currentLang = segments.length > 0 ? segments[0] : "";
  const restPath = segments.slice(1).join("/");

  // console.log(currentLang)

  return (
    <select
      name="lang"
      value={currentLang}
      className={clsx("language", className)}
      onChange={(e) => {
        const newUrl = `${e.target.value}/${restPath}`;
        // i18n.changeLanguage(e.target.value);
        // navigate(newUrl);
        window.location.reload();
      }}
    >
      <option value="ru">RU</option>
      <option value="kz">KZ</option>
      <option value="en">EN</option>
      <option value="chi">CHI</option>
    </select>
  );
};

export default LanguageSwitcher;
