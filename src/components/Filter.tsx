import { type ProductList } from "../schemas/schemas";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

type FilterProps = {
    data: ProductList;
    updateFilters: (
        type: string,
        checked: boolean,
        value: string | { min: string; max: string }
    ) => void;
};

export default function Filter({ data, updateFilters }: FilterProps) {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const form = e.target.closest("form") as HTMLFormElement; // Get the closest form element
        const min =
            form.querySelector<HTMLInputElement>('input[placeholder="min"]')
                ?.value || "";
        const max =
            form.querySelector<HTMLInputElement>('input[placeholder="max"]')
                ?.value || "";

        updateFilters("price", true, { min, max }); // Call updateFilters with the extracted values
    }

    function handleStock(e: React.ChangeEvent<HTMLInputElement>) {
        const checked = e.target.checked;

        updateFilters("stock", checked, "inStock");
    }

    const filterConfig = {
        brand: Array.from(new Set(data.map((product) => product.brand))),
        color: Array.from(
            new Set(
                data.flatMap((product) => product.colors)
            )
        ),
        category: Array.from(
            new Map(
                data.map((product) => {
                    const original = product.category;
                    const display = original
                        .replace("_", " ")
                        .replace("cd", "CD")
                        .replace("dvd", "DVD");

                    return [original, { original, display }];
                })
            ).values()
        ),
        price: Array.from(new Set(data.map((product) => product.price))),
        stock: Array.from(new Set(data.map((product) => product.stock))),
    };

    return (
        <div className="w-full min-w-[260px]">
            {Object.entries(filterConfig).map(([filterType, options]) => (
                <details
                    key={filterType}
                    className="mb-2.5 bg-hifi-gray-light rounded-lg group"
                >
                    <summary className="px-3 py-2 flex items-center justify-between relative z-10 list-none capitalize bg-hifi-gray-light shadow-[0px_2px_10px_0px_rgba(0,_0,_0,_0.05)] rounded-lg hifi-hover-dark">
                        <p>{filterType}</p>
                        <span className="group-open:hidden">
                            <FaChevronDown />
                        </span>
                        <span className="hidden group-open:block">
                            <FaChevronUp />
                        </span>
                    </summary>
                    <div className="text-sm">
                        {filterType !== "price" &&
                            filterType !== "stock" &&
                            options.map((option, index) => (
                                <label
                                    key={index}
                                    className="px-3 py-2 flex items-center justify-between gap-2 rounded-lg bg-hifi-gray-light capitalize hifi-hover-dark"
                                >
                                    {typeof option === "object" &&
                                        "display" in option
                                        ? option.display // Render the display property if option is an object
                                        : option.toString()}
                                    <input
                                        type="checkbox"
                                        onChange={(e) =>
                                            updateFilters(
                                                filterType,
                                                e.target.checked,
                                                typeof option === "object" && "original" in option
                                                    ? option.original // Use the original value if option is an object
                                                    : option.toString()
                                            )
                                        }
                                        className="form-checkbox cursor-pointer"
                                    />
                                </label>
                            ))}
                        {filterType == "price" && (
                            <form className="p-3 flex flex-col gap-3">
                                <input
                                    type="number"
                                    className="bg-hifi-white w-full p-2 rounded focus:outline-0"
                                    placeholder="min"
                                    onChange={handleChange}
                                />
                                <input
                                    type="number"
                                    className="bg-hifi-white w-full p-2 rounded focus:outline-0"
                                    placeholder="max"
                                    onChange={handleChange}
                                />
                            </form>
                        )}
                        {filterType == "stock" && (
                            <label className="px-3 py-2 flex items-center gap-2 capitalize justify-between bg-hifi-gray-light rounded-lg hifi-hover-dark">
                                Show only in stock
                                <input
                                    type="checkbox"
                                    className="form-checkbox cursor-pointer"
                                    onChange={handleStock}
                                />
                            </label>
                        )}
                    </div>
                </details>
            ))}
        </div>
    );
}
