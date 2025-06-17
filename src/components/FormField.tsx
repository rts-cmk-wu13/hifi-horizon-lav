import type { ReactElement } from "react"


type ChildrenProps = ReactElement<{ id: string, className: string }>

type FormFieldProps = {
    obj: {
        label: string,
        required?: boolean,
    },
    children: ChildrenProps | null
}


export default function FormField({ obj, children }: FormFieldProps) {

    if(!children) {
        throw new Error("No child found in form field")
    }

    const childId = children?.props?.id
    
    return (
        <div className="*:last:px-3 *:last:h-9 *:last:w-full *:last:rounded-sm *:last:bg-hifi-gray-light *:last:shadow-hifi-sm *:last:focus:outline-0">
            <label htmlFor={childId} className="pb-2 block font-semibold">
                {obj.label} {obj.required ? <span className="text-red-500">*</span> : null}
            </label>

            {children}
        </div>
    )
}