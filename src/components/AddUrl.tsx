import { useState } from "react";
import { usePostUrl } from "../query-hook/urlMutation";

export const AddUrl = () => {
  const [url, setUrl] = useState<string>("");

  const { mutateAsync: postUrl } = usePostUrl();

  const handleUrlOncahgne = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    setUrl(value);
  };

  const handleUrlAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !url.includes("https://", 0) ||
      (!url.includes("http://", 0) && url[0] === "h")
    ) {
      alert("주소는 https:// 혹은 http://로 시작해야합니다!");
      setUrl("");
      return;
    }
    const data = await postUrl(url);
    return data;
  };
  return (
    <form onSubmit={handleUrlAdd} className="mb-[30px] w-full">
      <h2>
        <label htmlFor="urlInput">주소를 입력해 주세요!</label>
      </h2>
      <input
        type="text"
        id="urlInput"
        className="border border-black rounded-md px-2 py-1"
        required={true}
        value={url}
        onChange={handleUrlOncahgne}
      />
    </form>
  );
};
