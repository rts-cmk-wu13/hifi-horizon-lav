import { z } from "zod/v4";


export const ProductSchema = z.object({
    id: z.number().int(),
    img: z.url(),
    name: z.string().min(1),
    brand: z.string().min(1),
    category: z.string().min(1),
    color: z.string().min(1),
    price: z.number().min(0),
    stock: z.number().int().min(0),
    popularity: z.number().int().min(0).max(100),
    discount: z.number().int().min(0).max(100).optional(),
    shortDescription: z.string().min(1),
    longDescription: z.string().min(1)
})

export const ProductListSchema = z.array(ProductSchema);

export type Product = z.infer<typeof ProductSchema>;
export type ProductList = z.infer<typeof ProductListSchema>;


