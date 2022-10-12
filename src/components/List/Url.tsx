import IUrl from "../../type/urlType";

export const Url = ({ url }: { url: IUrl }) => {
  const { realUrl, fakeUrl } = url;
  return (
    <li className="border-2 border-black p-6 rounded-[5px] w-full flex flex-col gap-y-4 overflow-hidden mb-5">
      <div className="py-2 px-3 bg-[#e9ecef] border-1 border-[#ced4da] rounded-[0.25rem]">
        <p className="break-all">단축 주소 : {realUrl}</p>
      </div>
      <div className="py-2 px-3 bg-[#e9ecef] border-1 border-[#ced4da] rounded-[0.25rem]">
        <p className="break-all">주소 : {fakeUrl}</p>
      </div>
    </li>
  );
};
