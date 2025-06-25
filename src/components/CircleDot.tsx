type CircleDotProps = {
    obj?: {
        size?: string;
        color?: string;
        fill?: boolean;
        outline?: boolean;
    }
    children?: string;
    onClick?: (e: React.MouseEvent) => void;
}


type ColorKey = "green" | "yellow" | "red" | "grayMedium" | "black" | "metallic" | "copper" | "gold" | "blue" | "pink" | "walnut" | "white" | "gray";

const ColorVariants: Record<ColorKey, string> = {
    green: "bg-hifi-green inset-shadow-hifi-green",
    yellow: "bg-hifi-yellow inset-shadow-hifi-yellow",
    red: "bg-hifi-red inset-shadow-hifi-red",
    grayMedium: "bg-hifi-gray-medium inset-shadow-hifi-gray-medium",
    black: "bg-hifi-black inset-shadow-hifi-black",
    metallic: "bg-[linear-gradient(#919292,#DFE0E1)]",
    copper: "bg-[linear-gradient(#682B2B,#D78843)]",
    gold: "bg-[linear-gradient(#AF8726,#F8F08B)]",
    white: "bg-hifi-white inset-shadow-hifi-white",
    blue: "bg-blue-500 inset-shadow-blue-500",
    pink: "bg-pink-200 inset-shadow-pink-200",
    walnut: "bg-amber-900 inset-shadow-amber-900",
    gray: "bg-hifi-gray-medium inset-shadow-hifi-gray-medium",
}



export default function CircleDot({ obj, children, onClick, ...rest }: CircleDotProps) {

    let color =
        obj?.color && obj.color in ColorVariants
            ? ColorVariants[obj.color as ColorKey]
            : ColorVariants["black" as ColorKey];
    let size = obj?.size ? obj.size : "size-4 min-w-4 min-h-4"
    let displayType = children ? "inline-flex justify-center items-center" : "inline-block"
    let fill = obj?.fill ? "" : "bg-transparent inset-shadow-[0_0_0_2px]"

    return (
        <span className={`rounded-full outline-offset-2 text-xs text-hifi-white border-[0.25px] border-hifi-gray-medium ${color} ${size} ${displayType} ${fill}`} {...(onClick ? { onClick: onClick } : {})} {...rest}>
            {children}
        </span>
    )
}