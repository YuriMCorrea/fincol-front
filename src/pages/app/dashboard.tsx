import {Button} from "@/components/ui/button.tsx";
import { Outlet, Link, useLoaderData } from "react-router-dom";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";

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
            <nav className={"flex-row"}>
                <ul className={"flex flex-wrap justify-evenly"}>
                    <li className={"flex-grow p-2 text-center hover:bg-accent hover:text-primary"}>
                        <Link to="/mural">Mural Público</Link>
                    </li>
                    <hr />
                    <li className={"flex-grow p-2 text-center hover:bg-accent hover:text-primary"}>
                        <Link to="/mural/apoiadores">Mural para Apoiadores</Link>
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
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Titulo da Postagem</CardTitle>
                        <CardDescription>Subtitulo da Postagem OU Data Postagem</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book. It has survived not only five centuries
                            , but also the leap into electronic typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions of
                            Lorem Ipsum.</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Titulo da Postagem</CardTitle>
                        <CardDescription>Subtitulo da Postagem OU Data Postagem</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book. It has survived not only five centuries
                            , but also the leap into electronic typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions of
                            Lorem Ipsum.</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card> <Card>
                <CardHeader>
                    <CardTitle>Titulo da Postagem</CardTitle>
                    <CardDescription>Subtitulo da Postagem OU Data Postagem</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries
                        , but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
            </div>
        </div>
    );
}

interface MessagesData {
    messages: string[];
}

interface PostsData {
    posts: Posts[];
}

interface Posts {
        titulo: string,
        dataPub: string,
        conteudo: string
}

export async function dashboardPostsLoader() {
    await new Promise((r) => setTimeout(r, 500));

    return {
        posts: [
            {
                titulo: "Titulo da Postagem",
                dataPub: "01/04/2025",
                conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                titulo: "Titulo da Postagem",
                dataPub: "01/04/2025",
                conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                titulo: "Titulo da Postagem",
                dataPub: "01/04/2025",
                conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
        ]
    } as PostsData;
}

export function DashboardPosts() {
    let { posts } = useLoaderData() as PostsData;
    return (
        <div>
            {posts.map((p) => (
                    <Card>
                        <CardHeader>
                            <CardTitle>{p.titulo}</CardTitle>
                            <CardDescription>{p.dataPub}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{p.conteudo}</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
            ))}

        </div>
    );
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
