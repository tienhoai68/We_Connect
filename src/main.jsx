import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@pages/RootLayout";
import ModalProvider from "@context/ModalProvider";
import { lazy } from "react";
import { ThemeProvider } from "@mui/material";
const HomePage = lazy(() => import("@pages/HomePage"));
import theme from "./configs/muiConfig";
import Register from "@pages/Register";
import AuthLayout from "@pages/AuthLayout";
import Login from "@pages/Login";
import ResetPassword from "@pages/ResetPassword";
import ForgotPassword from "@pages/ForgotPassword";
import VerifyEmail from "@pages/VerifyEmail";
import OtpPage from "@pages/OtpPage";
import { Provider } from "react-redux";
import store from "@redux/store";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "/register",
            element: <Register />,
          },
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/forgot-password",
            element: <ForgotPassword />,
          },
          {
            path: "/reset-password",
            element: <ResetPassword />,
          },
          {
            path: "/verify-email",
            element: <VerifyEmail />,
          },
          {
            path: "/otp-page",
            element: <OtpPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </ThemeProvider>
    ,
  </Provider>,
);
