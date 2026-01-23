"use client"
import { useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { useGetNews } from "@/shared/store/newsCatalog";
import type { NewsItem, storeType } from "@/types/api_news_types";
import { useTranslations } from "next-intl";
import clsx from "clsx";

import Container from "@/components/container/Container";
import CarouselEmbla from "@/components/Carousel/CarouselEmbla";
import SmallImg from "@/components/newsCard/small/SmallImg";
import FirsPageBigCard from "@/components/Skeleton/firstPageSkeleton";
import FirsPageSmallCard from "@/components/Skeleton/smallFirstPage";

import "./news.scss";

interface NewsProps {
  className?: string;
}

const NewsSection: React.FC<NewsProps> = ({ className }) => {
  const t = useTranslations();
  const { news, fetchNews } = useGetNews() as storeType;
  const countNews = 4;

  useEffect(() => {
    fetchNews(1);
  }, [fetchNews]);

  return (
    news && (
      <section className={clsx("news", className)}>
        <Container>
          <header className="news__header">
            <h2 className="title-section">{t("news.title")}</h2>
            <Link href="/news" className="btn-section">
              {t("news.button")}
            </Link>
          </header>

          <div className="news__content">
            {news.data ? (
              <CarouselEmbla newsList={news.data} countNews={countNews} />
            ) : (
              <FirsPageBigCard />
            )}

            <div className="news__other">
              <h2 className="second-title-section"> {t("news.otherNews")}: </h2>
              {news.data ? (
                <div className="news__other-content">
                  {news.data
                    .slice(countNews, news.data.length)
                    .map((newsItem: NewsItem, index: number) => {
                      if (index >= countNews) return null;
                      return (
                        <Link
                          href={`/news/item/${newsItem.documentId}`}
                          key={index}
                          className="news__small-wrapper"
                        >
                          <SmallImg
                            className="news__small"
                            title={newsItem.title_news}
                            date={newsItem.date_news}
                            imageSrc={newsItem.first_image?.url}
                          />
                        </Link>
                      );
                    })}
                </div>
              ) : (
                <FirsPageSmallCard />
              )}
            </div>
          </div>
        </Container>
      </section>
    )
  );
};

export default NewsSection;
