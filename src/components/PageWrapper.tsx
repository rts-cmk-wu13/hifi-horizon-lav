import type { ReactNode } from "react"


type PageWrapperProps = {
    obj: {
        heading: string
    }
    children: ReactNode | null;
}


export default function PageWrapper({ obj, children }: PageWrapperProps) {
    return (
        <div className="p-hifi-default pb-16">
            <h1 className="mb-12 text-5xl font-semibold uppercase text-hifi-gray-dark">
                {obj.heading}
            </h1>

            {children}
        </div>
    )
}