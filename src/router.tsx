import { createBrowserRouter } from "react-router-dom";
import SignIn from "./modules/views/authorization/SignIn";
import SignUp from "./modules/views/authorization/SignUp";
import {
  SignInLink,
  ResetPasswordLink,
  SignUpLink,
  ConfirmAccountLink,
} from "./links";
import ResetPassword from "./modules/views/authorization/ResetPassword";
import ConfirmAccount from "modules/views/authorization/ConfirmAccount";

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
      element: <ResetPassword />,
    },
    {
      path: ConfirmAccountLink,
      element: <ConfirmAccount />,
    },
  ]);

  return { routing };
}
