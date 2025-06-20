type CircleDotProps = {
    obj?: {
        size?: string;
        color?: string;
        fill?: boolean;
        outline?: boolean;
    }
    children?: string
}


type ColorKey = "green" | "yellow" | "red" | "grayMedium" | "black";

const ColorVariants: Record<ColorKey, string> = {
    green: "bg-hifi-green inset-shadow-hifi-green",
    yellow: "bg-hifi-yellow inset-shadow-hifi-yellow",
    red: "bg-hifi-red inset-shadow-hifi-red",
    grayMedium: "bg-hifi-gray-medium inset-shadow-hifi-gray-medium",
    black: "bg-hifi-black inset-shadow-hifi-black",
}



export default function CircleDot({ obj, children }: CircleDotProps) {

    let color =
        obj?.color && obj.color in ColorVariants
            ? ColorVariants[obj.color as ColorKey]
            : ColorVariants["black" as ColorKey];
    let size = obj?.size ? obj.size : "size-4"
    let displayType = children ? "inline-flex justify-center items-center" : "inline-block"
    let fill = obj?.fill ?? "bg-transparent inset-shadow-[0_0_0_2px]"

    return (
        <span className={`rounded-full outline-offset-2 text-xs text-hifi-white ${color} ${size} ${displayType} ${fill}`}>
            {children}
        </span>
    )
}