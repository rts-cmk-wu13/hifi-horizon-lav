import { useLoaderData } from "react-router";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import PageWrapper from "../components/PageWrapper"
import StandardButton from "../components/StandardButton";
import CircleDot from "../components/CircleDot";
import StockStatus from "../components/StockStatus";
import ItemCount from "../components/ItemCount";


export default function ProductDetails() {

    const product = useLoaderData();

    const productPrice = new Intl.NumberFormat("en-GB").format(product.price)


    return (
        <PageWrapper obj={{ heading: "Product" }}>
            <div className="grid grid-cols-2 gap-12 items-center">

                <div className="flex flex-col items-center">
                    <figure className="flex gap-12 justify-center items-center relative justify-self-center text-hifi-gray-medium text-6xl">
                        <FaChevronLeft className="cursor-pointer" />
                        <img src={product.img} alt="" />
                        <FaChevronRight className="cursor-pointer" />
                    </figure>

                    <div className=" mt-12 flex gap-3 *:size-4 *:rounded-full *:cursor-pointer [&>.active]:bg-hifi-gray-medium">
                        <CircleDot obj={{ color: "grayMedium", fill: true }} />
                        <CircleDot obj={{ color: "grayMedium" }} />
                        <CircleDot obj={{ color: "grayMedium" }} />
                    </div>
                </div>


                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-2xl font-semibold">
                            {product.brand} {product.name}
                        </h2>

                        <p>{product.longDescription}</p>
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
                    {Object.entries(product).map(([key, value]) => (
                        <li key={key} className="flex *:py-3">
                            <p className="px-8 w-56 font-bold text-right">
                                {key}
                            </p>
                            <p className="px-8 flex-1 border-l-1 border-hifi-gray-medium">
                                {String(value)}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </PageWrapper>
    )

}