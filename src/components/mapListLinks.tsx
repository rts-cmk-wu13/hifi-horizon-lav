import { Link } from "react-router"


type ListLinkProps= {
    text: string;
    href: string;
    external?: boolean;
}


export default function mapListLinks(linksArray: ListLinkProps[]) {
    return linksArray.map((link, i) => {
        return (
            <li key={i}>
                <Link to={link.href} className="hover:underline" {...(link.external ? { target: "_blank" } : {})}>
                    {link.text}
                </Link>
            </li>
        )
    })
}