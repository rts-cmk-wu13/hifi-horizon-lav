import {
    createBrowserRouter,
    type ActionFunction,
    type LoaderFunction,
} from "react-router";

import Layout from "./Layout";

import Home from "../views/Home";
import Contact from "../views/Contact";
import About from "../views/About";
import FAQ from "../views/FAQ";

import Products from "../views/Products";
import ProductDetails from "../views/ProductDetails";

import Login from "../views/Login";
import SignUp from "../views/SignUp";
import Profile from "../views/Profile";

import {
    fetchProductById,
    fetchProducts,
    fetchFAQ,
    fetchAbout,
} from "../api/jsonserver";
import {
    handleContactSubmit,
    handleLoginSubmit,
    handleNewsletterSubmit,
    handleSignupSubmit,
} from "../api/actions";
import RequireAuth from "../components/RequireAuth";

import ErrorPage from "../errors/ErrorPage";
import ErrorElement from "../errors/ErrorElement";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        hydrateFallbackElement: <div>Loading...</div>,
        errorElement: <ErrorElement />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: fetchProducts as LoaderFunction,
                action: handleNewsletterSubmit as ActionFunction,
            },
            {
                path: "/products",
                element: <Products />,
                loader: fetchProducts as LoaderFunction,
            },
            {
                path: "/product/:id",
                element: <ProductDetails />,
                loader: fetchProductById as LoaderFunction,
            },
            {
                path: "/contact",
                element: <Contact />,
                action: handleContactSubmit as ActionFunction,
            },
            {
                path: "/about",
                element: <About />,
                loader: fetchAbout as LoaderFunction,
            },
            {
                path: "/faq",
                element: <FAQ />,
                loader: fetchFAQ as LoaderFunction,
            },
            {
                path: "/login",
                element: <Login />,
                action: handleLoginSubmit as ActionFunction,
            },
            {
                path: "/signup",
                element: <SignUp />,
                action: handleSignupSubmit as ActionFunction,
            },
            {
                path: "/profile",
                element: (
                    <RequireAuth>
                        <Profile />
                    </RequireAuth>
                ),
                action: handleSignupSubmit as ActionFunction,
            },
            {
                path: "*",
                element: <ErrorPage />,
            },
        ],
    },
]);

export default router;
