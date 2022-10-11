import IUrl from "../type/urlType";

export const Url = ({ url }: { url: IUrl }) => {
  const { realUrl, fakeUrl, visitCount } = url;
  return (
    <li className="border px-5 py-7 rounded-xl w-full flex flex-col gap-y-3 overflow-hidden">
      <div>
        <p>Fake Url</p>
        <p className="break-all">{realUrl}</p>
      </div>
      <div>
        <p>Real Url</p>
        <p className="break-all">{fakeUrl}</p>
      </div>
      <div>
        <p>VisitCount</p>
        <p>{visitCount}</p>
      </div>
    </li>
  );
};
