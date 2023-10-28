import Layout from "components/Layout/Layout";
import { useContext } from "react";
import UserContext from "store/user-context";

export default function MainPage() {
  const ctx = useContext(UserContext);
  return (
    <Layout name={ctx.name} avatarSrc={ctx.img}>
      {" "}
    </Layout>
  );
}
