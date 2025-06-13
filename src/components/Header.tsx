import { Link } from "react-router"

import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";


export default function Header() {
    const navLinks = [
        {
            text: "Shop",
            href: "/products"
        },
        {
            text: "About Us",
            href: "/about"
        },
        {
            text: "Contact Us",
            href: "/contact"
        },
    ]

    const dropdownLinks = [
        {
            text: "CD Players",
            href: "/"
        },
        {
            text: "DVD Players",
            href: "/"
        },
        {
            text: "Preamps",
            href: "/"
        },
        {
            text: "Speakers",
            href: "/"
        },
        {
            text: "Turntables",
            href: "/"
        },
        {
            text: "Integrated Amplifiers",
            href: "/"
        },
        {
            text: "Power Amplifiers",
            href: "/"
        },
        {
            text: "Tube Amplifiers",
            href: "/"
        },
    ]


    return (
        <header className="h-24 px-9 flex justify-between items-center fixed inset-x-0 top-0 bg-hifi-black text-hifi-white">
            <nav>
                <ul className="flex items-center gap-8 text-sm h-full">
                    <li>
                        <Link to="/">
                            <img src="/src/assets/svg/logo-wo-text-border.svg" alt="" className="w-14" />
                        </Link>
                    </li>

                    {navLinks.map((link, i) => (
                        <li className="relative group h-full content-center">
                            <Link to={link.href} className="uppercase hover:font-bold">
                                {link.text}
                            </Link>

                            {i == 0 ? (
                                <ul id="dropdown" className="hidden w-96 p-9 group-hover:flex flex-col gap-5 fixed top-24 bg-hifi-white">
                                    <li className="text-2xl text-hifi-black">Browse Categories</li>

                                    {dropdownLinks.map((link) => (
                                        <li>
                                            <Link to={link.href} className="text-xl text-hifi-gray-dark">
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ) : ""}
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="flex items-center gap-12">
                <search className="relative flex items-center">
                    <input type="search" name="search" id="search" placeholder="Search products..." className="w-48 h-9 px-3 text-xs rounded-sm bg-hifi-white text-hifi-black placeholder:text-hifi-black focus:outline-0" />
                    <FaSearch className="absolute z-10 right-1.5 text-xl text-hifi-black cursor-pointer" />
                </search>

                <div className="flex items-center gap-6 text-2xl">
                    <FaUser />
                    <FaShoppingCart />
                </div>
            </div>
        </header>
    )
}