import { useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";
import type { Product } from "../schemas/schemas";
import Filter from "../components/Filter";
import { useState } from "react";

export default function Products() {

    const products = useLoaderData();

    const [filters, setFilters] = useState<Record<string, Set<string | number>>>({});

    function updateFilters(type: string, checked: boolean, value: string | number) {
        setFilters((currentFilters) => {
            const updatedFilters = new Set(currentFilters[type]);
            
            if (checked) {
                updatedFilters.add(value)
            } else {
                updatedFilters.delete(value)
            }

            return {...currentFilters, [type]: updatedFilters};
        })
    }

    const filteredProducts = products.filter((product: Product) => {

        return Object.entries(filters).every(([key, value]) => {

            if (key === "price") {
                // Assuming `value` is a Set containing a range like [minPrice, maxPrice]
                const [minPrice, maxPrice] = Array.from(value) as [number, number];
                return product.price >= minPrice && product.price <= maxPrice;
            }

            return value.size === 0 || value.has(product[key as keyof Product]?.toString() || "");
        })

    })

    return (
        <div className="grid grid-cols-[auto_1fr] gap-6 px-9 h-full">
            <h1 className="text-5xl text-hifi-gray-dark font-semibold col-span-2">Products</h1>
            <Filter data={products} updateFilters={updateFilters}/>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] gap-4 justify-items-center h-full auto-rows-[minmax(23rem,_auto)]">
                {filteredProducts.map((product: Product) => (
                    <ProductCard key={product.id} data={product} config={{showStock:true, text: "Add to cart"}}/>
                ))}
            </div>
        </div>
    );
}
