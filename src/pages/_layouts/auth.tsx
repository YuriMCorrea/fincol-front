import {Link, Outlet} from 'react-router-dom'

export function AuthLayout() {
    return (
        <div>
            <Link className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
                  to="/">Home</Link>
            <h1>Autenticação</h1>

            <div>
                <Outlet />
            </div>
        </div>
    )
}