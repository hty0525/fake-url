import { axiosInstance } from "../config/axiosInstance";

export const urlApis = {
  getUrl: async () => {
    const { data } = await axiosInstance.get("/");
    return data;
  },
  postFakeUrl: async (url: string) => {
    const data = await axiosInstance.post("/", {
      url,
    });
    return data;
  },
  getFakeUrlInfo: async (urlId: string) => {
    const data = await axiosInstance.get(`/${urlId}`);
    console.log(data);
    return data;
  },
};
