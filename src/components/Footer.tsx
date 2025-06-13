import { Link } from "react-router"

import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="px-16 py-12 grid grid-cols-2 gap-32 bg-hifi-black text-hifi-white">
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
        </footer>
    )
}