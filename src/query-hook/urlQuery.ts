import { urlApis } from "../apis/urlApis";
import { useQuery } from "@tanstack/react-query";

export const useGetUrlQuery = () => {
  return useQuery(["url"], urlApis.getUrl);
};
