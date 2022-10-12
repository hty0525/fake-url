import React, { useState } from "react";
import { useConfirmUrlQuery } from "../../query-hook/urlMutation";

export const ConfirmUrl = () => {
  const [url, setUrl] = useState<string>("");
  const { mutateAsync: confirmUrlInfo } = useConfirmUrlQuery();

  const handleConfirmUrl = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const _url = url.split("/").slice(-1);
    const { data } = await confirmUrlInfo(_url[0]);
  };

  const handleUrlOncahgne = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    setUrl(value);
  };
  return (
    <form onSubmit={handleConfirmUrl} className="mb-[30px] w-full">
      <h2>
        <label htmlFor="urlInput">
          Fake Url 맨 마지막에 *을 붙이면 상세정보를 확인할 수 있습니다!
          <br />
          ex - {`http://110.11.228.145:8081/url/rhahikdbos*`}
        </label>
      </h2>
      <input
        type="text"
        id="urlInput"
        className="border border-black rounded-md px-2 py-1 w-full"
        required={true}
        value={url}
        placeholder="http://110.11.228.145:8081/url/rhahikdbos*"
        onChange={handleUrlOncahgne}
      />
    </form>
  );
};
