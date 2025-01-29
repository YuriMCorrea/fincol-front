import {
    createBrowserRouter,
} from "react-router-dom";
import Base from "@/pages/_layouts/base.tsx";
import { Home } from "./pages/app/home";
import { ErrorPage } from "./pages/app/error-page.tsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Base />,
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
                path: "mural",
                async lazy() {
                    // Multiple routes in lazy file
                    let { DashboardLayout } = await import("./pages/app/dashboard");
                    return { Component: DashboardLayout };
                },
                children: [
                    {
                        index: true,
                        async lazy() {
                            let { DashboardIndex, DashboardLayout } = await import("./pages/app/dashboard");
                            return { Component: DashboardIndex, DashboardLayout };
                        },
                    },
                    {
                        path: "messages",
                        async lazy() {
                            let { dashboardMessagesLoader, DashboardMessages, DashboardLayout } = await import(
                                "./pages/app/dashboard.tsx"
                                );
                            return {
                                loader: dashboardMessagesLoader,
                                Component: DashboardMessages, DashboardLayout,
                            };
                        },
                    },
                ],
            },
            {
                path: "faq",
                // Single route in lazy file
                lazy: async () => {
                    let {Faq} = await import("./pages/app/faq.tsx");
                    return {Component: Faq};
                }
            },
            {
                path: "*",
                element: <ErrorPage />,
            },
        ],
    },
    {
        path: "login",
        // Single route in lazy file
        lazy: async () => {
            let { AuthLayout } = await import("./pages/_layouts/auth.tsx");
            return {Component: AuthLayout};
        },
        children: [
            {
                path: "login",
                lazy : async () => {
                    let { SignIn } = await import("./pages/auth/sign-in.tsx");
                    return {Component: SignIn};
                }
            }
        ],
    }
]);