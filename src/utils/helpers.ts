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

export function convertCasing(word: string) {
  const match = word.match(/([a-z]+|[A-Z][^A-Z]*)/g);

  if (match) {
    return match.join(" ")
  }
}