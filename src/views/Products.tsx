import { useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";
import type { Product } from "../schemas/schemas";

export default function Products() {

    const products = useLoaderData();

    return (
        <>
            <h1>Products</h1>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-4 justify-items-center h-full auto-rows-[minmax(20rem,_auto)]">
                {products.map((product: Product) => (
                    <ProductCard key={product.id} data={product} config={{showStock:true}}/>
                ))}
            </div>
        </>
    );
}
