import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Sidebar from "./Sidebar.jsx";
import Layout from "./Layout.jsx";
import { BrowserRouter, Outlet, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import PageLayout from "./routes/PageLayout.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        {<Sidebar />}
        <div className="flex-1">
          <Outlet />
        </div>
      </Layout>
    ),
    children: [
      {
        path: "json-converter",
        element: <PageLayout heading={"Json Converter"} />,
      },
      {
        path: "cmd-cheatsheet",
        element: <PageLayout heading={"CMD Cheatsheet"} />,
      },
      {
        path: "color-picker",
        element: <PageLayout heading={"Color picker"} />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
