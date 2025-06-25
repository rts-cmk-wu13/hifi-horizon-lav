import { useState } from "react";
import { NavLink } from "react-router"

import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";

import { headerNavLinks, headerDropdownLinks } from "../data/HeaderArrays";

import ListLinks from "./ListLinks";

import { hifiLogo } from "../utils/helpers";


export default function Header() {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownElm = document.querySelector("#dropdownMenu") as HTMLElement

    const handleDropdownOpen = () => {
        setTimeout(() => setDropdownOpen(true), 1)
        if (dropdownElm && "openPopover" in dropdownElm && typeof (dropdownElm as any).openPopover === "function") {
            (dropdownElm as any).openPopover();
        }
    }

    const handleDropdownClose = () => {
        setDropdownOpen(false)
        if (dropdownElm && "closePopover" in dropdownElm && typeof (dropdownElm as any).closePopover === "function") {
            (dropdownElm as any).closePopover();
        }
    }

    return (
        <header className="bg-hifi-black fixed z-999 left-0 top-0 w-full" data-header>
            <nav className="h-24 px-8 flex gap-12 sm:justify-between text-hifi-white *:h-full hifi-max-w">
                <ul className="flex items-center gap-3 *:h-full *:content-center text-xs md:gap-6 md:text-sm" onMouseLeave={handleDropdownClose}>
                    <li className="w-10 sm:w-16">
                        <NavLink to="/" className="hifi-hover-75">
                            <img src={hifiLogo()} alt="Hifi Horizon logo" />
                        </NavLink>
                    </li>

                    {headerNavLinks.map((link, i) => {
                        if (i === 0) {
                            return (
                                <li className="relative group" key={i} onMouseEnter={handleDropdownOpen} popoverTarget="dropdownMenu">
                                    <NavLink to={link.href} className="uppercase relative transition-all [&.active]:[text-shadow:0_0_1px_currentColor] hover:[text-shadow:0_0_1px_currentColor] duration-200" key={i}>
                                        {link.content}
                                    </NavLink>

                                    <ul id="dropdownMenu" className={`w-96 p-8 flex flex-col gap-3 rounded-bl rounded-br border-[0.25px] border-hifi-black/10 absolute top-24 bg-hifi-white text-md text-hifi-gray-dark ${dropdownOpen ? "flex" : "hidden"}`} popover="manual">
                                        <li className="text-lg font-semibold text-hifi-black">Browse Categories</li>

                                        {ListLinks(headerDropdownLinks)}
                                    </ul>
                                </li>
                            )
                        } else {
                            return (
                                <li className="relative group" key={i}>
                                    <NavLink to={link.href} className="uppercase relative transition-all [&.active]:[text-shadow:0_0_1px_currentColor] hover:[text-shadow:0_0_1px_currentColor] duration-200" key={i}>
                                        {link.content}
                                    </NavLink>
                                </li>
                            )
                        }
                    })}
                </ul>


                <div className="flex items-center gap-6 ml-auto">
                    <search className="hidden md:relative md:flex md:items-center">
                        <input type="search" name="search" id="search" placeholder="Search products..." className="w-48 h-9 px-3 text-xs rounded-sm bg-hifi-white text-hifi-black placeholder:text-hifi-black focus:outline-0" />
                        <FaSearch className="absolute z-10 right-1.5 text-xl text-hifi-black cursor-pointer" />
                    </search>

                    <div className="flex items-center gap-6">
                        <NavLink to="/profile" className="hifi-hover-75">
                            <FaUser className="size-6" />
                        </NavLink>
                        <FaShoppingCart className="hifi-hover-75 size-6" />
                    </div>
                </div>
            </nav>
        </header>
    )
}