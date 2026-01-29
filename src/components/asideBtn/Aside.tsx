"use client";
import { useEffect, useState, type FC } from "react";
import { Link } from "@/i18n/navigation";
import { usePathname } from "@/i18n/navigation";
import clsx from "clsx";
import type { ArrList } from "@/types/translateTypes";

import { ChevronDown } from "lucide-react";

import "./buttonAside.scss";

interface Props {
  name: string;
  activeLink: string;
  list?: ArrList[];
  className?: string;
}

const Aside: FC<Props> = ({ name, list, activeLink, className }) => {
  const [active, setActive] = useState(false);
  const [secondActive, setSecondActive] = useState<string>("");
  const [threeActive, setThreeActive] = useState<string>("");

  const clean = (s: string) => s.replace("/", "");

  const toggleSecondLevel = (link: string) => {
    setSecondActive((prev) => (prev === link ? "" : link));
  };

  const location = (usePathname() || "").split("/");
  const last2 = location.at(2);
  const last3 = location.at(3);
  const last4 = location.at(4);

  useEffect(() => {
    setSecondActive(last3 ? clean(last3) : "");
    setThreeActive(last4 ? clean(last4) : "");

    const link = activeLink.replace("/", "");

    setActive(link === last2);
  }, [last2, last3, last4]);

  useEffect(() => {
    if (secondActive === last2) {
      setSecondActive(clean(last2));
    } else if (secondActive === last3) {
      setSecondActive(clean(last3));
    }
  }, [last3, last2]);

  return (
    <div className="btnaside" data-active={active}>
      <Link
        href={`/catalog/${activeLink}`}
        className={clsx("buttonAside", className)}
        onClick={() => {
          if (list && list.length > 0) {
            setActive(true);
          }
        }}
      >
        <span className="buttonAside__name">
          {name}
          {list && list.length > 0 && (
            <ChevronDown size={16} className="chevron" />
          )}
        </span>
      </Link>

      <div className="collapse-wrapper" data-open={active}>
        <ul className="second">
          {list?.map((item, index) => (
            <li key={index} className="second__li">
              <Link
                href={`/catalog/${activeLink}${item.link}`}
                className={clsx("item-header")}
                data-color={secondActive === clean(item.link)}
                onClick={() => {
                  toggleSecondLevel(clean(item.link));
                }}
              >
                {item.name}
                {item.list && (
                  <ChevronDown
                    size={14}
                    className={clsx("chevron-small", {
                      rotated: secondActive === clean(item.link),
                    })}
                  />
                )}
              </Link>

              {item.list && (
                <div
                  className="collapse-wrapper"
                  data-open={secondActive === clean(item.link)}
                >
                  <ul className="three">
                    {item.list.map(
                      (
                        subItem: { name: string; link: string },
                        subIndex: number
                      ) => (
                        <li
                          key={subIndex}
                          className="three__li"
                          data-color={
                            threeActive === subItem.link?.replace("/", "")
                          }
                        >
                          <Link
                            className={clsx(
                              last4 === subItem.link?.replace("/", "")
                                ? "active"
                                : ""
                            )}
                            href={`/catalog/${activeLink}${item.link}${subItem.link
                              }`}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Aside;
