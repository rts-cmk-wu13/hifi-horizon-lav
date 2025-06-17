import { useLoaderData } from "react-router"
import { type ProductList } from "../schemas/schemas";

type FilterProps = {
    data: ProductList;
}

export default function Filter({ data } : FilterProps) {

    const uniqueBrands = Array.from(new Set(data.map(product => product.brand)));
    const uniqueCategories = Array.from(new Set(data.map(product => product.category)));
    const uniqueColors = Array.from(new Set(data.map(product => product.color)));

    return (
        <div>
            {uniqueBrands.map((product) => (
                <label key={product}>
                    <input type="checkbox" name="brand" value={product}/>
                    {product}
                </label>
            ))}
        </div>
    )

}