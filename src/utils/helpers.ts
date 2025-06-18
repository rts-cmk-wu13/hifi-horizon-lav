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