import type { ReactElement } from "react"

type ChildrenProps = ReactElement<{ id: string, className: string }>

type FormFieldProps = {
    obj: {
        label: string,
        required?: boolean,
        errorMessage?: string,
    },
    children: ChildrenProps | null;
    className?: string;
}


export default function FormField({ obj, children, className }: FormFieldProps) {

    if(!children) {
        throw new Error("No child found in form field")
    }

    const childId = children?.props?.id

    const fieldStyle = `*:last:px-3 *:last:w-full *:last:rounded-sm *:last:bg-hifi-gray-light *:last:shadow-hifi-sm *:last:focus:outline-0 [&>input]:h-9 [&>textarea]:p-3 ${className ?? ""}`


    return (
        <div className={fieldStyle}>
            <label htmlFor={childId} className="pb-2 block font-semibold">
                {obj.label} {obj.required ? <span className="text-red-500">*</span> : null}
            </label>
            {obj.errorMessage && (
                <span className="text-red-600">{obj.errorMessage}</span>
            )}
            {children}
            
        </div>
    )
}