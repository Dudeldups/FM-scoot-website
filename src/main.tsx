import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Location from "./pages/Location/Location";
import Careers from "./pages/Careers/Careers";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/home",
          element: <Navigate to="/" replace />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/location",
          element: <Location />,
        },
        {
          path: "/careers",
          element: <Careers />,
        },
        {
          path: "*",
          element: <ErrorPage message="This page does not exist." />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
