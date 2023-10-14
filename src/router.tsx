import { createBrowserRouter } from "react-router-dom";
import SignIn from "./modules/views/authorization/SignIn";
import SignUp from "./modules/views/authorization/SignUp";
import {
  SignInLink,
  ResetPasswordConfirmationLink,
  SignUpLink,
  ConfirmAccountLink,
  ResetPasswordLink,
  ApprovedEmailLink,
} from "./links";
import ResetPassword from "./modules/views/authorization/ResetPassword";
import ConfirmAccount from "modules/views/authorization/ConfirmAccount";
import ApprovedEmail from "modules/views/authorization/ApprovedEmail";
import ResetPasswordConfirmation from "modules/views/authorization/ResetPasswordConfirmation";

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
      path: ResetPasswordConfirmationLink,
      element: <ResetPasswordConfirmation />,
    },
    {
      path: ConfirmAccountLink,
      element: <ConfirmAccount />,
    },
    {
      path: ResetPasswordLink,
      element: <ResetPassword />,
    },
    {
      path: ApprovedEmailLink,
      element: <ApprovedEmail />,
    }
  ]);

  return { routing };
}
