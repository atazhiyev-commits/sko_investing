import { create } from "zustand";
import { getNews } from "@/api/connect";

export const useGetNews = create((set, get) => ({
  news: [],
  cache: {},

  fetchNews: async (lang: string, totalPage: number) => {
    const { cache } = get() as any;
    const cacheKey = `${lang}-${totalPage}`;

    if (cache[cacheKey]) {
      set({ news: cache[cacheKey] });
      return;
    }

    const response = await getNews(lang, totalPage);
    set((state: any) => ({
      news: response,
      cache: {
        ...state.cache,
        [cacheKey]: response,
      },
    }));
  },
}));

export default useGetNews;
