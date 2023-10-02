import { createBrowserRouter } from "react-router-dom";
import SignIn from "./modules/views/authorization/SignIn";
import SignUp from "./modules/views/authorization/SignUp";
import { SignInLink, PasswordLink, SignUpLink } from "./links";
import Password from "./modules/views/authorization/Password";

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
      path: PasswordLink,
      element: <Password />,
    },
  ]);

  return { routing };
}
