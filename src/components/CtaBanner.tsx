import type { ReactNode } from "react"

type CtaBannerProps = {
    obj: {
        heading: string,
        text: string,
        input: ReactNode,
    }
    className?: string
}


export default function CtaBanner({ obj, className }: CtaBannerProps) {

    const bannerStyle = `py-8 flex flex-col items-center shadow-[2px_4px_4px] shadow-hifi-black/25 bg-hifi-white ${className ?? ""}`


    return (
        <div className={bannerStyle}>
            <h2 className="text-2xl font-semibold">{obj.heading}</h2>
            <p className="mb-6 text-sm">{obj.text}</p>
            {obj.input}
        </div>
    )
}