import {
    Outlet,
    Link,
    useNavigation,
} from "react-router-dom";


export default function Layout() {
    let navigation = useNavigation();

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

            <nav>
                <ul className="flex">
                    <li className="flex-1 mr-2">
                        <Link className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
                              to="/">Home</Link>
                    </li>
                    <li className="flex-1 mr-2">
                        <Link className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
                              to="/about">Sobre Nós</Link>
                    </li>
                    <li className="flex-1 mr-2">
                        <Link className="text-center block text-gray-400 cursor-not-allowed py-2 px-4" to="/busca">Busca</Link>
                    </li>
                    <li className="flex-1 mr-2">
                        <Link className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
                            to="/mural">Mural</Link>
                    </li>
                    <li className="flex-1 mr-2">
                        <Link className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
                            to="/faq">FAQ</Link>
                    </li>
                    <li className="flex-1 mr-2">
                        <Link className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
                            to="/login">Login</Link>
                    </li>
                </ul>
            </nav>

            <hr/>

            <Outlet/>
        </div>
    );
}