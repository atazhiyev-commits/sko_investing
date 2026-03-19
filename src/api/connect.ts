import axios from "axios";

const authToken = process.env.STRAPI_API_TOKEN || "";

if (!authToken) {
  throw new Error("Missing API token");
}

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_NEWS_API_URL}/api`,
  headers: authToken
    ? {
        Authorization: `Bearer ${authToken}`,
      }
    : undefined,
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
