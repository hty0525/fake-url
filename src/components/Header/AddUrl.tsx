import { useState } from "react";
import { usePostUrl } from "../../query-hook/urlMutation";
import { useQueryClient } from "@tanstack/react-query";

export const AddUrl = () => {
  const [url, setUrl] = useState<string>("");
  const { mutateAsync: postUrl } = usePostUrl();
  const queryClient = useQueryClient();

  const handleUrlOncahgne = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    setUrl(value);
  };

  const handleUrlAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { status } = await postUrl(url);
    if (status === 201) {
      alert("정상적으로 등록되었습니다!");
      queryClient.invalidateQueries(["url"]);
      setUrl("");
    }
  };
  return (
    <form onSubmit={handleUrlAdd} className="mb-[30px] w-full">
      <h2>
        <label htmlFor="urlInput">주소를 입력해 주세요!</label>
      </h2>
      <input
        type="text"
        id="urlInput"
        className="border border-black rounded-md px-2 py-1 w-full"
        required={true}
        value={url}
        onChange={handleUrlOncahgne}
      />
    </form>
  );
};
