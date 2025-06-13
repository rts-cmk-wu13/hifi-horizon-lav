import { Outlet } from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Layout() {
    return (
        <>
            <Header />

            <main className="flex-1">
                <Outlet />
            </main>

            <Footer />
        </>
    )
}