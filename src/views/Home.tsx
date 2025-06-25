import { Form, useLoaderData } from "react-router"
import type { Product } from "../schemas/schemas"

import StandardButton from "../components/StandardButton"
import CtaBanner from "../components/CtaBanner"
import ProductCard from "../components/ProductCard"

import { hifiHeroImg } from "../utils/helpers"

import hifiSpeaker from "../assets/img/home_hifi-speaker.png"

export default function Home() {

    const data = useLoaderData()

    return (
        <>
            <img src={hifiHeroImg()} alt="Hifi Horizon Hero" className='w-full pt-24' />

            <section className="px-hifi-default pt-5 pb-16 bg-hifi-gray-lightest">
                <div className="flex flex-col items-center gap-4 justify-between sm:flex-row">
                    <h2 className='text-2xl font-bold uppercase text-hifi-gray-dark'>High-rated Products</h2>
                    <StandardButton obj={{ text: "See all products", href: "/products" }} />
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 justify-items-center h-full auto-rows-[minmax(23rem,_auto)] sm:grid-cols-2 lg:grid-cols-4">
                    {data.
                        sort((a: Product, b: Product) => b.rating - a.rating)
                        .slice(0, 4)
                        .map((product: Product) => (
                            <ProductCard key={product.id} data={product} config={{ showStock: false, text: "Read more" }} />
                        ))}
                </div>
            </section>

            <section className="p-hifi-default pb-16 flex flex-col gap-12 justify-between bg-hifi-black text-hifi-white text-sm relative hifi-max-w lg:flex-row lg:gap-8">
                <img src={hifiSpeaker} alt="" className="hidden absolute h-full top-0 left-[0px] -translate-x-full scale-x-[-1] lg:block" />
                <img src={hifiSpeaker} alt="" className="hidden absolute h-full top-0 right-[1px] translate-x-full lg:block" />
                <div className="*:text-balance flex flex-col gap-4 w-full md:max-w-[80%] lg:max-w-[50%]">
                    <h2 className="text-2xl font-semibold">What we do</h2>
                    <p>We look forward to customising a system to meet your needs.</p>
                    <p>We don’t favour one manufacturer over another – the only thing we do favour is making sure our customers get the right product that suits their needs and listening preferences. We will ask many questions in order to ensure that what you buy from us is tailored to you and you alone.</p>
                    <p>If you are looking for a product not found in our demonstration showrooms or our online site, don’t fret as we have access to hundreds of brands.</p>
                    <p>One of our biggest pleasures of working in this industry is to see the smile on our customers’ faces when they finally hear and see the system of their dreams.</p>
                </div>
                <div className="max-w-xs">
                    <h2 className="text-2xl font-semibold mb-4">Opening hours</h2>
                    <div className="mb-5">
                        <p className="font-bold">Edinburgh</p>
                        <p>2 Joppa Rd, Edinburgh, EH15 2EU</p>
                        <ul className="*:flex *:justify-between mt-3 text-sm">
                            <li><span>Monday to Friday:</span> <span>10:00am - 5:30pm</span></li>
                            <li><span>Saturday:</span> <span>10:00am - 5:30pm</span></li>
                            <li><span>Sunday:</span> <span>Closed</span></li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-bold">Falkirk</p>
                        <p>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</p>
                        <ul className="*:flex *:justify-between mt-3 text-sm">
                            <li><span>Monday to Friday:</span> <span>10:00am - 5:30pm</span></li>
                            <li><span>Saturday:</span> <span>By appointment only</span></li>
                            <li><span>Sunday:</span> <span>Closed</span></li>
                        </ul>
                    </div>

                </div>
            </section>

            <section className="p-hifi-default bg-hifi-gray-lightest mb-12">
                <CtaBanner obj={{ heading: "Sign up for our newsletter", text: "Subscribing to our newsletter secures you up to date information about HiFi Horizons latest updates and offers." }}>
                    <Form method="POST" noValidate id="newsletter" className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4 w-full">
                        <input type="email" name="email" id="email" className="px-3 h-9 w-[90%] rounded-sm bg-hifi-gray-light shadow-hifi-sm focus:outline-0 md:w-96" />
                        <StandardButton className="flex-shrink-0" obj={{ text: "Sign up", form: "newsletter" }} />
                    </Form>
                </CtaBanner>
            </section>
        </>
    )
}