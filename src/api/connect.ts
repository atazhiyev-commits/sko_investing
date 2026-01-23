import axios from "axios";

const api = axios.create({
  baseURL: `${"https://balanced-flame-d5bc834010.strapiapp.com"}/api`,
  headers: {
    Authorization: `Bearer ${"699ed700bea716ef34c7326cdaacf401a8f920fdf5351ddb833936689b95e320c7e18c1a5153f0803415c2ecb6745990932855c73f1bcc320f9a0ee90549b3b48f09185c8cbba95a8bd044f68c7db2e862b3f59980eca4b69f6d67a374f5a20b34f2705182a6881284f50819f6ca7bdec0e454ddd2cb2d509e431364942c4242"}`,
  },
});

export const getNews = async (locale: string, totalPage: number) => {
  const res = await api.get(
    `/muchnews?locale=${locale}&populate=*&pagination[page]=${totalPage}&pagination[pageSize]=${9}`,
  );
  return res.data;
};

export const getIdNews = async (id: string, locale: string) => {
  const res = await api.get(`/muchnews/${id}?locale=${locale}&populate=*`);
  return res.data;
};
