import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./modules/views/authorization/SignIn";
import SingUp from './modules/views/authorization/SingUp';
import Password from './modules/views/authorization/Password';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />
  },
  {
    path: "/singup",
    element: <SingUp />
  },
  {
    path: "/password",
    element: <Password />
  }
])

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
