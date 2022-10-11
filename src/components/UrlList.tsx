import { useGetUrlQuery } from "../query-hook/urlQuery";
import { Url } from "./Url";

import IUrl from "../type/urlType";

export const UrlList = () => {
  const { data } = useGetUrlQuery();
  const urlList = data && data.data;
  return (
    <ul className="flex flex-col gap-y-8 overflow-hidden">
      {urlList?.map((url: IUrl) => (
        <Url key={url.fakeUrl} url={url} />
      ))}
    </ul>
  );
};
