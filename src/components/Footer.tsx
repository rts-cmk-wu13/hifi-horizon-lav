import { FaPhoneAlt, FaCcStripe, FaCcVisa, FaCcMastercard } from "react-icons/fa";

import MapListLinks from "./MapListLinks";
import { footerNavLinks, footerFaqLinks, footerSoMeLinks } from "../data/FooterArrays";


export default function Footer() {

    const linkListStyle = "flex flex-col gap-3"


    return (
        <footer className="bg-hifi-black text-hifi-white">
            <div className="flex flex-col gap-8 p-8 md:flex-row md:px-16 md:gap-10 md:pt-12 md:pb-8 md:justify-between">
                <nav className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-10">
                    <ul className={linkListStyle}>
                        {MapListLinks(footerNavLinks)}
                    </ul>

                    <div>
                        <ul className={linkListStyle}>
                            {MapListLinks(footerFaqLinks.faq)}
                        </ul>

                        <hr className="my-3" />

                        <ul className={linkListStyle}>
                            {MapListLinks(footerFaqLinks.external)}
                        </ul>
                    </div>
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
                        {MapListLinks(footerSoMeLinks)}
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