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
        <WhiteBox className={`flex flex-col gap-2 items-center ${className ?? ""}`}>
            <h2 className="text-2xl font-semibold uppercase text-center">{obj.heading}</h2>
            <p className="mb-2 text-sm text-center">{obj.text}</p>

            {children}
        </WhiteBox>
    )
}