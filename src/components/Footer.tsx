import { FaPhoneAlt, FaCcStripe, FaCcVisa, FaCcMastercard } from "react-icons/fa";

import ListLinks from "./ListLinks";
import { footerNavLinks, footerFaqLinks, footerSoMeLinks } from "../data/FooterArrays";


export default function Footer() {

    const linkListStyle = "flex flex-col gap-3"


    return (
        <footer className="bg-hifi-black text-hifi-white">
            <nav className="flex flex-col gap-12 px-8 py-6 md:flex-row md:justify-between hifi-max-w">
                <ul className={linkListStyle}>
                    {ListLinks(footerNavLinks)}
                </ul>

                <div>
                    <ul className={linkListStyle}>
                        {ListLinks(footerFaqLinks.faq)}
                    </ul>

                    <hr className="border-t-1 border-hifi-accent my-6" />

                    <ul className={linkListStyle}>
                        {ListLinks(footerFaqLinks.external)}
                    </ul>
                </div>
                <address className="not-italic">
                    <p className="mb-3">Contact</p>

                    <ul className="pb-5 flex flex-col gap-5 text-sm *:flex *:flex-col *:gap-3">
                        <li>
                            <p>2 Joppa Rd, Edinburgh, EH15 2EU</p>
                            <a href="tel:01315567901" className="w-fit flex items-center text-xs gap-5 hifi-hover-75"><FaPhoneAlt className="size-5" />0131 556 7901</a>
                        </li>
                        <li>
                            <p>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</p>
                            <a href="tel:01324629011" className="w-fit flex items-center text-xs gap-5 hifi-hover-75"><FaPhoneAlt className="size-5" />01324 629 011</a>
                        </li>
                    </ul>

                    <ul className="flex gap-3 *:*:*:size-7">
                        {ListLinks(footerSoMeLinks)}
                    </ul>
                </address>
            </nav>

            <div className="flex flex-col gap-3 px-8 pb-6 hifi-max-w">
                <hr className="border-t-1 border-hifi-accent mb-2" />
                <div className="flex gap-3 *:h-12 *:w-auto">
                    <FaCcStripe />
                    <FaCcVisa />
                    <FaCcMastercard />
                </div>
                <small className="text-xs font-bold">HiFi Horizon (Edinburgh) Ltd is registered in Scotland. No: SC049298. Registered office: 2 Joppa Rd, Edinburgh EH15 2EU</small>
                <small className="text-xs font-bold">This website was made for a school project at Roskilde Tekniske Skole</small>
            </div>
        </footer>
    )
}