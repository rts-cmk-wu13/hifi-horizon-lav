import { Link } from "react-router";

import { type Product } from "../schemas/schemas";
import { FaCircle } from "react-icons/fa6";

type ProductCardProps = {
    config?: {
        showStock?: boolean;
        text?: string;
    };
    data: Product;
};

export default function ProductCard({ config, data }: ProductCardProps) {

    return (
        <>
            <div
                key={data.id}
                className="max-w-[260px] w-full bg-hifi-white grid justify-items-center p-3 rounded drop-shadow-md"
            >
                <div className="h-[9rem]">
                    <img
                        src={data.img}
                        alt=""
                        className="h-full object-contain"
                    />
                </div>
                <h3 className="text-sm self-end">
                    {data.brand}, {data.name}
                </h3>
                <h2 className="font-semibold self-end">£ {data.price}</h2>
                <div className="w-full flex justify-between items-center">
                    <Link to={`/product/${data.id}`} key={data.id}>
                        {config?.text || "Read more"}
                    </Link>
                    {config?.showStock && (
                        <>
                            {data.stock > 0 ? (
                                <p className="gap-2 flex">
                                    In Stock
                                    <span className="text-green-600">
                                        <FaCircle className="inline-block mr-1" />
                                    </span>
                                </p>
                            ) : (
                                <p>
                                    Out of Stock
                                    <span className="text-red-600">
                                        <FaCircle className="inline-block mr-1" />
                                    </span>
                                </p>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
