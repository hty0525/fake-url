import { useMutation } from "@tanstack/react-query";
import { urlApis } from "../apis/urlApis";

export const usePostUrl = () => {
  return useMutation((url: string) => urlApis.postFakeUrl(url));
};

export const useConfirmUrlQuery = () => {
  return useMutation((urlId: string) => urlApis.getFakeUrlInfo(urlId));
};
