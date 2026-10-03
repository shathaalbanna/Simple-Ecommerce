// target = id القسم اللي بينزل عليه بالصفحة (smartphones | categories | brands | essentials)
export const navCategories = [
  { label: "Groceries", target: "essentials" },
  { label: "Premium Fruits", target: "essentials" },
  { label: "Home & Kitchen", target: "categories" },
  { label: "Fashion", target: "categories" },
  { label: "Electronics", target: "smartphones" },
  { label: "Beauty", target: "categories" },
  { label: "Home Improvement", target: "categories" },
  { label: "Sports, Toys & Luggage", target: "categories" },
];

export const slides = [
  { title: "Best Deal Online on smart watches", headline: "Smart Wearable.", offer: "UP to 80% OFF", image: "/images/Watches.png" },
  { title: "Top picks in Electronics", headline: "Latest Gadgets.", offer: "UP to 60% OFF", image: "/images/Electronics.png" },
  { title: "Fresh every day", headline: "Daily Essentials.", offer: "UP to 50% OFF", image: "/images/Daily Essentials.png" },
];

export const phones = [
  { name: "Galaxy S22 Ultra", price: 32999, old: 74999, off: 56, image: "/images/mobail1.png" },
  { name: "Galaxy M13 (4GB | 64 GB )", price: 10499, old: 14999, off: 56, image: "/images/mobail2.png" },
  { name: "Galaxy M33 (4GB | 64 GB )", price: 16999, old: 24999, off: 56, image: "/images/mobail3.png" },
  { name: "Galaxy M53 (4GB | 64 GB )", price: 31999, old: 40999, off: 56, image: "/images/mobail4.png" },
  { name: "Galaxy S22 Ultra", price: 67999, old: 85999, off: 56, image: "/images/mobail5.png" },
];

export const categories = [
  { name: "Mobile", image: "/images/mobail1.png" },
  { name: "Cosmetics", image: "/images/Cosmetics.png" },
  { name: "Electronics", image: "/images/Electronics.png" },
  { name: "Furniture", image: "/images/Furniture.png" },
  { name: "Watches", image: "/images/Watches.png" },
  { name: "Decor", image: "/images/Decor.png" },
  { name: "Accessories", image: "/images/Accessories.png" },
];

export const brands = [
  { name: "IPHONE", bg: "bg-[#333]", text: "text-white", chip: "bg-white/10", image: "/images/IPHONE.png", scale: 2.4 },
  { name: "REALME", bg: "bg-[#fdeeb0]", text: "text-neutral-900", chip: "bg-[#f8dc6e]", image: "/images/REALME.png" },
  { name: "XIAOMI", bg: "bg-[#fde4d6]", text: "text-neutral-900", chip: "bg-[#fbc9ad]", image: "/images/XIAOMI.png", scale: 1.3 },
  { name: "SAMSUNG", bg: "bg-[#e3ecfb]", text: "text-neutral-900", chip: "bg-[#c5d7f6]", image: null },
  { name: "OPPO", bg: "bg-[#dff3ea]", text: "text-neutral-900", chip: "bg-[#bfe5d3]", image: null },
  { name: "VIVO", bg: "bg-[#e9e2fb]", text: "text-neutral-900", chip: "bg-[#d3c7f4]", image: null },
  { name: "ONEPLUS", bg: "bg-[#fbe0e0]", text: "text-neutral-900", chip: "bg-[#f5bcbc]", image: null },
  { name: "NOKIA", bg: "bg-[#dde7f0]", text: "text-neutral-900", chip: "bg-[#c2d3e3]", image: null },
  { name: "MOTOROLA", bg: "bg-[#e6f0dc]", text: "text-neutral-900", chip: "bg-[#cfe3bd]", image: null },
];

export const essentials = [
  { name: "Daily Essentials", image: "/images/Daily Essentials.png" },
  { name: "Vegetables", image: "/images/Vegitables.png" },
  { name: "Fruits", image: "/images/Fruits.png" },
  { name: "Strowberry", image: "/images/Strowberry.png" },
  { name: "Mango", image: "/images/Mango.png" },
  { name: "Cherry", image: "/images/Cherry.png" },
];

export const popular = ["Staples", "Beverages", "Personal Care", "Home Care", "Baby Care", "Vegetables & Fruits", "Snacks & Foods", "Dairy & Bakery"];
export const services = ["About Us", "Terms & Conditions", "FAQ", "Privacy Policy", "E-waste Policy", "Cancellation & Return Policy"];