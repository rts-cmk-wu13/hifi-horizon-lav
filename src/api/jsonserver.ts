import type { LoaderFunctionArgs } from "react-router";
import { ProductListSchema, ProductSchema, UserSchema, type Product, type ProductList } from "../schemas/schemas";
import { FAQSchema, type FAQType } from "../schemas/schemas";
import { AboutListSchema, type AboutType } from "../schemas/schemas";
import { handleImgPaths, liveOrLocalBaseURL } from "../utils/helpers";

import queryClient from "./queryClient";

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

            const result = await ProductListSchema.safeParseAsync(await response.json());

            if (!result.success) {
                throw new Error("Invalid data format" + result.error.message);
            }

            let data = result.data
            data = handleImgPaths(data)
            return data
        },
    })
}

/*--- Fetch product detail ---*/
export const fetchProductById = async ({ params }: LoaderFunctionArgs): Promise<Product> => {
    const id = params.id;

    return queryClient.fetchQuery({
        queryKey: ["products", id],
        queryFn: async () => {

            const response = await fetch(`${API_BASE_URL}/products/${id}`);

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const result = await ProductSchema.safeParseAsync(await response.json());

            if (!result.success) {
                throw new Error("Invalid data format" + result.error.message);
            }

            console.log(result.data);
            return result.data;
        }
    })
}


/*--- Fetch FAQ ---*/
export const fetchFAQ = async (): Promise<FAQType> => {
    return queryClient.fetchQuery({
        queryKey: ["faq"],
        queryFn: async () => {
            const response = await fetch(`${API_BASE_URL}/faq`);

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const result = await FAQSchema.safeParseAsync(await response.json());

            if (!result.success) {
                throw new Error("Invalid data format" + result.error.message);
            }

            console.log(result.data);
            return result.data;
        },
    })
}


/*--- Fetch About ---*/
export const fetchAbout = async (): Promise<AboutType> => {
    return queryClient.fetchQuery({
        queryKey: ["about"],
        queryFn: async () => {
            const response = await fetch(`${API_BASE_URL}/about`);

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const result = await AboutListSchema.safeParseAsync(await response.json());

            if (!result.success) {
                throw new Error("Invalid data format" + result.error.message);
            }

            let data = result.data
            data = handleImgPaths(data)
            return data
        },
    })
}



export const fetchUser = async (): Promise<ProductList> => {
    return queryClient.fetchQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await fetch(`${API_BASE_URL}/me`);

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const result = await UserSchema.safeParseAsync(await response.json());

            if (!result.success) {
                throw new Error("Invalid data format" + result.error.message);
            }

            let data = result.data
            return data
        },
    })
}