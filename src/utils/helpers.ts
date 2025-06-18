import { useEffect } from "react";

export function scrollToHashElement() {
  if (typeof window === "undefined") return;

  const hash = window.location.hash;
  if (!hash) return;

  const element = document.querySelector(hash);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

export function useSmoothScrollToHash(deps: unknown[]) {
  useEffect(() => {
    const handleHashChange = () => {
      setTimeout(() => {
        scrollToHashElement();
      }, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    setTimeout(() => {
      scrollToHashElement();
    }, 0);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, deps);
}