import type { ReactNode } from "react"
import { Link } from "react-router"

type StandardButtonProps = {
    obj?: {
        text?: string;
        href?: string;
        func?: () => void;
        form?: string;
        icon?: ReactNode;
        type?: string;
    }
    className?: string;
}


export default function StandardButton({ obj, className }: StandardButtonProps) {

    let buttonContent;
    let buttonText = obj?.text || "Read more";

    if (obj?.icon) {
        buttonContent = <>{buttonText} {obj?.icon}</>
    } else {
        buttonContent = <>{buttonText}</>
    }

    const buttonStyle = `px-8 py-2 w-fit block rounded-sm shadow-hifi-sm bg-hifi-accent text-hifi-gray-lightest text-sm text-center cursor-pointer hover:opacity-75 ${className ?? ""}`

    return (
        <>
            {obj?.href ? (
                <Link to={obj?.href} className={buttonStyle}>
                    {buttonContent}
                </Link>
            ) :
            (
                <button onClick={obj?.func} className={buttonStyle} {...(obj?.form ? { form: obj?.form } : {})}>
                    {buttonContent}
                </button>
            )}
        </>
    )
} 