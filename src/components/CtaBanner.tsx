import type { ReactNode } from "react"

type CtaBannerProps = {
    obj: {
        heading: string,
        text: string,
        input: ReactNode,
    }
}


export default function CtaBanner({ obj }: CtaBannerProps) {
    return (
        <div className="py-8 flex flex-col items-center shadow-[2px_4px_4px] shadow-hifi-black/25 bg-hifi-white">
            <h2 className="text-2xl font-semibold">{obj.heading}</h2>
            <p className="mb-6 text-sm">{obj.text}</p>
            {obj.input}
        </div>
    )
}