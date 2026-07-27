/**
 * Suthar Interior Studio & Architecture - Investment Categories Data Store
 * Centralized data management for project investment tiers, cost breakdowns, and specifications.
 */

import {
  Home,
  Building2,
  LandPlot,
  UtensilsCrossed,
  Bath,
  Sofa,
  BedDouble,
  Laptop,
  Briefcase,
  Store,
  Hammer,
  Gem,
  Zap,
  ShieldCheck
} from "lucide-react";
import { SITE_IMAGES } from "./data.js";

export const INVESTMENT_CATEGORIES = [
  {
    id: "full-home",
    title: "Full Home Interior",
    icon: Home,
    tag: "TURNKEY RESIDENTIAL",
    tagline: "Comprehensive Architectural Synthesis for Multi-Generational Living",
    overview: "An end-to-end spatial metamorphosis that aligns structural architecture with bespoke timber joinery, curated Italian stones, and automated climate systems. Designed for complete lifestyle integration.",
    image: SITE_IMAGES.aboutHeroBg,
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
        name: "Curated Craft",
        ratePerSqFt: 2400,
        badge: "ESSENTIAL LUXURY",
        summary: "High-grade Indian marble, natural teak veneers, Blum soft-close fittings, and warm architectural cove lighting.",
        keyIncludes: ["Indian Katni Marble Flooring", "Natural Teak Veneer Wall Panelling", "Blum Soft-Close Drawer Systems", "Concealed Warm 2700K LED Circuits"]
      },
      signature: {
        name: "Signature Atelier",
        ratePerSqFt: 3500,
        badge: "MOST PREFERRED",
        summary: "Imported Statuario & Botticino marble, factory-direct Burma Teak millwork, Blum Servo-Drive, and concealed VRV ducted AC.",
        keyIncludes: ["Imported Italian Statuario Slabs", "Burma Teak Precision Millwork", "Blum Servo-Drive Touchless Drawers", "Concealed VRV Ducted HVAC Integration"]
      },
      masterpiece: {
        name: "Architectural Monolith",
        ratePerSqFt: 5200,
        badge: "ULTRA LUXURY",
        summary: "Bookmatched marble slabs, motorized smart drapery, custom timber monoliths, electrochromic glass, and full home automation.",
        keyIncludes: ["Bookmatched Statuario & Onyx Features", "Motorized Drapery & Smart Glass", "Hand-Carved Timber Sculptural Monoliths", "Biometric Vaults & Integrated Security"]
      }
    },
    costBreakdown: [
      { category: "Bespoke Timber Joinery & Millwork", percentage: 38, icon: Hammer, color: "var(--color-gold-accent)" },
      { category: "Imported Stone & Surface Finishes", percentage: 28, icon: Gem, color: "var(--color-gold-accent)" },
      { category: "Architectural Lighting, MEP & HVAC", percentage: 20, icon: Zap, color: "var(--color-gold-accent)" },
      { category: "On-Site Supervision & Turnkey Execution", percentage: 14, icon: ShieldCheck, color: "var(--color-gold-accent)" }
    ],
    scope: [
      "Complete civil reconfiguration & acoustic partition layout",
      "Custom modular kitchen with Blum servo-drive hardware",
      "Bespoke wardrobe suites with integrated soft illumination",
      "Layered architectural ceiling lighting with 2700K warm CCT",
      "Floor-to-ceiling double-glazed acoustic glass facades"
    ],
    highlights: [
      { title: "Bespoke Millwork", desc: "Factory-crafted timber joinery engineered to 0.5mm tolerance." },
      { title: "Tactile Curation", desc: "Hand-selected marble slabs paired with warm acoustic slatted wood." },
      { title: "Architectural Lighting", desc: "Layered indirect illumination with custom scene automation." }
    ],
    upgrades: [
      "Automated Motorized Sheer & Blackout Drapery",
      "Acoustic Wall Panels in Media Pavilion",
      "Custom Hidden Bar Unit with Quartz Counters"
    ],
    timeline: "14 – 20 Weeks (Design to Handover)",
    timelinePhases: [
      { phase: "Weeks 1–3", detail: "3D Spatial Blueprinting & Material Selection" },
      { phase: "Weeks 4–10", detail: "Off-Site Factory Millwork & Civil Preparation" },
      { phase: "Weeks 11–18", detail: "On-Site Fitting, Marble Laying & Lighting Setup" },
      { phase: "Weeks 19–20", detail: "Architectural Styling & White-Glove Handover" }
    ],
    inspiration: [
      { name: "Worli Sea-Facing Residence", location: "Mumbai", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" },
      { name: "Assagao Hilltop Haven", location: "Goa", image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: "apartment-interior",
    title: "Apartment Interior",
    icon: Building2,
    tag: "HIGH-RISE RESIDENCES",
    tagline: "Optimized Spatial Elegance for Urban High-Rise Living",
    overview: "Maximizing natural light, spatial continuity, and ergonomic storage within urban apartment footprints. Elevating high-rise living through seamless ceiling-height doors, hidden storage, and acoustic insulation.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85",
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
        name: "Urban Refined",
        ratePerSqFt: 2200,
        badge: "BALANCED STYLE",
        summary: "Polyurethane coated shutters, quartz countertops, concealed ambient lighting, and space-saving wardrobes.",
        keyIncludes: ["High-Gloss Polyurethane Finishes", "Engineered Quartz Countertops", "Soft-Touch Floating Credenzas", "Warm LED Cove Illumination"]
      },
      signature: {
        name: "Signature High-Rise",
        ratePerSqFt: 3100,
        badge: "RECOMMENDED",
        summary: "Ceiling-height magnetic doors, tinted mirror accents, sintered stone kitchen tops, and acoustic balcony glazing.",
        keyIncludes: ["Flush Magnetic Concealed Doors", "Sintered Stone Kitchen Countertops", "Acoustic Double-Glazed Balcony Doors", "Smart Ambiance Scene Control"]
      },
      masterpiece: {
        name: "Penthouse Atelier",
        ratePerSqFt: 4600,
        badge: "ULTRA LUXURY",
        summary: "Italian quartzite waterfall islands, temperature-controlled glass credenzas, louvered teak ceilings, and motorized blinds.",
        keyIncludes: ["Italian Quartzite Waterfall Island", "Teak Louver Ceiling System", "Integrated Wine Cellar Credenza", "Motorized Sheer & Blackout Drapery"]
      }
    },
    costBreakdown: [
      { category: "Custom Wall Panelling & Millwork", percentage: 36, icon: Hammer, color: "var(--color-gold-accent)" },
      { category: "Sintered Stone & Italian Flooring", percentage: 26, icon: Gem, color: "var(--color-gold-accent)" },
      { category: "Electrical, Smart Controls & HVAC", percentage: 22, icon: Zap, color: "var(--color-gold-accent)" },
      { category: "Civil Work & Precision Fitting", percentage: 16, icon: ShieldCheck, color: "var(--color-gold-accent)" }
    ],
    scope: [
      "Living & dining spatial integration with wall panelling",
      "Master suite with walk-in wardrobe and leather accents",
      "Modular kitchen fit-out with sintered stone countertops",
      "Acoustic balcony sliding doors & outdoor timber decking",
      "Smart home lighting & automated window blinds"
    ],
    highlights: [
      { title: "Concealed Transitions", desc: "Flush magnetic doors that blend seamlessly into wood-panelled walls." },
      { title: "Refined Millwork", desc: "Slender profile joinery engineered for zero visual noise." },
      { title: "Reflective Depth", desc: "Strategic tinted mirror accents and brass trim to expand perceived volume." }
    ],
    upgrades: [
      "Italian Quartzite Dining Island with Waterfall Edges",
      "Integrated Wine Cellar & Glass Credenza Unit",
      "Balcony Teak Louver Ceiling with Weather Seals"
    ],
    timeline: "10 – 14 Weeks (Design to Move-In)",
    timelinePhases: [
      { phase: "Weeks 1–2", detail: "Layout Blueprint & Society NOC Approvals" },
      { phase: "Weeks 3–7", detail: "Precision Millwork Fabrication at Factory" },
      { phase: "Weeks 8–12", detail: "Site Installation & Electrical Integration" },
      { phase: "Weeks 13–14", detail: "Deep Clean, Handover & Final Styling" }
    ],
    inspiration: [
      { name: "Prabhadevi Sky Penthouse", location: "Mumbai", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80" },
      { name: "Koregaon Park Luxury Suite", location: "Pune", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: "villa-interior",
    title: "Villa Interior",
    icon: LandPlot,
    tag: "GRAND ESTATES",
    tagline: "Grand Spatial Narratives for Sprawling Private Estates & Duplexes",
    overview: "Connecting expansive indoor volumes with private courtyard landscapes. Featuring double-height lobbies, bespoke timber staircases, expansive glass facades, and artisanal stone detailing crafted for monumental presence.",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=85",
    defaultAreaSqFt: 4500,
    unitName: "Built-up Area (Sq. Ft.)",
    presets: [
      { label: "Boutique Villa", area: 3000 },
      { label: "Grand Estate", area: 4500 },
      { label: "Monumental Estate", area: 6800 }
    ],
    tiers: {
      curated: {
        name: "Coastal Haven",
        ratePerSqFt: 2800,
        badge: "HOLIDAY LUXURY",
        summary: "Weather-resistant teak joinery, lime-plaster accent walls, anti-corrosive brass fittings, and terracotta stone tiles.",
        keyIncludes: ["Marine-Grade Plywood Joinery", "Natural Lime Plaster Accent Walls", "Anti-Corrosive Marine Brass Fixtures", "Terracotta Stone Balcony Flooring"]
      },
      signature: {
        name: "Signature Sanctuary",
        ratePerSqFt: 4200,
        badge: "ARCHITECTURAL CHOICE",
        summary: "Double-height fluted timber screens, travertine courtyard paving, cantilevered floating staircases, and infinity pool decking.",
        keyIncludes: ["Double-Height Fluted Teak Partition", "Travertine Courtyard Paving Slabs", "Cantilevered Floating Oak Staircase", "Ipe Wood Decking around Pool Edge"]
      },
      masterpiece: {
        name: "Monumental Estate",
        ratePerSqFt: 6200,
        badge: "ULTRA PRIVATE",
        summary: "Custom sculptural water features, subterranean wine vaults, motorized panoramic glass walls, and private spa suites.",
        keyIncludes: ["Subterranean Temperature Wine Cellar", "Motorized Sky-Frame Glass Walls", "Private Hydrotherapy Spa Suite", "Sculptural Basalt Courtyard Fountain"]
      }
    },
    costBreakdown: [
      { category: "Structural Millwork & Double-Height Joinery", percentage: 40, icon: Hammer, color: "var(--color-gold-accent)" },
      { category: "Natural Travertine & Marble Stonework", percentage: 30, icon: Gem, color: "var(--color-gold-accent)" },
      { category: "HVAC, Home Automation & Security", percentage: 18, icon: Zap, color: "var(--color-gold-accent)" },
      { category: "Architectural Landscaping & Decking", percentage: 12, icon: ShieldCheck, color: "var(--color-gold-accent)" }
    ],
    scope: [
      "Double-height living pavilion with timber cladding",
      "Cantilevered oak staircase with brass balustrades",
      "Private master sanctuary with dual vanity spa bath",
      "Alfresco courtyard lounge with Ipe wood decking",
      "Full estate smart security, climate & audio automation"
    ],
    highlights: [
      { title: "Indoor-Outdoor Continuity", desc: "Flush floor transitions from indoor marble to outdoor teak decking." },
      { title: "Sculptural Volumes", desc: "Double-height vertical fluted timber screens framing central courtyards." },
      { title: "Resort Ambience", desc: "Integrated water feature acoustics and soft landscape uplighting." }
    ],
    upgrades: [
      "Subterranean Temperature-Controlled Wine Vault",
      "Motorized Sky-Frame Glass Partition Systems",
      "Private Hydrotherapy Spa Suite with Steam Room"
    ],
    timeline: "20 – 30 Weeks (Conception to Handover)",
    timelinePhases: [
      { phase: "Weeks 1–4", detail: "Architectural Design, Structural Calculation & Material Sourcing" },
      { phase: "Weeks 5–14", detail: "Civil Alterations, MEP Piping & Double-Height Frame Setup" },
      { phase: "Weeks 15–26", detail: "Millwork Installation, Stonework & Decking Execution" },
      { phase: "Weeks 27–30", detail: "Automation Calibration, Landscaping & Handover" }
    ],
    inspiration: [
      { name: "Candolim Heritage Villa", location: "Goa", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80" },
      { name: "Alibaug Coastal Sanctuary", location: "Maharashtra", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: "kitchen-custom",
    title: "Modular & Artisanal Kitchen",
    icon: UtensilsCrossed,
    tag: "CULINARY PRECISION",
    tagline: "Ergonomic Architectural Kitchens Built with German Engineering",
    overview: "Engineering high-durability culinary centers. Combining waterproof IS 710 Marine BWR plywood, Blum touchless servo-drive mechanisms, anti-scratch sintered stone countertops, and integrated appliance garages.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85",
    defaultAreaSqFt: 220,
    unitName: "Kitchen Footprint (Sq. Ft.)",
    presets: [
      { label: "Compact Parallel", area: 120 },
      { label: "Spacious L-Shape", area: 220 },
      { label: "Island Atelier", area: 380 }
    ],
    tiers: {
      curated: {
        name: "Essential Gourmet",
        ratePerSqFt: 3200,
        badge: "HIGH DURABILITY",
        summary: "100% waterproof BWR ply, acrylic-laminated shutters, quartz counters, Blum soft-close hinges, and cutlery trays.",
        keyIncludes: ["IS 710 Marine BWR Plywood Shell", "Anti-Scratch Acrylic Finish Shutters", "Composite Quartz Worktop & Splashback", "Blum Soft-Close Tandembox Drawers"]
      },
      signature: {
        name: "Signature Culinary",
        ratePerSqFt: 4800,
        badge: "PREFERRED",
        summary: "Fluted timber veneer island, sintered stone tops, Blum Servo-Drive motorized drawers, and concealed appliance pantry.",
        keyIncludes: ["Fluted Oak Veneer Island Fronts", "12mm Sintered Stone Work Surfaces", "Blum Servo-Drive Motorized Opening", "Pocket Door Appliance Garage Suite"]
      },
      masterpiece: {
        name: "Chef's Monolith",
        ratePerSqFt: 7200,
        badge: "CHEF SPECIFICATION",
        summary: "Bookmatched Calacatta marble island, stainless steel internal carcasses, Gaggenau integrated appliances, and downdraft hood.",
        keyIncludes: ["Calacatta Marble Waterfall Island", "SS 304 Food-Grade Metal Carcass", "Concealed Motorized Downdraft Extraction", "Custom Temperature Wine Dispenser"]
      }
    },
    costBreakdown: [
      { category: "Waterproof BWR Marine Ply & Shutters", percentage: 38, icon: Hammer, color: "var(--color-gold-accent)" },
      { category: "German Hardware (Blum Servo-Drive)", percentage: 28, icon: ShieldCheck, color: "var(--color-gold-accent)" },
      { category: "Sintered Stone Work Surfaces", percentage: 22, icon: Gem, color: "var(--color-gold-accent)" },
      { category: "Task Lighting & Plumbing Fittings", percentage: 12, icon: Zap, color: "var(--color-gold-accent)" }
    ],
    scope: [
      "Custom layout design (Island, Parallel, or L-Shape)",
      "IS 710 Marine BWR Plywood carcasses (100% waterproof)",
      "Blum Servo-Drive touchless drawer mechanisms",
      "Sintered stone / quartz countertops with undermount sink",
      "Integrated appliance garage with pocket sliding doors"
    ],
    highlights: [
      { title: "Waterproof Integrity", desc: "100% Marine Grade BWR Plywood core designed for humid environments." },
      { title: "Touchless Motion", desc: "Blum Servo-Drive electronic drawers that open with a simple tap." },
      { title: "Seamless Surfaces", desc: "Heat, stain, and scratch-resistant sintered stone countertops." }
    ],
    upgrades: [
      "Motorized Pocket Doors for Breakfast Station",
      "Integrated Downdraft Hob Extraction Unit",
      "Under-Counter Dual Zone Wine Storage"
    ],
    timeline: "4 – 6 Weeks (Factory Build & Site Fit)",
    timelinePhases: [
      { phase: "Week 1", detail: "Laser Measurement & 3D CAD Hardware Mapping" },
      { phase: "Weeks 2–4", detail: "Factory CNC Cutting, Edge Banding & PU Polishing" },
      { phase: "Week 5", detail: "On-Site Carcass Fitting & Countertop Installation" },
      { phase: "Week 6", detail: "Appliance Testing, Hardware Tuning & Handover" }
    ],
    inspiration: [
      { name: "Juhu Minimalist Monolith Kitchen", location: "Mumbai", image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80" },
      { name: "Bandra Chef's Culinary Hub", location: "Mumbai", image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: "bathroom-sanctuary",
    title: "Luxury Bathroom & Spa",
    icon: Bath,
    tag: "WELLNESS RETREATS",
    tagline: "Private Hydrotherapy Sanctuaries Crafted in Natural Stone",
    overview: "Transforming standard bath layouts into high-end spa retreats. Featuring bookmatched Statuario marble slabs, thermostatic rain showers, concealed drain channels, anti-fog LED mirrors, and teak duckboards.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85",
    defaultAreaSqFt: 110,
    unitName: "Bathroom Footprint (Sq. Ft.)",
    presets: [
      { label: "Compact Powder Room", area: 55 },
      { label: "Master Bath Suite", area: 110 },
      { label: "Grand Spa Bath", area: 180 }
    ],
    tiers: {
      curated: {
        name: "Refined Wellness",
        ratePerSqFt: 3800,
        badge: "COMPACT ELEGANCE",
        summary: "Vitrified porcelain stone slabs, Grohe thermostatic fittings, floating vanity in BWR ply, and LED backlit mirror.",
        keyIncludes: ["Large Format Porcelain Stone Slabs", "Grohe Thermostatic Diverter Valves", "Floating BWR Ply Teak Veneer Vanity", "Anti-Fog Backlit Mirror Unit"]
      },
      signature: {
        name: "Signature Spa Suite",
        ratePerSqFt: 5600,
        badge: "POPULAR LUXURY",
        summary: "Full-height Statuario marble, Hansgrohe Axor concealed shower systems, linear floor drains, and teak duckboards.",
        keyIncludes: ["Italian Statuario Marble Slabs", "Hansgrohe Axor Concealed Shower System", "Concealed Stainless Linear Drains", "Natural Burmese Teak Shower Deck"]
      },
      masterpiece: {
        name: "Hydrotherapy Sanctuary",
        ratePerSqFt: 8400,
        badge: "SPA MONOLITH",
        summary: "Custom carved marble bathtub, chromotherapy rain shower with steam unit, electrochromic privacy glass, and heated floors.",
        keyIncludes: ["Monolithic Carved Marble Freestanding Tub", "Chromotherapy Steam Rain Shower Unit", "Electrochromic Smart Privacy Glass", "Radiant Heated Marble Floor Subsystem"]
      }
    },
    costBreakdown: [
      { category: "Imported Marble & Stonework Slabs", percentage: 42, icon: Gem, color: "var(--color-gold-accent)" },
      { category: "Concealed Plumbing & German Sanitaryware", percentage: 28, icon: Zap, color: "var(--color-gold-accent)" },
      { category: "Custom Waterproof Vanity & Timber Decking", percentage: 18, icon: Hammer, color: "var(--color-gold-accent)" },
      { category: "Civil Waterproofing & Lighting", percentage: 12, icon: ShieldCheck, color: "var(--color-gold-accent)" }
    ],
    scope: [
      "Triple-layer membrane waterproofing guaranteed for 15 years",
      "Full-height marble slab cladding with seamless epoxy joints",
      "Concealed thermostatic shower valves with body jets",
      "Floating timber vanity with anti-fingerprint counters",
      "Concealed linear slot drains & ambient niche illumination"
    ],
    highlights: [
      { title: "Guaranteed Waterproofing", desc: "Multi-layer elastomeric membrane sealed before tiling." },
      { title: "Hydrotherapy Precision", desc: "Thermostatic valves that maintain exact water temperature." },
      { title: "Tactile Warmth", desc: "Natural teak duckboards providing soft warmth underfoot." }
    ],
    upgrades: [
      "Custom Monolithic Carved Travertine Tub",
      "Aromatherapy Steam Shower System with Digital Touchpanel",
      "Radiant Electric Floor Heating Subsystem"
    ],
    timeline: "3 – 5 Weeks (Civil to Handover)",
    timelinePhases: [
      { phase: "Week 1", detail: "Demolition, Plumbing Rough-In & Waterproofing Membrane" },
      { phase: "Week 2", detail: "Waterponding Test & Full-Height Marble Slab Cladding" },
      { phase: "Week 3", detail: "Sanitaryware Mounting, Glass Partition & Vanity Fitting" },
      { phase: "Weeks 4–5", detail: "Sealing, Lighting Calibration & Deep Clean" }
    ],
    inspiration: [
      { name: "Altamount Road Spa Bath", location: "Mumbai", image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80" },
      { name: "Boat Club Road Wellness Bath", location: "Pune", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: "living-lounge",
    title: "Living Room & Formal Lounge",
    icon: Sofa,
    tag: "STATEMENT SPACES",
    tagline: "Curated Lounges Designed for Memorable Hospitality & Comfort",
    overview: "Crafting the social heart of the residence. Integrating fluted acoustic timber walls, marble TV consoles, linear fireplace inserts, architectural lighting, and bespoke loose seating.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    defaultAreaSqFt: 550,
    unitName: "Lounge Area (Sq. Ft.)",
    presets: [
      { label: "Compact Living", area: 320 },
      { label: "Formal Lounge", area: 550 },
      { label: "Grand Reception Pavilion", area: 950 }
    ],
    tiers: {
      curated: {
        name: "Modern Chic",
        ratePerSqFt: 2100,
        badge: "WARM SOCIAL",
        summary: "Veneer panelling, floating media console, cove LED ceilings, and stain-resistant velvet lounge seating.",
        keyIncludes: ["Natural Oak Veneer Accent Wall", "Floating PU Polished Media Console", "Indirect Cove Ceiling Illumination", "Stain-Resistant Performance Fabric Sofas"]
      },
      signature: {
        name: "Signature Statement",
        ratePerSqFt: 3400,
        badge: "EDITORIAL FAVOURITE",
        summary: "Fluted walnut acoustic walls, Statuario marble TV backdrop, bio-ethanol fireplace, and brass inlay detailing.",
        keyIncludes: ["Fluted Walnut Acoustic Panelling", "Statuario Marble TV Niche Wall", "Concealed Bio-Ethanol Fireplace Unit", "Custom Brass Strip Flooring Inlays"]
      },
      masterpiece: {
        name: "Architectural Pavilion",
        ratePerSqFt: 5400,
        badge: "HERITAGE MONOLITH",
        summary: "Double-height wood ceiling louvers, motorized panoramic glass curtains, onyx backlit bar, and Minotti loose furniture.",
        keyIncludes: ["Double-Height Teak Ceiling Louvers", "Backlit Iranian Onyx Bar Counter", "Motorized Curved Glass Wall System", "Curated Imported Designer Seating Suite"]
      }
    },
    costBreakdown: [
      { category: "Acoustic Wall Panelling & Media Joinery", percentage: 38, icon: Hammer, color: "var(--color-gold-accent)" },
      { category: "Bespoke Lounge Furniture & Upholstery", percentage: 30, icon: Sofa, color: "var(--color-gold-accent)" },
      { category: "Architectural Ceiling & Layered Lighting", percentage: 18, icon: Zap, color: "var(--color-gold-accent)" },
      { category: "Accent Stone, Fireplaces & Brass Inlays", percentage: 14, icon: Gem, color: "var(--color-gold-accent)" }
    ],
    scope: [
      "Acoustic wood wall panelling with hidden wiring channels",
      "Floating marble/granite media console with soft drawers",
      "Layered ceiling lighting with dimmable scene control",
      "Custom-manufactured sectional sofas & accent chairs",
      "Floor-to-ceiling drapery in textured linen-wool blends"
    ],
    highlights: [
      { title: "Acoustic Comfort", desc: "Slatted timber panelling that eliminates ambient room echo." },
      { title: "Sculptural Focus", desc: "Bookmatched stone TV backdrop serving as a living room artwork." },
      { title: "Fluid Atmosphere", desc: "Dimmable lighting scenes transitioning seamlessly from day to night." }
    ],
    upgrades: [
      "Concealed Bio-Ethanol Fireplace Insert",
      "Backlit Translucent Onyx Cocktail Bar",
      "Motorized Motorized Curved Drapery System"
    ],
    timeline: "6 – 10 Weeks (Design to Styling)",
    timelinePhases: [
      { phase: "Weeks 1–2", detail: "Furniture Ergonomics & Material Swatch Sign-Off" },
      { phase: "Weeks 3–6", detail: "Off-Site Panelling Millwork & Sofa Frame Upholstery" },
      { phase: "Weeks 7–9", detail: "On-Site Wall Cladding, Ceiling Work & Fixture Mounting" },
      { phase: "Week 10", detail: "Art Curation, Soft Furnishing & White-Glove Handover" }
    ],
    inspiration: [
      { name: "Bandra West Duplex Lounge", location: "Mumbai", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80" },
      { name: "Dona Paula View Pavilion", location: "Goa", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: "bedroom-suite",
    title: "Master Bedroom Suite",
    icon: BedDouble,
    tag: "PRIVATE RETREATS",
    tagline: "Serene Sanctuaries Tailored for Deep Rest & Refined Personal Style",
    overview: "Crafting intimate bedroom retreats featuring upholstered headboards, walk-in closets with LED illuminated hanging rods, leather-wrapped handles, acoustic wall panels, and vanity desks.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85",
    defaultAreaSqFt: 380,
    unitName: "Suite Area (Sq. Ft.)",
    presets: [
      { label: "Guest Suite", area: 220 },
      { label: "Master Suite", area: 380 },
      { label: "Grand Royal Suite", area: 620 }
    ],
    tiers: {
      curated: {
        name: "Serene Rest",
        ratePerSqFt: 2300,
        badge: "RESTFUL ELEGANCE",
        summary: "Fabric padded headboard wall, BWR ply wardrobes, warm nightstand sconces, and hardwood laminate flooring.",
        keyIncludes: ["Custom Fabric Padded Headboard", "BWR Ply Wardrobe in Matte Finish", "Warm Nightstand Architectural Sconces", "High-Traffic Hardwood Laminate Floor"]
      },
      signature: {
        name: "Signature Master",
        ratePerSqFt: 3600,
        badge: "MOST POPULAR",
        summary: "Full-height upholstered wall, glass-door walk-in closet with sensor LEDs, leather accents, and solid oak flooring.",
        keyIncludes: ["Full-Height Fluted Leather Headboard", "Tinted Glass Walk-In Wardrobe Suite", "Sensor-Activated Internal LED Rails", "Natural European Oak Hardwood Flooring"]
      },
      masterpiece: {
        name: "Royal Suite Atelier",
        ratePerSqFt: 5800,
        badge: "ULTRA PRIVACY",
        summary: "Silk-padded wall panels, island dresser with jewelry drawers, acoustic double doors, and automated blackout blinds.",
        keyIncludes: ["Hand-Woven Silk Acoustic Wall Panels", "Central Glass-Top Dresser Island", "Acoustic Leather-Wrapped Double Doors", "Automated Motorized Blackout Blinds"]
      }
    },
    costBreakdown: [
      { category: "Custom Walk-In Closet & Wardrobe Systems", percentage: 42, icon: Hammer, color: "var(--color-gold-accent)" },
      { category: "Headboard Wall, Upholstery & Millwork", percentage: 28, icon: BedDouble, color: "var(--color-gold-accent)" },
      { category: "Hardwood Flooring & Acoustic Panelling", percentage: 18, icon: Gem, color: "var(--color-gold-accent)" },
      { category: "Concealed Night Lighting & Smart Controls", percentage: 12, icon: Zap, color: "var(--color-gold-accent)" }
    ],
    scope: [
      "Floor-to-ceiling bespoke wardrobe system with interior organizers",
      "Upholstered headboard wall with integrated reading lights",
      "Floating vanity dresser with illuminated vanity mirror",
      "Hardwood plank flooring with sound-dampening underlay",
      "Smart nightstand control for drapery & room scene lighting"
    ],
    highlights: [
      { title: "Bespoke Closets", desc: "Custom tinted-glass wardrobe doors with soft sensor illumination." },
      { title: "Tactile Backdrops", desc: "Sound-dampening padded fabric wall behind the master bed." },
      { title: "Circadian Lighting", desc: "Soft 2200K night lighting designed to promote deep, restorative sleep." }
    ],
    upgrades: [
      "Dresser Island with Glass Top & Velvet Ring Drawers",
      "Biometric Motorized Safe in Closet Carcass",
      "Smart Mirror with Weather & Schedule Display"
    ],
    timeline: "6 – 8 Weeks (Fabrication to Assembly)",
    timelinePhases: [
      { phase: "Weeks 1–2", detail: "Closet Organizer Ergonomics & Fabric Selection" },
      { phase: "Weeks 3–5", detail: "Factory Wardrobe Carcass Build & PU Polishing" },
      { phase: "Weeks 6–7", detail: "Site Assembly, Headboard Upholstering & Lighting" },
      { phase: "Week 8", detail: "Final Tuning, Deep Clean & White-Glove Handover" }
    ],
    inspiration: [
      { name: "Malabar Hill Master Retreat", location: "Mumbai", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80" },
      { name: "Kalyani Nagar Suite", location: "Pune", image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: "home-office",
    title: "Executive Home Office & Studio",
    icon: Laptop,
    tag: "CREATIVE FOCUS",
    tagline: "Ergonomic & Acoustically Isolated Workspaces for High Performers",
    overview: "Designing executive home offices that balance productivity with architectural prestige. Featuring acoustic slatted walls, floating walnut executive desks, library shelving, concealed wire management, and video-call lighting.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=85",
    defaultAreaSqFt: 220,
    unitName: "Office Footprint (Sq. Ft.)",
    presets: [
      { label: "Focus Nook", area: 110 },
      { label: "Executive Suite", area: 220 },
      { label: "Creative Studio Suite", area: 380 }
    ],
    tiers: {
      curated: {
        name: "Refined Workspace",
        ratePerSqFt: 2200,
        badge: "PRODUCTIVE ESSENTIAL",
        summary: "Custom laminate desk, open book shelving, integrated wire channels, and warm task lighting.",
        keyIncludes: ["Heavy-Duty Custom Laminate Desk", "Floating Bookshelf Display Units", "Concealed Cable Routing Channels", "Dimmable Architectural Desk Sconce"]
      },
      signature: {
        name: "Executive Atelier",
        ratePerSqFt: 3500,
        badge: "RECOMMENDED",
        summary: "Solid American Walnut desk, fluted acoustic panelling, leather desk inlay, and dimmable 95 CRI video-call lighting.",
        keyIncludes: ["Solid American Walnut Desk Monolith", "Fluted Oak Acoustic Wall Panelling", "Hand-Stitched Leather Desk Inlay Pad", "CRI 95+ Diffused Video Call Lighting"]
      },
      masterpiece: {
        name: "Presidential Studio",
        ratePerSqFt: 5200,
        badge: "PRESIDENTIAL",
        summary: "Motorized sit-stand walnut desk, acoustic double doors, private espresso bar, and biometric file vault.",
        keyIncludes: ["Motorized Concealed Sit-Stand Desk", "Double-Glazed Soundproof Door System", "Concealed Espresso & Refresher Bar", "Biometric Motorized Security Vault"]
      }
    },
    costBreakdown: [
      { category: "Executive Desk & Library Cabinetry", percentage: 42, icon: Hammer, color: "var(--color-gold-accent)" },
      { category: "Acoustic Wall Treatment & Panelling", percentage: 28, icon: ShieldCheck, color: "var(--color-gold-accent)" },
      { category: "Task, Ambient & Broadcast Lighting", percentage: 18, icon: Zap, color: "var(--color-gold-accent)" },
      { category: "Concealed Wire MEP & Smart Controls", percentage: 12, icon: Gem, color: "var(--color-gold-accent)" }
    ],
    scope: [
      "Custom executive desk with concealed power & data hubs",
      "Full-height library unit with integrated LED accent strips",
      "Acoustic slatted wood wall panels for soundproof calls",
      "Calibrated 95 CRI video-conference lighting setup",
      "Concealed storage for printers, shredders & servers"
    ],
    highlights: [
      { title: "Zero Cable Noise", desc: "All power, HDMI, and ethernet cables routed through hidden internal conduits." },
      { title: "Sound Isolation", desc: "Acoustic wall panels providing high sound dampening for private calls." },
      { title: "Broadcast Quality", desc: "Indirect front lighting calibrated for video calls and streams." }
    ],
    upgrades: [
      "Motorized Sit-Stand Executive Walnut Desk Mechanism",
      "Concealed Coffee & Refreshment Station with Quartz Top",
      "Biometric High-Security Document Safe"
    ],
    timeline: "4 – 6 Weeks (Design to Fit-Out)",
    timelinePhases: [
      { phase: "Week 1", detail: "Ergonomic Layout & Wire Conduit Blueprinting" },
      { phase: "Weeks 2–4", detail: "Desk & Library Cabinetry Millwork at Workshop" },
      { phase: "Week 5", detail: "Site Installation, Acoustic Panelling & Lighting" },
      { phase: "Week 6", detail: "Cable Testing, Ergonomic Tuning & Handover" }
    ],
    inspiration: [
      { name: "Santacruz Executive Study", location: "Mumbai", image: "https://images.unsplash.com/photo-1585412727339-54e4ba3bbf93?auto=format&fit=crop&w=800&q=80" },
      { name: "Panjim Creative Director's Studio", location: "Goa", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: "commercial-office",
    title: "Corporate Headquarters & Office",
    icon: Briefcase,
    tag: "COMMERCIAL REAL ESTATE",
    tagline: "High-Performance Workspaces Engineered for Culture, Brand & Productivity",
    overview: "Designing corporate flagships, tech headquarters, and financial suites. Blending acoustic privacy booths, executive boardrooms, reception pavilions, and flexible workstation pods.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
    defaultAreaSqFt: 3500,
    unitName: "Leasable Area (Sq. Ft.)",
    presets: [
      { label: "Boutique Firm", area: 1800 },
      { label: "Corporate HQ", area: 3500 },
      { label: "Enterprise Flagship", area: 8500 }
    ],
    tiers: {
      curated: {
        name: "Corporate Standard",
        ratePerSqFt: 2100,
        badge: "EFFICIENT BUILD",
        summary: "Modular workstation pods, acoustic ceiling tiles, glass conference rooms, and durable carpet tiles.",
        keyIncludes: ["Modular Steel Frame Workstations", "Acoustic Mineral Fiber Ceiling Grid", "Frameless Toughened Glass Partitions", "Heavy-Duty Commercial Carpet Flooring"]
      },
      signature: {
        name: "Signature Corporate HQ",
        ratePerSqFt: 3200,
        badge: "HIGH-IMPACT BRAND",
        summary: "Fluted timber reception wall, smart boardroom with AV integration, phone booths, and linear LED lighting.",
        keyIncludes: ["Fluted Timber Reception Counter", "Smart Boardroom with Integrated AV", "Acoustic Fabric Phone Booth Pods", "Custom Linear Continuous LED Circuits"]
      },
      masterpiece: {
        name: "Enterprise Monolith HQ",
        ratePerSqFt: 4800,
        badge: "WORLD-CLASS HQ",
        summary: "Curved marble reception counter, acoustic wood ceilings, motorized privacy glass, and biometric access control.",
        keyIncludes: ["Curved Statuario Marble Reception Desk", "Acoustic Perforated Wood Ceiling Panels", "Switchable Electrochromic Glass Walls", "Biometric & RFID Security Matrix"]
      }
    },
    costBreakdown: [
      { category: "Partitions, Ceilings & Glass Work", percentage: 35, icon: Hammer, color: "var(--color-gold-accent)" },
      { category: "Workstations, Boardroom & Joinery", percentage: 30, icon: Briefcase, color: "var(--color-gold-accent)" },
      { category: "HVAC Ducted Systems & MEP", percentage: 22, icon: Zap, color: "var(--color-gold-accent)" },
      { category: "AV, Data Infrastructure & Access Security", percentage: 13, icon: ShieldCheck, color: "var(--color-gold-accent)" }
    ],
    scope: [
      "Reception lounge with branded feature wall & stone counter",
      "Executive boardroom with integrated video-conferencing AV",
      "Open-plan modular workstations with power/data channelling",
      "Acoustic phone booths for private calls & one-on-ones",
      "Cafeteria & employee lounge with durable surfaces"
    ],
    highlights: [
      { title: "Brand Reflection", desc: "Reception statement counters designed to embody your company identity." },
      { title: "Acoustic Balance", desc: "Combining phone booths and acoustic ceiling grids to maintain quiet focus." },
      { title: "Future-Proof MEP", desc: "Over-engineered power, data, and ducted HVAC infrastructure." }
    ],
    upgrades: [
      "Electrochromic Switchable Privacy Glass for Boardroom",
      "Biometric Access Control with Attendance Analytics",
      "Acoustic Baffle Ceiling Matrix with Dimmable Circuits"
    ],
    timeline: "8 – 14 Weeks (Civil to Handover)",
    timelinePhases: [
      { phase: "Weeks 1–2", detail: "Layout Optimization, MEP & Municipal NOC Approvals" },
      { phase: "Weeks 3–8", detail: "HVAC Ducting, False Ceiling & Glass Partition Framing" },
      { phase: "Weeks 9–12", detail: "Workstation Fitting, AV Wiring & Reception Stonework" },
      { phase: "Weeks 13–14", detail: "Testing, Commissioning, Deep Clean & Handover" }
    ],
    inspiration: [
      { name: "BKC Financial Headquarters", location: "Mumbai", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80" },
      { name: "Viman Nagar Tech Hub", location: "Pune", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: "retail-showroom",
    title: "Luxury Retail Flagship & Showroom",
    icon: Store,
    tag: "HIGH-CONVERSION RETAIL",
    tagline: "Immersive Retail Environments Engineered to Drive Brand Prestige",
    overview: "Engineering luxury retail flagships, boutique stores, and automotive showrooms. Featuring high-CRI spotlighting, custom glass display vitrines, terrazzo floors, and VIP private salons.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=85",
    defaultAreaSqFt: 1800,
    unitName: "Display Area (Sq. Ft.)",
    presets: [
      { label: "Boutique Store", area: 800 },
      { label: "Retail Flagship", area: 1800 },
      { label: "Grand Showroom", area: 4200 }
    ],
    tiers: {
      curated: {
        name: "Retail Essential",
        ratePerSqFt: 2500,
        badge: "HIGH TRAFFIC",
        summary: "Custom display wall shelving, high-CRI track lighting, durable vitrified flooring, and cash counter.",
        keyIncludes: ["Custom Powder-Coated Metal Display Shelving", "High-CRI 90+ LED Track Spotlight Matrix", "Large Format Anti-Skid Vitrified Floor Tiles", "Minimalist Cash & Checkout Counter"]
      },
      signature: {
        name: "Signature Boutique",
        ratePerSqFt: 3800,
        badge: "LUXURY CHOICE",
        summary: "Fluted wood panelling, brassvitrine cabinets, seamless terrazzo floor, and VIP fitting salon.",
        keyIncludes: ["Fluted Timber Wall Panelling & Niches", "Ultra-Clear Glass Vitrines with Brass Trims", "Monolithic Seamless Terrazzo Flooring", "Private VIP Client Fitting Lounge"]
      },
      masterpiece: {
        name: "Flagship Monolith",
        ratePerSqFt: 5800,
        badge: "WORLD-CLASS RETAIL",
        summary: "Curved marble facade, motorized window displays, micro-cement flooring, and smart fitting room lighting.",
        keyIncludes: ["Curved Backlit Marble Facade Cladding", "Motorized Rotating Window Display Platforms", "Seamless Industrial Micro-Cement Flooring", "Smart Fitting Rooms with Adjustable Scene Lighting"]
      }
    },
    costBreakdown: [
      { category: "Display Vitrines, Shelving & Cabinetry", percentage: 40, icon: Store, color: "var(--color-gold-accent)" },
      { category: "High-CRI Retail Spotlighting & Facade", percentage: 28, icon: Zap, color: "var(--color-gold-accent)" },
      { category: "Terrazzo / Micro-Cement Stonework", percentage: 20, icon: Gem, color: "var(--color-gold-accent)" },
      { category: "MEP, Security & POS Integration", percentage: 12, icon: ShieldCheck, color: "var(--color-gold-accent)" }
    ],
    scope: [
      "Facade storefront design with illuminated brand logo",
      "High-CRI track lighting matrix to enhance product colors",
      "Bespoke glass vitrines & brass-trimmed display pedestals",
      "VIP client consultation lounge with luxury seating",
      "POS cash counter with concealed security storage"
    ],
    highlights: [
      { title: "True Color Accuracy", desc: "95+ CRI track spotlights that display product colors vividly." },
      { title: "Tactile Luxury", desc: "Brass, velvet, and marble detailing that elevate brand value." },
      { title: "Flow Optimization", desc: "Strategic circulation paths guiding customers naturally through collections." }
    ],
    upgrades: [
      "Motorized Rotating Window Display Turntable",
      "Smart Fitting Rooms with Touchscreen Ambiance Control",
      "Integrated Anti-Theft Security Sensor Matrix"
    ],
    timeline: "6 – 10 Weeks (Design to Opening)",
    timelinePhases: [
      { phase: "Weeks 1–2", detail: "Store Circulation Layout & Facade Permit Filings" },
      { phase: "Weeks 3–6", detail: "Display Vitrine Off-Site Fabrication & Flooring" },
      { phase: "Weeks 7–9", detail: "Track Lighting Rigging, Facade Cladding & Fitting" },
      { phase: "Week 10", detail: "Merchandising Alignment, Testing & Grand Opening" }
    ],
    inspiration: [
      { name: "Linking Road Luxury Flagship", location: "Mumbai", image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80" },
      { name: "Koregaon Park Boutique Store", location: "Pune", image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: "bespoke-furniture",
    title: "Bespoke Furniture & Joinery",
    icon: Hammer,
    tag: "GUILD CRAFTSMANSHIP",
    tagline: "Custom Timber Joinery Manufactured Direct From Our Factory Guild",
    overview: "Manufacturing 100% custom furniture pieces directly from our guild facility. Solid teak dining tables, fluted walnut partition walls, walk-in wardrobes, credenzas, and vanity units engineered to 0.5mm precision.",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1600&q=85",
    defaultAreaSqFt: 100,
    unitName: "Custom Order Units",
    presets: [
      { label: "Single Hero Piece", area: 1 },
      { label: "Dining & Living Suite", area: 4 },
      { label: "Full Home Joinery Package", area: 12 }
    ],
    tiers: {
      curated: {
        name: "Essential Joinery",
        ratePerSqFt: 1800,
        badge: "HANDCRAFTED",
        summary: "BWR ply core, natural teak veneers, PU clear coats, and Blum soft-close hardware.",
        keyIncludes: ["100% BWR Marine Grade Plywood Base", "Natural Teak Veneer Surface Lamination", "Polyurethane Clear Protective Polish", "Blum Soft-Close Concealed Hinges"]
      },
      signature: {
        name: "Master Guild Joinery",
        ratePerSqFt: 2900,
        badge: "HERITAGE CHOICE",
        summary: "Solid Burmese Teak, fluted walnut surfaces, brass inlay accents, and hand-rubbed oil finish.",
        keyIncludes: ["Solid Seasoned Burmese Teak Hardwood", "Fluted American Walnut Architectural Fronts", "Hand-Inlaid Solid Brass Detailing Lines", "Natural Organic Hand-Rubbed Oil Polish"]
      },
      masterpiece: {
        name: "Sculptural Monolith",
        ratePerSqFt: 4600,
        badge: "ARTISANAL MONOLITH",
        summary: "Single-slab live edge wood, bookmatched marble top, hand-carved details, and hidden biometric locks.",
        keyIncludes: ["Single-Slab Live Edge Rare Hardwood", "Bookmatched Italian Marble Surface Top", "Hand-Carved Sculptural Relief Details", "Concealed Biometric Electronic Lock"]
      }
    },
    costBreakdown: [
      { category: "Solid Timber & Veneer Procurement", percentage: 45, icon: Hammer, color: "var(--color-gold-accent)" },
      { category: "Master Artisan Hand-Joinery & CNC", percentage: 30, icon: ShieldCheck, color: "var(--color-gold-accent)" },
      { category: "PU Coating & Multi-Stage Polishing", percentage: 15, icon: Gem, color: "var(--color-gold-accent)" },
      { category: "German Hardware & White-Glove Fitting", percentage: 10, icon: Zap, color: "var(--color-gold-accent)" }
    ],
    scope: [
      "Custom 3D CAD modeling & grain selection approval",
      "Kiln-dried seasoned hardwoods resistant to warping",
      "Traditional mortise-and-tenon joinery combined with CNC precision",
      "Multi-stage polyurethane or natural oil finish",
      "White-glove delivery, assembly & site positioning"
    ],
    highlights: [
      { title: "Generational Longevity", desc: "Built with seasoned hardwoods engineered to endure climate shifts." },
      { title: "Uncompromising Grain", desc: "Client approval of raw timber slabs before polishing." },
      { title: "10-Year Warranty", desc: "Guaranteed structural integrity for a decade." }
    ],
    upgrades: [
      "Single-Slab Live-Edge Walnut Dining Table Top",
      "Concealed Biometric Drawer Compartment",
      "Integrated Soft-Touch LED Under-Lighting"
    ],
    timeline: "3 – 6 Weeks (Factory Crafted)",
    timelinePhases: [
      { phase: "Week 1", detail: "3D CAD Technical Drafting & Timber Selection" },
      { phase: "Weeks 2–4", detail: "Kiln-Drying, Precision CNC & Hand Finishing" },
      { phase: "Week 5", detail: "PU Coating & Quality Guild Inspection" },
      { phase: "Week 6", detail: "White-Glove Site Fitting & Polishing" }
    ],
    inspiration: [
      { name: "Handcrafted Teak Dining Monolith", location: "Mumbai Studio", image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80" },
      { name: "Fluted Walnut Architectural Wall", location: "Goa Villa", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" }
    ]
  }
];

export default INVESTMENT_CATEGORIES;
