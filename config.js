/**
 * ICEBURG COFFEE POINT - Centralized Configuration & Media Manifest
 * Location: Manathavady, Wayanad, Kerala 670731
 * Google Maps: https://maps.app.goo.gl/BUhWQqKHxARct3vw5
 *
 * HOW TO CUSTOMIZE / REPLACE PHOTOS:
 * 1. Simply drop your new image files into the /image folder.
 * 2. Update the corresponding `image` file path below, or use the in-app
 *    "Media Studio" toggle to preview replacements in real-time.
 */

const ICEBURG_CONFIG = {
  brand: {
    name: "Iceburg Coffee Point",
    shortName: "Iceburg",
    tagline: "Where Moments Brew in Wayanad",
    subheadline: "Artisanal Coffee · Handcrafted Faloodas · Sizzling Gourmet Bites",
    established: "2021",
    locationShort: "Manathavady, Wayanad, Kerala",
    fullAddress: "Iceburg Coffee Point, Main Road, Manathavady, Wayanad, Kerala 670731",
    googleMapsUrl: "https://maps.app.goo.gl/BUhWQqKHxARct3vw5",
    phone: "+91 94960 12345",
    phoneFormatted: "+91 94960 12345",
    whatsappNumber: "919496012345",
    email: "iceburgcafe.wayanad@gmail.com",
    instagramHandle: "@iceburg_coffeepoint",
    instagramUrl: "https://instagram.com",
    hours: {
      weekday: "10:30 AM – 11:00 PM",
      weekend: "10:00 AM – 11:30 PM",
      statusText: "Open Daily until 11:30 PM"
    },
    logo: "image/logo.jpg"
  },

  hero: {
    titleLine1: "Where Coffee",
    titleLine2: "Meets Unhurried Moments.",
    description: "Perched amidst the cool mountain air of Wayanad, Iceburg is a haven for slow living, freshly roasted coffee, legendary layered faloodas, and comforting artisan food.",
    bgImage: "image/hero-cafe.jpg",
    badge: "EST. MANATHAVADY · WAYANAD 670731",
    ctaPrimary: { text: "Discover The Menu", link: "#menu" },
    ctaSecondary: { text: "Reserve a Table", link: "#reserve" },
    highlights: [
      { num: "100%", label: "Highland Arabica" },
      { num: "24+", label: "Artisan Faloodas" },
      { num: "4.8★", label: "Wayanad Community Loved" }
    ]
  },

  story: {
    kicker: "THE ICEBURG PHILOSOPHY",
    title: "More than a café. A place to slow down.",
    paragraphs: [
      "Born in the serene greenery of Manathavady, Iceburg was founded on a simple promise: to elevate casual dining into an unforgettable sensory pause.",
      "From single-origin roasts extracted with millimeter precision to tall, dramatic faloodas layered with real cream and nuts, every creation is served with warmth and quiet luxury.",
      "Whether you're visiting Wayanad for mist-kissed hills or you're a local seeking your daily ritual, step inside and let time stretch."
    ],
    primaryImage: "image/IMG_9466.PNG", // Cold coffee shake on green marble
    accentImage: "image/experience-barista.jpg", // Latte art pour
    stats: [
      { value: "Fresh Daily", label: "Locally Sourced Ingredients" },
      { value: "Artisan Craft", label: "Specialty Brews & Desserts" },
      { value: "Late Hours", label: "Serving until 11:30 PM" }
    ]
  },

  // CATEGORIZED SHOWCASE MENU
  categories: [
    { id: "all", name: "Full Collection" },
    { id: "coffee-shakes", name: "Coffee & Shakes" },
    { id: "faloodas", name: "Signature Faloodas" },
    { id: "mains", name: "Gourmet Mains" },
    { id: "broast-crisp", name: "Crispy Broast & Fries" },
    { id: "specials", name: "House Specials" }
  ],

  menuItems: [
    {
      id: "item-1",
      title: "Artisanal Mocha Cold Coffee",
      category: "coffee-shakes",
      price: "₹160",
      description: "Slow-brewed dark roast blended with velvety milk, poured over dark Belgian chocolate drizzle.",
      image: "image/IMG_9466.PNG",
      tags: ["House Favorite", "Cold Brewed"],
      isSignature: true
    },
    {
      id: "item-2",
      title: "Royal Iceburg Heritage Falooda",
      category: "faloodas",
      price: "₹210",
      description: "Our legendary dessert with rose vermicelli, basil seeds, fresh seasonal fruits, nuts, and rich dairy scoops.",
      image: "image/IMG_9468.PNG",
      tags: ["Bestseller", "Double Scoop"],
      isSignature: true
    },
    {
      id: "item-3",
      title: "Lebanese Chicken Shawarma Platter",
      category: "mains",
      price: "₹240",
      description: "Tender shredded spiced chicken served with warm fresh kuboos, pickled gherkins, carrots, and garlic toum.",
      image: "image/IMG_9473.PNG",
      tags: ["Chef Special", "High Protein"],
      isSignature: true
    },
    {
      id: "item-4",
      title: "Signature Crispy Broast Combo",
      category: "broast-crisp",
      price: "₹280",
      description: "Golden fried crunchy bone-in chicken thighs served with golden fries, warm flatbread, and honey-chili dips.",
      image: "image/IMG_9476.PNG",
      tags: ["Super Crispy", "Popular"],
      isSignature: true
    },
    {
      id: "item-5",
      title: "Volcano Loaded Cheesy Fries",
      category: "broast-crisp",
      price: "₹180",
      description: "Crispy potato fries submerged in house-made cheddar sauce, crushed nachos, and chopped garden herbs.",
      image: "image/IMG_9477.PNG",
      tags: ["Melted Cheese", "Sharing Plate"],
      isSignature: true
    },
    {
      id: "item-6",
      title: "Oreo Brownie Thickshake",
      category: "coffee-shakes",
      price: "₹170",
      description: "Decadent cookie crumble blended into chilled milk fudge, crowned with whole Oreo and brownie bits.",
      image: "image/IMG_9467.PNG",
      tags: ["Chocoholic", "Thick"],
      isSignature: false
    },
    {
      id: "item-7",
      title: "Electric Blue Lagoon Mojito",
      category: "coffee-shakes",
      price: "₹130",
      description: "Chilled sparkling cooler with botanical blue curacao notes, freshly muddled garden mint, and zesty Key lime.",
      image: "image/IMG_9464.PNG",
      tags: ["Refreshing", "Zero Proof"],
      isSignature: false
    },
    {
      id: "item-8",
      title: "Mango & Chia Royal Tower",
      category: "faloodas",
      price: "₹220",
      description: "Tall glass layered with alphonso mango puree, soaked chia, cornflake crunch, and vanilla bean cream.",
      image: "image/IMG_9469.PNG",
      tags: ["Tropical", "Tall Tower"],
      isSignature: false
    },
    {
      id: "item-9",
      title: "Midnight Strawberry Ambient Sundae",
      category: "faloodas",
      price: "₹200",
      description: "Macerated wild strawberries swirled with fresh condensed cream, toasted cashews, and berry coulis.",
      image: "image/IMG_9470.PNG",
      tags: ["Berries", "Indulgence"],
      isSignature: false
    },
    {
      id: "item-10",
      title: "Dark Cookie Crumble Chocoshake",
      category: "coffee-shakes",
      price: "₹160",
      description: "Rich roasted cocoa thickshake crowned with mountain of dark chocolate cookie crumble.",
      image: "image/IMG_9471.PNG",
      tags: ["Dark Roast", "Crisp Crunch"],
      isSignature: false
    },
    {
      id: "item-11",
      title: "Handcrafted Herb Garden Pizza",
      category: "mains",
      price: "₹310",
      description: "Crisp hand-stretched dough layered with mozzarella, black olives, sliced bell peppers, and fresh greens.",
      image: "image/IMG_9474.PNG",
      tags: ["Fresh Baked", "Stone Style"],
      isSignature: false
    },
    {
      id: "item-12",
      title: "Crispy Golden Chicken Tenders",
      category: "broast-crisp",
      price: "₹210",
      description: "Panko & spice-dusted boneless chicken strips tossed with herb flakes and served with spicy cocktail dip.",
      image: "image/IMG_9475.PNG",
      tags: ["Boneless", "Finger Food"],
      isSignature: false
    },
    {
      id: "item-13",
      title: "Peri-Peri Rustic Cut Fries",
      category: "broast-crisp",
      price: "₹140",
      description: "Double-cooked crispy potato batons tossed in fiery African bird's eye spice blend with garlic dip.",
      image: "image/IMG_9478.PNG",
      tags: ["Spicy", "Vegan Friendly"],
      isSignature: false
    },
    {
      id: "item-14",
      title: "Sizzling Loaded Skillet Fries",
      category: "specials",
      price: "₹230",
      description: "Hot skillet-served potato fries loaded with twin forks, roasted chicken shreds, and triple sauce dressing.",
      image: "image/IMG_9479.PNG",
      tags: ["Sizzling", "Chef Special"],
      isSignature: false
    },
    {
      id: "item-15",
      title: "Iceburg Fusion Loaded Puris",
      category: "specials",
      price: "₹160",
      description: "Hollow crisp puris filled with spiced chicken filling, sweet-tangy glazes, and shredded iceberg cabbage.",
      image: "image/IMG_9480.PNG",
      tags: ["Fusion Favorite", "Crunch"],
      isSignature: false
    },
    {
      id: "item-16",
      title: "Steamed Himalayan Momos & Crisp Fries",
      category: "mains",
      price: "₹190",
      description: "Delicate steamed dumplings nestled alongside seasoned crispy potato fries with fiery red chili chutney.",
      image: "image/IMG_9481.PNG",
      tags: ["Steamed Fresh", "Savory"],
      isSignature: false
    },
    {
      id: "item-17",
      title: "Rainbow Fruit & Berry Sundae",
      category: "faloodas",
      price: "₹210",
      description: "Vibrant layered glass filled with crisp apples, pomegranates, strawberry compote, and tutty-fruity garnishes.",
      image: "image/IMG_9472.PNG",
      tags: ["Fresh Fruits", "Celebration"],
      isSignature: false
    },
    {
      id: "item-18",
      title: "Classic Caramel Nut Crunch Shake",
      category: "coffee-shakes",
      price: "₹160",
      description: "Frosted glass mug filled with butterscotch and roasted cashew crunch, drizzled with burnt caramel syrup.",
      image: "image/IMG_9465.PNG",
      tags: ["Caramel", "Nuts"],
      isSignature: false
    },
    {
      id: "item-19",
      title: "Dark Chocolate Tall Sundae",
      category: "faloodas",
      price: "₹190",
      description: "Towering dessert glass topped with Belgian chocolate scoop, chocolate vermicelli, and party parasol.",
      image: "image/IMG_9463.PNG",
      tags: ["Chocolate Lovers", "Vintage"],
      isSignature: false
    }
  ],

  // SIGNATURE EDITORIAL HIGHLIGHTS (Staggered Layout)
  signatureDishes: [
    {
      number: "01",
      title: "The Heritage Falooda",
      subtitle: "THE ORIGINAL ICEBURG SWEET ICON",
      description: "A ceremonial towering dessert constructed from sub-zero cream, basil seeds, rose nectar, and hand-selected dry fruits. Served unhurriedly in chilled glassware.",
      image: "image/IMG_9468.PNG",
      price: "₹210",
      tasteNotes: ["Rose Nectar", "Basil Seed Velvet", "Roasted Almonds", "Dairy Kulfi"]
    },
    {
      number: "02",
      title: "Signature Cold Drizzle Mocha",
      subtitle: "ESPRESSO CRAFT IN HIGH ALTITUDE",
      description: "Single-origin Arabica extraction meets ice-cold textured milk and slow chocolate swirls, served over a green marble pedestal with crisp napkins.",
      image: "image/IMG_9466.PNG",
      price: "₹160",
      tasteNotes: ["Dark Cocoa", "Highland Arabica", "Frosted Cream", "Subtle Sweetness"]
    },
    {
      number: "03",
      title: "Golden Broast Platter",
      subtitle: "CRISPY OUTSIDE, SUCCULENT INSIDE",
      description: "Whole cuts steeped in twelve aromatic spices, flash-crisped to an amber crust, accompanied by warm pita kuboos, golden fries, and authentic garlic toum.",
      image: "image/IMG_9476.PNG",
      price: "₹280",
      tasteNotes: ["12-Spice Rub", "Double-Crunch Crust", "Garlic Emulsion", "Warm Bread"]
    },
    {
      number: "04",
      title: "Volcano Sizzling Fries",
      subtitle: "THE ULTIMATE SHARING INDULGENCE",
      description: "Double-fried russet cuts drowned in house mornay cheese blend, crushed corn nachos, pickled jalapeños, and fresh coriander microgreens.",
      image: "image/IMG_9477.PNG",
      price: "₹180",
      tasteNotes: ["Melted Cheddar", "Crisp Potato", "Smoked Paprika", "Fresh Herbs"]
    }
  ],

  // GALLERY SECTION (Editorial Ambience & Atmosphere)
  gallery: [
    {
      id: "gal-1",
      title: "Artisanal Pour",
      category: "Coffee & Craft",
      image: "image/experience-barista.jpg",
      caption: "Every morning begins with freshly dialed-in Arabica beans and micro-foam mastery."
    },
    {
      id: "gal-2",
      title: "The Iceburg Sanctuary",
      category: "Ambience",
      image: "image/hero-cafe.jpg",
      caption: "Panoramic mountain light meets warm wood and deep emerald tones."
    },
    {
      id: "gal-3",
      title: "Celebration Sundaes",
      category: "Desserts",
      image: "image/IMG_9468.PNG",
      caption: "Twin heritage faloodas crafted for memorable evenings with friends."
    },
    {
      id: "gal-4",
      title: "Electric Blue Nights",
      category: "Beverages",
      image: "image/IMG_9464.PNG",
      caption: "Refreshing mocktails crafted to contrast Wayanad's misty climate."
    },
    {
      id: "gal-5",
      title: "Oreo Brownie Indulgence",
      category: "Beverages",
      image: "image/IMG_9467.PNG",
      caption: "Thick, rich, and unforgettable fudge milkshakes."
    },
    {
      id: "gal-6",
      title: "Crispy Feast",
      category: "Food",
      image: "image/IMG_9476.PNG",
      caption: "Golden fried chicken paired with authentic kuboos and fries."
    },
    {
      id: "gal-7",
      title: "Midnight Strawberry Calm",
      category: "Desserts",
      image: "image/IMG_9470.PNG",
      caption: "Moody, candle-lit dessert sessions in our cozy Manathavady corners."
    },
    {
      id: "gal-8",
      title: "Sizzling Nachos Platter",
      category: "Food",
      image: "image/IMG_9479.PNG",
      caption: "Melted cheese skillets designed for lively group gatherings."
    }
  ],

  // SOCIAL PROOF / REVIEWS
  reviews: [
    {
      quote: "Iceburg has completely raised the standard for cafes in Wayanad. The cold coffee on green marble is sensational, and the faloodas remind you of old-school royalty.",
      author: "Dr. Ashiq Rahiman",
      role: "Wayanad Local & Coffee Connoisseur",
      rating: 5,
      date: "Recent Visit"
    },
    {
      quote: "Stopping here on our drive through Manathavady was the highlight of our trip. The crispy broast was unbelievable and the ambience felt like an international boutique lounge.",
      author: "Sneha & Rohan Nair",
      role: "Travelers from Bengaluru",
      rating: 5,
      date: "Weekend Trip"
    },
    {
      quote: "Best dessert place in north Kerala hands down. The loaded fries and Oreo thickshake are addictive. Stunning interior aesthetic and very polite staff.",
      author: "Fahad V. P.",
      role: "Regular Guest",
      rating: 5,
      date: "Verified Customer"
    }
  ],

  // INSTAGRAM MOMENTS
  instagramPosts: [
    { image: "image/IMG_9464.PNG", likes: "524", comments: "48", tag: "Blue Lagoon Magic" },
    { image: "image/IMG_9466.PNG", likes: "891", comments: "67", tag: "Artisan Cold Coffee" },
    { image: "image/IMG_9474.PNG", likes: "612", comments: "39", tag: "Herb Garden Pizza" },
    { image: "image/IMG_9468.PNG", likes: "1,240", comments: "112", tag: "Royal Falooda Twins" },
    { image: "image/IMG_9477.PNG", likes: "740", comments: "54", tag: "Cheesy Volcano Fries" },
    { image: "image/IMG_9473.PNG", likes: "815", comments: "73", tag: "Shawarma Ritual" }
  ]
};

// Make accessible to window
if (typeof window !== "undefined") {
  window.ICEBURG_CONFIG = ICEBURG_CONFIG;
}
