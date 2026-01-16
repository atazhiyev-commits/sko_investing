"use client";
import { Fragment, type FC } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";
import { useSearchIndex } from "@/shared/search/searchIndex";

import "./seacrh.scss";

interface Props {
  className?: string;
}

const SearchCatalog: FC<Props> = ({ className }) => {
  const t = useTranslations();

  const seacrh = t.raw("header.search") as {
    label: string;
    link: string;
    result: string;
  };

  const resIndex = useSearchIndex();
  const searchParams = useSearchParams();
  const searchQuery = (searchParams && searchParams.get("q")) || "";

  const decoded = decodeURIComponent(String(searchQuery) && String(searchQuery))
    .toLowerCase()
    .replace("+", "");

  const clear = (name: string) => {
    return name.replace(" ", "").toLowerCase();
  };

  const res = resIndex
    .filter((find: any) => find.title !== "catalog")
    .map((section) => {
      const titleMatch =
        section.title && section.title.toLowerCase().includes(decoded);

      const filteredList = section.list?.filter((item: any) =>
        Object.values(item)
          .filter((v) => typeof v === "string")
          .some((v) => v.toLowerCase().replace(" ", "").includes(decoded))
      );

      return {
        title: titleMatch ? section.title : null,
        link: section.link,
        list: filteredList ? filteredList : section.list,
      };
    });

  const cataloglist =
    resIndex
      .find((i: any) => i.title === "catalog")
      ?.list.flatMap((first: any) => {
        const firstMatch = clear(first.label).includes(decoded);

        const seconds = first.list.flatMap((second: any) => {
          const secondMatch = clear(second.name).includes(decoded);

          const thirds = second.list?.filter((t: any) =>
            clear(t.name).includes(decoded)
          );

          if (secondMatch)
            return [
              {
                name: second.name,
                link: first.link + second.link,
                list: thirds,
              },
            ];
          if (thirds?.length)
            return thirds.map((t: any) => ({
              name: t.name,
              link: first.link + second.link + t.link,
            }));
          return [];
        });

        if (firstMatch)
          return [{ name: first.label, link: first.link, list: seconds }];
        return seconds;
      }) ?? [];

  return (
    <section className={clsx("searchCatalog", className)}>
      <h2 className="title-section searchCatalog__title">{seacrh.result}: </h2>
      <form action="">
        <input
          type="search"
          className="searchCatalog"
          name="q"
          id="searchCatalog"
          placeholder={t("header.search.label")}
        />
      </form>

      <div className="blockresult">
        {cataloglist.flatMap((item: any, index: number) => (
          <Fragment key={index}>
            <Link
              href={`/catalog${item.link}`}
              className="resultText item-text"
            >
              {item.name}
            </Link>
          </Fragment>
        ))}

        {res.map((section: any, index: number) => (
          <Fragment key={index}>
            {section.title !== null && (
              <Link
                href={`/${section.hash ? section.hash : section.link}`}
                className="resultText section-title section-result"
              >
                {section.title || section.label}
              </Link>
            )}

            {section.list &&
              section.list.map((item: any, subIndex: number) => (
                <Link
                  key={subIndex}
                  href={`/${item.link ? item.link : section.link}`}
                  className="resultText item-text"
                >
                  {item.name ||
                    item.question ||
                    item.title ||
                    item.label ||
                    Object.values(item)
                      .filter((v) => typeof v === "string")
                      .join(" • ")}
                </Link>
              ))}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default SearchCatalog;
