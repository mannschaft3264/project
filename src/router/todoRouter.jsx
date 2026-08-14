
//import { lazy } from "react";
import { Navigate } from "react-router-dom";

const todoRouter = () => {
    return [
        {
            path: "list",
            HydrateFallback: () => <div>Loading...</div>,
            lazy: async () => {
                const { default: Component } = await import("../pages/todo/ListPage");
                return { Component };
            },
        },
        {
            index: true,
            element: <Navigate to="list" replace />,
        },
        {
            path: "read/:no",
            HydrateFallback: () => <div>Loading...</div>,
            lazy: async () => {
                const { default: Component } = await import("../pages/todo/ReadPage");
                return { Component };
            },
        },
        {
            path: "add",
            HydrateFallback: () => <div>Loading...</div>,
            lazy: async () => {
                const { default: Component } = await import("../pages/todo/AddPage");
                return { Component };
            }
        },
        {
            path: "modify/:no",
            HydrateFallback: () => <div>Loading...</div>,
            lazy: async () => {
                const { default: Component } = await import("../pages/todo/ModifyPage");
                return { Component };
            },
        },
    ];
};

export default todoRouter;