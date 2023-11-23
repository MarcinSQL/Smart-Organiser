import Layout from "components/Layout/Layout";
import useMainPage from "modules/logic/dashboard/useMainPage";

export default function MainPage() {
  const { data, isLoading } = useMainPage();
  return (
    <Layout
      name={isLoading ? null : data.name}
      avatarSrc={isLoading ? null : data.img}
    >
      {"in progress"}
    </Layout>
  );
}
