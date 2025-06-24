import { isRouteErrorResponse, useRouteError, Link } from "react-router"

import { hifiLogo } from "../utils/helpers";


export default function ErrorElement() {
    const error = useRouteError()

    let errorHeading = "Unknown Error"
    let errorBody

    if (isRouteErrorResponse(error)) {
        errorHeading = `${error.status} ${error.statusText}`
        errorBody = error.data
    } else if (error instanceof Error) {
        errorHeading = "Error"
        errorBody = error.message
    }

    return (
        <div className="p-hifi-default flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-4">
                <img src={hifiLogo()} alt="Hifi Horizon logo" className="size-12" />
                <h1 className="text-5xl">{errorHeading}</h1>
            </div>

            {errorBody ? (
                <p className="text-lg">
                    {errorBody}
                </p>
            ) : (
                <Link to="/" className="text-lg hover:underline">
                    Return to the front page?
                </Link>
            )}

            
        </div>
    )
}