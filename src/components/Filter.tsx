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
        category: Array.from(new Set(data.map((product) => product.category))),
    };

    return (
        <div className="w-full min-w-[260px]">
            {Object.entries(filterConfig).map(([filterType, options]) => (
                <details key={filterType} className="group bg-hifi-gray-light mb-2.5">
                    <summary className="capitalize list-none flex items-center justify-between bg-hifi-gray-light shadow-[0px_2px_10px_0px_rgba(0,_0,_0,_0.05)] px-[10px] p-1.5">
                    {/* background: #E8E8E8;
                    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.05); */}
                        <p>{filterType}</p>
                        <span className="group-open:hidden">
                            <FaChevronDown />
                        </span>
                        <span className="hidden group-open:block">
                            <FaChevronUp />
                        </span>
                    </summary>
                    <div className="p-[10px]">
                        {options.map((option, index) => (


                            <label
                                key={index}
                                className="flex items-center gap-2 capitalize"
                            >
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
                    </div>
                </details>
            ))}
        </div>
    );
}
