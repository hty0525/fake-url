import { Header } from "../components/Header/Index";
import { UrlList } from "../components/List/UrlList";
import { Layout } from "../components/Layout";

export const Main = () => {
  return (
    <Layout>
      <Header />
      <h1 className="text-2xl mb-5">최근 등록된 Url</h1>
      <UrlList />
    </Layout>
  );
};
