import type { ReactNode } from "react"


type PageWrapperProps = {
    obj: {
        heading: string
    }
    children: ReactNode | null;
    className: string;
}


export default function PageWrapper({ obj, children, className }: PageWrapperProps) {

    const wrapperStyle = `p-hifi-default pb-16 ${className ?? ""}`

    return (
        <div className={wrapperStyle}>
            <h1 className="mb-12 text-5xl font-semibold uppercase text-hifi-gray-dark">
                {obj.heading}
            </h1>

            {children}
        </div>
    )
}