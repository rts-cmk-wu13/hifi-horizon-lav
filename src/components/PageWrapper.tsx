import type { ReactNode } from "react"


type PageWrapperProps = {
    obj?: {
        heading?: string
    }
    children: ReactNode | null;
    className?: string;
}


export default function PageWrapper({ obj, children, className }: PageWrapperProps) {

    const wrapperStyle = `w-full p-hifi-default pb-16 pt-32 ${className ?? ""}`

    return (
        <div className={wrapperStyle}>
            {obj?.heading &&
                <h1 className="mb-12 text-5xl font-semibold uppercase text-hifi-gray-dark">
                    {obj?.heading}
                </h1>
            }
            {children}
        </div>
    )
}