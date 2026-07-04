import AppImage from "./AppImage";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Compass,
  MapPin,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Calendar,
  X,
  Maximize2,
  Sliders,
  Award,
  ChevronRight,
  ChevronLeft,
  Check,
  Instagram,
  Paintbrush,
  Hammer,
  Lightbulb,
  Building2,
  ShieldCheck,
  Home,
  Users,
  Grid,
  Maximize,
  Heart,
  MessageCircle,
  Clock,
  Layers
} from "lucide-react";

const heroBg = "/images/antra_hero_bg_1782744248753.jpg";
const heroSlide2 = "/images/antra_hero_slide2_1782747378004.jpg";
const heroSlide3 = "/images/antra_hero_slide3_1782747396078.jpg";
const aboutImg = "/images/antra_about_side_1782744266546.jpg";
const lobbyBanner = "/images/antra_lobby_banner_1782744283860.jpg";
const projectCoastal = "/images/antra_project_coastal_1782744299850.jpg";
const projectLoft = "/images/antra_project_loft_1782744318019.jpg";
const transitionLuxury = "/images/antra_transition_luxury_1782747459033.jpg";

export default function GalleryPage({ onBackToHome, onOpenQuote }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Dispatch custom SEO events for active project details (lightbox)
  useEffect(() => {
    if (lightboxIndex !== null && projects[lightboxIndex]) {
      const activeProject = projects[lightboxIndex];
      window.dispatchEvent(
        new CustomEvent("seo-update", {
          detail: {
            type: "project-detail",
            id: activeProject.id,
            title: activeProject.name,
            desc: activeProject.description,
            image: activeProject.image,
            materials: activeProject.materials,
            location: activeProject.location,
          }
        })
      );
    } else {
      window.dispatchEvent(
        new CustomEvent("seo-update", {
          detail: null
        })
      );
    }
  }, [lightboxIndex]);

  // 14 Categories as requested
  const filterTabs = [
    { id: "all", label: "All" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "office", label: "Office" },
    { id: "architecture", label: "Architecture" },
    { id: "furniture", label: "Furniture" },
    { id: "kitchen", label: "Kitchen" },
    { id: "living-room", label: "Living Room" },
    { id: "bedroom", label: "Bedroom" },
    { id: "wardrobe", label: "Wardrobe" },
    { id: "tv-unit", label: "TV Unit" },
    { id: "dining", label: "Dining" },
    { id: "renovation", label: "Renovation" },
    { id: "turnkey", label: "Turnkey" }
  ];

  // 28 curated, premium project images representing the finest architectural work
  const projects = [
    {
      id: "gal-01",
      name: "The Shoreline Kitchen",
      category: "Kitchen",
      filters: ["residential", "kitchen", "turnkey"],
      location: "Mumbai",
      description: "Bespoke high-gloss modular cabinets with premium soft-close quartz counters and custom warm under-cabinet LED runs.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200",
      materials: "Imported Walnut veneers, German Soft-Close Hardware, Anti-fingerprint Acrylic"
    },
    {
      id: "gal-02",
      name: "Coastal Haven Villa",
      category: "Architecture",
      filters: ["architecture", "residential", "turnkey"],
      location: "Goa",
      description: "A breath-taking sea-facing estate combining monolithic concrete slabs with traditional wooden ceiling grids.",
      image: projectCoastal,
      materials: "Pre-cast Structural Concrete, Teakwood Ceiling Beams, Warm Travertine cladding"
    },
    {
      id: "gal-03",
      name: "The Penthouse Living Room",
      category: "Living Room",
      filters: ["residential", "living-room"],
      location: "Mumbai",
      description: "A sprawling double-height living pavilion with floor-to-ceiling glass and custom handcrafted low-profile seating.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200",
      materials: "Italian Statuario Marble, Brushed Brass Accents, Curated Bouclé upholstery"
    },
    {
      id: "gal-04",
      name: "Loft Renovation",
      category: "Renovation",
      filters: ["renovation", "residential", "living-room"],
      location: "Bengaluru",
      description: "Complete overhaul of a vintage industrial brick loft into a contemporary, light-flooded multi-level home.",
      image: projectLoft,
      materials: "Exposed Heritage Brick, Black Powder-Coated Steel, Restored Solid Oak Floors"
    },
    {
      id: "gal-05",
      name: "Executive Office Suite",
      category: "Office",
      filters: ["office", "commercial", "turnkey"],
      location: "Pune",
      description: "Premium collaborative corporate workspace featuring acoustic comfort and fluted privacy partition screens.",
      image: transitionLuxury,
      materials: "Fluted Charcoal Glass, Acoustic Fabric Panels, Matte Metal Framing"
    },
    {
      id: "gal-06",
      name: "Minimalist Wardrobe System",
      category: "Wardrobe",
      filters: ["furniture", "wardrobe", "residential"],
      location: "Kumta",
      description: "A high-precision custom master bedroom walk-in closet with internal automated sensor lighting arrays.",
      image: aboutImg,
      materials: "Veneered Marine Ply, Tinted Tempered Glass, Hand-stitched Leather Drawer Pulls"
    },
    {
      id: "gal-07",
      name: "Santacruz Atelier Lobby",
      category: "Office",
      filters: ["office", "commercial", "architecture"],
      location: "Mumbai",
      description: "Monolithic reception counter framed by geometric timber screens and indirect architectural light wells.",
      image: lobbyBanner,
      materials: "Hand-carved Travertine Stone, Solid European Oak Slats, Warm LED Profiles"
    },
    {
      id: "gal-08",
      name: "Bespoke Master Suite",
      category: "Bedroom",
      filters: ["residential", "bedroom", "turnkey"],
      location: "Mumbai",
      description: "A serene, resort-style bedroom utilizing soft tones, floating wood frames, and organic linen panels.",
      image: heroSlide2,
      materials: "Stained Ashwood, Bouclé headboards, Dimmable warm light wells"
    },
    {
      id: "gal-09",
      name: "Stone Wall TV Cabinet Unit",
      category: "TV Unit",
      filters: ["furniture", "tv-unit", "living-room"],
      location: "Pune",
      description: "Floating media storage system with integrated cable routing and natural stone backing panels.",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200",
      materials: "Quarried Slate Veneer, Matte Walnut Cabinets, Blum Tip-on Hinges"
    },
    {
      id: "gal-10",
      name: "The Emerald Dining Setting",
      category: "Dining",
      filters: ["residential", "dining"],
      location: "Hyderabad",
      description: "A luxurious gathering space highlighted by a circular stone dining table and hand-finished velvet armchairs.",
      image: "https://images.unsplash.com/photo-1617806118233-18e1db207f62?q=80&w=1200",
      materials: "Deep Green Marble, Solid Brass Base, Rich Velvet Seating"
    },
    {
      id: "gal-11",
      name: "Premium Matte Black Kitchen",
      category: "Kitchen",
      filters: ["residential", "kitchen", "turnkey"],
      location: "Pune",
      description: "Intelligent layout utilizing premium anti-fingerprint laminates, custom storage drawers, and high-end built-in appliances.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
      materials: "Fenix NTM Tech Surface, Black Anodized Aluminium Gola, Quartzite Tops"
    },
    {
      id: "gal-12",
      name: "Corporate Boardroom",
      category: "Office",
      filters: ["office", "commercial"],
      location: "Hubballi",
      description: "Spacious meeting room designed for optimal acoustics, featuring integrated media screens and custom linear lighting.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
      materials: "Acoustic Wood Paneling, Seamless Corian Conference Table, Smart Glass Glazing"
    },
    {
      id: "gal-13",
      name: "Grand Glass Estate",
      category: "Architecture",
      filters: ["architecture", "residential"],
      location: "Bengaluru",
      description: "A striking two-story glass facade residence that seamlessly bridges interior luxury with outdoor landscaping.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200",
      materials: "Reinforced Structural Steel, Solar-Control Glass, Natural Basalt Steps"
    },
    {
      id: "gal-14",
      name: "Heritage Villa Restoration",
      category: "Renovation",
      filters: ["renovation", "architecture", "residential"],
      location: "Honnavar",
      description: "Sensitive architectural restoration preserving ancient stone pillars while introducing modern plumbing and premium joinery.",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200",
      materials: "Laterite Stone Pillars, Reclaimed Old-Growth Teak, Brass Hardware Elements"
    },
    {
      id: "gal-15",
      name: "Bespoke Walnut Credenza",
      category: "Furniture",
      filters: ["furniture"],
      location: "Kumta",
      description: "A gorgeous mid-century sideboard designed with integrated sliding tambour doors and secret drawer compartments.",
      image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1200",
      materials: "Solid American Walnut, Hand-polished Shellac Finishes, Solid Brass Joinery Legs"
    },
    {
      id: "gal-16",
      name: "Luxury Boutique Showroom",
      category: "Commercial",
      filters: ["commercial"],
      location: "Hyderabad",
      description: "A refined luxury shopping environment optimized for curated products with custom gold PVD trims and velvety seating.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200",
      materials: "Golden PVD Coated Steel, Custom Silk Carpets, Velvet Wall Linings"
    },
    {
      id: "gal-17",
      name: "Cozy Attic Bedroom",
      category: "Bedroom",
      filters: ["residential", "bedroom"],
      location: "Mumbai",
      description: "Charming top-floor suite featuring sloping roof structures, custom low-slung platform bed, and integrated warm skylight framing.",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1200",
      materials: "White Ashwood Panels, Textured Cotton Linens, Hidden Ambient LED Channels"
    },
    {
      id: "gal-18",
      name: "Contemporary Living Space",
      category: "Living Room",
      filters: ["residential", "living-room", "renovation"],
      location: "Goa",
      description: "A fluid, open-plan living layout centered on a low modular lounge and custom-turned timber room divider panels.",
      image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1200",
      materials: "Microconcrete Flooring, Matte Oak Joinery, Soft Linen Sofas"
    },
    {
      id: "gal-19",
      name: "Oak Floating Media Cabinet",
      category: "TV Unit",
      filters: ["furniture", "tv-unit"],
      location: "Murudeshwar",
      description: "Minimalist entertainment console featuring soft-close dropdown flap hinges and textured fluted timber fronts.",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200",
      materials: "Solid White Oak, Warm Interior LED Strips, Hidden Magnetic Cable Tidies"
    },
    {
      id: "gal-20",
      name: "Classic Walk-In Closet",
      category: "Wardrobe",
      filters: ["furniture", "wardrobe", "residential"],
      location: "Mumbai",
      description: "A generous master-suite dressing room with dedicated watch winders, velvet accessory drawers, and fully back-lit cabinets.",
      image: "https://images.unsplash.com/photo-1558882224-cca166733360?q=80&w=1200",
      materials: "Eucalyptus Veneer, Satin-Finished Aluminium Profiles, Alcantara Drawer Liners"
    },
    {
      id: "gal-21",
      name: "Circular Marble Dining Setting",
      category: "Dining",
      filters: ["residential", "dining"],
      location: "Bengaluru",
      description: "Elegant layout optimizing visual weight with a slender steel base and a beautifully veined Italian Nero Marquina table top.",
      image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=1200",
      materials: "Nero Marquina Marble, Gunmetal Steel Base, Full-grain Leather Chairs"
    },
    {
      id: "gal-22",
      name: "Modern Workspace Hub",
      category: "Office",
      filters: ["office", "commercial"],
      location: "Goa",
      description: "Enlightening creative agency studio designed with extensive wood surfaces, white walls, and dynamic sit-stand desks.",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200",
      materials: "Baltic Birch Multiply, Anti-reflective Lino Topping, Aluminium Cable Boxes"
    },
    {
      id: "gal-23",
      name: "Bespoke Slatted Wardrobe",
      category: "Wardrobe",
      filters: ["furniture", "wardrobe"],
      location: "Kumta",
      description: "Masterpiece of local carpentary showing delicate wood joinery, integrated fluted vents, and full-height bronze handles.",
      image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1200",
      materials: "Indian Rosewood, Solid Bronze Details, Internal Cedar Veneers"
    },
    {
      id: "gal-24",
      name: "Luxury Resort Penthouse",
      category: "Turnkey",
      filters: ["turnkey", "residential"],
      location: "Goa",
      description: "Ultra-luxurious entire flat turnkey fitout featuring a curated mix of imported designer fixtures and bespoke studio woodwork.",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200",
      materials: "Travertine Tilework, Oak Chevron Flooring, Customized Soft Furniture"
    },
    {
      id: "gal-25",
      name: "Architectural Concrete Villa",
      category: "Architecture",
      filters: ["architecture", "renovation"],
      location: "Mumbai",
      description: "Breathtaking exposed concrete columns framing double-height interior galleries and custom-built wood stair treads.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200",
      materials: "Self-consolidating Concrete, Reclaimed Burma Teak, Tempered Low-iron Glass"
    },
    {
      id: "gal-26",
      name: "Urban Lounge Area",
      category: "Living Room",
      filters: ["residential", "living-room", "turnkey"],
      location: "Bengaluru",
      description: "A compact, highly functional apartment lounge prioritizing clever dual-purpose furniture and warm illumination layers.",
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200",
      materials: "Smoked Oak veneer, Bouclé accent chairs, Dimmable structural cove lights"
    },
    {
      id: "gal-27",
      name: "Boutique Hotel Master Suite",
      category: "Bedroom",
      filters: ["residential", "bedroom", "turnkey"],
      location: "Hyderabad",
      description: "A sensory hotel-like suite characterized by padded fabric wall paneling and custom side tables in rich veneer.",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200",
      materials: "Handcrafted Suede Paneling, Matte Walnut veneers, Premium Warm Sconces"
    },
    {
      id: "gal-28",
      name: "Modern Flat Entry Lobby",
      category: "Living Room",
      filters: ["residential", "living-room", "renovation"],
      location: "Mumbai",
      description: "A welcoming, minimalist entrance featuring custom key drops and floating storage in natural warm birchwood.",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200",
      materials: "Siberian Birch, Matte Black Powder Steel, Indirect LED Channels"
    }
  ];

  // Filtering projects smoothly based on selected tab
  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(p => p.filters.includes(activeFilter));

  // Lightbox keyboard navigation logic
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev + 1) % filteredProjects.length);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
      } else if (e.key === "Escape") {
        setLightboxIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredProjects.length]);

  const handleNextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredProjects.length);
    }
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredProjects.length) % filteredProjects.length);
    }
  };

  // Featured Collection Layout Images
  const featuredLarge = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200";
  const featuredSupport = [
    projectCoastal,
    transitionLuxury,
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600",
    projectLoft
  ];

  // Craftsmanship Cards config
  const craftsmanshipCards = [
    { title: "Custom Furniture", desc: "Handcrafted modular cabinetry, solid timber credenzas, and custom joinery elements.", icon: Hammer },
    { title: "Premium Finishes", desc: "Expert hand-polished shellac, durable matte acrylic veneers, and textured stone backings.", icon: Paintbrush },
    { title: "Modern Kitchens", desc: "German-engineered soft-close systems, bespoke drawer accessories, and quartz surfaces.", icon: Grid },
    { title: "Luxury Bedrooms", desc: "Bespoke platform beds, velvet upholstered fluted headboards, and integrated dressers.", icon: Home },
    { title: "Office Spaces", desc: "Acoustically insulated private boardrooms and highly functional shared desks.", icon: Building2 },
    { title: "Architectural Details", desc: "Structural geometric wooden dividers, plaster ceiling lines, and customized metal trim runs.", icon: Compass },
    { title: "Lighting Design", desc: "Carefully calculated layers of light: indirect LED lines, accent spotlighting, and dimmable wells.", icon: Lightbulb },
    { title: "Material Selection", desc: "Transparent catalog of Burma Teak, Statuario Marble, and Austrian hardware systems.", icon: ShieldCheck }
  ];

  const statistics = [
    { value: "30+", label: "Years of Family Craftsmanship" },
    { value: "20+", label: "Experienced Professionals" },
    { value: "Multiple Cities", label: "Projects Across India" },
    { value: "100%", label: "Customized Designs" }
  ];

  // Instagram Post Mockups
  const instagramPosts = [
    { id: "ig-1", img: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=600", likes: "1,240", comments: "48", title: "Refining the final grain on our custom American Walnut credenza." },
    { id: "ig-2", img: projectCoastal, likes: "2,150", comments: "92", title: "Waking up to ocean breezes. Coastal residential masterpiece handed over in Goa." },
    { id: "ig-3", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600", likes: "982", comments: "31", title: "Flawless modular kitchen design combining warm teakwood & matte charcoal panels." },
    { id: "ig-4", img: projectLoft, likes: "1,530", comments: "54", title: "Industrial restoration. Bridging heritage brickwork with clean black steel structures." }
  ];

  const handleOpenConsultation = () => {
    if (onOpenQuote) {
      onOpenQuote();
    } else {
      window.dispatchEvent(new CustomEvent("open-consultation"));
    }
  };

  return (
    <div className="bg-field text-stone-900 font-sans selection:bg-primary/30 selection:text-stone-950 pt-[80px]">

      {/* PAGE HERO */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-stone-950 text-white" id="gallery-hero-section">
        <div className="absolute inset-0 z-0">
          <AppImage
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000"
            alt="Suthar Interior Studio Immersive Showroom Gallery"
            className="w-full h-full object-cover opacity-20 filter brightness-[0.3]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/85 to-transparent" />
        </div>

        {/* Blueprint line grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-5 z-10">
          <div className="max-w-8xl mx-auto h-full w-full grid grid-cols-4 gap-12 px-6">
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full border-r" />
          </div>
        </div>

        <div className="max-w-8xl mx-auto px-6 md:px-12 relative z-20 w-full text-left space-y-8 py-20">
          <div className="inline-flex items-center space-x-2 text-stone-400 text-xs tracking-[0.25em] font-mono uppercase">
            <button onClick={onBackToHome} className="hover:text-primary transition-colors cursor-pointer">HOME</button>
            <span>/</span>
            <span className="text-primary font-bold">GALLERY</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <span className="text-primary text-xs tracking-[0.3em] font-mono font-bold block uppercase">
              OUR GALLERY
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight text-white leading-none uppercase"
            >
              Every Space <br />
              <span className="font-serif italic text-primary font-normal lowercase">Tells A</span> Story.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="text-stone-300 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl pt-2"
            >
              Explore a curated collection of interiors, architectural details, custom furniture, and completed projects that reflect our passion for timeless design, exceptional craftsmanship, and thoughtful execution.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button
              onClick={handleOpenConsultation}
              className="inline-flex items-center justify-center space-x-3 text-stone-900 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-primary hover:bg-lighter px-6 py-4 rounded-none cursor-pointer"
            >
              <span>Start Your Project</span>
              <div className="w-8 h-8 rounded-full border border-stone-950/10 bg-stone-950/5 flex items-center justify-center text-stone-950">
                <ArrowRight size={12} strokeWidth={2.5} />
              </div>
            </button>

            <button
              onClick={handleOpenConsultation}
              className="inline-flex items-center justify-center px-6 py-4 border border-white/20 text-white text-xs font-mono tracking-[0.2em] uppercase font-bold transition-all duration-300 rounded-none bg-white/5 backdrop-blur-md cursor-pointer hover:border-primary hover:text-primary"
            >
              Book Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 01: GALLERY INTRODUCTION */}
      <section className="py-24 bg-white border-b border-stone-100" id="gallery-intro-section">
        <div className="max-w-8xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 text-left space-y-4">
              <div className="inline-flex items-center space-x-2">
                <span className="text-primary text-xs">✦</span>
                <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
                  SHOWCASE STATEMENT
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight uppercase">
                Inspired Spaces. <br />
                <span className="font-serif italic text-primary font-normal lowercase">Exceptional</span> Details.
              </h2>
            </div>

            <div className="lg:col-span-7 text-left border-l-2 border-primary pl-6 lg:pl-10">
              <p className="text-stone-600 font-light text-base sm:text-lg leading-relaxed">
                Every project is unique. From elegant homes and modern offices to handcrafted furniture and premium architectural details, our gallery showcases the quality, creativity, and craftsmanship behind every Suthar Interior Studio project.
              </p>
              <p className="text-stone-400 text-xs font-mono tracking-widest mt-4 uppercase">
                HANDCRAFTED HERITAGE &bull; MODERN ENGINEERING &bull; DESIGN RECTITUDE
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 02: GALLERY CATEGORIES (STICKY FILTER BAR) */}
      <section className="py-6 bg-white sticky top-[80px] z-30 border-b border-stone-100 shadow-sm" id="gallery-categories-bar">
        <div className="max-w-8xl mx-auto px-6 md:px-12 flex flex-col xl:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-stone-400 font-mono text-[10px] tracking-widest uppercase shrink-0">
            <Sliders size={12} className="text-primary" />
            <span>Filter Categories</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto max-w-full no-scrollbar py-2 px-1">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-[11px] font-mono font-bold uppercase tracking-widest transition-all duration-300 rounded-none border whitespace-nowrap cursor-pointer ${
                  activeFilter === tab.id
                    ? "bg-stone-950 text-primary border-stone-950 shadow-md scale-95"
                    : "bg-stone-50 text-stone-600 border-stone-200/80 hover:border-primary/50 hover:text-stone-950"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03: PREMIUM MASONRY GALLERY */}
      <section className="py-24 bg-field" id="gallery-masonry-section">
        <div className="max-w-8xl mx-auto px-6 md:px-12">
          
          <div className="flex justify-between items-center mb-8 border-b border-stone-200/50 pb-4">
            <div className="text-xs font-mono text-stone-400">
              SHOWING <span className="text-stone-950 font-bold">{filteredProjects.length}</span> OUT OF {projects.length} CURATED SHOTS
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-xs font-mono text-stone-400">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Click to view in immersive fullscreen mode</span>
            </div>
          </div>

          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => {
                // Find actual global index in projects array for the lightbox next/prev reference
                const originalIndex = projects.findIndex(p => p.id === project.id);
                // Or let's use the local filtered index to keep previous/next within the same filter category!
                const localIndex = idx;

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="break-inside-avoid bg-white border border-stone-200/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col group relative"
                  >
                    {/* Img frame */}
                    <div className="relative overflow-hidden bg-stone-100 cursor-pointer" onClick={() => setLightboxIndex(localIndex)}>
                      <AppImage
                        src={project.image}
                        alt={project.name}
                        loading="lazy"
                        className="w-full h-auto object-cover filter brightness-[0.97] group-hover:scale-[1.04] transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />

                      {/* Premium Hover Overlay */}
                      <div className="absolute inset-0 bg-stone-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                        <div className="flex justify-between items-start">
                          <span className="bg-primary text-stone-950 text-[9px] font-mono font-bold tracking-widest px-2.5 py-1 uppercase rounded-sm shadow-sm">
                            {project.category}
                          </span>
                          <button
                            className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-primary hover:text-stone-950 transition-colors shadow-lg"
                            onClick={(e) => {
                              e.stopPropagation();
                              setLightboxIndex(localIndex);
                            }}
                          >
                            <Maximize2 size={12} />
                          </button>
                        </div>

                        <div className="space-y-2 text-left">
                          <div className="inline-flex items-center space-x-1 text-stone-300 font-mono text-[9px] uppercase tracking-wider">
                            <MapPin size={10} className="text-primary" />
                            <span>{project.location}</span>
                          </div>
                          <h4 className="text-white text-lg font-serif font-light leading-tight">
                            {project.name}
                          </h4>
                          <div className="pt-2 border-t border-white/15 flex items-center justify-between">
                            <span className="text-[10px] text-stone-400 font-light italic leading-tight line-clamp-1 max-w-[70%]">
                              {project.materials.split(",")[0]}...
                            </span>
                            <span className="text-primary text-[9px] font-mono tracking-widest uppercase font-bold flex items-center space-x-1 hover:text-white transition-colors">
                              <span>Expand</span>
                              <ChevronRight size={10} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Outer label card (visible by default) */}
                    <div className="p-5 text-left border-t border-stone-100 bg-white">
                      <div className="flex justify-between items-center text-[10px] font-mono text-stone-400 uppercase tracking-widest mb-1.5">
                        <span>{project.category}</span>
                        <span>{project.location}</span>
                      </div>
                      <h3 className="font-serif text-stone-950 text-base font-medium group-hover:text-primary transition-colors duration-300">
                        {project.name}
                      </h3>
                      <p className="text-stone-500 text-xs font-light leading-relaxed mt-1 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="pt-4 border-t border-stone-100 mt-4 flex justify-between items-center">
                        <button
                          onClick={() => setLightboxIndex(localIndex)}
                          className="text-stone-900 hover:text-primary transition-colors text-xs font-bold font-mono tracking-widest uppercase flex items-center space-x-1 cursor-pointer"
                        >
                          <span>View Detail</span>
                          <ChevronRight size={12} />
                        </button>
                        <span className="text-[9px] font-mono text-stone-300">
                          ID: {project.id}
                        </span>
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* SECTION 04: FEATURED COLLECTION (ASYSMMETRIC BENTO LAYOUT) */}
      <section className="py-24 bg-stone-950 text-white relative overflow-hidden" id="gallery-featured-collection">
        <div className="absolute right-0 top-0 w-[50%] h-[100%] bg-[radial-gradient(ellipse_at_top_right,_rgba(231,163,95,0.06),_transparent_70%)] pointer-events-none" />
        
        <div className="max-w-8xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-16">
            <div className="text-left space-y-4">
              <span className="text-primary text-xs tracking-[0.25em] font-mono font-bold uppercase block animate-pulse">
                EDITOR'S SELECTION
              </span>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white uppercase leading-none">
                Editor's <span className="font-serif italic text-primary font-normal lowercase">Collection</span>
              </h2>
              <p className="text-stone-400 font-light text-sm sm:text-base max-w-xl leading-relaxed">
                A handpicked selection of projects that represent our finest work across residential, commercial, and custom furniture design.
              </p>
            </div>
            <button
              onClick={handleOpenConsultation}
              className="inline-flex items-center justify-center space-x-3 text-stone-950 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-primary hover:bg-lighter px-6 py-4 rounded-none cursor-pointer"
            >
              <span>Explore Portfolio</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Asymmetric Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Large Featured Left */}
            <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-white/10 relative group bg-stone-900 flex flex-col justify-between min-h-[450px]">
              <div className="absolute inset-0">
                <AppImage
                  src={featuredLarge}
                  alt="Editor pick large luxury room"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 filter brightness-[0.75]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
              </div>

              <div className="p-6 relative z-10 flex justify-between items-start">
                <span className="bg-white/10 backdrop-blur-md text-primary text-[9px] font-mono tracking-widest font-bold uppercase px-3 py-1.5 rounded border border-white/10">
                  FEATURED WORK
                </span>
                <span className="text-stone-400 font-mono text-[10px]">Mumbai Atelier</span>
              </div>

              <div className="p-8 relative z-10 text-left space-y-3 max-w-xl">
                <span className="text-primary text-xs font-mono tracking-wider font-bold block uppercase">
                  MONOLITHIC PENTHOUSE PAVILION
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-white">
                  The Lodha World One Apartment
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
                  A comprehensive architectural interior layout executed inside India's premier high-rise. Focused entirely on bespoke walnut veneers and seamless marble slabs.
                </p>
                <div className="pt-4 flex items-center space-x-4">
                  <div className="text-[11px] font-mono text-stone-400">
                    <span className="text-white font-medium block">Area Size:</span> 4,500 sq. ft.
                  </div>
                  <div className="w-[1px] h-8 bg-white/10" />
                  <div className="text-[11px] font-mono text-stone-400">
                    <span className="text-white font-medium block">Duration:</span> 120 Days
                  </div>
                  <div className="w-[1px] h-8 bg-white/10" />
                  <button
                    onClick={() => {
                      const idx = projects.findIndex(p => p.name === "The Penthouse Living Room");
                      if (idx !== -1) setLightboxIndex(idx);
                    }}
                    className="inline-flex items-center space-x-1.5 text-xs text-primary hover:text-white font-bold tracking-widest uppercase transition-colors"
                  >
                    <span>Immerse</span>
                    <Maximize size={12} />
                  </button>
                </div>
              </div>
            </div>

            {/* 4 Supporting Images Right Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-6">
              {featuredSupport.map((imgSrc, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden border border-white/10 relative group bg-stone-900 aspect-square cursor-pointer"
                  onClick={() => {
                    // Open matching image in lightbox
                    const matchingProjIdx = projects.findIndex(p => p.image === imgSrc);
                    if (matchingProjIdx !== -1) {
                      setLightboxIndex(matchingProjIdx);
                    } else {
                      // Fallback just open lightbox with index 0
                      setLightboxIndex(0);
                    }
                  }}
                >
                  <AppImage
                    src={imgSrc}
                    alt="Supporting visual"
                    className="w-full h-full object-cover filter brightness-[0.8] group-hover:brightness-100 group-hover:scale-[1.03] transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 text-left">
                    <div className="space-y-0.5">
                      <span className="text-primary text-[8px] font-mono tracking-widest font-bold uppercase">PREVIEW</span>
                      <h4 className="text-white text-xs font-serif font-light leading-none">Inspect Details</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 05: CRAFTSMANSHIP DETAILS */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden border-b border-stone-100" id="gallery-craftsmanship">
        <div className="max-w-8xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
            <span className="text-primary text-xs tracking-[0.25em] font-mono font-bold uppercase block">
              OUR EXPERT CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 uppercase">
              Bespoke <span className="font-serif italic text-primary font-normal lowercase">Craftsmanship</span> Details
            </h2>
            <p className="text-stone-500 font-light text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              We bind time-honored Indian joinery roots with precise European hardware technology to construct flawless architectural structures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {craftsmanshipCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="bg-stone-50 border border-stone-100 p-6 md:p-8 rounded-2xl text-left space-y-4 hover:bg-white hover:border-primary/30 hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-stone-200/50 flex items-center justify-center text-primary group-hover:bg-primary/15 group-hover:scale-105 transition-all shadow-sm">
                    <Icon size={18} />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-950 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-stone-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 06: GALLERY STATISTICS */}
      <section className="py-20 bg-field border-b border-stone-100" id="gallery-statistics">
        <div className="max-w-8xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-stone-200/80">
            {statistics.map((stat, idx) => (
              <div key={idx} className="space-y-2 pt-6 lg:pt-0 lg:px-4 text-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-light font-serif tracking-tight text-primary block">
                  {stat.value}
                </span>
                <span className="text-[10px] md:text-xs font-mono tracking-widest text-stone-500 uppercase block font-bold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 08: INSTAGRAM INSPIRATION */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden border-b border-stone-100" id="gallery-instagram">
        <div className="max-w-8xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
            <div className="text-left space-y-4">
              <span className="text-primary text-xs tracking-[0.25em] font-mono font-bold uppercase block">
                BEHIND THE CRAFT
              </span>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 uppercase">
                Follow <span className="font-serif italic text-primary font-normal lowercase">Our</span> Journey
              </h2>
              <p className="text-stone-500 font-light text-sm sm:text-base max-w-xl leading-relaxed">
                Discover behind-the-scenes moments, completed interiors, furniture craftsmanship, and project updates.
              </p>
            </div>
            
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-stone-900 hover:text-primary transition-colors font-bold text-xs tracking-widest uppercase border border-stone-950/20 px-5 py-3 rounded-none hover:border-primary"
            >
              <Instagram size={14} className="text-primary" />
              <span>Follow @SutharStudio</span>
            </a>
          </div>

          {/* Instagram Post Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {instagramPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white border border-stone-200/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group text-left"
              >
                {/* Img with custom hover layout */}
                <div className="relative aspect-square overflow-hidden bg-stone-100">
                  <AppImage
                    src={post.img}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Instagram hover layer */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-6 text-white text-xs font-mono font-bold">
                    <div className="flex items-center space-x-1.5">
                      <Heart size={16} className="text-rose-500 fill-rose-500" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <MessageCircle size={16} className="text-sky-400 fill-sky-400" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>

                {/* Card footer details */}
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <p className="text-xs text-stone-600 font-light leading-relaxed line-clamp-2">
                    {post.title}
                  </p>
                  <div className="flex items-center justify-between text-[10px] font-mono text-stone-400 pt-3 border-t border-stone-100 mt-3 uppercase">
                    <span className="text-primary font-semibold">@SutharStudio</span>
                    <span>1d ago</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative w-full overflow-hidden py-24 md:py-32 bg-stone-950 text-white" id="gallery-final-cta">
        <div className="absolute inset-0 z-0">
          <AppImage
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000"
            alt="Suthar Luxury Studio Architectural Finale"
            className="w-full h-full object-cover opacity-15 filter brightness-[0.3]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/90 to-stone-950/50" />
        </div>

        <div className="max-w-8xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-8">
          <div className="space-y-4 max-w-4xl mx-auto">
            <span className="text-primary text-xs tracking-[0.3em] font-mono font-bold block uppercase">
              START YOUR OWN COMMISSION
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight text-white leading-tight uppercase">
              Your Dream Project <br />
              Could Be <span className="font-serif italic text-primary font-normal lowercase">Featured</span> Here Next.
            </h2>
            <p className="text-stone-300 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto pt-2">
              Whether you're building a new home, renovating an existing space, or creating custom furniture, we'd love to bring your ideas to life with timeless design and exceptional craftsmanship.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={handleOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 text-stone-900 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-primary px-8 py-5 rounded-none cursor-pointer shadow-xl"
            >
              <span>Book Free Consultation</span>
              <div className="w-8 h-8 rounded-full border border-stone-950/20 bg-stone-950/10 flex items-center justify-center text-stone-950">
                <ArrowRight size={12} strokeWidth={2.5} />
              </div>
            </button>

            <button
              onClick={onBackToHome}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-5 border border-white/20 text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-none bg-white/5 backdrop-blur-md cursor-pointer hover:border-primary hover:text-primary"
            >
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 07: IMMERSIVE FULLSCREEN IMAGE LIGHTBOX */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-55 flex flex-col justify-between bg-stone-950/98 backdrop-blur-xl select-none"
            id="gallery-fullscreen-lightbox"
          >
            {/* Header toolbar */}
            <div className="p-6 flex items-center justify-between text-white border-b border-white/5 z-20">
              <div className="text-left">
                <span className="text-primary font-mono text-[9px] font-bold tracking-widest uppercase block">
                  {filteredProjects[lightboxIndex].category} &bull; {filteredProjects[lightboxIndex].location}
                </span>
                <h4 className="text-sm font-serif font-light uppercase tracking-wide">
                  {filteredProjects[lightboxIndex].name}
                </h4>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-xs font-mono text-stone-400">
                  {lightboxIndex + 1} / {filteredProjects.length}
                </span>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-stone-950 text-white flex items-center justify-center transition-all cursor-pointer border border-white/10"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Middle Frame (Image + Nav arrows) */}
            <div className="flex-grow flex items-center justify-between px-4 sm:px-8 relative">
              
              {/* Prev Button */}
              <button
                onClick={handlePrevLightbox}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 hover:bg-primary hover:text-stone-950 text-white flex items-center justify-center transition-all cursor-pointer border border-white/10 z-20"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Main Image presentation container with gesture animations */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="max-w-5xl max-h-[70vh] flex flex-col items-center justify-center relative overflow-hidden px-4"
              >
                <AppImage
                  src={filteredProjects[lightboxIndex].image}
                  alt={filteredProjects[lightboxIndex].name}
                  className="max-w-full max-h-[65vh] object-contain rounded-lg border border-white/10 shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNextLightbox}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 hover:bg-primary hover:text-stone-950 text-white flex items-center justify-center transition-all cursor-pointer border border-white/10 z-20"
              >
                <ChevronRight size={24} />
              </button>

            </div>

            {/* Footer Specifications Info Bar */}
            <div className="p-6 bg-stone-950 border-t border-white/5 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4 z-20">
              <div className="text-left max-w-2xl space-y-1.5">
                <span className="text-[10px] uppercase font-mono tracking-widest text-stone-500 font-bold block">
                  CRAFTSMAN MATERIAL SPECIFICATION
                </span>
                <p className="text-xs text-stone-300 font-light font-mono italic">
                  {filteredProjects[lightboxIndex].materials}
                </p>
                <p className="text-stone-400 text-xs font-light max-w-xl">
                  {filteredProjects[lightboxIndex].description}
                </p>
              </div>

              <div className="flex gap-4 w-full md:w-auto">
                <button
                  onClick={() => {
                    setLightboxIndex(null);
                    handleOpenConsultation();
                  }}
                  className="flex-1 md:flex-none py-3 px-6 bg-primary hover:bg-lighter text-stone-950 text-[10px] font-bold uppercase tracking-widest transition-all text-center cursor-pointer font-mono"
                >
                  Discuss Project
                </button>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="flex-1 md:flex-none py-3 px-6 border border-white/10 hover:border-white text-white text-[10px] font-bold uppercase tracking-widest transition-all text-center cursor-pointer font-mono"
                >
                  Close View
                </button>
              </div>
            </div>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
