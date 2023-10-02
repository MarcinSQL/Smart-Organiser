import { createBrowserRouter } from "react-router-dom";
import SignIn from "./modules/views/authorization/SignIn";
import SignUp from "./modules/views/authorization/SignUp";
import { SignInLink, ResetPasswordLink, SignUpLink } from "./links";
import Password from "./modules/views/authorization/ResetPassword";

export default function router() {
  const routing = createBrowserRouter([
    {
      path: SignInLink,
      element: <SignIn />,
    },
    {
      path: SignUpLink,
      element: <SignUp />,
    },
    {
      path: ResetPasswordLink,
      element: <Password />,
    },
  ]);

  return { routing };
}
