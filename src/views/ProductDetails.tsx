import { useState } from "react";
import { useLoaderData } from "react-router";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import PageWrapper from "../components/PageWrapper"
import StandardButton from "../components/StandardButton";
import CircleDot from "../components/CircleDot";
import StockStatus from "../components/StockStatus";
import ItemCount from "../components/ItemCount";

import { convertCasing } from "../utils/helpers";


export default function ProductDetails() {

    const product = useLoaderData();

    const productPrice = new Intl.NumberFormat("en-GB").format(product.price)

    const [imageColorFilter, setImageColorFilter] = useState(product.images);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const handleImageColor = (color: string) => {
        if (selectedColor === color) {
            setSelectedColor(null);
            setImageColorFilter(product.images);
        } else {
            const filteredImages = product.images.filter((image: string) => image.includes(color));
            setSelectedColor(color)
            setImageColorFilter(filteredImages)
            setImageIndex(0)
        }
    }

    let imageMax = imageColorFilter.length - 1
    const [imageIndex, setImageIndex] = useState(0);
    const handleImageIndex = (add: boolean) => {
        if (add) {
            if (imageIndex < imageMax) {
                setImageIndex(imageIndex + 1)
            } else {
                setImageIndex(0)
            }
        } else {
            if (imageIndex > 0) {
                setImageIndex(imageIndex - 1)
            } else {
                setImageIndex(imageMax)
            }
        }
    }


    return (
        <PageWrapper obj={{ heading: "Product" }}>
            <div className="grid grid-cols-2 gap-12">

                <div className="flex flex-col items-center gap-12">
                    <figure className="flex gap-4 justify-center items-center relative justify-self-center text-hifi-gray-medium">
                        <FaChevronLeft className="cursor-pointer size-8" onClick={() => handleImageIndex(false)} />

                        <div className="relative h-full image-tint">
                            <img src={imageColorFilter[imageIndex]} alt="Product image" className="select-none" />
                        </div>

                        <FaChevronRight className="cursor-pointer size-8" onClick={() => handleImageIndex(true)} />
                    </figure>

                    <div className="flex gap-3 *:size-4 *:rounded-full *:cursor-pointer [&>.active]:bg-hifi-gray-medium">
                        {imageColorFilter.map((_: any, i: number) => (
                            <CircleDot obj={{ color: "grayMedium", fill: i === imageIndex ? true : false }} onClick={() => setImageIndex(i)} key={i} />
                        ))}
                    </div>
                </div>


                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-2xl font-semibold">
                            {product.brand} {product.name}
                        </h2>

                        <p>{product.description}</p>
                    </div>

                    <div className="flex gap-3">
                        {product.colors.map((color: string, i: number) => (
                            <figure className={`p-2 min-w-16 flex flex-col items-center gap-1 text-center rounded-lg cursor-pointer select-none duration-100 hover:bg-hifi-gray-light ${selectedColor === color ? "bg-hifi-gray-light" : ""}`} onClick={() => handleImageColor(color)} key={i}>
                                <CircleDot obj={{ color: color, fill: true, size: "size-7 min-w-7 min-h-7" }} />
                                <figcaption className="text-xs capitalize">
                                    {color}
                                </figcaption>
                            </figure>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="text-2xl font-semibold">
                            £ {productPrice}.00
                        </p>

                        <StockStatus obj={{ stock: product.stock }} />
                    </div>

                    <div className="flex gap-12 justify-center">
                        <ItemCount />
                        <StandardButton obj={{ text: "Add to cart" }} className="flex-1" />
                    </div>
                </div>

            </div>

            <hr className="my-24 border-0 h-0.5 bg-hifi-gray-light" />

            <div>
                <h2 className="mb-12 text-2xl font-semibold uppercase">Product Specifications</h2>
                <ul className="text-sm capitalize *:odd:bg-hifi-gray-light">
                    {Object.entries(product)
                        .filter(([key]) => key !== "images")
                        .map(([key, value]) => (
                            <li
                                key={key}
                                className={`flex *:py-3 ${key === "img" ? "*:last:lowercase" : ""}`}
                            >
                                <p className="px-8 w-56 font-bold text-right">
                                    {convertCasing(String(key))}:
                                </p>
                                <p className={`px-8 flex-1 border-l-1 border-hifi-gray-medium ${key === "slug" ? "lowercase" : ""}`}>
                                    {key === "colors" ? String(value).replace(",", ", ") : String(value)}
                                </p>
                            </li>
                        ))}
                </ul>
            </div>
        </PageWrapper>
    )

}