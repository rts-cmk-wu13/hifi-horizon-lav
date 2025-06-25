export const headerNavLinks = [
    {
        content: "Shop",
        href: "/products"
    },
    {
        content: "About",
        href: "/about"
    },
    {
        content: "Contact",
        href: "/contact"
    },
]


export const headerDropdownLinks = [
  "Blu-ray Players",
  "CD Players",
  "Headphones",
  "Integrated Amps",
  "Phono Amps",
  "Power Amps",
  "Preamps",
  "Record Players",
  "Speakers (Movable)",
  "Speakers (Stationary)",
].map((category) => ({
  content: category,
  href: `/products?category=${encodeURIComponent(category)}`,
}));