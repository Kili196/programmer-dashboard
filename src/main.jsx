import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Sidebar from "./Sidebar.jsx";
import Layout from "./Layout.jsx";
import { BrowserRouter, Outlet, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";

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
      { path: "json-converter", element: <div> test </div> },
      { path: "cmd-cheatsheet", element: <div> test </div> },
      { path: "color-picker", element: <div> test </div> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
