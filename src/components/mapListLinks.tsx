import type { ReactElement } from "react"
import { Link } from "react-router"


type ListLinkProps= {
    content: string | ReactElement;
    href: string;
    external?: boolean;
}


export default function MapListLinks(linksArray: ListLinkProps[]) {
    return linksArray.map((link, i) => {
        return (
            <li key={i}>
                <Link to={link.href} className="hover:underline" {...(link.external ? { target: "_blank" } : {})}>
                    {link.content}
                </Link>
            </li>
        )
    })
}