import {Button} from "@/components/ui/button.tsx";
import { Outlet, Link, useLoaderData } from "react-router-dom";

export function Dashboard() {
    return (
        <>
            <div className="flex justify-center items-center h-screen">

                <h1>Dashboard</h1>
                <div className="flex justify-center items-center h-screen">
                    <Button>Enviar</Button>
                </div>
            </div>

        </>
    );
}

export function DashboardLayout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/mural">Mural Público</Link>
                    </li>
                    <li>
                        <Link to="/mural/apoiadores">Mural Apoiadores</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            <Outlet />
        </div>
    );
}

export function DashboardIndex() {
    return (
        <div>
            <h2>Dashboard Index</h2>
        </div>
    );
}

interface MessagesData {
    messages: string[];
}

export async function dashboardMessagesLoader() {
    await new Promise((r) => setTimeout(r, 500));
    return {
        messages: [
            "Message 1 from Dashboard.tsx loader",
            "Message 2 from Dashboard.tsx loader",
            "Message 3 from Dashboard.tsx loader",
        ],
    } as MessagesData;
}

export function DashboardMessages() {
    let { messages } = useLoaderData() as MessagesData;

    return (
        <div>
            <h2>Messages</h2>
            <ul>
                {messages.map((m) => (
                    <li key={m}>{m}</li>
                ))}
            </ul>
        </div>
    );
}
