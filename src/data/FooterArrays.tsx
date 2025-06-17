import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";


export const footerNavLinks = [
    {
        content: "Home",
        href: "/"
    },
    {
        content: "Shop",
        href: "/products"
    },
    {
        content: "About Us",
        href: "/about"
    },
    {
        content: "Contact",
        href: "/contact"
    },
]


export const footerFaqLinks = {
    "faq": [
        {
            content: "Our Guarantee",
            href: "/faq#our-guarantee",
        },
        {
            content: "Shipping & Delivery",
            href: "/faq#shipping"
        },
        {
            content: "Refunds & Returns",
            href: "/faq#refunds"
        },
    ],
    "external": [
        {
            content: "Privacy Policy",
            href: "https://en.wikipedia.org/wiki/Privacy_policy",
            external: true,
        },
        {
            content: "Terms & Conditions",
            href: "https://en.wikipedia.org/wiki/Terms_of_service",
            external: true,
        },
    ]
}


export const footerSoMeLinks = [
    {
        content: <FaFacebookSquare />,
        href: "https://www.facebook.com",
        external: true,
    },
    {
        content: <FaTwitterSquare />,
        href: "https://www.twitter.com",
        external: true,
    },
    {
        content: <FaInstagramSquare />,
        href: "https://www.instagram.com",
        external: true,
    },
    {
        content: <FaYoutubeSquare />,
        href: "https://www.youtube.com",
        external: true,
    },
]