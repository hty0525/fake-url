import { useMutation } from "@tanstack/react-query";
import { urlApis } from "../apis/urlApis";

export const usePostUrl = () => {
  return useMutation((url: string) => urlApis.postUrl(url));
};
