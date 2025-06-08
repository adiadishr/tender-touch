export const data = [
  // Diapers
  {
    title: "Premium Sanitary Pads",
    id: "sanitary-pads",
    accordian: true,
    subCategories: [
      {
        title: "Ultra Thin 290mm",
        id: "ultra-thin-290mm-sanitary-pads",
        price: [60, 100],
        variants: [
          { label: '6pc', originalPrice: 60, discountedPrice: 54 },
          { label: '10pc', originalPrice: 100, discountedPrice: 90 }
        ],
        desc: "Stay fresh and protected all day with TenderTouch Sanitary Pads made with ultra-soft, breathable material for comfort and high-absorbency layers for leak-free confidence. Designed to prevent rashes and discomfort, these pads give you the comfort whether you are working, traveling, or relaxing.",
        tagline: "Stay fresh and protected all day",
        src: "/sanitary-pads.jpg",
        featured: true,
        links: [
          'https://www.daraz.com.np/products/tender-touch-premium-sanitary-pads-ultra-thin-290mm-6-pads-i366493980-s1624487221.html',
          'https://www.daraz.com.np/products/tender-touch-premium-sanitary-pads-ultra-thin-290mm-10-pads-i366512419.html'
        ],
      },
      {
        title: "Ultra Thin 320mm",
        id: "ultra-thin-320mm-sanitary-pads",
        price: [70, 110],
        variants: [
          { label: '6pc', originalPrice: 70, discountedPrice: 63 },
          { label: '10pc', originalPrice: 110, discountedPrice: 99 }
        ],
        desc: "Stay fresh and protected all day with TenderTouch Sanitary Pads made with ultra-soft, breathable material for comfort and high-absorbency layers for leak-free confidence. Designed to prevent rashes and discomfort, these pads give you the comfort whether you are working, traveling, or relaxing.",
        tagline: "Stay fresh and protected all day",
        src: "/product-marketing.jpeg",
        featured: false,
        links: [
          'https://www.daraz.com.np/products/tender-touch-premium-sanitary-pads-ultra-thin-290mm-6-pads-i366493980-s1624487221.html',
          'https://www.daraz.com.np/products/tender-touch-premium-sanitary-pads-ultra-thin-290mm-10-pads-i366512419.html'
        ],
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