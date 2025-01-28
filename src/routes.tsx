import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "./pages/layout";
import { Home } from "./pages/app/home";
import { ErrorPage } from "./pages/app/error-page.tsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about",
                // Single route in lazy file
                lazy: async () => {
                    let {About} = await import("./pages/app/about.tsx");
                    return {Component: About};
                }
            },
            {
                path: "dashboard",
                async lazy() {
                    // Multiple routes in lazy file
                    let { DashboardLayout } = await import("./pages/app/dashboard");
                    return { Component: DashboardLayout };
                },
                children: [
                    {
                        index: true,
                        async lazy() {
                            let { DashboardIndex } = await import("./pages/app/dashboard");
                            return { Component: DashboardIndex };
                        },
                    },
                    {
                        path: "messages",
                        async lazy() {
                            let { dashboardMessagesLoader, DashboardMessages } = await import(
                                "./pages/app/dashboard.tsx"
                                );
                            return {
                                loader: dashboardMessagesLoader,
                                Component: DashboardMessages,
                            };
                        },
                    },
                ],
            },
            {
                path: "sign-in",
                // Single route in lazy file
                lazy: async () => {
                    let { SignIn } = await import("./pages/auth/sign-in.tsx");
                    return {Component: SignIn};
                }
            },
            {
                path: "*",
                element: <ErrorPage />,
            },
        ],
    },
]);