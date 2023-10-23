import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Login from "../pages/signup_login/Login";
import SignUp from "../pages/signup_login/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign_up",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
