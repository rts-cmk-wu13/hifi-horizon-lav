import { Link } from "react-router"

import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";


export default function Header() {
    return (
        <header className="h-24 px-9 flex justify-between items-center bg-hifi-black text-hifi-white">
            <nav>
                <ul className="flex items-center gap-8">
                    <li>
                        <Link to="/">
                            <img src="/src/assets/svg/logo-wo-text-border.svg" alt="" className="w-14" />
                        </Link>
                    </li>

                    <li>
                        <Link to="/products">Shop</Link>
                    </li>

                    <li>
                        <Link to="/about">About Us</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex items-center gap-12">
                <search className="relative">
                    <input type="search" name="search" id="search" placeholder="Search products..." className="w-48 h-9 px-3 text-xs rounded-sm bg-hifi-white text-hifi-black" />
                    <FaSearch className="absolute z-10 top-1/2 right-0 text-hifi-black" />
                </search>

                <div className="flex items-center gap-6 text-2xl">
                    <FaUser />
                    <FaShoppingCart />
                </div>
            </div>
        </header>
    )
}