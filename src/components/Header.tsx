import { NavLink } from "react-router"

import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";

import { headerNavLinks, headerDropdownLinks } from "../data/HeaderArrays";

import MapListLinks from "./MapListLinks";

export default function Header() {
    return (
        <header className="pt-24" data-header>
            <nav className="h-24 px-9 flex justify-between items-center fixed z-999 inset-x-0 top-0 bg-hifi-black text-hifi-white *:h-full">
                <ul className="flex items-center gap-6 text-sm *:h-full *:content-center">
                    <li className="w-16">
                        <NavLink to="/" className="hover:opacity-75">
                            <img src="/src/assets/svg/logo-wo-text-border.svg" alt=""/>
                        </NavLink>
                    </li>

                    {headerNavLinks.map((link, i) => (
                        <li className="relative group" key={i}>
                            <NavLink to={link.href} className="uppercase relative transition-all [&.active]:[text-shadow:0_0_1px_currentColor] hover:[text-shadow:0_0_1px_currentColor] duration-300" key={i}>
                                {link.content}
                            </NavLink>

                            {i == 0 && (
                                <ul id="dropdown" className="hidden w-96 p-9 group-hover:flex flex-col gap-5 fixed top-24 bg-hifi-white text-xl text-hifi-gray-dark">
                                    <li className="text-2xl font-semibold text-hifi-black">Browse Categories</li>

                                    {MapListLinks(headerDropdownLinks)}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>


                <div className="flex items-center gap-6">
                    <search className="hidden md:relative md:flex md:items-center">
                        <input type="search" name="search" id="search" placeholder="Search products..." className="w-48 h-9 px-3 text-xs rounded-sm bg-hifi-white text-hifi-black placeholder:text-hifi-black focus:outline-0" />
                        <FaSearch className="absolute z-10 right-1.5 text-xl text-hifi-black cursor-pointer" />
                    </search>

                    <div className="flex items-center gap-6 text-2xl">
                        <FaUser />
                        <FaShoppingCart />
                    </div>
                </div>
            </nav>
        </header>
    )
}