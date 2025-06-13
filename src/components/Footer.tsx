import { Link } from "react-router"

import { FaPhoneAlt, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare, FaCcStripe, FaCcVisa, FaCcMastercard } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="bg-hifi-black text-hifi-white">
            <div className="px-16 pt-12 pb-8 grid grid-cols-2 gap-32">
                <nav className="grid grid-cols-2 text-lg *:flex *:flex-col *:gap-3">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Shop</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <Link to="/faq">Returns & Refunds</Link>
                        </li>
                        <li>
                            <Link to="/faq">Delivery</Link>
                        </li>
                        <li>
                            <Link to="/faq">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/faq">Terms & Conditions</Link>
                        </li>
                    </ul>
                </nav>

                <address className="not-italic">
                    <p className="pb-4 text-lg">Contact</p>

                    <ul className="pb-5 flex flex-col gap-5 text-sm font-bold *:flex *:flex-col *:gap-4">
                        <li>
                            <p>2 Joppa Rd, Edinburgh, EH15 2EU</p>
                            <a href="tel:01315567901" className="w-fit flex items-center gap-5"><FaPhoneAlt className="text-xl" />0131 556 7901</a>
                        </li>
                        <li>
                            <p>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</p>
                            <a href="tel:01324629011" className="w-fit flex items-center gap-5"><FaPhoneAlt className="text-xl" />01324 629 011</a>
                        </li>
                    </ul>

                    <ul className="flex gap-3 text-2xl">
                        <li>
                            <Link to="https://www.facebook.com" target="_blank">
                                <FaFacebookSquare />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.twitter.com" target="_blank">
                                <FaTwitterSquare />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.instagram.com" target="_blank">
                                <FaInstagramSquare />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.youtube.com" target="_blank">
                                <FaYoutubeSquare />
                            </Link>
                        </li>
                    </ul>
                </address>
            </div>

            <div className="mx-5 px-12 py-3 border-t">
                <div className="flex gap-3 text-6xl">
                    <FaCcStripe />
                    <FaCcVisa />
                    <FaCcMastercard />
                </div>
                <small className="text-[0.5rem] font-bold">HiFi Horizon (Edinburgh) Ltd is registered in Scotland. No: SC049298. Registered office: 2 Joppa Rd, Edinburgh EH15 2EU</small>
            </div>
        </footer>
    )
}