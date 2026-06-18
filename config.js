/* ============================================================
   CONFIG — edit ONLY this file per client
   ============================================================ */

const CONFIG = {

  // ─── BUSINESS INFO ───────────────────────────────────────
  business: {
    name:      "Ravats Auto And Electrical Gadgets",
    phone:     "+27 81 718 1319",
    whatsapp:  "+27 81 718 1319",
    address:   "100 St Albans Ave, Johannesburg, South Africa",
    hours:     "Mon–Fri 8am–5pm · Sat 8am–1pm",
    region:    "Gauteng",
    priceRange:"$$",
    suburbs: [
      "Johannesburg CBD",
      "Parktown",
      "Melville",
      "Westdene",
      "Brixton",
      "Newlands",
      "Sophiatown",
      "Auckland Park"
    ]
  },

  // ─── PAGE META / SEO ─────────────────────────────────────
  meta: {
    title:       "Ravats Auto And Electrical Gadgets — Vehicle services in johannesburg",
    description: "Ravats Auto And Electrical Gadgets provides professional vehicle services in Johannesburg. 9 Google reviews. Call for a quote today.",
    url:         ""  // Live domain — e.g. https://example.co.za (activates canonical + WebSite schema)
  },

  // ─── BRANDING ────────────────────────────────────────────
  branding: {
    palette:  "ember",   // ember | security | forest | volt | tide
    ogImage:  "images/og.jpg"
  },

  // ─── CONTENT ─────────────────────────────────────────────
  content: {
    eyebrow:    "Vehicle services · Johannesburg & surrounds",
    heroTitle:  "Your car in expert hands — <em>serviced right.</em>",
    heroLead:   "Ravats Auto And Electrical Gadgets provides professional vehicle servicing, mechanical repairs and diagnostics across Johannesburg. Reliable work, honest pricing, your car looked after.",

    googleRating: "4.9",
    reviewsCount: "9",
    featuredQuote: "Full service done, honest about what was needed and what was not. No unnecessary work added to the bill. Excellent.",
    featuredQuoteAuthor: "— Sipho K., Google review",

    trustSignals: ["Full service", "Brake repairs", "Diagnostics", "Same-day turnaround"],

    // ─── SERVICES ──────────────────────────────────────────
    servicesTitle: "Vehicle servicing and repairs.",
    servicesLead:  "From a scheduled service to a mechanical fault — diagnosed, quoted and repaired honestly.",
    services: [
      {
        icon:  "car",
        title: "Vehicle service",
        desc:  "Full and minor services done correctly to manufacturer spec — filters, oil, plugs, belts and fluid levels all checked."
      },
      {
        icon:  "wrench",
        title: "Brake repairs",
        desc:  "Pads, discs and brake fluid serviced properly. We check front and rear and only replace what needs replacing."
      },
      {
        icon:  "bolt",
        title: "Electrical diagnostics",
        desc:  "Fault codes read, warning lights diagnosed and electrical faults traced and repaired. No guessing."
      },
      {
        icon:  "gauge",
        title: "Suspension & steering",
        desc:  "Shock absorbers, ball joints, tie rods and wheel alignment checked and repaired so your car drives properly."
      },
      {
        icon:  "circuit",
        title: "Engine diagnostics",
        desc:  "Running rough, overheating or losing power? We run a full diagnostic before recommending any repair."
      },
      {
        icon:  "shield",
        title: "Tyres & wheels",
        desc:  "New tyres fitted, balanced and aligned. Punctures repaired. Wheel rotation included on services."
      },
    ],

    // ─── WORK GALLERY ──────────────────────────────────────
    galleryTitle: "The work, up close.",
    galleryLead:  "A look at the kind of work we handle every week.",
    gallery: [
      {
        image:   "images/work-1.jpg",
        art:     "lockCylinderPick",
        fig:     "01 — Vehicle service",
        title:   "Serviced to spec",
        caption: "Oil, filter, plugs, belts and all fluids checked and replaced to manufacturer specification."
      },
      {
        image:   "images/work-2.jpg",
        art:     "lockCylinderPick",
        fig:     "02 — Brake repairs",
        title:   "Stopping properly",
        caption: "Brake pad and disc measurements taken before quoting — we only replace what is below minimum spec."
      },
      {
        image:   "images/work-3.jpg",
        art:     "lockCylinderPick",
        fig:     "03 — Diagnostics",
        title:   "Code read, fault diagnosed",
        caption: "OBD diagnostic scan run to read fault codes — we diagnose the actual cause before recommending a repair."
      },
      {
        image:   "images/work-4.jpg",
        art:     "lockCylinderPick",
        fig:     "04 — Suspension",
        title:   "Ride and handling restored",
        caption: "Shock absorbers, ball joints and steering components checked and replaced when worn to restore handling."
      },
      {
        image:   "images/work-5.jpg",
        art:     "lockCylinderPick",
        fig:     "05 — Tyres",
        title:   "Fitted, balanced and aligned",
        caption: "New tyres fitted and balanced on calibrated equipment — wheel alignment checked to extend tyre life."
      },
    ],

    // ─── PHOTO BAND ────────────────────────────────────────
    band: {
      image: "images/band.jpg",
      alt:   "Ravats Auto And Electrical Gadgets team at work in Johannesburg",
      text:  "Professional vehicle servicing and repairs — your car in the right hands."
    },

    // ─── AREAS BLURB ───────────────────────────────────────
    areasTitle: "Based in Johannesburg. Serving the wider area.",
    areasLead:  "We service vehicles from Johannesburg CBD, Parktown, Melville and the surrounding suburbs.",
    areasNote:  "Most work is done same-day — drop off in the morning, collect in the afternoon.",

    // ─── WHY US ────────────────────────────────────────────
    whyTitle: "Why drivers keep coming back.",
    why: [
      {
        title: "Honest diagnosis",
        desc:  "We tell you what is actually wrong — not what will earn the most on your invoice."
      },
      {
        title: "Quote before we start",
        desc:  "We price the job before touching it. No hidden extras on the final bill."
      },
      {
        title: "Same-day turnaround where possible",
        desc:  "Most standard services and repairs completed same day. We will give you a realistic time when you drop off."
      },
    ],

    // ─── REVIEWS ───────────────────────────────────────────
    reviewsTitle: "From 9 verified Google reviews.",
    reviews: [
      {
        body:   "Full service done, honest about what was needed and what was not. No unnecessary work added to the bill. Excellent.",
        name:   "Sipho K.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "Had a persistent warning light — they found the actual fault, fixed it, and it is been clear for months. Very pleased.",
        name:   "Helen M.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "Brakes done properly, fair price and same-day. Will not go anywhere else now.",
        name:   "Danie V.",
        stars:  5,
        source: "Google"
      },
    ],

    // ─── FAQ ────────────────────────────────────────────────
    faqTitle: "Vehicle service questions.",
    faqLead:  "What most drivers ask before booking.",
    faq: [
      {
        q: "How long does a full service take?",
        a: "Usually 2–3 hours for a standard full service. We will give you a realistic estimate when you book."
      },
      {
        q: "My warning light is on — do I need to come in immediately?",
        a: "It depends on the light. An oil or temperature warning needs immediate attention; others can wait. Call us and we will advise."
      },
      {
        q: "Do you use original or aftermarket parts?",
        a: "We use quality aftermarket parts that meet the original spec unless you specifically request OEM. We advise on the options."
      },
      {
        q: "Can I wait while my car is serviced?",
        a: "Yes — for shorter jobs. For longer repairs we can drop you nearby if needed."
      },
      {
        q: "Do you check everything on a full service?",
        a: "Yes — oil, filter, air filter, plugs, belts, all fluid levels, brake pad thickness, tyre condition and lights as standard."
      },
    ],

    // ─── CONTACT ───────────────────────────────────────────
    contactTitle: "Tell us about your vehicle.",
    contactLead:  "Let us know the make, model, mileage and what you need. We will book you in.",
    contactPlaceholder: "e.g. 2019 Toyota Corolla, 80 000km, full service + check brakes"
  }
};
