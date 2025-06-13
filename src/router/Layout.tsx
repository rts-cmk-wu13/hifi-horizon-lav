import { Outlet } from "react-router";

import Header from "../components/Header";


export default function Layout() {
    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>

            <footer></footer>
        </>
    )
}