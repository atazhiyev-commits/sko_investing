"use client"
import { Fragment, useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import clsx from "clsx";
import { useParams } from "next/navigation";
import useGetNews from "@/shared/store/newsCatalog";
import type { storeType } from "@/types/api_news_types";

import Container from "@/components/container/Container";
import PageNewsCard from "@/components/newsCard/PageNewsCard";
import Pagination from "@mui/material/Pagination";
import ErrorPage from "@/layouts/error/ErrorPage";
import NewsSkeleton from "@/components/Skeleton/newsSkeleton";
import { useRouter } from "@/i18n/navigation";

import "./news.scss";

const News = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations();
  const [isLoading, setIsLoading] = useState(true);
  const { news, fetchNews } = useGetNews() as storeType;
  const countPage = news?.meta?.pagination?.pageCount;

  const activePage = Number(useParams()?.pageNum);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);

      try {
        await fetchNews(locale, activePage);
      } catch (error) {
        console.error("Ошибка при загрузке новостей", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [fetchNews, activePage, locale]);

  return (
    <section className={clsx("page-news")}>
      <Container>
        {isLoading ? (
          <NewsSkeleton />
        ) : (
          <>
            {news?.data && news.data.length > 0 ? (
              <div className="page-news__content">
                <h2 className="title-section">{t("PageNews.title")}</h2>
                <div className="page-news__wrapper">
                  {news.data.map((item: any) => (
                    <Fragment key={item.documentId}>
                      <PageNewsCard
                        id={item.documentId}
                        title={item.title_news}
                        date={item.date_news}
                        imageSrc={item.first_image.url}
                      />
                    </Fragment>
                  ))}
                </div>
                <div className="pagination-content">
                  <Pagination
                    shape="rounded"
                    count={countPage}
                    page={activePage as number}
                    onChange={(_, page) => router.push(`/news/${page}`)}
                  />
                </div>
              </div>
            ) : (
              <div className="not-found-state">
                <ErrorPage />
              </div>
            )}
          </>
        )}
      </Container>
    </section>
  );
};

export default News;
