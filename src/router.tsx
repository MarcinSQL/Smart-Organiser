import { createBrowserRouter } from "react-router-dom";
import SignIn from "./modules/views/authorization/SignIn";
import SignUp from "./modules/views/authorization/SignUp";
import {
  SignInLink,
  ResetPasswordLink,
  SignUpLink,
  ConfirmAccountLink,
  ForgotPasswordLink,
  ApprovedEmailLink,
} from "./links";
import ResetPassword from "./modules/views/authorization/ResetPassword";
import ConfirmAccount from "modules/views/authorization/ConfirmAccount";
import ForgotPassword from "modules/views/authorization/ForgotPassword";
import ApprovedEmail from "modules/views/authorization/ApprovedEmail";

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
    {
      path: ForgotPasswordLink,
      element: <ForgotPassword />,
    },
    {
      path: ApprovedEmailLink,
      element: <ApprovedEmail />,
    }
  ]);

  return { routing };
}
