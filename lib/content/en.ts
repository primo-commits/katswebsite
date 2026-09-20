import type { Content } from "./types";

export const en: Content = {
  nav: { inventory: "Inventory", mods: "Modifications", delivery: "Delivery", faq: "FAQ", quote: "Get a quote" },
  hero: {
    eyebrow: "In stock — 6 sizes",
    title: "Shipping containers, configured and delivered.",
    lede: "From 10 to 40 feet, new or used. As they come or modified in our yard, then delivered to your site anywhere in Quebec.",
    ctaPrimary: "See inventory",
    ctaSecondary: "Call now",
  },
  about: {
    eyebrow: "About us",
    title: "A container that's prepared, not just sold.",
    body: "Every container is inspected individually and modified in our yard before it leaves. You get photos before delivery, and you pay once you've seen it on your own property.",
    statValue: "5/5",
    statLabel: "on Facebook Marketplace",
  },
  inventory: {
    eyebrow: "Our inventory",
    title: "In stock now",
    updated: "Inventory updated 19 September 2026",
    quoteLabel: "Price on request",
    cta: "Request a quote",
  },
  useCases: {
    eyebrow: "Applications",
    title: "What will you use it for?",
    items: [
      { id: "bureau", title: "Site office", blurb: "Heated, lit and secure.", detail: "Spray-foam urethane insulation, electrical panel and lighting fitted by a master electrician, barred windows and a lockable personnel door. Ready to plug in the day it lands on site.", sizes: "20 and 40 ft", fits: ["Four-season insulation", "Power and lighting", "Windows and personnel door", "Heating or air conditioning"] },
      { id: "chalet", title: "Cabin or dwelling", blurb: "Insulated, windowed, fitted out.", detail: "Full insulation, large openings, interior finishing and plumbing connections. Several containers can be joined to increase the living area.", sizes: "20, 40 and 40 ft High Cube", fits: ["Insulation and vapour barrier", "Large windows", "Interior finishing", "Can be joined"] },
      { id: "kiosque", title: "Kiosk or retail", blurb: "Counter, display window, branding.", detail: "A lift-up shutter serving hatch, service counter, lighting and paint in your company's colours. Moves between sites as the season changes.", sizes: "10 and 20 ft", fits: ["Serving hatch", "Service lighting", "Custom paint", "Relocatable"] },
      { id: "entreposage", title: "Storage", blurb: "Weathertight, lockable, ready to deliver.", detail: "No modification needed: a wind- and watertight container, lockable, delivered exactly as it is. The most common use and the quickest to get.", sizes: "10, 20 and 40 ft", fits: ["Wind- and watertight", "Lockable", "No modification needed", "Fast delivery"] },
      { id: "modulaire", title: "Modular building", blurb: "Several containers assembled.", detail: "Two or more containers joined side by side or stacked, with openings cut between the boxes to make one continuous space.", sizes: "20 and 40 ft, assembled", fits: ["Side-by-side joining", "Stacking", "Openings between boxes", "Built to order"] },
      { id: "atelier", title: "Workshop or garage", blurb: "Roll-up door, power, workbench.", detail: "A full-width roll-up door so machinery can drive in, reinforced flooring, outlets and lighting. High Cube adds a foot of headroom.", sizes: "20, 40 and 40 ft High Cube", fits: ["Roll-up door", "Outlets and lighting", "Reinforced floor", "High Cube headroom"] }
    ],
  },
  mods: {
    eyebrow: "Modifications",
    title: "All done in our yard",
    note: "Modifications are optional. Plenty of customers buy the container exactly as it is.",
    items: [
      { id: "rollup", title: "Roll-up door", blurb: "Wide opening, ideal for a workshop or garage." },
      { id: "pietonne", title: "Personnel door", blurb: "Insulated service entrance with a lock." },
      { id: "fenetres", title: "Windows", blurb: "Natural light, with or without security bars." },
      { id: "electricite", title: "Electrical", blurb: "Panel, outlets and lighting by a master electrician." },
      { id: "isolation", title: "Insulation", blurb: "Spray-foam urethane for four-season use." },
      { id: "peinture", title: "Paint", blurb: "Any color you like, or your company's colors." },
    ],
  },
  steps: {
    eyebrow: "How it works",
    title: "Three steps, no surprises",
    items: [
      { n: "01", title: "You choose", blurb: "Size, condition, modifications. We confirm an all-in price with delivery included." },
      { n: "02", title: "We prepare", blurb: "Full inspection and modifications in our yard. Photos sent before it leaves." },
      { n: "03", title: "We deliver", blurb: "Set down where you want it. Payment on delivery, once you've seen it." },
    ],
  },
  delivery: {
    eyebrow: "Delivery",
    title: "Where we deliver",
    zones: "Anywhere in Quebec. Our yard is in Gatineau, in the Outaouais, and we deliver across the province.",
    elsewhere: "Haulage varies with distance from Gatineau. Give us your postal code and we will confirm a fixed amount.",
    requirements: "Level ground, access for a 60 ft truck, and roughly 100 ft of clearance to unload.",
  },
  testimonial: {
    eyebrow: "Testimonials",
    title: "What our customers say",
    quote: "I highly recommend Katiana — genuinely excellent, fast service and a really beautiful, spotless container!",
    author: "François",
    role: "September 2026",
    rating: "Rated 5 out of 5",
  },
  faq: {
    eyebrow: "Frequently asked",
    title: "The questions we get every week",
    items: [
      { q: "What's the difference between a new and a used container?", a: "A \"new\" (one-trip) container has made a single crossing from the factory: intact paint, clean floor, no dents. A used one has sailed for years. We only sell used containers that are wind- and watertight, inspected one by one." },
      { q: "What do I need on my property to take delivery?", a: "Level ground firm enough to carry the truck, clear access, and about 100 ft in a straight line. We recommend four concrete blocks at the corners to keep the container off the ground." },
      { q: "Do I need a municipal permit?", a: "It depends on your municipality and the intended use. For temporary storage, often not; for a permanent or habitable installation, almost always. Check with your planning department before ordering." },
      { q: "Do I have to have my container modified?", a: "No. Plenty of customers buy a container exactly as it is, for storage for example. Modifications are offered, never required." },
      { q: "How much does delivery cost?", a: "It depends on the distance from our yard and access to your site. Give us your postal code and we'll confirm a fixed amount, with no surprise on arrival." },
      { q: "Can a container be used year-round?", a: "Yes, with insulation. Without it, condensation sets in as soon as temperatures swing. We use spray-foam urethane, which handles insulation and air sealing at once." },
    ],
  },
  contact: {
    title: "Tell us about your project",
    body: "Size, use, modifications, delivery location. We'll come back with a clear price within 24 business hours.",
    phone: "873-682-5954",
    hours: ["Monday to Friday: 8 am to 5 pm", "Saturday: 9 am to 1 pm", "Sunday: closed"],
  },
  containers: [
    { id: "10-neuf", size: "10 feet", condition: "New", isNew: true, dimensions: "10 × 8 × 8.5 ft", availability: "On request", blurb: "Perfect as a shed or a small lockable store." },
    { id: "20-usage", size: "20 feet", condition: "Used", isNew: false, dimensions: "20 × 8 × 8.5 ft", availability: "On request", blurb: "Wind- and watertight, inspected, ready to deliver." },
    { id: "20-neuf", size: "20 feet", condition: "New", isNew: true, dimensions: "20 × 8 × 8.5 ft", availability: "On request", blurb: "One-trip: the look and seal of a brand-new unit." },
    { id: "40-usage", size: "40 feet", condition: "Used", isNew: false, dimensions: "40 × 8 × 8.5 ft", availability: "On request", blurb: "The most volume at the best cost per square foot." },
    { id: "40hc-neuf", size: "40 ft High Cube", condition: "New", isNew: true, dimensions: "40 × 8 × 9.5 ft", availability: "On request", blurb: "9.5 ft tall: a foot more headroom for machinery." },
    { id: "40hc-usage", size: "40 ft High Cube", condition: "Used", isNew: false, dimensions: "40 × 8 × 9.5 ft", availability: "On request", blurb: "Extra height, good general condition." },
  ],
};
