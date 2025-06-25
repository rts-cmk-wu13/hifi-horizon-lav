import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { RouterProvider } from "react-router";
import router from "./router/router";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";
import queryClient from "./api/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
                <ToastContainer hideProgressBar={true} pauseOnHover={false} autoClose={2000}/>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </AuthProvider>
    </StrictMode>
);
