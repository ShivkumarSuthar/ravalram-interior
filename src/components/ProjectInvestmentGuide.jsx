import { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  Compass,
  ShieldCheck,
  ChevronRight,
  Eye,
  X,
  Sliders,
  Layers,
  Building,
  Calculator,
  PieChart,
  Gem,
  Check,
  Zap,
  Search,
  Copy,
  SlidersHorizontal
} from "lucide-react";
import { INVESTMENT_CATEGORIES as EXTERNAL_INVESTMENT_CATEGORIES } from "../lib/investment-data.js";

const INVESTMENT_CATEGORIES = EXTERNAL_INVESTMENT_CATEGORIES;
const DUMMY_OLD_ARRAY = []; /*
  {
    id: "full-home",
    title: "Full Home Interior",
    icon: Home,
    tag: "TURNKEY RESIDENTIAL",
    tagline: "Comprehensive Architectural Synthesis for Multi-Generational Living",
    overview: "An end-to-end spatial metamorphosis that aligns structural architecture with bespoke timber joinery, curated Italian stones, and automated climate systems. Designed for complete lifestyle integration.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
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
        name: "Estate Luxury",
        ratePerSqFt: 3000,
        badge: "GRAND STANDARD",
        summary: "Fluted timber wall cladding, custom marble flooring, double-height chandelier wiring, and teak patio features.",
        keyIncludes: ["Fluted Wood Wall Cladding", "Italian Marble Floor Inlays", "Teak Courtyard Louvers", "Dimmable High-CCT Lighting"]
      },
      signature: {
        name: "Signature Villa",
        ratePerSqFt: 4200,
        badge: "MOST POPULAR",
        summary: "Double-height teak wall cladding, waterjet marble floor inlays, zero-threshold glass facades, and master spa bathrooms.",
        keyIncludes: ["Double-Height Teak Cladding", "Waterjet Marble Foyer Inlays", "Zero-Threshold Sliding Glass Facades", "Private Spa Bath Suites"]
      },
      masterpiece: {
        name: "Monumental Estate",
        ratePerSqFt: 5800,
        badge: "ULTRA LUXURY",
        summary: "Glass elevator exterior cladding, teak infinity pool decking, climate-controlled cigar rooms, and private cinema lounges.",
        keyIncludes: ["Glass Elevator Cladding", "Teak Decking & Infinity Lounges", "Cigar & Wine Tasting Room", "Private Cinema Acoustics"]
      }
    },
    costBreakdown: [
      { category: "Monumental Timber Joinery & Staircases", percentage: 40, icon: Hammer, color: "var(--color-gold-accent)" },
      { category: "Waterjet Stone, Marble & Facades", percentage: 30, icon: Gem, color: "var(--color-gold-accent)" },
      { category: "Automation, Cinema & Courtyard MEP", percentage: 18, icon: Zap, color: "var(--color-gold-accent)" },
      { category: "Architectural Supervision & Styling", percentage: 12, icon: ShieldCheck, color: "var(--color-gold-accent)" }
    ],
    scope: [
      "Double-height living pavilion & mezzanine spatial design",
      "Master sanctuary suite with private dressing room & spa bath",
      "Private entertainment lounge with acoustics & automated screen",
      "Landscape courtyard transition & teak outdoor pergolas",
      "Complete home automation with climate & security integration"
    ],
    highlights: [
      { title: "Monumental Joinery", desc: "Hand-carved teak wall cladding spanning double-height volumes." },
      { title: "Seamless Terraces", desc: "Zero-threshold sliding doors bridging living rooms to private gardens." },
      { title: "Artisanal Masonry", desc: "Waterjet-cut marble floor inlays custom designed for grand foyers." }
    ],
    upgrades: [
      "Private Glass Elevator Exterior Cladding",
      "Outdoor Infinity Pool Decking in Teak Wood",
      "Temperature-Controlled Cigar & Wine Room"
    ],
    timeline: "18 – 28 Weeks",
    timelinePhases: [
      { phase: "Weeks 1–4", detail: "Architectural Concept & Material Curation" },
      { phase: "Weeks 5–14", detail: "Civil Alterations & Factory Production" },
      { phase: "Weeks 15–24", detail: "Grand Assembly, Stone & Lighting Setup" },
      { phase: "Weeks 25–28", detail: "Landscape Integration & Final Polish" }
    ],
    inspiration: [
      { name: "Candolim Oceanfront Estate", location: "Goa", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" },
      { name: "Lonavala Hill Villa", location: "Lonavala", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: "kitchen-design",
    title: "Kitchen Design",
    icon: UtensilsCrossed,
    tag: "CULINARY ARCHITECTURE",
    tagline: "Ergonomic High-Performance Culinary Workspaces",
    overview: "Where German precision hardware meets Italian porcelain slabs and custom teak cabinetry. Engineered for smooth workflow, concealed appliances, and effortless maintenance during heavy culinary activity.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85",
    defaultAreaSqFt: 220,
    unitName: "Kitchen Floor Area (Sq. Ft.)",
    presets: [
      { label: "Compact L-Shape", area: 150 },
      { label: "Standard Parallel", area: 220 },
      { label: "Large Island Hub", area: 380 }
    ],
    tiers: {
      curated: {
        name: "Ergonomic Craft",
        ratePerSqFt: 3500,
        badge: "PERFORMANCE",
        summary: "Blum soft-close hardware, 12mm engineered quartz tops, acrylic anti-fingerprint shutters, and LED under-cabinet strips.",
        keyIncludes: ["Blum Soft-Close Drawers", "12mm Quartz Countertops", "Anti-Fingerprint Acrylic Shutters", "LED Task Lighting Strips"]
      },
      signature: {
        name: "Signature Culinary",
        ratePerSqFt: 5500,
        badge: "MOST POPULAR",
        summary: "Blum Servo-Drive electronic touch drawers, 12mm sintered quartzite slabs, pocket door appliance garage, and downdraft hood.",
        keyIncludes: ["Blum Servo-Drive Touch Drawers", "12mm Sintered Quartzite Slabs", "Concealed Pocket Appliance Garage", "Integrated Downdraft Induction Hood"]
      },
      masterpiece: {
        name: "Chef's Monolith",
        ratePerSqFt: 8500,
        badge: "ULTRA LUXURY",
        summary: "Waterfall quartzite island, motorized appliance garage, built-in wine chiller, and touchless boiling water dispenser.",
        keyIncludes: ["Waterfall Quartzite Island", "Motorized Appliance Garage", "Built-In Dual Zone Wine Chiller", "Touchless Instant Boiling Tap"]
      }
    },
    costBreakdown: [
      { category: "German Hardware & Servo-Drive Systems", percentage: 35, icon: Hammer, color: "var(--color-gold-accent)" },
      { category: "12mm Sintered Stone Countertops & Backsplash", percentage: 32, icon: Gem, color: "var(--color-gold-accent)" },
      { category: "Concealed Appliance Fit-Out & Plumbing", percentage: 20, icon: Zap, color: "var(--color-gold-accent)" },
      { category: "Factory PU Shutter Fabrication & Fitting", percentage: 13, icon: ShieldCheck, color: "var(--color-gold-accent)" }
    ],
    scope: [
      "Precision ergonomic work-triangle planning (Preparation, Cooking, Wash)",
      "Custom island with waterfall edge stone & breakfast bar",
      "Full-height pull-out pantry with internal LED sensor strips",
      "Hydrophobic anti-fingerprint acrylic/matte lacquer shutter finishes",
      "Integrated dishwasher, built-in oven, & hidden trash sorters"
    ],
    highlights: [
      { title: "Touchless Motion", desc: "Motorized push-to-open wall units for uninterrupted minimal facades." },
      { title: "Indestructible Surfaces", desc: "12mm porcelain tops impervious to heat, acid, and scratches." },
      { title: "Custom Spice & Cutlery Trays", desc: "Solid walnut insert drawers contoured for precise utility." }
    ],
    upgrades: [
      "Automated Motorized Pocket Appliance Garage",
      "Under-Counter Dual Zone Wine Chiller",
      "Touchless Sensor Faucets with Instant Boiling Water Dispenser"
    ],
    timeline: "5 – 8 Weeks",
    timelinePhases: [
      { phase: "Weeks 1–2", detail: "Site Survey & Appliance Spec Lock" },
      { phase: "Weeks 3–5", detail: "German Factory Precision Fabrication" },
      { phase: "Weeks 6–7", detail: "Site Assembly & Plumbing Hookups" },
      { phase: "Week 8", detail: "Calibration & Seamless Testing" }
    ],
    inspiration: [
      { name: "Juhu Minimalist Monolith Kitchen", location: "Mumbai", image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80" },
      { name: "Bandra Chef's Culinary Hub", location: "Mumbai", image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: "bathroom-renovation",
    title: "Bathroom Renovation",
    icon: Bath,
    tag: "SPA & WELLNESS",
    tagline: "Private Sanctuary Spaces Infused with Hydrotherapy & Natural Stone",
    overview: "Transforming standard bath enclosures into private wellness retreats. Integrating concealed thermostatic rain showers, heated fogless mirrors, custom stone basins, and warm acoustic timber ceilings.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85",
    defaultAreaSqFt: 120,
    unitName: "Sanctuary Area (Sq. Ft.)",
    presets: [
      { label: "Master En-Suite", area: 120 },
      { label: "Spa Sanctuary", area: 220 },
      { label: "Twin Bath Suite", area: 350 }
    ],
    tiers: {
      curated: {
        name: "Wellness Bath",
        ratePerSqFt: 3800,
        badge: "REFINED",
        summary: "Large format porcelain tiles, concealed cisterns, floating teak vanities, and anti-fog LED mirrors.",
        keyIncludes: ["Large Format Porcelain Cladding", "Concealed Cistern Wall Toilets", "Floating Teak Vanity", "Touchless Anti-Fog Mirrors"]
      },
      signature: {
        name: "Signature Spa Suite",
        ratePerSqFt: 6200,
        badge: "MOST POPULAR",
        summary: "Book-matched Italian marble slabs, multi-jet thermostatic showers, custom stone basins, and trench drains.",
        keyIncludes: ["Book-Matched Italian Marble Slabs", "Thermostatic Multi-Jet Rain Showers", "Fluted Natural Teak Vanity", "Tile-Insert Trench Drainage"]
      },
      masterpiece: {
        name: "Aromatherapy Pavilion",
        ratePerSqFt: 9500,
        badge: "ULTRA LUXURY",
        summary: "Aromatherapy steam generator engine, in-floor electrical heating, freestanding cast stone tub, and Dornbracht brassware.",
        keyIncludes: ["Aromatherapy Steam Generator", "In-Floor Electrical Heating Mesh", "Freestanding Cast Stone Soaking Tub", "Dornbracht Concealed Brassware"]
      }
    },
    costBreakdown: [
      { category: "Italian Marble Slabs & Waterproofing", percentage: 38, icon: Gem, color: "var(--color-gold-accent)" },
      { category: "Thermostatic Brassware & Sanitary Fixtures", percentage: 30, icon: Zap, color: "var(--color-gold-accent)" },
      { category: "Custom Fluted Teak Vanity & Mirror Cabinets", percentage: 20, icon: Hammer, color: "var(--color-gold-accent)" },
      { category: "Plumbing Pressure Test & Waterproof Warranty", percentage: 12, icon: ShieldCheck, color: "var(--color-gold-accent)" }
    ],
    scope: [
      "Complete waterproofing overhaul with 10-year warranty bond",
      "Floor-to-ceiling large format porcelain or marble cladding",
      "Floating vanity with custom stone basin & touchless anti-fog mirror",
      "Trench drain integration for seamless zero-step shower floors",
      "Concealed cistern toilets with bidet functions & ambient nightlight"
    ],
    highlights: [
      { title: "Linear Drainage", desc: "Tile-insert drains that render shower floors completely flat and continuous." },
      { title: "Thermostatic Comfort", desc: "Precision water temperature memory with dual rain and waterfall showerheads." },
      { title: "Tactile Vanity", desc: "Fluted natural teak vanity drawers with moisture-resistant sealant." }
    ],
    upgrades: [
      "Integrated Steam Shower Generator Engine",
      "In-Floor Electrical Heating Mesh",
      "Freestanding Cast Stone Soaking Tub"
    ],
    timeline: "4 – 6 Weeks",
    timelinePhases: [
      { phase: "Week 1", detail: "Civil Demolition & Multi-Layer Waterproofing" },
      { phase: "Weeks 2–3", detail: "Plumbing Pressure Test & Large Format Tiling" },
      { phase: "Week 4", detail: "Vanity & Glass Partition Fitting" },
      { phase: "Weeks 5–6", detail: "Concealed Fixture Testing & Deep Polish" }
    ],
    inspiration: [
      { name: "Altamount Road Spa Bath", location: "Mumbai", image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80" },
      { name: "Boat Club Road Wellness Bath", location: "Pune", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: "living-room-interior",
    title: "Living Room Interior",
    icon: Sofa,
    tag: "SOCIAL PAVILION",
    tagline: "Grand Reception Spaces Engineered for Hospitality & Intimate Relaxation",
    overview: "The heart of your home designed to make an indelible statement. Harmonizing bespoke seating arrangements, media wall joinery, concealed acoustics, and dramatic architectural lighting.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    defaultAreaSqFt: 600,
    unitName: "Lounge Area (Sq. Ft.)",
    presets: [
      { label: "Compact Lounge", area: 350 },
      { label: "Standard Pavilion", area: 600 },
      { label: "Grand Double-Height", area: 1100 }
    ],
    tiers: {
      curated: {
        name: "Lounge Refined",
        ratePerSqFt: 2200,
        badge: "ELEGANT",
        summary: "Custom fabric sectional sofa, veneer accent wall, concealed media cabinet, and dimmable cove lighting.",
        keyIncludes: ["Custom Fabric Sectional Sofa", "Veneer Feature Wall Cladding", "Concealed Wiring Media Cabinet", "Layered Cove LED Lighting"]
      },
      signature: {
        name: "Signature Lounge",
        ratePerSqFt: 3400,
        badge: "MOST POPULAR",
        summary: "Italian bouclé sectional seating, fluted wood panelling, marble slab media wall, and linear architectural chandelier.",
        keyIncludes: ["Liquid-Repellent Bouclé Sectional", "Fluted Timber Wall Panelling", "Marble Slab Media Feature Wall", "Designer Linear Chandelier"]
      },
      masterpiece: {
        name: "Social Pavilion",
        ratePerSqFt: 5200,
        badge: "ULTRA LUXURY",
        summary: "Bio-ethanol fireplace feature wall, motorized hidden bar cabinet, hand-tufted silk rug, and invisible acoustic speakers.",
        keyIncludes: ["Bio-Ethanol Fireplace Wall", "Motorized Quartz Bar Unit", "Custom Hand-Tufted Silk Area Rug", "Concealed Architectural Audio"]
      }
    },
    costBreakdown: [
      { category: "Custom Sectional Seating & Upholstery", percentage: 35, icon: Hammer, color: "var(--color-gold-accent)" },
      { category: "Acoustic Wall Panelling & Stone Feature Walls", percentage: 32, icon: Gem, color: "var(--color-gold-accent)" },
      { category: "Architectural Lighting & AV Engineering", percentage: 20, icon: Zap, color: "var(--color-gold-accent)" },
      { category: "Curated Tables, Rugs & Motorized Drapery", percentage: 13, icon: ShieldCheck, color: "var(--color-gold-accent)" }
    ],
    scope: [
      "Custom architectural feature wall with stone/veneer panelling",
      "Ergonomic modular sectional seating upholstered in liquid-repellent bouclé",
      "Concealed entertainment hub housing AV equipment & ambient lighting",
      "Custom coffee tables with brass accents & natural quartzite tops",
      "Motorized window drapery with warm lighting cove details"
    ],
    highlights: [
      { title: "Acoustic Warmth", desc: "Panelling lined with sound-dampening felt to create calm, intimate acoustics." },
      { title: "Hidden Technology", desc: "Zero visible cables with motor-operated TV panels and invisible ceiling speakers." },
      { title: "Layered Ambiance", desc: "Multiple lighting circuits allowing one-touch transitions from day to evening lounge mode." }
    ],
    upgrades: [
      "Bio-Ethanol Fireplace Feature Wall",
      "Motorized Hidden Bar Cabinet with Quartz Counters",
      "Custom Hand-Tufted Silk & Wool Area Rug"
    ],
    timeline: "6 – 9 Weeks",
    timelinePhases: [
      { phase: "Weeks 1–2", detail: "Spatial Layout & Fabric Curation" },
      { phase: "Weeks 3–6", detail: "Panelling & Custom Sofa Crafting" },
      { phase: "Weeks 7–8", detail: "On-Site Cladding & AV Wiring" },
      { phase: "Week 9", detail: "Drapery, Rug Placement & Styling" }
    ],
    inspiration: [
      { name: "Bandra West Duplex Lounge", location: "Mumbai", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80" },
      { name: "Dona Paula View Pavilion", location: "Goa", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: "bedroom-interior",
    title: "Bedroom Interior",
    icon: BedDouble,
    tag: "RESTFUL SANCTUARIES",
    tagline: "Serene Private Retreats Designed Around Circadian Comfort & Tactile Luxury",
    overview: "Crafting restful sanctuaries where every touchpoint encourages tranquility. Featuring custom upholstered headboards, integrated nightstand lighting, walk-in dressing suites, and acoustic serenity.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85",
    defaultAreaSqFt: 350,
    unitName: "Suite Floor Area (Sq. Ft.)",
    presets: [
      { label: "Guest Retreat", area: 220 },
      { label: "Master Suite", area: 350 },
      { label: "Presidential Haven", area: 650 }
    ],
    tiers: {
      curated: {
        name: "Sanctuary Rest",
        ratePerSqFt: 2500,
        badge: "PEACEFUL",
        summary: "Padded fabric headboard, full-height wardrobe with soft-close drawers, dimmable reading lamps, and blackout curtains.",
        keyIncludes: ["Custom Upholstered Headboard", "Full-Height Soft-Close Wardrobe", "Integrated Nightstand Lighting", "100% Light Blackout Drapery"]
      },
      signature: {
        name: "Signature Suite",
        ratePerSqFt: 3800,
        badge: "MOST POPULAR",
        summary: "Custom leather/fabric headboard panelling, glass-front walk-in dressing suite, suede accessory drawers, and circadian cove lighting.",
        keyIncludes: ["Tactile Leather Headboard Wall", "Glass Walk-In Dressing Suite", "Velvet & Suede Accessory Drawers", "Circadian Warm Lighting Controls"]
      },
      masterpiece: {
        name: "Master Haven",
        ratePerSqFt: 5500,
        badge: "ULTRA LUXURY",
        summary: "Automated pop-up TV bed footboard, biometric jewelry vault, private coffee barette unit, and acoustic wall panels.",
        keyIncludes: ["Automated Pop-Up TV Footboard", "Biometric Jewelry & Document Vault", "Private Coffee & Refreshment Unit", "Studio Acoustic Sound Dampening"]
      }
    },
    costBreakdown: [
      { category: "Glass Walk-In Wardrobes & Millwork", percentage: 40, icon: Hammer, color: "var(--color-gold-accent)" },
      { category: "Custom Bedstead & Tactile Headboard Panelling", percentage: 28, icon: Gem, color: "var(--color-gold-accent)" },
      { category: "Circadian Lighting & Smart Ambiance", percentage: 18, icon: Zap, color: "var(--color-gold-accent)" },
      { category: "Acoustic Wall Insulation & Blackout Drapery", percentage: 14, icon: ShieldCheck, color: "var(--color-gold-accent)" }
    ],
    scope: [
      "Custom king bedstead with floating nightstands and integrated reading lamps",
      "Full-height wardrobe with glass doors, sensor illumination, & suede accessory drawers",
      "Architectural ceiling cove with dimmable warm 2700K indirect lighting",
      "Private dressing table unit with illuminated anti-glare vanity mirror",
      "Acoustic curtain track system for 100% light blackout during sleep"
    ],
    highlights: [
      { title: "Circadian Lighting", desc: "Automated light temperature shifts that mimic natural dawn and dusk cycles." },
      { title: "Tactile Panelling", desc: "Padded fabric and leather headboard walls that absorb ambient sound." },
      { title: "Precision Dressing", desc: "Custom velvet inserts for watches, jewelry, and bespoke wardrobe organization." }
    ],
    upgrades: [
      "Automated Pop-Up TV Bed Footboard",
      "Biometric Jewelry & Document Safe",
      "Integrated Private Coffee Barette Unit"
    ],
    timeline: "6 – 8 Weeks",
    timelinePhases: [
      { phase: "Weeks 1–2", detail: "Ergonomic Layout & Textile Selection" },
      { phase: "Weeks 3–5", detail: "Wardrobe & Headboard Manufacturing" },
      { phase: "Weeks 6–7", detail: "Site Installation & Lighting Fitment" },
      { phase: "Week 8", detail: "Bedding Setup & White-Glove Handover" }
    ],
    inspiration: [
      { name: "Malabar Hill Master Retreat", location: "Mumbai", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80" },
      { name: "Kalyani Nagar Suite", location: "Pune", image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: "home-office",
    title: "Home Office",
    icon: Laptop,
    tag: "EXECUTIVE STUDY",
    tagline: "High-Focus Executive Studies & Creative Media Hubs",
    overview: "Designing productive environments that seamlessly balance executive presence, video-conference lighting, ergonomic seating, and quiet acoustic insulation.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=85",
    defaultAreaSqFt: 250,
    unitName: "Executive Study Area (Sq. Ft.)",
    presets: [
      { label: "Compact Study", area: 160 },
      { label: "Executive Suite", area: 250 },
      { label: "Director Library", area: 450 }
    ],
    tiers: {
      curated: {
        name: "Focus Studio",
        ratePerSqFt: 2200,
        badge: "PRODUCTIVE",
        summary: "Custom desk with cable conduits, bookshelf with display LED strips, task lighting, and sound-absorbing curtains.",
        keyIncludes: ["Concealed Cable Routing Desk", "Glass Display Bookshelf", "High-CRI Task Lighting", "Sound-Absorbing Curtains"]
      },
      signature: {
        name: "Signature Executive",
        ratePerSqFt: 3600,
        badge: "MOST POPULAR",
        summary: "Solid walnut executive desk, acoustic wood slat wall panelling, studio-grade video lighting, and concealed tech cabinet.",
        keyIncludes: ["Solid Walnut Executive Desk", "Acoustic Wood Slat Panelling", "4000K Studio Video Lighting", "Concealed Router & Tech Hub"]
      },
      masterpiece: {
        name: "Director's Sanctuary",
        ratePerSqFt: 5200,
        badge: "ULTRA LUXURY",
        summary: "Motorized height-adjustable teak desk, espresso barette station, fingerprint document cabinet, and soundproofed doors.",
        keyIncludes: ["Motorized Height-Adjustable Teak Desk", "Built-In Espresso Barette Station", "Fingerprint-Secured Document Cabinet", "35dB Soundproof Gasketed Door"]
      }
    },
    costBreakdown: [
      { category: "Executive Desk & Library Bookcases", percentage: 42, icon: Hammer, color: "var(--color-gold-accent)" },
      { category: "Acoustic Wood Slat Wall Insulation", percentage: 26, icon: Gem, color: "var(--color-gold-accent)" },
      { category: "High-CRI Video Lighting & Wire Management", percentage: 18, icon: Zap, color: "var(--color-gold-accent)" },
      { category: "Ergonomic Layout & Custom Fitting", percentage: 14, icon: ShieldCheck, color: "var(--color-gold-accent)" }
    ],
    scope: [
      "Custom executive desk with integrated power ports & leather writing pad",
      "Floor-to-ceiling library bookshelf with glass display cases & LED strip accents",
      "Acoustic wall treatment engineered for high-clarity video calls",
      "Concealed tech cabinet for network router, printer, and back-up UPS",
      "Ergonomic seating layout with task lighting controls"
    ],
    highlights: [
      { title: "Studio-Grade Lighting", desc: "Diffused 4000K daylight simulation that keeps face illumination flawless on calls." },
      { title: "Zero-Wire Desks", desc: "Internal wire management conduits built directly into desk legs and modesty panels." },
      { title: "Acoustic Isolation", desc: "Double-gasketed doors reducing household noise transmission by up to 35dB." }
    ],
    upgrades: [
      "Motorized Height-Adjustable Teak Desk",
      "Built-In Espresso & Beverage Station",
      "Fingerprint-Secured Document Cabinet"
    ],
    timeline: "4 – 6 Weeks",
    timelinePhases: [
      { phase: "Week 1", detail: "Ergonomic & Tech Requirements Audit" },
      { phase: "Weeks 2–4", detail: "Custom Millwork & Bookcase Assembly" },
      { phase: "Week 5", detail: "Acoustic Panelling & Cable Harnessing" },
      { phase: "Week 6", detail: "Lighting Fine-Tuning & Handover" }
    ],
    inspiration: [
      { name: "Santacruz Executive Study", location: "Mumbai", image: "https://images.unsplash.com/photo-1585412727339-54e4ba3bbf93?auto=format&fit=crop&w=800&q=80" },
      { name: "Panjim Creative Director's Studio", location: "Goa", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: "office-interior",
    title: "Office Interior",
    icon: Briefcase,
    tag: "CORPORATE HEADQUARTERS",
    tagline: "Inspiring Commercial Environments Engineered for Collaboration & Brand Power",
    overview: "Commercial interiors that elevate company culture, showcase brand prestige, and maximize employee focus. Merging open workstation zones with private boardroom acoustic pods.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
    defaultAreaSqFt: 3500,
    unitName: "Office Area (Sq. Ft.)",
    presets: [
      { label: "Boutique Studio", area: 1800 },
      { label: "Corporate HQ", area: 3500 },
      { label: "Flagship HQ", area: 7500 }
    ],
    tiers: {
      curated: {
        name: "Workplace Standard",
        ratePerSqFt: 2200,
        badge: "COMMERCIAL",
        summary: "Modular workstations, glass boardroom partitions, carpet tile flooring, and standard LED panel grids.",
        keyIncludes: ["Modular Bench Workstations", "Glass Boardroom Partitions", "Commercial Carpet Tiles", "Standard MEP & HVAC Wiring"]
      },
      signature: {
        name: "Signature Headquarters",
        ratePerSqFt: 3200,
        badge: "MOST POPULAR",
        summary: "Custom stone reception counter, electrochromic switchable glass, acoustic ceiling baffles, and biophilic moss walls.",
        keyIncludes: ["Custom Stone Reception Desk", "Electrochromic Privacy Glass", "Acoustic Ceiling Baffles", "Biophilic Moss Wall Feature"]
      },
      masterpiece: {
        name: "Executive Flagship",
        ratePerSqFt: 4500,
        badge: "ULTRA LUXURY",
        summary: "Biometric facial access controls, acoustic private phone booths, automated wayfinding screens, and executive dining lounges.",
        keyIncludes: ["Biometric Facial Access Control", "Private Acoustic Phone Booths", "Automated Wayfinding Displays", "VIP Executive Lounge & Bar"]
      }
    },
    costBreakdown: [
      { category: "Glass Partitions, Workstations & Boardrooms", percentage: 38, icon: Hammer, color: "var(--color-gold-accent)" },
      { category: "HVAC Ductwork, MEP, Cabling & Fire Safety", percentage: 28, icon: Zap, color: "var(--color-gold-accent)" },
      { category: "Reception Stone Desk & Brand Features", percentage: 20, icon: Gem, color: "var(--color-gold-accent)" },
      { category: "Statutory Approvals & Site Management", percentage: 14, icon: ShieldCheck, color: "var(--color-gold-accent)" }
    ],
    scope: [
      "Grand reception lobby with custom stone counter & illuminated brand wall",
      "Executive boardrooms with smart glass privacy tinting & integrated conference mic hubs",
      "Collaborative open workstations with acoustic felt desk dividers",
      "Pantry & break-out lounge with custom cafe seating & micro-kitchen",
      "Complete MEP, HVAC, network cabling, & access control integration"
    ],
    highlights: [
      { title: "Smart Glass Privacy", desc: "Switchable electrochromic glass that turns frosted at the touch of a button." },
      { title: "Biophilic Design", desc: "Live green moss walls and indoor flora integration fed by automated drip lines." },
      { title: "Acoustic Harmony", desc: "Baffles and ceiling clouds that eliminate echo in open-plan workspaces." }
    ],
    upgrades: [
      "Biometric Facial Recognition Access Controls",
      "Acoustic Phone Booths for Private Calls",
      "Automated Wayfinding Screen Integration"
    ],
    timeline: "8 – 14 Weeks",
    timelinePhases: [
      { phase: "Weeks 1–2", detail: "Space Allocation & Statutory Approvals" },
      { phase: "Weeks 3–7", detail: "Civil, HVAC, Electrical & Framing" },
      { phase: "Weeks 8–12", detail: "Glass Partitions, Carpets & Furniture" },
      { phase: "Weeks 13–14", detail: "Network Testing & White-Glove Launch" }
    ],
    inspiration: [
      { name: "BKC Financial Headquarters", location: "Mumbai", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80" },
      { name: "Viman Nagar Tech Hub", location: "Pune", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: "retail-commercial",
    title: "Retail & Commercial",
    icon: Store,
    tag: "FLAGSHIP SHOWROOMS",
    tagline: "High-Conversion Experiential Stores & Boutique Flagships",
    overview: "Retail spaces engineered as immersive customer journeys. Designed to captivate footfall, highlight luxury product displays, and convert casual visitors into brand advocates.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=85",
    defaultAreaSqFt: 1800,
    unitName: "Retail Storefront (Sq. Ft.)",
    presets: [
      { label: "Boutique Store", area: 1000 },
      { label: "Standard Showroom", area: 1800 },
      { label: "Flagship Salon", area: 3600 }
    ],
    tiers: {
      curated: {
        name: "Retail Fit-Out",
        ratePerSqFt: 2800,
        badge: "COMMERCIAL",
        summary: "Frameless glass facade, high-CRI track lights, floating wall shelves, and POS checkout counter.",
        keyIncludes: ["Frameless Glass Storefront", "High-CRI Track Spotlights", "Floating Wall Displays", "POS Checkout Counter"]
      },
      signature: {
        name: "Signature Boutique",
        ratePerSqFt: 3800,
        badge: "MOST POPULAR",
        summary: "CRI 98+ true-color lighting, Statuario marble pedestals with brass rails, and luxury trial room lounge.",
        keyIncludes: ["CRI 98+ True-Color Spotlights", "Statuario Marble Display Pods", "Brushed Brass Hanging Rails", "Luxury VIP Trial Lounges"]
      },
      masterpiece: {
        name: "Experiential Flagship",
        ratePerSqFt: 5400,
        badge: "ULTRA LUXURY",
        summary: "Interactive touchscreen display walls, concealed ambient fragrance diffusers, and VIP champagne fitting salon.",
        keyIncludes: ["Interactive Display Video Walls", "Concealed Fragrance Diffusers", "Curved Architectural Facade", "VIP Champagne Lounge"]
      }
    },
    costBreakdown: [
      { category: "Custom Display Pods, Shelving & Brass Railings", percentage: 36, icon: Hammer, color: "var(--color-gold-accent)" },
      { category: "CRI 98+ Precision Spotlights & Facade Glass", percentage: 30, icon: Zap, color: "var(--color-gold-accent)" },
      { category: "Statuario Marble Pods & Flooring", percentage: 20, icon: Gem, color: "var(--color-gold-accent)" },
      { category: "VIP Fitting Lounge & Trial Room Fitment", percentage: 14, icon: ShieldCheck, color: "var(--color-gold-accent)" }
    ],
    scope: [
      "Curved architectural facade & frameless entry portal design",
      "High-CRI track lighting tuned to highlight accurate product color rendering",
      "Custom display wall fixtures, floating shelves, & brass hanging rails",
      "Luxury trial rooms with plush seating, warm lighting, & full-length mirrors",
      "Point-of-sale checkout counter with hidden security drawers & POS wiring"
    ],
    highlights: [
      { title: "True-Color Lighting", desc: "CRI 98+ lighting modules that reproduce true material color tones without distortion." },
      { title: "Tactile Display Pods", desc: "Statuario marble pedestals with brushed brass pedestals for hero products." },
      { title: "Fluid Footfall Routing", desc: "Curved circulation paths that naturally guide shoppers past key collections." }
    ],
    upgrades: [
      "Interactive Touchscreen Display Walls",
      "Concealed Ambient Fragrance Diffusers",
      "VIP Private Fitting Salon & Champagne Bar"
    ],
    timeline: "6 – 10 Weeks",
    timelinePhases: [
      { phase: "Weeks 1–2", detail: "Retail Flow Strategy & Mall Approvals" },
      { phase: "Weeks 3–6", detail: "Facade Steelwork & Display Fabrications" },
      { phase: "Weeks 7–9", detail: "Lighting Precision Tuning & Shelving" },
      { phase: "Week 10", detail: "Visual Merchandising & Grand Opening" }
    ],
    inspiration: [
      { name: "Linking Road Luxury Flagship", location: "Mumbai", image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80" },
      { name: "Koregaon Park Boutique Store", location: "Pune", image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: "custom-joinery",
    title: "Custom Joinery",
    icon: Hammer,
    tag: "BESPOKE TIMBER CRAFT",
    tagline: "Factory-Direct Precision Timber Millwork & Architectural Joinery",
    overview: "Carrying forward Ravalram H. Suthar's 1989 legacy of master woodworking. Precision-engineered timber doors, fluted wall cladding, floating credenzas, and custom dining tables crafted in our dedicated state-of-the-art workshop.",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1600&q=85",
    defaultAreaSqFt: 500,
    unitName: "Timber Surface Area (Sq. Ft.)",
    presets: [
      { label: "Dining Monolith", area: 250 },
      { label: "Feature Wall & Doors", area: 500 },
      { label: "Full Woodwork Suite", area: 1200 }
    ],
    tiers: {
      curated: {
        name: "Bespoke Timber",
        ratePerSqFt: 1800,
        badge: "HANDCRAFTED",
        summary: "Seasoned white oak, polyurethane matte coatings, concealed Blum soft-close hinges, and clean joint work.",
        keyIncludes: ["Seasoned White Oak & Veneer", "PU Matte Protective Coating", "Blum Concealed Soft-Close Hinges", "Precision Edge Banding"]
      },
      signature: {
        name: "Signature Teak & Walnut",
        ratePerSqFt: 2800,
        badge: "MOST POPULAR",
        summary: "Burma Teak & American Walnut, laser-cut brass inlays, 0.5mm CNC precision joints, and hand-rubbed PU polish.",
        keyIncludes: ["Burma Teak & American Walnut", "Laser-Cut Brass Inlay Trims", "0.5mm CNC Toleranced Joinery", "Hand-Rubbed Polyurethane Polish"]
      },
      masterpiece: {
        name: "Guild Master Monolith",
        ratePerSqFt: 4200,
        badge: "ULTRA LUXURY",
        summary: "Motorized hidden credenza bars, hand-carved sculptural handles, liquid metal brass accents, and kiln-dried rare hardwoods.",
        keyIncludes: ["Motorized Hidden Credenza Bar", "Hand-Carved Sculptural Timber Handles", "Liquid Metal Brass Accents", "10-Year Anti-Warp Timber Bond"]
      }
    },
    costBreakdown: [
      { category: "Kiln-Dried Burma Teak & Walnut Logs", percentage: 40, icon: Hammer, color: "var(--color-gold-accent)" },
      { category: "Precision CNC Milling & Laser Brass Inlays", percentage: 30, icon: Gem, color: "var(--color-gold-accent)" },
      { category: "Hand-Rubbed Polyurethane Finish & Polish", percentage: 18, icon: Zap, color: "var(--color-gold-accent)" },
      { category: "Guild Quality Control & White-Glove Fitting", percentage: 12, icon: ShieldCheck, color: "var(--color-gold-accent)" }
    ],
    scope: [
      "Floor-to-ceiling pivot entrance doors with multi-point locking systems",
      "Fluted timber wall cladding panels with hidden acoustic backing",
      "Solid wood dining tables spanning up to 14 feet with brass inlay legs",
      "Custom credenzas, bar cabinets, & floating vanity units",
      "Factory poly-urethane matte or high-gloss liquid coating application"
    ],
    highlights: [
      { title: "Kiln-Dried Timber", desc: "Moisture-controlled hardwoods guaranteed against warping or splitting for 10+ years." },
      { title: "Seamless Grain Matching", desc: "Continuous wood grain veneer flow across entire wardrobe and door surfaces." },
      { title: "Precision CNC Milling", desc: "0.5mm tolerance joinery joints for rock-solid structural longevity." }
    ],
    upgrades: [
      "Automated Motorized Hidden Credenza Bar",
      "Hand-Carved Sculptural Handles",
      "Liquid Metal Brass Finish Accents"
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
]; */

export default function ProjectInvestmentGuide({ setView }) {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);
  const [selectedTier, setSelectedTier] = useState("signature"); // 'curated' | 'signature' | 'masterpiece'
  const [customAreaSqFt, setCustomAreaSqFt] = useState(null);
  const [activeImageModal, setActiveImageModal] = useState(null);
  const [currency, setCurrency] = useState("INR"); // 'INR' | 'USD'
  const [searchQuery, setSearchQuery] = useState("");
  const [showTierCompareModal, setShowTierCompareModal] = useState(false);
  const [copiedState, setCopiedState] = useState(false);

  const contentRef = useRef(null);

  // Filtered categories based on search
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return INVESTMENT_CATEGORIES;
    const q = searchQuery.toLowerCase();
    return INVESTMENT_CATEGORIES.filter(
      (cat) =>
        cat.title.toLowerCase().includes(q) ||
        cat.tag.toLowerCase().includes(q) ||
        cat.overview.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const activeCategory = INVESTMENT_CATEGORIES[activeCategoryIdx] || INVESTMENT_CATEGORIES[0];
  const CategoryIcon = activeCategory.icon;

  // Current scale & tier details
  const areaSqFt = customAreaSqFt !== null ? customAreaSqFt : activeCategory.defaultAreaSqFt;
  const currentTierObj = activeCategory.tiers[selectedTier] || activeCategory.tiers.signature;

  // Investment calculations
  const rateInr = currentTierObj.ratePerSqFt;
  const calculatedTotalInr = areaSqFt * rateInr;
  const calculatedMinInrLakhs = Math.round((calculatedTotalInr * 0.92) / 100000);
  const calculatedMaxInrLakhs = Math.round((calculatedTotalInr * 1.12) / 100000);

  // FX Conversion: 1 USD ~ 86.5 INR
  const USD_RATE = 86.5;
  const calculatedMinUsd = Math.round((calculatedTotalInr * 0.92) / USD_RATE);
  const calculatedMaxUsd = Math.round((calculatedTotalInr * 1.12) / USD_RATE);

  const formatCurrencyRange = () => {
    if (currency === "USD") {
      return `$${calculatedMinUsd.toLocaleString()} – $${calculatedMaxUsd.toLocaleString()} USD`;
    }
    if (calculatedMinInrLakhs >= 100) {
      const minCr = (calculatedMinInrLakhs / 100).toFixed(2);
      const maxCr = (calculatedMaxInrLakhs / 100).toFixed(2);
      return `₹${minCr} Cr – ₹${maxCr} Cr`;
    }
    return `₹${calculatedMinInrLakhs} Lakhs – ₹${calculatedMaxInrLakhs} Lakhs`;
  };

  const formatRateLabel = (rate) => {
    if (currency === "USD") {
      const usdRate = Math.round(rate / USD_RATE);
      return `$${usdRate} / sq.ft`;
    }
    return `₹${rate.toLocaleString()} / sq.ft`;
  };

  const formatTierEstRange = (rate) => {
    const total = areaSqFt * rate;
    if (currency === "USD") {
      const minUsd = Math.round((total * 0.92) / USD_RATE);
      const maxUsd = Math.round((total * 1.12) / USD_RATE);
      return `$${minUsd.toLocaleString()} – $${maxUsd.toLocaleString()}`;
    }
    const minLakhs = Math.round((total * 0.92) / 100000);
    const maxLakhs = Math.round((total * 1.12) / 100000);
    if (minLakhs >= 100) {
      return `₹${(minLakhs / 100).toFixed(2)} Cr – ₹${(maxLakhs / 100).toFixed(2)} Cr`;
    }
    return `₹${minLakhs} L – ₹${maxLakhs} L`;
  };

  const formatBreakdownValue = (percentage) => {
    const rawValInr = (calculatedTotalInr * (percentage / 100)) / 100000;
    if (currency === "USD") {
      const valUsd = Math.round((calculatedTotalInr * (percentage / 100)) / USD_RATE);
      return `$${valUsd.toLocaleString()}`;
    }
    if (rawValInr >= 100) {
      return `₹${(rawValInr / 100).toFixed(2)} Cr`;
    }
    return `₹${rawValInr.toFixed(1)} Lakhs`;
  };

  const handleCategorySelect = (origIdx) => {
    setActiveCategoryIdx(origIdx);
    setCustomAreaSqFt(null);
    if (window.innerWidth < 1024 && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleConsultationClick = () => {
    if (typeof setView === "function") {
      setView("contact");
    } else {
      const contactElem = document.getElementById("contact");
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleCopyEstimate = () => {
    const textToCopy = `SUTHAR INTERIOR STUDIO - INVESTMENT BLUEPRINT\n` +
      `Category: ${activeCategory.title} (${activeCategory.tag})\n` +
      `Scale: ${areaSqFt.toLocaleString()} Sq. Ft.\n` +
      `Finish Tier: ${currentTierObj.name} (${currentTierObj.badge})\n` +
      `Estimated Rate: ${formatRateLabel(currentTierObj.ratePerSqFt)}\n` +
      `Estimated Investment Range: ${formatCurrencyRange()}\n` +
      `Key Inclusions: ${currentTierObj.keyIncludes.join(", ")}\n` +
      `Timeline: ${activeCategory.timeline}\n` +
      `Request exact site survey at Suthar Interior Studio (Santacruz West, Mumbai).`;

    navigator.clipboard.writeText(textToCopy);
    setCopiedState(true);
    setTimeout(() => setCopiedState(false), 3000);
  };

  return (
    <section id="investment-guide" className="relative w-full py-16 sm:py-24 md:py-32 bg-[#faf9f6] text-stone-900 overflow-hidden border-t border-stone-200/80">
      
      {/* Background Architectural Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 space-y-10 md:space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200/80 pb-8 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-gold-accent/15 text-gold-accent px-3 py-1 rounded-md text-[11px] font-mono tracking-[0.25em] font-bold uppercase">
              <Compass className="w-3.5 h-3.5" />
              <span>PROJECT INVESTMENT GUIDE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-stone-900 leading-tight uppercase font-display">
              Understand The <span className="text-gold-accent">Value & Scope</span> Of Your Vision
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Currency Selector Toggle */}
            <div className="bg-white border border-stone-200/80 rounded-xl p-1 flex items-center space-x-1 shadow-xs">
              <span className="text-[10px] font-mono text-stone-400 uppercase font-bold px-2">Currency:</span>
              <button
                onClick={() => setCurrency("INR")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer ${
                  currency === "INR" ? "bg-[#1c1917] text-gold-accent" : "text-stone-500 hover:text-stone-900"
                }`}
              >
                ₹ INR
              </button>
              <button
                onClick={() => setCurrency("USD")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer ${
                  currency === "USD" ? "bg-[#1c1917] text-gold-accent" : "text-stone-500 hover:text-stone-900"
                }`}
              >
                $ USD
              </button>
            </div>

            <p className="text-stone-600 text-xs sm:text-sm font-light max-w-xs leading-relaxed">
              Transparent architectural guidance to align spatial aspirations, material craftsmanship, and investment expectations.
            </p>
          </div>
        </div>

        {/* Horizontal Category Tab Bar */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-stone-400 tracking-[0.2em] uppercase font-bold flex items-center gap-1.5">
              <Sliders className="w-3 h-3 text-gold-accent" />
              <span>SELECT ARCHITECTURAL SCOPE ({INVESTMENT_CATEGORIES.length})</span>
            </span>

            {/* Filter Input */}
            <div className="relative w-48 sm:w-64">
              <Search size={12} className="absolute left-3 top-2.5 text-stone-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search scopes (e.g. villa, kitchen)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-6 py-1.5 text-xs bg-white border border-stone-200/80 rounded-xl text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-gold-accent transition-all font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 top-2 text-stone-400 hover:text-stone-800"
                >
                  <X size={12} />
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filteredCategories.map((cat) => {
              const origIdx = INVESTMENT_CATEGORIES.findIndex((c) => c.id === cat.id);
              const ItemIcon = cat.icon;
              const isActive = origIdx === activeCategoryIdx;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(origIdx)}
                  className={`inline-flex items-center space-x-2.5 px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-300 shrink-0 cursor-pointer border ${
                    isActive
                      ? "bg-[#1c1917] text-stone-100 border-[#1c1917] shadow-sm"
                      : "bg-white text-stone-700 hover:text-stone-900 border-stone-200/80 hover:border-stone-300"
                  }`}
                >
                  <ItemIcon size={15} className={isActive ? "text-gold-accent" : "text-stone-400"} />
                  <span className="font-display font-semibold whitespace-nowrap">{cat.title}</span>
                  <span className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded ${
                    isActive ? "bg-white/10 text-gold-accent" : "bg-stone-100 text-stone-500"
                  }`}>
                    {cat.tag.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main 2-Column Industry Standard Pricing Layout Stage */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* LEFT SIDE: Category of Work Sidebar */}
          <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-28">
            <div className="bg-white border border-stone-200/80 rounded-3xl p-5 shadow-sm space-y-4">
              
              <div className="flex items-center justify-between border-b border-stone-200/80 pb-3">
                <span className="text-xs font-mono text-stone-900 font-bold tracking-wider uppercase flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-gold-accent" />
                  <span>WORK CATEGORIES</span>
                </span>
                <span className="text-[10px] font-mono text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full font-bold">
                  {filteredCategories.length} AVAILABLE
                </span>
              </div>

              {/* Search Category Input */}
              <div className="relative">
                <Search size={13} className="absolute left-3 top-3 text-stone-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Filter category (e.g., Kitchen, Villa)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-7 py-2 text-xs bg-[#faf9f6] border border-stone-200/80 rounded-xl text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-gold-accent focus:bg-white transition-all font-sans"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-2.5 text-stone-400 hover:text-stone-800"
                  >
                    <X size={13} />
                  </button>
                )}
              </div>

              {/* Category Cards List */}
              <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-stone-200">
                {filteredCategories.map((cat) => {
                  const origIdx = INVESTMENT_CATEGORIES.findIndex((c) => c.id === cat.id);
                  const ItemIcon = cat.icon;
                  const isActive = origIdx === activeCategoryIdx;
                  const minRate = cat.tiers.curated ? cat.tiers.curated.ratePerSqFt : 2400;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategorySelect(origIdx)}
                      className={`w-full p-3.5 rounded-2xl text-left transition-all duration-300 cursor-pointer border flex items-center justify-between group ${
                        isActive
                          ? "bg-[#1c1917] text-white border-[#1c1917] shadow-md ring-1 ring-gold-accent"
                          : "bg-[#faf9f6] hover:bg-white text-stone-800 border-stone-200/80 hover:border-stone-300"
                      }`}
                    >
                      <div className="flex items-center space-x-3 min-w-0 pr-2">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? "bg-gold-accent text-stone-950 font-bold"
                            : "bg-white text-stone-600 border border-stone-200 group-hover:border-gold-accent/40 group-hover:text-stone-900"
                        }`}>
                          <ItemIcon size={18} />
                        </div>

                        <div className="min-w-0">
                          <h4 className={`text-xs font-bold leading-tight truncate ${isActive ? "text-white font-display" : "text-stone-900"}`}>
                            {cat.title}
                          </h4>
                          <div className="flex items-center space-x-2 pt-0.5">
                            <span className={`text-[9px] font-mono uppercase tracking-wider ${isActive ? "text-gold-accent" : "text-stone-400"}`}>
                              {cat.tag.split(" ")[0]}
                            </span>
                            <span className="text-[9px] font-mono text-stone-400">•</span>
                            <span className={`text-[9px] font-mono ${isActive ? "text-[var(--color-text-muted)]" : "text-gold-accent"}`}>
                              From {formatRateLabel(minRate)}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className={`shrink-0 transition-transform ${isActive ? "translate-x-0" : "-translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"}`}>
                        <ChevronRight size={16} className={isActive ? "text-gold-accent" : "text-stone-400"} />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Consultation Prompt in Left Sidebar */}
              <div className="pt-2 border-t border-stone-200/80">
                <div className="bg-[#faf9f6] p-3.5 rounded-xl border border-stone-200/80 space-y-2">
                  <span className="text-[10px] font-mono text-stone-500 uppercase font-bold block">
                    CUSTOM SCOPE REQUIREMENT?
                  </span>
                  <p className="text-[11px] text-stone-600 font-light leading-snug">
                    Require bespoke architectural planning or site evaluation in Mumbai or Goa?
                  </p>
                  <button
                    onClick={handleConsultationClick}
                    className="w-full bg-[#1c1917] hover:bg-stone-800 text-gold-accent px-3 py-2 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer flex items-center justify-center space-x-1.5"
                  >
                    <span>Request Custom CAD Quote</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: Demo Pricing & What You Will Achieve (Clean & Simple) */}
          <div className="lg:col-span-8 space-y-6">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                
                {/* 1. CLEAN DEMO PRICING CARD */}
                <div className="bg-gradient-to-br from-[#1c1917] via-[#24201c] to-[#1c1917] text-stone-100 p-6 sm:p-8 rounded-3xl border border-stone-800 space-y-6 shadow-xl relative">
                  
                  {/* Category Header & Currency Selector */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800/80 pb-5">
                    <div>
                      <div className="text-[10px] font-mono text-gold-accent tracking-widest uppercase font-bold flex items-center gap-2">
                        <CategoryIcon size={14} className="text-gold-accent" />
                        <span>{activeCategory.tag} • DEMO ESTIMATOR</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-light text-white font-display pt-1">
                        {activeCategory.title}
                      </h3>
                    </div>

                    <div className="bg-white/10 p-1 rounded-xl flex items-center space-x-1 border border-white/10 self-start sm:self-center">
                      <button
                        onClick={() => setCurrency("INR")}
                        className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer ${
                          currency === "INR" ? "bg-gold-accent text-stone-950" : "text-[var(--color-text-muted)] hover:text-white"
                        }`}
                      >
                        ₹ INR
                      </button>
                      <button
                        onClick={() => setCurrency("USD")}
                        className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer ${
                          currency === "USD" ? "bg-gold-accent text-stone-950" : "text-[var(--color-text-muted)] hover:text-white"
                        }`}
                      >
                        $ USD
                      </button>
                    </div>
                  </div>

                  {/* Estimated Range Display */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-stone-400 uppercase font-bold tracking-wider">
                      ESTIMATED DEMO INVESTMENT RANGE:
                    </span>
                    <div className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gold-accent tracking-tight font-display">
                      {formatCurrencyRange()}
                    </div>
                    <div className="text-xs font-mono text-stone-400 pt-1">
                      Carpet Area: <strong className="text-stone-200">{areaSqFt.toLocaleString()} sq.ft</strong> • Finish Level: <strong className="text-gold-accent">{currentTierObj.name}</strong> ({formatRateLabel(currentTierObj.ratePerSqFt)})
                    </div>
                  </div>

                  {/* Quick Scale Presets */}
                  {activeCategory.presets && activeCategory.presets.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <span className="text-[10px] font-mono text-stone-400 uppercase font-bold block">
                        SELECT AREA SCALE:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {activeCategory.presets.map((preset, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCustomAreaSqFt(preset.area)}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer border ${
                              areaSqFt === preset.area
                                ? "bg-gold-accent text-stone-950 font-bold border-gold-accent"
                                : "bg-white/10 text-[var(--color-text-muted)] hover:bg-white/20 border-white/10"
                            }`}
                          >
                            {preset.label} ({preset.area.toLocaleString()} sq.ft)
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Specification Tier Quick Selector Pills */}
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <span className="text-[10px] font-mono text-stone-400 uppercase font-bold block">
                      SELECT FINISH SPECIFICATION:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {Object.entries(activeCategory.tiers).map(([tierKey, tierVal]) => {
                        const isSelected = selectedTier === tierKey;
                        return (
                          <button
                            key={tierKey}
                            onClick={() => setSelectedTier(tierKey)}
                            className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex items-center justify-between ${
                              isSelected
                                ? "bg-gold-accent text-stone-950 border-gold-accent font-bold"
                                : "bg-white/5 text-[var(--color-text-muted)] hover:bg-white/10 border-white/10"
                            }`}
                          >
                            <span className="text-xs font-mono">{tierVal.name}</span>
                            <span className="text-[10px] font-mono opacity-80">{formatRateLabel(tierVal.ratePerSqFt)}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                </div>

                {/* 2. WHAT YOU WILL ACHIEVE (Clean Deliverables & Outcomes) */}
                <div className="bg-white border border-stone-200/80 rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm">
                  
                  <div className="flex items-center justify-between border-b border-stone-200/80 pb-4">
                    <span className="text-xs font-mono text-stone-900 font-bold tracking-widest uppercase flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-gold-accent" />
                      <span>WHAT YOU WILL ACHIEVE WITH THIS BLUEPRINT</span>
                    </span>
                    <span className="text-xs font-mono text-gold-accent bg-gold-accent/15 px-3 py-1 rounded-md font-bold">
                      Timeline: {activeCategory.timeline}
                    </span>
                  </div>

                  {/* Key Scope Outcomes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeCategory.scope.slice(0, 4).map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-[#faf9f6] border border-stone-200/70 flex items-start space-x-3"
                      >
                        <CheckCircle2 size={18} className="text-gold-accent shrink-0 mt-0.5" />
                        <span className="text-xs text-stone-800 font-medium leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* 3. KNOW MORE / VIEW DETAILED PRICING PAGE CTA */}
                <div className="bg-white border border-stone-200/80 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
                  
                  <div className="space-y-1 text-center sm:text-left">
                    <span className="text-[10px] font-mono text-gold-accent tracking-wider uppercase font-bold block">
                      NEED FULL ITEMIZED BREAKDOWN?
                    </span>
                    <h4 className="text-lg font-bold text-stone-900 font-display">
                      Explore Full Pricing Page & Component BOQ
                    </h4>
                    <p className="text-xs text-stone-500 font-light max-w-md">
                      Get detailed itemized material schedules, factory joinery specifications, or request an architect site survey.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                    <button
                      onClick={() => setShowTierCompareModal(true)}
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#1c1917] hover:bg-stone-800 text-gold-accent px-5 py-3.5 rounded-xl font-mono font-bold text-xs uppercase transition-colors cursor-pointer"
                    >
                      <PieChart size={14} />
                      <span>Know More & View BOQ</span>
                    </button>

                    <button
                      onClick={handleConsultationClick}
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gold-accent hover:bg-gold-accent text-stone-950 px-6 py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-md group"
                    >
                      <span>Get Official Quote</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>

      {/* TIER COMPARISON MODAL */}
      <AnimatePresence>
        {showTierCompareModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowTierCompareModal(false)}
            className="fixed inset-0 z-50 bg-[var(--color-surface-dark)]/80 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center cursor-pointer"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-stone-200 bg-white text-stone-900 p-6 sm:p-8 shadow-2xl space-y-6 text-left cursor-default"
            >
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-gold-accent tracking-widest font-bold uppercase block">
                    {activeCategory.title.toUpperCase()}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-light text-stone-900">
                    Compare Specification <span className="text-gold-accent">Tiers</span>
                  </h3>
                </div>
                <button
                  onClick={() => setShowTierCompareModal(false)}
                  className="bg-stone-100 text-stone-500 hover:text-stone-900 p-2 rounded-full transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Tiers Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(activeCategory.tiers).map(([tierKey, tierVal]) => (
                  <div
                    key={tierKey}
                    className={`p-5 rounded-2xl border space-y-4 flex flex-col justify-between ${
                      selectedTier === tierKey
                        ? "bg-[#1c1917] text-stone-100 border-[#1c1917] shadow-md ring-2 ring-gold-accent/40"
                        : "bg-[#faf9f6] text-stone-800 border-stone-200"
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-mono uppercase font-bold ${
                          selectedTier === tierKey ? "text-gold-accent" : "text-stone-400"
                        }`}>
                          {tierVal.badge}
                        </span>
                        {selectedTier === tierKey && (
                          <span className="bg-gold-accent text-stone-950 text-[9px] font-mono font-extrabold px-2 py-0.5 rounded-full">
                            Active
                          </span>
                        )}
                      </div>
                      <h4 className={`text-lg font-bold font-display ${selectedTier === tierKey ? "text-white" : "text-stone-900"}`}>{tierVal.name}</h4>
                      <p className={`text-xl font-mono font-bold ${selectedTier === tierKey ? "text-gold-accent" : "text-stone-900"}`}>
                        {formatRateLabel(tierVal.ratePerSqFt)}
                      </p>
                      <p className={`text-xs font-light leading-relaxed pt-1 ${selectedTier === tierKey ? "text-[var(--color-text-muted)]" : "text-stone-600"}`}>
                        {tierVal.summary}
                      </p>
                    </div>

                    <div className={`space-y-2 pt-3 border-t ${selectedTier === tierKey ? "border-stone-800" : "border-stone-200"}`}>
                      <span className={`text-[10px] font-mono uppercase font-bold block ${
                        selectedTier === tierKey ? "text-stone-400" : "text-stone-500"
                      }`}>
                        Included Specifications:
                      </span>
                      <ul className="space-y-1.5 text-xs">
                        {tierVal.keyIncludes.map((inc, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <CheckCircle2 size={13} className={`shrink-0 mt-0.5 ${
                              selectedTier === tierKey ? "text-gold-accent" : "text-gold-accent"
                            }`} />
                            <span className={selectedTier === tierKey ? "text-[var(--color-text-muted)]" : "text-stone-700"}>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedTier(tierKey);
                        setShowTierCompareModal(false);
                      }}
                      className={`w-full py-2.5 rounded-xl text-xs font-mono font-bold uppercase transition-colors cursor-pointer ${
                        selectedTier === tierKey
                          ? "bg-gold-accent text-stone-950"
                          : "bg-stone-200 hover:bg-stone-300 text-stone-900"
                      }`}
                    >
                      {selectedTier === tierKey ? "Currently Selected" : `Select ${tierVal.name}`}
                    </button>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center">
                <button
                  onClick={() => setShowTierCompareModal(false)}
                  className="text-xs font-mono text-stone-500 hover:text-gold-accent underline cursor-pointer"
                >
                  Close Specification Comparison Matrix
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* IMAGE LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeImageModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImageModal(null)}
            className="fixed inset-0 z-50 bg-[var(--color-surface-dark)]/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center cursor-pointer"
          >
            <div className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-2xl border border-white/10 bg-stone-900 shadow-2xl">
              <button
                onClick={() => setActiveImageModal(null)}
                className="absolute top-4 right-4 bg-[var(--color-surface-dark)]/80 text-white p-2.5 rounded-full border border-white/20 hover:bg-white hover:text-stone-950 transition-colors z-10 cursor-pointer"
              >
                <X size={18} />
              </button>
              <img
                src={activeImageModal}
                alt="Full View"
                className="w-full h-full max-h-[85vh] object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
