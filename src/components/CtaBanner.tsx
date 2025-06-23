import type { ReactNode } from "react"

import WhiteBox from "./WhiteBox"


type CtaBannerProps = {
    obj: {
        heading: string,
        text: string,
    }
    children: ReactNode,
    className?: string
}


export default function CtaBanner({ obj, children, className }: CtaBannerProps) {
    return (
        <WhiteBox className={`flex flex-col items-center ${className ?? ""}`}>
            <h2 className="text-2xl font-semibold">{obj.heading}</h2>
            <p className="mb-6 text-sm">{obj.text}</p>

            {children}
        </WhiteBox>
    )
}