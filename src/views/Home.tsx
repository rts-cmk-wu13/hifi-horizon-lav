import { Form, useLoaderData } from "react-router"
import type { Product } from "../schemas/schemas"

import StandardButton from "../components/StandardButton"
import CtaBanner from "../components/CtaBanner"
import ProductCard from "../components/ProductCard"

export default function Home() {

    const data = useLoaderData()

    return (
        <>
            <img src="/src/assets/img/home_hero-image.jpg" alt="" className='w-full' />

            <section className="px-hifi-default pt-5 pb-16 bg-hifi-gray-lightest">
                <div className="flex justify-between">
                    <h2 className='text-2xl font-bold uppercase text-hifi-gray-dark'>Popular Products</h2>
                    <StandardButton obj={{text: "See all products", href: "/products"}}/>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 justify-items-center h-full auto-rows-[minmax(23rem,_auto)] sm:grid-cols-2 lg:grid-cols-4">
                   {data.
                   sort((a: Product, b: Product) => a.popularity - b.popularity)
                   .slice(0, 4)
                   .map((product : Product) => (
                        <ProductCard key={product.id} data={product} config={{showStock:false, text: "Read more"}} />
                   ))}
                </div>
            </section>

            <section className="px-hifi-default pt-28 pb-20 flex justify-between bg-hifi-black text-hifi-white text-sm">
                <div className="max-w-lg *:pt-4">
                    <h2 className="text-2xl font-bold">What we do</h2>
                    <p>We look forward to customising a system to meet your needs.</p>
                    <p>We don’t favour one manufacturer over another – the only thing we do favour is making sure our customers get the right product that suits their needs and listening preferences. We will ask many questions in order to ensure that what you buy from us is tailored to you and you alone.</p>
                    <p>If you are looking for a product not found in our demonstration showrooms or our online site, don’t fret as we have access to hundreds of brands.</p>
                    <p>One of our biggest pleasures of working in this industry is to see the smile on our customers’ faces when they finally hear and see the system of their dreams.</p>
                </div>
                <div className="max-w-xs mr-14">
                    <h2 className="text-2xl font-bold mb-9">Opening hours</h2>
                    <ul>
                        <li className="font-bold">Edinburgh</li>
                        <li>2 Joppa Rd,Edinburgh, EH15 2EU</li>
                        <li>Monday to Friday: 10:00am - 5:30pm</li>
                        <li>Saturday: 10:00am - 5:30pm</li>
                        <li>Sunday: Closed</li>
                    </ul>
                    <ul className="pt-4">
                        <li className="font-bold">Falkirk</li>
                        <li>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</li>
                        <li>Monday to Friday: 10:00am - 5:30pm</li>
                        <li>Saturday - By appointment only</li>
                        <li>Sunday: Closed</li>
                    </ul>
                </div>
            </section>

            <section className="p-hifi-default bg-hifi-gray-lightest">
                <CtaBanner obj={{ heading: "SIGN UP FOR OUR NEWSLETTER", text: "Subscribing to our newsletter secures you up to date information about HiFi Horizons latest updates and offers." }}>
                    <Form method="POST" noValidate id="newsletter" className="flex items-center gap-6">
                        <input type="email" name="email" id="email" className="px-3 h-9 w-96 rounded-sm bg-hifi-gray-light shadow-hifi-sm focus:outline-0" />

                        <StandardButton obj={{text: "Sign up", form: "newsletter"}}/>
                    </Form>
                </CtaBanner>
            </section>
        </>
    )
}