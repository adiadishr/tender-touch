export const data = [
  // Diapers
  {
    title: "Premium Sanitary Pads",
    id: "sanitary-pads",
    accordian: true,
    subCategories: [
      {
        title: "Ultra Thin 290mm",
        id: "premium-diapers",
        price: [60, 100],
        variants: [`6pc, ₹60`, '10pc, ₹100'],
        desc: "Stay fresh and protected all day with TenderTouch Sanitary Pads made with ultra-soft, breathable material for comfort and high-absorbency layers for leak-free confidence. Designed to prevent rashes and discomfort, these pads give you the comfort whether you’re working, traveling, or relaxing.",
        tagline: "Stay fresh and protected all day",
        src: "/sanitary-pads.jpg",
        featured: true,
        link: ['1', '2'],
      },
      {
        title: "Ultra Thin 320mm",
        id: "super-saver-pack",
        price: [70, 110],
        variants: ['6pc', '10pc'],
        desc: "Stay fresh and protected all day with TenderTouch Sanitary Pads made with ultra-soft, breathable material for comfort and high-absorbency layers for leak-free confidence. Designed to prevent rashes and discomfort, these pads give you the comfort whether you’re working, traveling, or relaxing.",
        src: "/product-marketing.jpeg",
        featured: false,
        link: ['1', '2'],
      },
    ]
  },
  // Sanitary Pads
  // {
  //   title: "Sanitary Pads",
  //   id: "sanitary-pads",
  //   accordian: false,
  //   price: 300,
  //   sizes: ["SM", "MD", "L", "XL"],
  //   desc: "Tender Touch sanitary pads are soft, high-quality products specially designed for the Nepali market. This brand is all about challenging taboos and reshaping feminine care, empowering women to live freely, confidently, and comfortably during their periods. With Tender Touch, we believe every woman can dance, laugh, and embrace life without limits, proving that menstruation is not a burden.",
  //   tagline: "Up to 12 hours protection from leakage!",
  //   src: "/sanitary-pads.jpg",
  //   featured: true,
  // },
  // Wet Wipes
  // {
  //   title: "Wet Wipes",
  //   id: "wet-wipes",
  //   accordian: false,
  //   price: 300,
  //   sizes: ["Baby", "Adult"],
  //   desc: "Wet Wipes are soft, refreshing, and gentle on all skin types. Whether for babies or adults, they’re perfect for quick clean-ups, on-the-go hygiene, and daily care. Infused with soothing ingredients, they leave your skin feeling fresh, cool, and cared for—anytime, anywhere.",
  //   tagline: "The smoothest and freshest wipes!",
  //   src: "/wet-wipes.jpg",
  //   featured: true,
  // },
]

export const products = data.flatMap(item =>
  item.subCategories?.length
    ? item.subCategories.map(sub => ({ ...sub }))
    : [{ ...item }]
);