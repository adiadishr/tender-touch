export const products = [
  // Diapers
  {
    title: "Diapers",
    id: "diapers",
    accordian: true,
    subCategories: [
      {
        title: "Premium Diapers",
        id: "premium-diapers",
        price: 300,
        sizes: [0, 1, 2, 3, 4, 5],
        desc: "Designed for the most delicate skin, our Premium Diapers offer unmatched softness, breathability, and comfort. With superior absorption and a snug fit, they're made to keep your baby dry, happy, and free to move—all day and night.",
        tagline: "The best diaper for your baby",
        src: "/premium-diapers.avif",
        featured: true,
      },
      {
        title: "Super Saver Pack",
        id: "super-saver-pack",
        price: 300,
        sizes: [0, 1, 2, 3, 4],
        desc: "Super Saver Pack gives you our reputed quality in a value bundle. Ideal for growing families, it offers great absorption, comfort, and convenience—without compromising on care or cost.",
        tagline: "Best bang for your buck!",
        src: "/super-saver-pack.avif",
        featured: false,
      },
    ]
  },
  // Sanitary Pads
  {
    title: "Sanitary Pads",
    id: "sanitary-pads",
    accordian: false,
    price: 300,
    sizes: ["SM", "MD", "L", "XL"],
    desc: "Tender Touch sanitary pads are soft, high-quality products specially designed for the Nepali market. This brand is all about challenging taboos and reshaping feminine care, empowering women to live freely, confidently, and comfortably during their periods. With Tender Touch, we believe every woman can dance, laugh, and embrace life without limits, proving that menstruation is not a burden.",
    tagline: "Up to 12 hours protection from leakage!",
    src: "/sanitary-pads.jpg",
    featured: true,
  },
  // Wet Wipes
  {
    title: "Wet Wipes",
    id: "wet-wipes",
    accordian: false,
    price: 300,
    sizes: ["Baby", "Adult"],
    desc: "Wet Wipes are soft, refreshing, and gentle on all skin types. Whether for babies or adults, they’re perfect for quick clean-ups, on-the-go hygiene, and daily care. Infused with soothing ingredients, they leave your skin feeling fresh, cool, and cared for—anytime, anywhere.",
    tagline: "The smoothest and freshest wipes!",
    src: "/wet-wipes.jpg",
    featured: true,
  },
]