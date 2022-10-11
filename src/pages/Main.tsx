import { AddUrl } from "../components/AddUrl";
import { UrlList } from "../components/UrlList";
import { Layout } from "../components/Layout";

export const Main = () => {
  return (
    <Layout>
      <AddUrl />
      <h1 className="text-2xl mb-5">최근 등록된 Url</h1>
      <UrlList />
    </Layout>
  );
};
