import { createBrowserRouter, type LoaderFunction } from "react-router";

import Layout from "./Layout";

import Home from "../views/Home";
import Products from "../views/Products";
import ProductDetails from "../views/ProductDetails";
import Contact from "../views/Contact";
import About from "../views/About";
import FAQ from "../views/FAQ";
import { fetchFAQ, fetchProductById, fetchProducts } from "../api/jsonserver";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        hydrateFallbackElement: <div>Loading...</div>,
        children: [
            {
                index: true,
                element: <Home />,
                loader: fetchProducts as LoaderFunction, // Assuming Home also needs products data
            },
            {
                path: "/products",
                element: <Products />,
                loader: fetchProducts as LoaderFunction
            },
            {
                path: "/product/:id",
                element: <ProductDetails />,
                loader: fetchProductById as LoaderFunction,
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
                loader: fetchFAQ as LoaderFunction,
            },
            {
                path: "*",
                element: <div>Error - Page not found</div>,
            },
        ],
    },
]);

export default router;