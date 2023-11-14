import Layout from "components/Layout/Layout";
import useMainPage from "modules/logic/dashboard/useMainPage";

export default function MainPage() {
  const { data, isLoading } = useMainPage();
  return (
    <Layout name={!!data ? data.name : "User"} avatarSrc={!!data ? data.img : "error"}>
      {" "}
    </Layout>
  );
}
