import type { LoaderFunctionArgs } from "react-router";
import {
    CurrentUserSchema,
    ProductListSchema,
    ProductSchema,
    type CurrentUser,
    type Product,
    type ProductList,
} from "../schemas/schemas";
import { FAQSchema, type FAQType } from "../schemas/schemas";
import { AboutListSchema, type AboutType } from "../schemas/schemas";
import { handleImgPaths, liveOrLocalBaseURL } from "../utils/helpers";

import queryClient from "./queryClient";
import { toast } from "react-toastify";
import { z } from "zod/v4";
import { readFromSessionStorage } from "../utils/localstorage";


const API_BASE_URL = liveOrLocalBaseURL();

/*--- Fetch all products ---*/
export const fetchProducts = async (): Promise<ProductList> => {
    return queryClient.fetchQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await fetch(`${API_BASE_URL}/products`);

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const result = await ProductListSchema.safeParseAsync(
                await response.json()
            );

            if (!result.success) {
                throw new Error("Invalid data format" + result.error.message);
            }

            let data = result.data;
            data = handleImgPaths(data);
            return data;
        },
    });
};

/*--- Fetch product detail ---*/
export const fetchProductById = async ({
    params,
}: LoaderFunctionArgs): Promise<Product> => {
    const id = params.id;

    return queryClient.fetchQuery({
        queryKey: ["products", id],
        queryFn: async () => {
            const response = await fetch(`${API_BASE_URL}/products/${id}`);

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const result = await ProductSchema.safeParseAsync(
                await response.json()
            );

            if (!result.success) {
                throw new Error("Invalid data format" + result.error.message);
            }

            console.log(result.data);
            return result.data;
        },
    });
};

/*--- Fetch FAQ ---*/
export const fetchFAQ = async (): Promise<FAQType> => {
    return queryClient.fetchQuery({
        queryKey: ["faq"],
        queryFn: async () => {
            const response = await fetch(`${API_BASE_URL}/faq`);

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const result = await FAQSchema.safeParseAsync(
                await response.json()
            );

            if (!result.success) {
                throw new Error("Invalid data format" + result.error.message);
            }

            console.log(result.data);
            return result.data;
        },
    });
};

/*--- Fetch About ---*/
export const fetchAbout = async (): Promise<AboutType> => {
    return queryClient.fetchQuery({
        queryKey: ["about"],
        queryFn: async () => {
            const response = await fetch(`${API_BASE_URL}/about`);

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const result = await AboutListSchema.safeParseAsync(
                await response.json()
            );

            if (!result.success) {
                throw new Error("Invalid data format" + result.error.message);
            }

            let data = result.data;
            data = handleImgPaths(data);
            return data;
        },
    });
};

type FetchUserArgs = {
    queryString?: string;
    token: string | unknown;
};

export const fetchCurrentUser = async ({
    queryString,
    token,
}: FetchUserArgs): Promise<CurrentUser> => {
    return queryClient.fetchQuery({
        queryKey: ["me"],
        queryFn: async () => {
            const response = await fetch(`${API_BASE_URL}/me${queryString ? "?" + queryString : ""}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                
            }

            const rawData = await response.json();

            const result = await CurrentUserSchema.safeParseAsync(
                rawData
            );

            if (!result.success) {
                const zodError = z.treeifyError(result.error);
                const errorMessage =
                    zodError.properties?.email?.errors[0] || "Invalid input";

                toast.error(errorMessage, {
                    className: "mt-24",
                });

                return zodError.properties;
            }

            return result.data;
        },
    });
};

export const profileLoader = async ({request}: LoaderFunctionArgs) => {
    const url = new URL(request.url);

    const queryString = url.searchParams.toString();
    const token = readFromSessionStorage("token");

    return fetchCurrentUser({queryString, token});
}
