import { createBrowserRouter } from "react-router-dom";
import SignIn from "./modules/views/authorization/SignIn";
import SingUp from "./modules/views/authorization/SingUp";
import Password from "./modules/views/authorization/Password";

export default function router() {
  const routering = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/singup",
      element: <SingUp />,
    },
    {
      path: "/password",
      element: <Password />,
    },
  ]);

  return { routering };
}
