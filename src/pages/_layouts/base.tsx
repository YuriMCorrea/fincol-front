import {
    Outlet,
    Link,
    useNavigation,
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


export default function Base() {
    let navigation = useNavigation();
    let activeLinks = "text-center block border border-white rounded active:bg-blue-500 hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4";

    return (
        <div>
            <h1>Lazy Loading Example using RouterProvider</h1>

            <p>
                This example demonstrates how to lazily load route definitions using{" "}
                <code>route.lazy()</code>. To get the full effect of this demo, be sure
                to open your Network tab and watch the new bundles load dynamically as
                you navigate around.
            </p>

            <p>
                The "About" and "Dashboard" pages are not loaded until you click on the
                link. When you do, the code is loaded via a dynamic{" "}
                <code>import()</code> statement during the <code>loading</code> phase of
                the navigation. Once the code loads, the route loader executes, and then
                the element renders with the loader-provided data.
            </p>

            <p>
                This works for all data-loading/rendering related properties of a route,
                including <code>action</code>, <code>loader</code>, <code>element</code>
                , <code>errorElement</code>, and <code>shouldRevalidate</code>. You
                cannot return path-matching properties from <code>lazy()</code> such as{" "}
                <code>path</code>, <code>index</code>, <code>children</code>, and{" "}
                <code>caseSensitive</code>.
            </p>

            <div style={{position: "fixed", top: 0, right: 0}}>
                {navigation.state !== "idle" && <p>Navigation in progress...</p>}
            </div>

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

            <NavigationMenu className="flex">
                <NavigationMenuList className="flex-1 mr-2">
                    <NavigationMenuItem className= { activeLinks }>
                        <Link to="/">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="/about">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Sobre Nós
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="/busca">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Busca
                            </NavigationMenuLink>
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
                        <Link to="/login">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Login
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>


            <hr/>

            <Outlet/>
        </div>
    );
}