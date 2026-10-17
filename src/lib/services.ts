// One page per service so each can rank for its own searches ("screen replacement Behala",
// "phone not charging Kolkata", ...). Prices are the shop's standard ranges; the exact price
// is always given after the free check-up. Keep claims to what the owner has confirmed.

export type ServicePageData = {
  slug: string;
  name: string; // short name, used in links and breadcrumbs
  h1: string;
  title: string; // <title>
  description: string; // meta description
  intro: string;
  problems: string[]; // "Bring your phone if…" — the words customers actually search with
  prices: { item: string; price: string }[];
  faqs: { q: string; a: string }[];
  related: string[]; // slugs
};

export const SERVICES: ServicePageData[] = [
  {
    slug: "screen-replacement-behala",
    name: "Screen Replacement",
    h1: "Mobile Screen Replacement in Behala, Kolkata",
    title: "Mobile Screen Replacement in Behala, Kolkata | Paras Mobile",
    description:
      "Broken or black phone screen? Display replacement for Vivo, Oppo, Realme, Redmi, Samsung, OnePlus and iPhone at Paras Mobile, D.H. Road, Behala. Free check-up, price before repair, free tempered glass.",
    intro:
      "Cracked glass, black screen, lines on the display or touch not working — we replace the display for all brands at our shop on D.H. Road, Behala, near Balananda Hospital. Every phone gets a free check-up first, and you get the exact price before we start.",
    problems: [
      "Cracked or shattered screen",
      "Black screen but the phone rings or vibrates",
      "Lines, green or pink patches on the display",
      "Touch not working or touching by itself",
      "Screen flickering or very dim",
    ],
    prices: [
      { item: "LCD screen (Vivo, Oppo, Realme, Redmi and similar)", price: "₹800 – ₹2,500" },
      { item: "AMOLED screen (Samsung, OnePlus and similar)", price: "₹2,000 – ₹6,000" },
      { item: "iPhone screen (all models)", price: "₹2,500 – ₹12,000" },
    ],
    faqs: [
      {
        q: "How much does screen replacement cost in Behala?",
        a: "It depends on the phone model and screen type. Our standard range is ₹800 – ₹2,500 for most LCD phones, ₹2,000 – ₹6,000 for AMOLED phones and ₹2,500 – ₹12,000 for iPhones. You get the exact price after a free check-up.",
      },
      {
        q: "Do I get anything free with a screen replacement?",
        a: "Yes — one standard tempered glass, fitted at the shop, with every paid screen replacement. T&C apply.",
      },
      {
        q: "Is there a warranty on the new screen?",
        a: "Every repair has a warranty of at least 15 days. The exact period depends on the screen and is written on your bill.",
      },
      {
        q: "Can I get a price before coming to the shop?",
        a: "Yes. WhatsApp a photo of the phone and its model name to 89815 72938 and we will tell you the price range.",
      },
    ],
    related: ["iphone-repair-behala", "battery-replacement-behala", "dead-phone-motherboard-repair-behala"],
  },
  {
    slug: "battery-replacement-behala",
    name: "Battery Replacement",
    h1: "Phone Battery Replacement in Behala, Kolkata",
    title: "Phone Battery Replacement in Behala, Kolkata | Paras Mobile",
    description:
      "Phone battery draining fast, swelling or switching off? Battery replacement for Android and iPhone at Paras Mobile, D.H. Road, Behala. Free check-up and price before repair.",
    intro:
      "If your phone dies by afternoon, switches off at 20%, or the back is lifting because the battery has swollen, a new battery usually fixes it. We check the battery and charging first, free of charge, so you only replace what is actually faulty.",
    problems: [
      "Battery drains very fast",
      "Phone switches off with charge still showing",
      "Battery swollen — back cover or screen lifting",
      "Phone gets hot while charging",
      "Battery health low on iPhone",
    ],
    prices: [
      { item: "Android battery", price: "₹500 – ₹1,500" },
      { item: "iPhone battery", price: "₹1,200 – ₹3,000" },
    ],
    faqs: [
      {
        q: "How do I know if the battery or the charging port is the problem?",
        a: "Bring the phone in — the check-up is free. We test both and tell you which one needs fixing before any work starts.",
      },
      {
        q: "My battery is swollen. Is it safe to use?",
        a: "A swollen battery should not be charged or pressed. Switch the phone off and bring it in as soon as you can.",
      },
      {
        q: "Is there a warranty on the new battery?",
        a: "Yes, at least 15 days. The exact period is written on your bill.",
      },
    ],
    related: ["charging-port-repair-behala", "iphone-repair-behala", "screen-replacement-behala"],
  },
  {
    slug: "charging-port-repair-behala",
    name: "Charging Port Repair",
    h1: "Phone Not Charging? Charging Port Repair in Behala",
    title: "Charging Port Repair in Behala, Kolkata – Phone Not Charging | Paras Mobile",
    description:
      "Phone not charging, charging slowly or the cable is loose? Charging port and fast-charging repair at Paras Mobile, D.H. Road, Behala, Kolkata. Free check-up.",
    intro:
      "A loose cable, slow charging or no charging at all is usually the charging port, the charging IC or dirt inside the port. We find which one it is during the free check-up and tell you the price before repairing.",
    problems: [
      "Phone not charging at all",
      "Charges only when the cable is held at an angle",
      "Fast charging stopped working",
      "Cable feels loose in the port",
      "Phone not connecting to a computer",
    ],
    prices: [
      { item: "Charging port repair", price: "₹300 – ₹800" },
      { item: "Fast charging IC repair", price: "₹500 – ₹1,500" },
    ],
    faqs: [
      {
        q: "Is it the cable, the charger or the phone?",
        a: "We test with our own cables and chargers during the free check-up, so you don't pay for a repair you don't need.",
      },
      {
        q: "How much does charging port repair cost?",
        a: "Usually ₹300 – ₹800 for the port, and ₹500 – ₹1,500 if the fast-charging IC is faulty. The exact price is told before repair.",
      },
      {
        q: "Do you repair Type-C and iPhone charging ports?",
        a: "Yes, all brands — Type-C, micro-USB and iPhone (Lightning and USB-C).",
      },
    ],
    related: ["battery-replacement-behala", "dead-phone-motherboard-repair-behala", "water-damage-phone-repair-behala"],
  },
  {
    slug: "iphone-repair-behala",
    name: "iPhone Repair",
    h1: "iPhone Repair in Behala, Kolkata",
    title: "iPhone Repair in Behala, Kolkata – Screen, Battery, Charging | Paras Mobile",
    description:
      "iPhone screen replacement, battery replacement and charging repair for all models at Paras Mobile, D.H. Road, Behala. Independent repair shop. Free check-up, price before repair.",
    intro:
      "We repair iPhones of all models — screen, battery, charging port, camera, speaker and more — at our shop near Balananda Hospital, Behala. We are an independent repair shop, not an Apple authorised service provider, and we tell you which part goes in and its price before the repair.",
    problems: [
      "Cracked or black iPhone screen",
      "Battery health low or iPhone switching off",
      "iPhone not charging",
      "Camera, speaker or microphone not working",
      "Face ID or software issues (checked at the shop)",
    ],
    prices: [
      { item: "iPhone screen (all models)", price: "₹2,500 – ₹12,000" },
      { item: "iPhone battery", price: "₹1,200 – ₹3,000" },
      { item: "Charging port", price: "₹300 – ₹800" },
    ],
    faqs: [
      {
        q: "Are you an Apple authorised service centre?",
        a: "No. Paras is an independent repair shop. If your iPhone is still under Apple warranty, check with Apple first.",
      },
      {
        q: "Which iPhone models do you repair?",
        a: "All models. Send the model name and a photo on WhatsApp (89815 72938) for a price range before you come.",
      },
      {
        q: "Is there a warranty on iPhone repairs?",
        a: "Yes, at least 15 days. The exact period depends on the repair and is written on your bill.",
      },
    ],
    related: ["screen-replacement-behala", "battery-replacement-behala", "charging-port-repair-behala"],
  },
  {
    slug: "water-damage-phone-repair-behala",
    name: "Water Damage Repair",
    h1: "Phone Fell in Water? Water Damage Repair in Behala",
    title: "Water Damaged Phone Repair in Behala, Kolkata | Paras Mobile",
    description:
      "Phone fell in water or got wet in the rain? Water damage repair for all brands at Paras Mobile, D.H. Road, Behala, Kolkata. Switch it off and bring it in. Free check-up.",
    intro:
      "Rain, a bucket, a drink — water damage gets worse every hour the phone stays on. Switch the phone off, don't charge it, and bring it to us as soon as you can. We open and clean the board and tell you honestly what can be saved before charging you.",
    problems: [
      "Phone fell in water or got wet in the rain",
      "Screen shows lines or patches after getting wet",
      "Speaker sounds muffled or no sound",
      "Phone not turning on after water",
      "Charging port shows a moisture warning",
    ],
    prices: [{ item: "Water damage repair", price: "₹800 – ₹3,000" }],
    faqs: [
      {
        q: "What should I do right after my phone falls in water?",
        a: "Switch it off, don't charge it, don't press buttons repeatedly, and bring it in. Rice does not remove water from inside the phone.",
      },
      {
        q: "Can every water-damaged phone be saved?",
        a: "Not always. It depends on how long it was wet and what got damaged. We check it free and tell you before doing any paid work.",
      },
      {
        q: "How much does water damage repair cost?",
        a: "Usually ₹800 – ₹3,000, depending on what needs fixing. The exact price is told after the check-up.",
      },
    ],
    related: ["dead-phone-motherboard-repair-behala", "screen-replacement-behala", "charging-port-repair-behala"],
  },
  {
    slug: "dead-phone-motherboard-repair-behala",
    name: "Dead Phone / Motherboard Repair",
    h1: "Dead Phone & Motherboard Repair in Behala, Kolkata",
    title: "Dead Phone & Motherboard Repair in Behala, Kolkata | Paras Mobile",
    description:
      "Phone not turning on, restarting again and again, or no network? Chip-level motherboard repair for all brands at Paras Mobile, D.H. Road, Behala. Free check-up, price before repair.",
    intro:
      "When a phone won't switch on, keeps restarting or loses network, the fault is often on the motherboard. With 10+ years of repair experience, we do chip-level repair at the shop — and tell you after the free check-up whether it is worth repairing.",
    problems: [
      "Phone completely dead — not turning on",
      "Stuck on the logo or restarting again and again",
      "No network or no SIM detected",
      "Wi-Fi or Bluetooth not working",
      "Phone heating up without use",
    ],
    prices: [{ item: "Motherboard / chip-level repair", price: "₹1,000 – ₹5,000" }],
    faqs: [
      {
        q: "My phone is completely dead. Can it be repaired?",
        a: "Often, yes. Bring it in for a free check-up — we find the fault and tell you the price, or tell you honestly if it is not worth repairing.",
      },
      {
        q: "Will I lose my data?",
        a: "Many motherboard repairs keep your data, but we can't promise it in every case. We tell you the risk before starting.",
      },
      {
        q: "Is there a warranty on motherboard repair?",
        a: "Yes, at least 15 days. The exact period depends on the repair and is written on your bill.",
      },
    ],
    related: ["water-damage-phone-repair-behala", "charging-port-repair-behala", "battery-replacement-behala"],
  },
];

export const serviceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);
