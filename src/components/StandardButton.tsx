import type { ReactNode } from "react"
import { Link } from "react-router"

type StandardButtonProps = {
    obj: {
        text: string,
        href?: string,
        func?: () => void,
        icon?: ReactNode,
        width?: string,
        form?: string
    }
}


export default function StandardButton({ obj }: StandardButtonProps) {
    let buttonStyling = `px-8 py-2 block flex-shrink-0 rounded-sm shadow-hifi-sm bg-hifi-accent text-hifi-gray-lightest text-sm text-center cursor-pointer ${obj.width ? obj.width : "w-fit"}`

    let buttonContent;
    let buttonText = obj.text || "Read more" 

    if (obj.icon) {
        buttonContent = <>{buttonText} {obj.icon}</>
    } else {
        buttonContent = <>{buttonText}</>
    }

    return (
        <>
            {obj.href ? (
                <Link to={obj.href} className={buttonStyling}>
                    {buttonContent}
                </Link>
            ) :
            (
                <button onClick={obj.func} className={buttonStyling} form={obj.form ? obj.form : ""}>
                    {buttonContent}
                </button>
            )}
        </>
    )
}