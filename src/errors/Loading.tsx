import { useState } from "react";

import VinylImg from "/src/assets/svg/vinyl-record.svg"


export default function Loading() {
    const [loadingText, setLoadingText] = useState("Loading...");
    const [loadingClass, setLoadingClass] = useState("");

    const handleLoadingText = () => {
        setLoadingText("This might take a few seconds as our free-tier server is warming up.")
        setLoadingClass("animate-pulse")
    }
    setTimeout(() => handleLoadingText(), 5000)


    return (
        <div className={`p-hifi-default flex flex-col items-center gap-4 text-center [animation-duration:_2s] ${loadingClass}`}>
            <img src={VinylImg} alt="Loading Hifi Horizon" className="size-24 animate-spin [animation-duration:_2s]" />

            <p className="text-lg">
                {loadingText}
            </p>
        </div>
    )
}