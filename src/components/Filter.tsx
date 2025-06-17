import { type ProductList } from "../schemas/schemas";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

type FilterProps = {
    data: ProductList;
    updateFilters: (type: string, checked: boolean, value: string) => void;
};

export default function Filter({ data, updateFilters }: FilterProps) {
    const filterConfig = {
        brand: Array.from(new Set(data.map((product) => product.brand))),
        color: Array.from(new Set(data.map((product) => product.color))),
    };

    return (
        <div className="w-full min-w-[260px]">
            {Object.entries(filterConfig).map(([filterType, options]) => (
                <details key={filterType} className="group">
                    <summary className="capitalize list-none flex items-center justify-between">
                        {filterType}
                        <span className="group-open:hidden">
                            <FaChevronDown />
                        </span>
                        <span className="hidden group-open:block">
                            <FaChevronUp />
                        </span>
                    </summary>
                    {options.map((option, index) => (
                        <label key={index} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                onChange={(e) =>
                                    updateFilters(
                                        filterType,
                                        e.target.checked,
                                        option.toString()
                                    )
                                }
                                className="form-checkbox"
                            />
                            {option}
                        </label>
                    ))}
                </details>
            ))}
            {/* <details>
                <summary>Brand</summary>
                {brands.map((brand, index) => (
                    <label key={index} className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            onChange={(e) =>
                                updateFilters("brand", e.target.checked, brand)
                            }
                            className="form-checkbox"
                        />
                        {brand}
                    </label>
                ))}
            </details>
            <details>
                <summary>Color</summary>

                {color.map((color, index) => (
                    <label key={index} className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            onChange={(e) =>
                                updateFilters("color", e.target.checked, color)
                            }
                            className="form-checkbox"
                        />
                        {color}
                    </label>
                ))}
            </details> */}
        </div>
    );
}
