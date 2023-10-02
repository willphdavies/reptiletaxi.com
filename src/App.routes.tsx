import { RouterProvider, Navigate } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { About, Home } from "./pages";
import { DefaultTemplate } from "./templates";
import { Session } from "./pages/Session";

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <DefaultTemplate>
        <Home />
      </DefaultTemplate>
    ),
  },
  {
    path: "/session/:year/:month/:day",
    element: (
      <DefaultTemplate>
        <Session />
      </DefaultTemplate>
    ),
  },
  {
    path: "/about",
    element: (
      <DefaultTemplate>
        <About />
      </DefaultTemplate>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
export function AppRoutes() {
  return <RouterProvider router={router} />;
}
