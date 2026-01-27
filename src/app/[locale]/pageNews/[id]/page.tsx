"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getIdNews } from "@/api/connect";
import type { NewsItem } from "@/types/api_news_types";

import Container from "@/components/container/Container";
import PageNewsSkeleton from "@/components/Skeleton/pageNewsSkeleton";

import "./pagenews.scss";
import { useLocale } from "next-intl";

const PageNews = () => {
  const params = useParams();
  const locale = useLocale();
  const id = params?.id;
  const [pageNews, setPageNews] = useState<NewsItem>();

  useEffect(() => {
    const connect_api = async () => {
      const res = await getIdNews(id as any, locale).then(
        (res) => res.data
      );
      setPageNews(res);
    };

    connect_api();
  }, []);

  return pageNews ? (
    <section className="pageNews">
      <Container className="pageContainer">
        <>
          <header className="pageNews__header">
            <h2 className="pageNews__header-title">{pageNews.title_news}</h2>
            <p className="pageNews__header-date">{pageNews.date_news}</p>
          </header>
          <div className="pageNews__image">
            <img src={pageNews.first_image.url} alt={pageNews.title_news} />
          </div>
          <div className="markdown-container">
            <ReactMarkdown>{pageNews.description}</ReactMarkdown>
          </div>
        </>
      </Container>
    </section>
  ) : (
    <section className="pageNews">
      <Container className="pageContainer">
        <PageNewsSkeleton />
      </Container>
    </section>
  );
};

export default PageNews;
