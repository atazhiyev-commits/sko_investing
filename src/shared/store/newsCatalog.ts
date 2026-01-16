import { create } from "zustand";
import { getNews } from "@/api/connect";

export const useGetNews = create((set, get) => ({
  news: [],
  cache: {},

  fetchNews: async (totalPage: number) => {
    const { cache } = get() as any;

    if (cache[totalPage]) {
      set({ news: cache[totalPage] });
      return;
    }

    const response = await getNews("ru", totalPage);
    set((state: any) => ({
      news: response,
      cache: {
        ...state.cache,
        [totalPage]: response,
      },
    }));
  },
}));

export default useGetNews;
