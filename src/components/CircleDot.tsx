type CircleDotProps = {
    obj?: {
        size?: string;
        color?: string;
        fill?: boolean;
    }
    onClick?: (e: React.MouseEvent) => void;
    className?: string;
}


type ColorKey = "inStock" | "lowStock" | "soldOut" | "grayMedium" | "black" | "metallic" | "copper" | "gold" | "blue" | "pink" | "walnut" | "green" | "white" | "gray" | "red";

const ColorVariants: Record<ColorKey, string> = {
    inStock: "bg-hifi-green inset-shadow-hifi-green",
    lowStock: "bg-hifi-yellow inset-shadow-hifi-yellow",
    soldOut: "bg-hifi-red inset-shadow-hifi-red",
    grayMedium: "bg-hifi-gray-medium inset-shadow-hifi-gray-medium",
    black: "bg-hifi-black inset-shadow-hifi-black",
    metallic: "bg-[linear-gradient(#919292,#DFE0E1)]",
    copper: "bg-[linear-gradient(#682B2B,#D78843)]",
    gold: "bg-[linear-gradient(#AF8726,#F8F08B)]",
    white: "bg-hifi-white inset-shadow-hifi-white",
    blue: "bg-blue-900 inset-shadow-blue-900",
    pink: "bg-rose-200 inset-shadow-rose-200",
    walnut: "bg-amber-900 inset-shadow-amber-900",
    green: "bg-teal-700 inset-shadow-teal-700",
    gray: "bg-gray-400 inset-shadow-hifi-gray-400",
    red: "bg-red-700 inset-shadow-red-700",
}



export default function CircleDot({ obj, onClick, className, ...rest }: CircleDotProps) {

    let color =
        obj?.color && obj.color in ColorVariants
            ? ColorVariants[obj.color as ColorKey]
            : ColorVariants["black" as ColorKey];
    let size = obj?.size ? obj.size : "size-4 min-w-4 min-h-4"
    let fill = obj?.fill ? "" : "bg-transparent inset-shadow-[0_0_0_2px] hover:bg-hifi-gray-medium/35"

    return (
        <span className={`rounded-full outline-offset-2 text-xs text-hifi-white border-[0.25px] border-hifi-gray-medium duration-350 ease-out ${color} ${size} ${fill} ${className ? className : ""}`} {...(onClick ? { onClick: onClick } : {})} {...rest}></span>
    )
}