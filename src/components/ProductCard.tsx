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
    return (
        <div
            key={data.id}
            className="w-full max-w-2xs h-[400px] bg-hifi-white grid justify-items-center p-3 pt-10 rounded drop-shadow-md"
        >
            <div className="h-[9rem]">
                <img src={data.img} alt="" className="h-full object-contain" />
            </div>
            <h3 className="text-sm self-end">
                {data.brand}, {data.name}
            </h3>
            <h2 className="font-semibold self-center">£ {data.price}.00</h2>
            <div className={`w-full flex items-center ${
                config?.showStock ? "justify-between" : "justify-center"
            }`}>
                <StandardButton
                    obj={{
                        text: `${config?.text || "Read more"}`,
                        href: `/product/${data.id}`,
                    }}
                />

                {config?.showStock && (
                    <StockStatus obj={{ stock: data.stock }} />
                )}
            </div>
        </div>
    );
}
