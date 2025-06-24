import { useNavigate } from "react-router";
import { type Product } from "../schemas/schemas";

import StandardButton from "./StandardButton";
import StockStatus from "./StockStatus";


type ProductCardProps = {
    config?: {
        showStock?: boolean;
        text?: string;
    };
    data: Product;
};


export default function ProductCard({ config, data }: ProductCardProps) {
    const navigate = useNavigate()

    return (
        <div
            key={data.id}
            className="w-full bg-hifi-white grid justify-items-center rounded drop-shadow-md"
        >
            <div className="relative h-full image-tint">
                <img src={data.images[0]} alt="" className="h-full object-contain" />
            </div>
            <div className="w-full flex flex-col gap-2 p-4 items-center h-38">
                <h3 className="text-sm text-center">
                    {data.brand} {data.name}
                </h3>
                <h2 className="font-semibold text-center">£ {data.price}.00</h2>
                <div className={`mt-auto w-full flex gap-2 items-center ${config?.showStock ? "justify-between" : "justify-center"
                    }`}>
                    <StandardButton
                        obj={{
                            text: `${config?.text || "Read more"}`,
                            href: `/product/${data.id}`,
                            func: () => navigate(`/product/${data.id}`)
                        }}
                    />

                    {config?.showStock && (
                        <StockStatus obj={{ stock: data.stock }} />
                    )}
                </div>
            </div>
        </div>
    );
}
