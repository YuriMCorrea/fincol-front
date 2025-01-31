import {
    Outlet,
    Link,
} from "react-router-dom";

import {
    NavigationMenu,
    // NavigationMenuContent,
    // NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    // NavigationMenuViewport,
    // NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// import { toast } from "sonner"
// import {Simulate} from "react-dom/test-utils";
// import {Toaster} from "@/components/ui/sonner.tsx";
import {Button} from "@/components/ui/button.tsx";

export default function Base() {
    let logged = false;
    // let navigation = useNavigation();

    function changeLogingStatus() {
        logged = !logged;
        console.log(logged);
    }

    return (
        <div id={"fundo"} className="col-start-3 row-start-3 h-dvh flex flex-col bg-gray-100 p-2 dark:bg-white/10">
            <div id={"base"} className="flex-col bg-white h-dvh rounded-xl p-5 text-sm/7 text-gray-700 dark:bg-gray-950 dark:text-gray-300">

            <div id={"cabecalho"} className="relative flow-root py-2 align-middle">
                <h1 className="float-left text-2xl md:text-3xl pl-2 border-l-4 border-accent font-sans font-bold  dark:text-gray-200">
                    <Link to="/">FIN COL</Link>
                </h1>
                <div className="float-right">
                    <Avatar className="float-right">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Button className="mx-2 float-right" onClick={() => changeLogingStatus()}> {logged ? "Sign-out" : "Sign-in"}</Button>
                </div>
            </div>
            {/*<div style={{position: "fixed", top: 0, right: 0}}>*/}
            {/*    <Toaster duration={500}/>*/}
            {/*    {navigation.state !== "idle" ? toast("Navigation in progress...") : null}*/}
            {/*</div>*/}

            {/*<nav>*/}
            {/*    <ul className="flex">*/}
            {/*        <li className="flex-1 mr-2">*/}
            {/*            <Link className={ activeLinks }*/}
            {/*                  to="/">Home</Link>*/}
            {/*        </li>*/}
            {/*        <li className="flex-1 mr-2">*/}
            {/*            <Link className= { activeLinks }*/}
            {/*                  to="/about">Sobre Nós</Link>*/}
            {/*        </li>*/}
            {/*        <li className="flex-1 mr-2">*/}
            {/*            <Link className="text-center block text-gray-400 cursor-not-allowed py-2 px-4" to="/busca">Busca</Link>*/}
            {/*        </li>*/}
            {/*        <li className="flex-1 mr-2">*/}
            {/*            <Link className="text-center block border border-white rounded active:bg-blue-500 hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"*/}
            {/*                to="/mural">Mural</Link>*/}
            {/*        </li>*/}
            {/*        <li className="flex-1 mr-2">*/}
            {/*            <Link className="text-center block border border-white rounded active:bg-blue-500 hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"*/}
            {/*                to="/faq">FAQ</Link>*/}
            {/*        </li>*/}
            {/*        <li className="flex-1 mr-2">*/}
            {/*            <Link className="text-center inline-flex border border-white rounded active:bg-blue-500 hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"*/}
            {/*                to="/login">Login</Link>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</nav>*/}

            <div id={"menuPrincipal"}>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link to="/about">
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Sobre Nós
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to="#" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm text-gray-400 font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 cursor-not-allowed disabled-link">
                                {/*<NavigationMenuLink className={navigationMenuTriggerStyle()}>*/}
                                    Busca
                                {/*</NavigationMenuLink>*/}
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to="/mural">
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Mural
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to="/faq">
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    FAQ
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to="/contribua">
                                <NavigationMenuLink className={"group inline-flex h-9 w-max items-center justify-center rounded-md bg-destructive px-4 py-2 m-1 text-sm font-extrabold text-primary transition-colors hover:bg-accent hover:text-primary focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"}>
                                    Contribua
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <hr/>
            </div>

            <Outlet />
            </div>
        </div>
    );
}