import { createBrowserRouter } from "react-router";
import todoRouter from "./todoRouter";

const root = createBrowserRouter([
    {
        path: "/",
        HydrateFallback: () => <div>Loading...</div>,
        lazy: async () => {
            const { default: Component } = await import("../pages/MainPage");
            return { Component };
        },
    },
    {
        path: "/about",
        HydrateFallback: () => <div>Loading...</div>,
        lazy: async () => {
            const { default: Component } = await import("../pages/AboutPage");
            return { Component };
        },
    },
    {
        path: "/todo",
        HydrateFallback: () => <div>Loading...</div>,
        lazy: async () => {
            const { default: Component } = await import("../pages/todo/IndexPage");
            return { Component };
        },

        children: todoRouter(),

        children: [
            {
                path: "list",
                HydrateFallback: () => <div>Loading...</div>,
                lazy: async () => {
                    const { default: Component } = await import("../pages/todo/ListPage");
                    return { Component };
                },
            },
        ],
    },
]);

export default root;