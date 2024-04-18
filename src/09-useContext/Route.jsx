import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { HomePage } from "./HomePage";

export const router = createBrowserRouter([
  {
    path: "login",
    element: <LoginPage />,

    children: [
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
    ],
  },
]);
