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
    let buttonStyling = `px-8 py-2 inline-block rounded-sm shadow-hifi-sm text-hifi-gray-lightest bg-hifi-accent text-sm text-center flex-shrink-0 ${obj.width ? obj.width : "w-fit"}`

    let buttonText = obj.icon ? (
        <>
            {obj.text} {obj.icon}
        </>
    ) : (
        obj.text
    )

    return (
        <>
            {obj.href ? (
                <Link to={obj.href} className={buttonStyling}>
                    {buttonText}
                </Link>
            ) :
            (
                <button onClick={obj.func} className={buttonStyling} form={obj.form ? obj.form : ""}>
                    {buttonText}
                </button>
            )}
        </>
    )
}