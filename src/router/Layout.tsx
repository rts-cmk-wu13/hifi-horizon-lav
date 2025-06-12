import { Outlet } from "react-router";


export default function Layout() {
    return (
        <>
            <header></header>

            <main>
                <Outlet />
            </main>

            <footer></footer>
        </>
    )
}