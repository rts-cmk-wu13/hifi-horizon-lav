type CircleDotProps = {
    obj?: {
        size?: string;
        color?: string;
        active?: boolean;
    }
    children?: string
}


export default function CircleDot({ obj, children }: CircleDotProps) {

    let size = obj?.size ? obj.size : "size-4"
    let color = obj?.color ? `bg-${obj.color} outline-${obj.color}` : "bg-hifi-black outline-hifi-black"

    return (
        <span className={`rounded-full outline-offset-2 text-xs text-hifi-white ${size} ${color} ${obj?.active ? "outline-2" : ""} ${children ? "inline-flex justify-center items-center" : "inline-block"}`}>
            {children}
        </span>
    )
}