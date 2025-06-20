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

export function convertCasing(word: string) {
  const match = word.match(/([a-z]+|[A-Z][^A-Z]*)/g);

  if (match) {
    return match.join(" ")
  }
}