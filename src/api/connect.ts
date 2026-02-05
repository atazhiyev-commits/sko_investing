import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_NEWS_API_URL}/api`,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_VITE_SOME_KEY}`,
  },
});

export const getNews = async (locale: string, totalPage: number) => {
  const res = await api.get(
    `/muchnews?locale=${locale}&populate=*&pagination[page]=${totalPage}&pagination[pageSize]=${8}`,
  );
  return res.data;
};

export const getIdNews = async (id: string, locale: string) => {
  const res = await api.get(`/muchnews/${id}?locale=${locale}&populate=*`);
  return res.data;
};
