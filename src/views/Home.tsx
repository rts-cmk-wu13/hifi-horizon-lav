import { Link } from "react-router"


export default function Home() {

    return (
        <>
            <img src="/src/assets/img/home_hero-image.jpg" alt="" className='w-full' />

            <section className="px-9 pt-5 pb-16 bg-hifi-gray-lightest">
                <div className="flex justify-between">
                    <h2 className='text-2xl font-bold uppercase text-hifi-gray-dark'>Popular Products</h2>
                    <Link to="/products" className="py-2 w-40 inline-block rounded-sm text-sm text-center text-hifi-gray-lightest bg-hifi-accent">
                        See all products
                    </Link>
                </div>

                <div className="mt-6 grid grid-cols-4 gap-8">
                    <p>product</p>
                    <p>product</p>
                    <p>product</p>
                    <p>product</p>
                </div>
            </section>
        </>
    )
}