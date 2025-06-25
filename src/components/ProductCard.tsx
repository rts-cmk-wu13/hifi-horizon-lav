import { useState } from "react";
import { useNavigate } from "react-router";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { type Product } from "../schemas/schemas";

import StandardButton from "./StandardButton";
import StockStatus from "./StockStatus";
import CircleDot from "./CircleDot";
import { removeParentheses } from "../utils/helpers";


type ProductCardProps = {
    config?: {
        showStock?: boolean;
        text?: string;
    };
    data: Product;
};


export default function ProductCard({ config, data }: ProductCardProps) {
    const navigate = useNavigate()

    const [imageColorFilter, setImageColorFilter] = useState(data.images);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const handleImageColor = (color: string) => {
        if (selectedColor === color) {
            setSelectedColor(null);
            setImageColorFilter(data.images);
        } else {
            const filteredImages = data.images.filter((image: string) => image.includes(color));
            setSelectedColor(color)
            setImageColorFilter(filteredImages)
            setImageIndex(0)
        }
    }

    const [imageIndex, setImageIndex] = useState(0);


    return (
        <div
            key={data.id}
            className="w-full bg-hifi-white grid justify-items-center rounded drop-shadow-md border-[0.25px] border-hifi-black/10 overflow-hidden"
        >
            <div className="relative h-full image-tint flex justify-center items-center">
                <div className="flex gap-1 absolute top-2 right-2 group">
                    {data.colors.map((color: string, i: number) => {
                        const isSelected = selectedColor === color;
                        const notSelected = !selectedColor;

                        return (
                            <CircleDot obj={{ color: color, fill: true }} className={`cursor-pointer group-hover:opacity-25 hover:opacity-100 ${notSelected || isSelected ? "opacity-100" : "opacity-50"}`} onClick={() => handleImageColor(color)} key={i} />
                        )
                    })}
                </div>

                <img src={imageColorFilter[imageIndex]} alt={`${data.brand} ${data.name}`} className="h-full object-contain" />
            </div>
            <div className="w-full flex flex-col gap-2 p-4 items-center h-38">
                <h3 className="text-sm text-center">
                    {data.brand} {removeParentheses(data.name)}
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
