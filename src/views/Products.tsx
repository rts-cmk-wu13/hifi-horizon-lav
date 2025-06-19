import { useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";
import type { Product } from "../schemas/schemas";
import Filter from "../components/Filter";
import { useState } from "react";
import PageWrapper from "../components/PageWrapper";

export default function Products() {
    const products = useLoaderData();

    const [filters, setFilters] = useState<
        Record<string, Set<string | number | { min: string; max: string }>>
    >({});

    function updateFilters(
        type: string,
        checked: boolean,
        value: string | { min: string; max: string }
    ) {
        console.log("updateFilters called with:", { type, checked, value });

        setFilters((currentFilters) => {
            const updatedFilters = new Set(currentFilters[type] || []);

            if (type === "price" && typeof value === "object") {
                // For price range inputs, replace the existing range object
                updatedFilters.clear(); // Clear existing ranges
                updatedFilters.add(value); // Add the new range
            } else if (checked) {
                // For checkboxes, add the value if checked
                updatedFilters.add(value);
            } else {
                // For checkboxes, remove the value if unchecked
                updatedFilters.delete(value);
            }

            return { ...currentFilters, [type]: updatedFilters };
        });
    }

    const filteredProducts = products.filter((product: Product) => {
        return Object.entries(filters).every(([key, value]) => {
            if (key === "price") {
                const range = Array.from(value).find(
                    (v) => typeof v === "object"
                ) as { min: string; max: string };
                const minPrice = range ? parseFloat(range?.min || "0") : 0;
                const maxPrice = range
                    ? parseFloat(range?.max || Infinity.toString())
                    : Infinity;

                console.log(
                    "minprice: ",
                    minPrice,
                    "maxprice: ",
                    maxPrice,
                    "productprice: ",
                    product.price
                );
                return product.price >= minPrice && product.price <= maxPrice;
            }

            if (key === "stock") {
                return value.has("inStock") ? product.stock > 0 : true;
            }

            return (
                value.size === 0 ||
                value.has(product[key as keyof Product]?.toString() || "")
            );
        });
    });

    return (
        <PageWrapper obj={{ heading: "products" }}>
            <div className="grid grid-cols-[auto_1fr] gap-6">
                <Filter data={products} updateFilters={updateFilters} />
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] gap-4 h-full grid-flow-row-dense auto-rows-[minmax(23rem,_auto)]">
                    {filteredProducts.map((product: Product) => (
                        <ProductCard
                            key={product.id}
                            data={product}
                            config={{ showStock: true, text: "Add to cart" }}
                        />
                    ))}
                </div>
            </div>
        </PageWrapper>
    );
}
