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
  ApprovedResetPasswordLink,
  ApprovedAccountLink,
  SignUpInfoLink,
  UserProfileLink,
  CalendarLink,
  BudgetLink,
  MainPageLink,
} from "./links";
import ResetPassword from "./modules/views/authorization/ResetPassword";
import ConfirmAccount from "modules/views/authorization/ConfirmAccount";
import ApprovedEmail from "modules/views/authorization/ApprovedEmail";
import ResetPasswordConfirmation from "modules/views/authorization/ResetPasswordConfirmation";
import ApprovedResetPassword from "modules/views/authorization/ApprovedResetPassword";
import ApprovedAccount from "modules/views/authorization/ApprovedAccount";
import SignUpInfo from "modules/views/authorization/SignUpInfo";
import UserProfile from "modules/views/dashboard/UserProfile";
import Calendar from "modules/views/dashboard/Calendar";
import Budget from "modules/views/dashboard/Budget";
import MainPage from "modules/views/dashboard/MainPage";

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
    },
    {
      path: ApprovedResetPasswordLink,
      element: <ApprovedResetPassword />,
    },
    {
      path: ApprovedAccountLink,
      element: <ApprovedAccount />,
    },
    {
      path: SignUpInfoLink,
      element: <SignUpInfo />,
    },
    {
      path: MainPageLink,
      element: <MainPage />,
    },
    {
      path: BudgetLink,
      element: <Budget />,
    },
    {
      path: CalendarLink,
      element: <Calendar />,
    },
    {
      path: UserProfileLink,
      element: <UserProfile />,
    },
  ]);

  return { routing };
}
