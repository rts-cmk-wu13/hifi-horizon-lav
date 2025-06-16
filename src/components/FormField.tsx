import type { ReactNode } from "react"

type FormFieldProps = {
    obj: {
        child: ReactNode,
        id: string,
        label: string,
        required: boolean,
    }
}


export default function FormField({ obj }: FormFieldProps) {
    return (
        <div className="flex flex-col gap-2 *:last:px-3 *:last:h-9 *:last:w-full *:last:rounded-sm *:last:bg-hifi-gray-light *:last:shadow-hifi-sm *:last:focus:outline-0">
            <label htmlFor={obj.id} className="inline-block font-semibold">
                {obj.required ? (
                    <>
                        {obj.label} <span className="text-red-500">*</span>
                    </>
                ) : (
                    obj.label
                )} 
            </label>

            {obj.child}
        </div>
    )
}