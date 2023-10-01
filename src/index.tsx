import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SingUp from './modules/views/authorization/SingUp';
import Password from './modules/views/authorization/Password';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
