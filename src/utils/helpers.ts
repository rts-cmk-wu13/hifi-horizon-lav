import HifiLogo from "/src/assets/svg/logo-wo-text-border.svg"
import HifiHeroImg from "/src/assets/img/home_hero-image.jpg"

export function hifiLogo() {
    return HifiLogo
}

export function hifiHeroImg() {
    return HifiHeroImg
}


export function scrollToHashElement() {
    if (typeof window === "undefined") return;

    const hash = window.location.hash;
    if (!hash) return;

    const element = document.querySelector(hash);
    if (element) {
        const headerHeight =
            document.querySelector("[data-header]")?.scrollHeight || 96;
        const yOffset = -(headerHeight + 8); // pixels to offset by
        const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
    }
}

export function getBaseURL(url?: string): string {
    const locationObj = url ? new URL(url) : window.location;
    const { protocol, hostname, port } = locationObj;
    return `${protocol}//${hostname}${port ? `:${port}` : ""}`;
}

export function isRunningLocal() {
    return getBaseURL().includes("localhost") ? true : false;

    //Debugging to act as live
    //return false;
}

export function liveOrLocalBaseURL() {
    let baseURL = "";
    if (isRunningLocal()) {
        //console.log("local")
        baseURL = "http://localhost:4000";
    } else {
        //console.log("live")
        baseURL = "https://hifi-horizon-api-lav.onrender.com";
    }
    //console.log(baseURL)
    return baseURL;
}

type HasImages = {
    images: string[];
    [key: string]: any;
};

export function handleImgPaths<T extends HasImages>(data: T[]): T[] {
    if (!isRunningLocal()) {
        data = data.map((item) => ({
            ...item,
            images: item.images.map((url) =>
                url.replace("http://localhost:4000", liveOrLocalBaseURL())
            ),
        }));
    }
    //console.log("Handle img paths", data)
    return data;
}

export function convertCasing(word: string) {
    const match = word.match(/([a-z]+|[A-Z][^A-Z]*)/g);

    if (match) {
        return match.join(" ");
    }
}

import { useEffect } from "react";
import { useNavigate, useNavigation, useLocation } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import {
    readFromSessionStorage,
    removeFromSessionStorage,
} from "../utils/localstorage";

export function useRedirectAfterAuth() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const navigation = useNavigation();
    const location = useLocation();

    const from =
        (location.state as { from?: { pathname: string } })?.from?.pathname ||
        readFromSessionStorage<string>("redirectTo") ||
        "/";

        console.log(from);
        

    useEffect(() => {
        const token = readFromSessionStorage<string>("token");

        if (navigation.state === "idle" && token) {
            login(token);
            navigate(from, { replace: true });

        }
    }, [navigation.state, login, navigate, from]);
}

export async function validateToken(token: string): Promise<boolean> {
    const response = await fetch("http://localhost:4000/me", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.ok; // true if valid, false if 401/403/etc.
}

export function checkUserSession() {
    let isActive;
    const sessionStart = readFromSessionStorage("sessionStart") as number;
    const now = Date.now();
    const hourInMilliseconds = 60 * 60 * 1000;
    // const hourInMilliseconds = 10 * 1000;

    if (!sessionStart || now - sessionStart > hourInMilliseconds) {
        // Session expired, clear session storage
        removeFromSessionStorage("token");
        removeFromSessionStorage("sessionStart");

        isActive = false;
        return false;
    } else {
        isActive = true;
    }

    return isActive;
}

export function json(data: unknown, init?: ResponseInit): Response {
    return new Response(JSON.stringify(data), {
        ...init,
        headers: {
            "Content-Type": "application/json",
            ...(init?.headers ?? {}),
        },
    });
}
