import { useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";
import type { Product } from "../schemas/schemas";
import Filter from "../components/Filter";
import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import usePageTitle from "../utils/helpers";

export default function Products() {
    const products = useLoaderData();

    usePageTitle("Products");

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
            if (value.size === 0) return true;

            if (key === "price") {
                const range = Array.from(value).find(
                    (v) => typeof v === "object"
                ) as { min: string; max: string } | undefined;
                const minPrice = range ? parseFloat(range.min || "0") : 0;
                const maxPrice = range ? parseFloat(range.max || Infinity.toString()) : Infinity;

                return product.price >= minPrice && product.price <= maxPrice;
            }

            if (key === "stock") {
                return value.has("inStock") ? product.stock > 0 : true;
            }

            if (key === "color") {
                // check if any of the product's colors exist in the selected filter values
                return product.colors.some((color) => value.has(color));
            }

            // default for brand, category, etc.
            return value.has(product[key as keyof Product]?.toString() || "");
        });
    });

    // Sort products by brand name ascending (case insensitive)
    const sortedProducts = [...filteredProducts].sort((a, b) =>
        a.brand.localeCompare(b.brand, undefined, { sensitivity: 'base' })
    );

    return (
        <PageWrapper obj={{ heading: "products" }}>
            <div className="grid gap-4 sm:grid-cols-[auto_1fr]">
                <Filter data={products} updateFilters={updateFilters} />
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] gap-4 sm:*:max-w-85">
                    {sortedProducts.map((product: Product) => (
                        <ProductCard
                            key={product.id}
                            data={product}
                            config={{ showStock: true, text: "See more"}}
                        />
                    ))}
                </div>
            </div>
        </PageWrapper>
    );
}
