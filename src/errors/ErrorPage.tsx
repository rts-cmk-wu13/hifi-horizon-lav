import { Link } from "react-router"
import { FaChevronRight } from "react-icons/fa6";

import { hifiLogo } from "../utils/helpers";

export default function ErrorPage() {
    return (
        <div className="py-12 flex flex-col items-center gap-12 text-center ">
            <h1 className="text-5xl">
                404 - Page Not Found
            </h1>

            <img src={hifiLogo()} alt="Hifi Horizon logo" />

            <Link to="/" className="flex items-center gap-2 text-lg hover:underline">
                Return to the front page? <FaChevronRight />
            </Link>
        </div>
    )
}