import { axiosInstance } from "../config/axiosInstance";

export const urlApis = {
  getUrl: async () => {
    const { data } = await axiosInstance.get("/");
    return data;
  },
  postUrl: async (url: string) => {
    const data = axiosInstance.post("/", {
      url,
    });
    return data;
  },
};
