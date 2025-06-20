export function scrollToHashElement() {
    if (typeof window === "undefined") return;

    const hash = window.location.hash;
    if (!hash) return;

    const element = document.querySelector(hash);
    if (element) {
        const headerHeight = document.querySelector("[data-header]")?.scrollHeight || 96
        const yOffset = -(headerHeight + 8); // pixels to offset by
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
    }
}

export function getBaseURL(url?: string): string {
    const locationObj = url ? new URL(url) : window.location;
    const { protocol, hostname, port } = locationObj;
    return `${protocol}//${hostname}${port ? `:${port}` : ''}`;
}

export function isRunningLocal() {
    return getBaseURL().includes("localhost") ? true : false;

    //Debugging to act as live
    //return false;
}

export function liveOrLocalBaseURL() {
    let baseURL = ""
    if (isRunningLocal()) {
        //console.log("local")
        baseURL = "http://localhost:4000"
    } else {
        //console.log("live")
        baseURL = "https://hifi-horizon-api-lav.onrender.com"
    }
    //console.log(baseURL)
    return baseURL
}
type HasImg = {
  img: string;
  [key: string]: any;
};

export function handleImgPaths<T extends HasImg>(data: T[]): T[] {
  if (!isRunningLocal()) {
    data = data.map(item => ({
      ...item,
      img: item.img.replace("https://localhost:4000", liveOrLocalBaseURL()),
    }));
  }
  //console.log("Handle img paths", data)

  return data;
}