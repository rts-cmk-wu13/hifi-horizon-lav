import { Outlet, useLocation } from "react-router";
import { useLayoutEffect, type ReactNode } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";


type ScrollWrapperProps = {
    children: ReactNode;
};


export default function Layout() {

    const ScrollWrapper = ({ children }: ScrollWrapperProps) => {
        const location = useLocation();

        useLayoutEffect(() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }, [location.pathname]);

        return children;
    };


    return (
        <>
            <Header />

            <main className="flex-1">
                <ScrollWrapper>
                    <Outlet />
                </ScrollWrapper>
            </main>

            <Footer />
        </>
    )
}