import { createBrowserRouter } from "react-router";

import Layout from "./Layout";

import Home from "../views/Home";
import Products from "../views/Products";
import ProductDetails from "../views/ProductDetails";
import Contact from "../views/Contact";
import About from "../views/About";
import FAQ from "../views/FAQ";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        hydrateFallbackElement: <div>Loading...</div>,
        errorElement: <div>Error</div>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/product",
                element: <ProductDetails />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/faq",
                element: <FAQ />,
            },
            {
                path: "*",
                element: <div>Error - Page not found</div>,
            },
        ],
    },
]);

export default router;