import type { LoaderFunctionArgs } from "react-router";
import { ProductListSchema, ProductSchema, type Product, type ProductList } from "../schemas/schemas";

import queryClient from "./queryClient";

export const fetchProducts = async (): Promise<ProductList> => {
    return queryClient.fetchQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await fetch("http://localhost:4000/products");

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const result = await ProductListSchema.safeParseAsync(await response.json());

            if (!result.success) {
                throw new Error("Invalid data format" + result.error.message);
            }

            console.log(result.data);
            

            return result.data;
        },
    })
}

export const fetchProductById = async ({ params }: LoaderFunctionArgs): Promise<Product> => {

    const id = params.id;

    return queryClient.fetchQuery({
        queryKey: ["products", id],
        queryFn: async () => {

            const response = await fetch(`http://localhost:4000/products/${id}`);

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