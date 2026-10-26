/**
 * Suthar Brothers - Investment Categories Data Store
 * Pricing categories: area presets, the three rate tiers, budget split, typical scope and timeline.
 */

export const INVESTMENT_CATEGORIES = [
  {
    id: "full-home",
    title: "Full Home Interior",
    tag: "TURNKEY RESIDENTIAL",
    defaultAreaSqFt: 2200,
    unitName: "Carpet Area (Sq. Ft.)",
    presets: [
      { label: "2 BHK", area: 1200 },
      { label: "3 BHK", area: 1800 },
      { label: "4 BHK", area: 2800 },
      { label: "Duplex / Villa", area: 4200 }
    ],
    tiers: {
      curated: {
        ratePerSqFt: 2400,
        badge: "ESSENTIAL LUXURY",
        summary: "High-grade Indian marble, natural teak veneers, Blum soft-close fittings, and warm architectural cove lighting.",
        keyIncludes: ["Indian Katni Marble Flooring", "Natural Teak Veneer Wall Panelling", "Blum Soft-Close Drawer Systems", "Concealed Warm 2700K LED Circuits"]
      },
      signature: {
        ratePerSqFt: 3500,
        badge: "MOST PREFERRED",
        summary: "Imported Statuario & Botticino marble, factory-direct Burma Teak millwork, Blum Servo-Drive, and concealed VRV ducted AC.",
        keyIncludes: ["Imported Italian Statuario Slabs", "Burma Teak Precision Millwork", "Blum Servo-Drive Touchless Drawers", "Concealed VRV Ducted HVAC Integration"]
      },
      masterpiece: {
        ratePerSqFt: 5200,
        badge: "ULTRA LUXURY",
        summary: "Bookmatched marble slabs, motorized smart drapery, custom timber monoliths, electrochromic glass, and full home automation.",
        keyIncludes: ["Bookmatched Statuario & Onyx Features", "Motorized Drapery & Smart Glass", "Hand-Carved Timber Sculptural Monoliths", "Biometric Vaults & Integrated Security"]
      }
    },
    costBreakdown: [
      { category: "Bespoke Timber Joinery & Millwork", percentage: 38 },
      { category: "Imported Stone & Surface Finishes", percentage: 28 },
      { category: "Architectural Lighting, MEP & HVAC", percentage: 20 },
      { category: "On-Site Supervision & Turnkey Execution", percentage: 14 }
    ],
    scope: [
      "Complete civil reconfiguration & acoustic partition layout",
      "Custom modular kitchen with Blum servo-drive hardware",
      "Bespoke wardrobe suites with integrated soft illumination",
      "Layered architectural ceiling lighting with 2700K warm CCT",
      "Floor-to-ceiling double-glazed acoustic glass facades"
    ],
    timeline: "14 – 20 Weeks (Design to Handover)",
  },
  {
    id: "apartment-interior",
    title: "Apartment Interior",
    tag: "HIGH-RISE RESIDENCES",
    defaultAreaSqFt: 1500,
    unitName: "Carpet Area (Sq. Ft.)",
    presets: [
      { label: "1 BHK", area: 750 },
      { label: "2 BHK", area: 1200 },
      { label: "3 BHK Premium", area: 1800 },
      { label: "4 BHK Penthouse", area: 3200 }
    ],
    tiers: {
      curated: {
        ratePerSqFt: 2200,
        badge: "BALANCED STYLE",
        summary: "Polyurethane coated shutters, quartz countertops, concealed ambient lighting, and space-saving wardrobes.",
        keyIncludes: ["High-Gloss Polyurethane Finishes", "Engineered Quartz Countertops", "Soft-Touch Floating Credenzas", "Warm LED Cove Illumination"]
      },
      signature: {
        ratePerSqFt: 3100,
        badge: "RECOMMENDED",
        summary: "Ceiling-height magnetic doors, tinted mirror accents, sintered stone kitchen tops, and acoustic balcony glazing.",
        keyIncludes: ["Flush Magnetic Concealed Doors", "Sintered Stone Kitchen Countertops", "Acoustic Double-Glazed Balcony Doors", "Smart Ambiance Scene Control"]
      },
      masterpiece: {
        ratePerSqFt: 4600,
        badge: "ULTRA LUXURY",
        summary: "Italian quartzite waterfall islands, temperature-controlled glass credenzas, louvered teak ceilings, and motorized blinds.",
        keyIncludes: ["Italian Quartzite Waterfall Island", "Teak Louver Ceiling System", "Integrated Wine Cellar Credenza", "Motorized Sheer & Blackout Drapery"]
      }
    },
    costBreakdown: [
      { category: "Custom Wall Panelling & Millwork", percentage: 36 },
      { category: "Sintered Stone & Italian Flooring", percentage: 26 },
      { category: "Electrical, Smart Controls & HVAC", percentage: 22 },
      { category: "Civil Work & Precision Fitting", percentage: 16 }
    ],
    scope: [
      "Living & dining spatial integration with wall panelling",
      "Master suite with walk-in wardrobe and leather accents",
      "Modular kitchen fit-out with sintered stone countertops",
      "Acoustic balcony sliding doors & outdoor timber decking",
      "Smart home lighting & automated window blinds"
    ],
    timeline: "10 – 14 Weeks (Design to Move-In)",
  },
  {
    id: "villa-interior",
    title: "Villa Interior",
    tag: "GRAND ESTATES",
    defaultAreaSqFt: 4500,
    unitName: "Built-up Area (Sq. Ft.)",
    presets: [
      { label: "Boutique Villa", area: 3000 },
      { label: "Grand Estate", area: 4500 },
      { label: "Monumental Estate", area: 6800 }
    ],
    tiers: {
      curated: {
        ratePerSqFt: 2800,
        badge: "HOLIDAY LUXURY",
        summary: "Weather-resistant teak joinery, lime-plaster accent walls, anti-corrosive brass fittings, and terracotta stone tiles.",
        keyIncludes: ["Marine-Grade Plywood Joinery", "Natural Lime Plaster Accent Walls", "Anti-Corrosive Marine Brass Fixtures", "Terracotta Stone Balcony Flooring"]
      },
      signature: {
        ratePerSqFt: 4200,
        badge: "ARCHITECTURAL CHOICE",
        summary: "Double-height fluted timber screens, travertine courtyard paving, cantilevered floating staircases, and infinity pool decking.",
        keyIncludes: ["Double-Height Fluted Teak Partition", "Travertine Courtyard Paving Slabs", "Cantilevered Floating Oak Staircase", "Ipe Wood Decking around Pool Edge"]
      },
      masterpiece: {
        ratePerSqFt: 6200,
        badge: "ULTRA PRIVATE",
        summary: "Custom sculptural water features, subterranean wine vaults, motorized panoramic glass walls, and private spa suites.",
        keyIncludes: ["Subterranean Temperature Wine Cellar", "Motorized Sky-Frame Glass Walls", "Private Hydrotherapy Spa Suite", "Sculptural Basalt Courtyard Fountain"]
      }
    },
    costBreakdown: [
      { category: "Structural Millwork & Double-Height Joinery", percentage: 40 },
      { category: "Natural Travertine & Marble Stonework", percentage: 30 },
      { category: "HVAC, Home Automation & Security", percentage: 18 },
      { category: "Architectural Landscaping & Decking", percentage: 12 }
    ],
    scope: [
      "Double-height living pavilion with timber cladding",
      "Cantilevered oak staircase with brass balustrades",
      "Private master sanctuary with dual vanity spa bath",
      "Alfresco courtyard lounge with Ipe wood decking",
      "Full estate smart security, climate & audio automation"
    ],
    timeline: "20 – 30 Weeks (Conception to Handover)",
  },
  {
    id: "kitchen-custom",
    title: "Modular & Artisanal Kitchen",
    tag: "CULINARY PRECISION",
    defaultAreaSqFt: 220,
    unitName: "Kitchen Footprint (Sq. Ft.)",
    presets: [
      { label: "Compact Parallel", area: 120 },
      { label: "Spacious L-Shape", area: 220 },
      { label: "Island Atelier", area: 380 }
    ],
    tiers: {
      curated: {
        ratePerSqFt: 3200,
        badge: "HIGH DURABILITY",
        summary: "100% waterproof BWR ply, acrylic-laminated shutters, quartz counters, Blum soft-close hinges, and cutlery trays.",
        keyIncludes: ["IS 710 Marine BWR Plywood Shell", "Anti-Scratch Acrylic Finish Shutters", "Composite Quartz Worktop & Splashback", "Blum Soft-Close Tandembox Drawers"]
      },
      signature: {
        ratePerSqFt: 4800,
        badge: "PREFERRED",
        summary: "Fluted timber veneer island, sintered stone tops, Blum Servo-Drive motorized drawers, and concealed appliance pantry.",
        keyIncludes: ["Fluted Oak Veneer Island Fronts", "12mm Sintered Stone Work Surfaces", "Blum Servo-Drive Motorized Opening", "Pocket Door Appliance Garage Suite"]
      },
      masterpiece: {
        ratePerSqFt: 7200,
        badge: "CHEF SPECIFICATION",
        summary: "Bookmatched Calacatta marble island, stainless steel internal carcasses, Gaggenau integrated appliances, and downdraft hood.",
        keyIncludes: ["Calacatta Marble Waterfall Island", "SS 304 Food-Grade Metal Carcass", "Concealed Motorized Downdraft Extraction", "Custom Temperature Wine Dispenser"]
      }
    },
    costBreakdown: [
      { category: "Waterproof BWR Marine Ply & Shutters", percentage: 38 },
      { category: "German Hardware (Blum Servo-Drive)", percentage: 28 },
      { category: "Sintered Stone Work Surfaces", percentage: 22 },
      { category: "Task Lighting & Plumbing Fittings", percentage: 12 }
    ],
    scope: [
      "Custom layout design (Island, Parallel, or L-Shape)",
      "IS 710 Marine BWR Plywood carcasses (100% waterproof)",
      "Blum Servo-Drive touchless drawer mechanisms",
      "Sintered stone / quartz countertops with undermount sink",
      "Integrated appliance garage with pocket sliding doors"
    ],
    timeline: "4 – 6 Weeks (Factory Build & Site Fit)",
  },
  {
    id: "bathroom-sanctuary",
    title: "Luxury Bathroom & Spa",
    tag: "WELLNESS RETREATS",
    defaultAreaSqFt: 110,
    unitName: "Bathroom Footprint (Sq. Ft.)",
    presets: [
      { label: "Compact Powder Room", area: 55 },
      { label: "Master Bath Suite", area: 110 },
      { label: "Grand Spa Bath", area: 180 }
    ],
    tiers: {
      curated: {
        ratePerSqFt: 3800,
        badge: "COMPACT ELEGANCE",
        summary: "Vitrified porcelain stone slabs, Grohe thermostatic fittings, floating vanity in BWR ply, and LED backlit mirror.",
        keyIncludes: ["Large Format Porcelain Stone Slabs", "Grohe Thermostatic Diverter Valves", "Floating BWR Ply Teak Veneer Vanity", "Anti-Fog Backlit Mirror Unit"]
      },
      signature: {
        ratePerSqFt: 5600,
        badge: "POPULAR LUXURY",
        summary: "Full-height Statuario marble, Hansgrohe Axor concealed shower systems, linear floor drains, and teak duckboards.",
        keyIncludes: ["Italian Statuario Marble Slabs", "Hansgrohe Axor Concealed Shower System", "Concealed Stainless Linear Drains", "Natural Burmese Teak Shower Deck"]
      },
      masterpiece: {
        ratePerSqFt: 8400,
        badge: "SPA MONOLITH",
        summary: "Custom carved marble bathtub, chromotherapy rain shower with steam unit, electrochromic privacy glass, and heated floors.",
        keyIncludes: ["Monolithic Carved Marble Freestanding Tub", "Chromotherapy Steam Rain Shower Unit", "Electrochromic Smart Privacy Glass", "Radiant Heated Marble Floor Subsystem"]
      }
    },
    costBreakdown: [
      { category: "Imported Marble & Stonework Slabs", percentage: 42 },
      { category: "Concealed Plumbing & German Sanitaryware", percentage: 28 },
      { category: "Custom Waterproof Vanity & Timber Decking", percentage: 18 },
      { category: "Civil Waterproofing & Lighting", percentage: 12 }
    ],
    scope: [
      "Triple-layer membrane waterproofing guaranteed for 15 years",
      "Full-height marble slab cladding with seamless epoxy joints",
      "Concealed thermostatic shower valves with body jets",
      "Floating timber vanity with anti-fingerprint counters",
      "Concealed linear slot drains & ambient niche illumination"
    ],
    timeline: "3 – 5 Weeks (Civil to Handover)",
  },
  {
    id: "living-lounge",
    title: "Living Room & Formal Lounge",
    tag: "STATEMENT SPACES",
    defaultAreaSqFt: 550,
    unitName: "Lounge Area (Sq. Ft.)",
    presets: [
      { label: "Compact Living", area: 320 },
      { label: "Formal Lounge", area: 550 },
      { label: "Grand Reception Pavilion", area: 950 }
    ],
    tiers: {
      curated: {
        ratePerSqFt: 2100,
        badge: "WARM SOCIAL",
        summary: "Veneer panelling, floating media console, cove LED ceilings, and stain-resistant velvet lounge seating.",
        keyIncludes: ["Natural Oak Veneer Accent Wall", "Floating PU Polished Media Console", "Indirect Cove Ceiling Illumination", "Stain-Resistant Performance Fabric Sofas"]
      },
      signature: {
        ratePerSqFt: 3400,
        badge: "EDITORIAL FAVOURITE",
        summary: "Fluted walnut acoustic walls, Statuario marble TV backdrop, bio-ethanol fireplace, and brass inlay detailing.",
        keyIncludes: ["Fluted Walnut Acoustic Panelling", "Statuario Marble TV Niche Wall", "Concealed Bio-Ethanol Fireplace Unit", "Custom Brass Strip Flooring Inlays"]
      },
      masterpiece: {
        ratePerSqFt: 5400,
        badge: "HERITAGE MONOLITH",
        summary: "Double-height wood ceiling louvers, motorized panoramic glass curtains, onyx backlit bar, and Minotti loose furniture.",
        keyIncludes: ["Double-Height Teak Ceiling Louvers", "Backlit Iranian Onyx Bar Counter", "Motorized Curved Glass Wall System", "Curated Imported Designer Seating Suite"]
      }
    },
    costBreakdown: [
      { category: "Acoustic Wall Panelling & Media Joinery", percentage: 38 },
      { category: "Bespoke Lounge Furniture & Upholstery", percentage: 30 },
      { category: "Architectural Ceiling & Layered Lighting", percentage: 18 },
      { category: "Accent Stone, Fireplaces & Brass Inlays", percentage: 14 }
    ],
    scope: [
      "Acoustic wood wall panelling with hidden wiring channels",
      "Floating marble/granite media console with soft drawers",
      "Layered ceiling lighting with dimmable scene control",
      "Custom-manufactured sectional sofas & accent chairs",
      "Floor-to-ceiling drapery in textured linen-wool blends"
    ],
    timeline: "6 – 10 Weeks (Design to Styling)",
  },
  {
    id: "bedroom-suite",
    title: "Master Bedroom Suite",
    tag: "PRIVATE RETREATS",
    defaultAreaSqFt: 380,
    unitName: "Suite Area (Sq. Ft.)",
    presets: [
      { label: "Guest Suite", area: 220 },
      { label: "Master Suite", area: 380 },
      { label: "Grand Royal Suite", area: 620 }
    ],
    tiers: {
      curated: {
        ratePerSqFt: 2300,
        badge: "RESTFUL ELEGANCE",
        summary: "Fabric padded headboard wall, BWR ply wardrobes, warm nightstand sconces, and hardwood laminate flooring.",
        keyIncludes: ["Custom Fabric Padded Headboard", "BWR Ply Wardrobe in Matte Finish", "Warm Nightstand Architectural Sconces", "High-Traffic Hardwood Laminate Floor"]
      },
      signature: {
        ratePerSqFt: 3600,
        badge: "MOST POPULAR",
        summary: "Full-height upholstered wall, glass-door walk-in closet with sensor LEDs, leather accents, and solid oak flooring.",
        keyIncludes: ["Full-Height Fluted Leather Headboard", "Tinted Glass Walk-In Wardrobe Suite", "Sensor-Activated Internal LED Rails", "Natural European Oak Hardwood Flooring"]
      },
      masterpiece: {
        ratePerSqFt: 5800,
        badge: "ULTRA PRIVACY",
        summary: "Silk-padded wall panels, island dresser with jewelry drawers, acoustic double doors, and automated blackout blinds.",
        keyIncludes: ["Hand-Woven Silk Acoustic Wall Panels", "Central Glass-Top Dresser Island", "Acoustic Leather-Wrapped Double Doors", "Automated Motorized Blackout Blinds"]
      }
    },
    costBreakdown: [
      { category: "Custom Walk-In Closet & Wardrobe Systems", percentage: 42 },
      { category: "Headboard Wall, Upholstery & Millwork", percentage: 28 },
      { category: "Hardwood Flooring & Acoustic Panelling", percentage: 18 },
      { category: "Concealed Night Lighting & Smart Controls", percentage: 12 }
    ],
    scope: [
      "Floor-to-ceiling bespoke wardrobe system with interior organizers",
      "Upholstered headboard wall with integrated reading lights",
      "Floating vanity dresser with illuminated vanity mirror",
      "Hardwood plank flooring with sound-dampening underlay",
      "Smart nightstand control for drapery & room scene lighting"
    ],
    timeline: "6 – 8 Weeks (Fabrication to Assembly)",
  },
  {
    id: "home-office",
    title: "Executive Home Office & Studio",
    tag: "CREATIVE FOCUS",
    defaultAreaSqFt: 220,
    unitName: "Office Footprint (Sq. Ft.)",
    presets: [
      { label: "Focus Nook", area: 110 },
      { label: "Executive Suite", area: 220 },
      { label: "Creative Studio Suite", area: 380 }
    ],
    tiers: {
      curated: {
        ratePerSqFt: 2200,
        badge: "PRODUCTIVE ESSENTIAL",
        summary: "Custom laminate desk, open book shelving, integrated wire channels, and warm task lighting.",
        keyIncludes: ["Heavy-Duty Custom Laminate Desk", "Floating Bookshelf Display Units", "Concealed Cable Routing Channels", "Dimmable Architectural Desk Sconce"]
      },
      signature: {
        ratePerSqFt: 3500,
        badge: "RECOMMENDED",
        summary: "Solid American Walnut desk, fluted acoustic panelling, leather desk inlay, and dimmable 95 CRI video-call lighting.",
        keyIncludes: ["Solid American Walnut Desk Monolith", "Fluted Oak Acoustic Wall Panelling", "Hand-Stitched Leather Desk Inlay Pad", "CRI 95+ Diffused Video Call Lighting"]
      },
      masterpiece: {
        ratePerSqFt: 5200,
        badge: "PRESIDENTIAL",
        summary: "Motorized sit-stand walnut desk, acoustic double doors, private espresso bar, and biometric file vault.",
        keyIncludes: ["Motorized Concealed Sit-Stand Desk", "Double-Glazed Soundproof Door System", "Concealed Espresso & Refresher Bar", "Biometric Motorized Security Vault"]
      }
    },
    costBreakdown: [
      { category: "Executive Desk & Library Cabinetry", percentage: 42 },
      { category: "Acoustic Wall Treatment & Panelling", percentage: 28 },
      { category: "Task, Ambient & Broadcast Lighting", percentage: 18 },
      { category: "Concealed Wire MEP & Smart Controls", percentage: 12 }
    ],
    scope: [
      "Custom executive desk with concealed power & data hubs",
      "Full-height library unit with integrated LED accent strips",
      "Acoustic slatted wood wall panels for soundproof calls",
      "Calibrated 95 CRI video-conference lighting setup",
      "Concealed storage for printers, shredders & servers"
    ],
    timeline: "4 – 6 Weeks (Design to Fit-Out)",
  },
  {
    id: "commercial-office",
    title: "Corporate Headquarters & Office",
    tag: "COMMERCIAL REAL ESTATE",
    defaultAreaSqFt: 3500,
    unitName: "Leasable Area (Sq. Ft.)",
    presets: [
      { label: "Boutique Firm", area: 1800 },
      { label: "Corporate HQ", area: 3500 },
      { label: "Enterprise Flagship", area: 8500 }
    ],
    tiers: {
      curated: {
        ratePerSqFt: 2100,
        badge: "EFFICIENT BUILD",
        summary: "Modular workstation pods, acoustic ceiling tiles, glass conference rooms, and durable carpet tiles.",
        keyIncludes: ["Modular Steel Frame Workstations", "Acoustic Mineral Fiber Ceiling Grid", "Frameless Toughened Glass Partitions", "Heavy-Duty Commercial Carpet Flooring"]
      },
      signature: {
        ratePerSqFt: 3200,
        badge: "HIGH-IMPACT BRAND",
        summary: "Fluted timber reception wall, smart boardroom with AV integration, phone booths, and linear LED lighting.",
        keyIncludes: ["Fluted Timber Reception Counter", "Smart Boardroom with Integrated AV", "Acoustic Fabric Phone Booth Pods", "Custom Linear Continuous LED Circuits"]
      },
      masterpiece: {
        ratePerSqFt: 4800,
        badge: "WORLD-CLASS HQ",
        summary: "Curved marble reception counter, acoustic wood ceilings, motorized privacy glass, and biometric access control.",
        keyIncludes: ["Curved Statuario Marble Reception Desk", "Acoustic Perforated Wood Ceiling Panels", "Switchable Electrochromic Glass Walls", "Biometric & RFID Security Matrix"]
      }
    },
    costBreakdown: [
      { category: "Partitions, Ceilings & Glass Work", percentage: 35 },
      { category: "Workstations, Boardroom & Joinery", percentage: 30 },
      { category: "HVAC Ducted Systems & MEP", percentage: 22 },
      { category: "AV, Data Infrastructure & Access Security", percentage: 13 }
    ],
    scope: [
      "Reception lounge with branded feature wall & stone counter",
      "Executive boardroom with integrated video-conferencing AV",
      "Open-plan modular workstations with power/data channelling",
      "Acoustic phone booths for private calls & one-on-ones",
      "Cafeteria & employee lounge with durable surfaces"
    ],
    timeline: "8 – 14 Weeks (Civil to Handover)",
  },
  {
    id: "retail-showroom",
    title: "Luxury Retail Flagship & Showroom",
    tag: "HIGH-CONVERSION RETAIL",
    defaultAreaSqFt: 1800,
    unitName: "Display Area (Sq. Ft.)",
    presets: [
      { label: "Boutique Store", area: 800 },
      { label: "Retail Flagship", area: 1800 },
      { label: "Grand Showroom", area: 4200 }
    ],
    tiers: {
      curated: {
        ratePerSqFt: 2500,
        badge: "HIGH TRAFFIC",
        summary: "Custom display wall shelving, high-CRI track lighting, durable vitrified flooring, and cash counter.",
        keyIncludes: ["Custom Powder-Coated Metal Display Shelving", "High-CRI 90+ LED Track Spotlight Matrix", "Large Format Anti-Skid Vitrified Floor Tiles", "Minimalist Cash & Checkout Counter"]
      },
      signature: {
        ratePerSqFt: 3800,
        badge: "LUXURY CHOICE",
        summary: "Fluted wood panelling, brassvitrine cabinets, seamless terrazzo floor, and VIP fitting salon.",
        keyIncludes: ["Fluted Timber Wall Panelling & Niches", "Ultra-Clear Glass Vitrines with Brass Trims", "Monolithic Seamless Terrazzo Flooring", "Private VIP Client Fitting Lounge"]
      },
      masterpiece: {
        ratePerSqFt: 5800,
        badge: "WORLD-CLASS RETAIL",
        summary: "Curved marble facade, motorized window displays, micro-cement flooring, and smart fitting room lighting.",
        keyIncludes: ["Curved Backlit Marble Facade Cladding", "Motorized Rotating Window Display Platforms", "Seamless Industrial Micro-Cement Flooring", "Smart Fitting Rooms with Adjustable Scene Lighting"]
      }
    },
    costBreakdown: [
      { category: "Display Vitrines, Shelving & Cabinetry", percentage: 40 },
      { category: "High-CRI Retail Spotlighting & Facade", percentage: 28 },
      { category: "Terrazzo / Micro-Cement Stonework", percentage: 20 },
      { category: "MEP, Security & POS Integration", percentage: 12 }
    ],
    scope: [
      "Facade storefront design with illuminated brand logo",
      "High-CRI track lighting matrix to enhance product colors",
      "Bespoke glass vitrines & brass-trimmed display pedestals",
      "VIP client consultation lounge with luxury seating",
      "POS cash counter with concealed security storage"
    ],
    timeline: "6 – 10 Weeks (Design to Opening)",
  },
];

export default INVESTMENT_CATEGORIES;
