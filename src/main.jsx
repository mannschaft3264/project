import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import "./index.css";

import BasicLayout from "./layouts/BasicLayout";
import todoRouter from "./router/todoRouter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BasicLayout />,
        children: [
            {
                index: true,
                element: <div>MAIN PAGE</div>,
            },
            {
                path: "about",
                element: <div>ABOUT PAGE</div>,
            },
            {
                path: "todo",
                children: todoRouter(),
            },
        ],
    },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
