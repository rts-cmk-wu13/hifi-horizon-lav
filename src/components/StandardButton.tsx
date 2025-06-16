import { Link } from "react-router"


type StandardButtonProps = {
    obj: {
        text: string,
        href?: string,
        func?: () => void,
    }
}

export default function StandardButton({ obj }: StandardButtonProps) {
    return (
        <>
            {obj.href ? (
                <Link to={obj.href} className="py-2 w-40 inline-block rounded-sm shadow-[1px_2px_4px] shadow-hifi-black/25 text-hifi-gray-lightest bg-hifi-accent text-sm text-center">
                    {obj.text}
                </Link>
            ) :
            (
                <button onClick={obj.func}>
                    {obj.text}
                </button>
            )}
        </>
    )
}