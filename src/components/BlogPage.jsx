import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  User, 
  Calendar, 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Mail,
  Check,
  Paintbrush,
  Compass,
  Hammer,
  Sliders,
  Layers,
  Grid,
  Lightbulb,
  Building2,
  Maximize2,
  ShieldCheck,
  BookOpen,
  Share2,
  Award
} from "lucide-react";

import { SITE_IMAGES } from "../lib/data.js";

// Asset path constants from centralized data manager
const heroBg = SITE_IMAGES.heroBg;
const heroSlide2 = SITE_IMAGES.heroSlide2;
const heroSlide3 = SITE_IMAGES.heroSlide3;
const aboutImg = SITE_IMAGES.aboutSide;
const lobbyBanner = SITE_IMAGES.lobbyBanner;
const projectCoastal = SITE_IMAGES.projectCoastal;
const projectLoft = SITE_IMAGES.projectLoft;
const transitionLuxury = SITE_IMAGES.transitionLuxury;

// Category definitions (13 tags as requested)
const filterTabs = [
  { id: "all", label: "All" },
  { id: "interior-design", label: "Interior Design" },
  { id: "architecture", label: "Architecture" },
  { id: "furniture", label: "Furniture" },
  { id: "renovation", label: "Renovation" },
  { id: "modular-kitchen", label: "Modular Kitchen" },
  { id: "bedrooms", label: "Bedrooms" },
  { id: "living-rooms", label: "Living Rooms" },
  { id: "commercial", label: "Commercial" },
  { id: "office-design", label: "Office Design" },
  { id: "materials", label: "Materials" },
  { id: "budget-planning", label: "Budget Planning" },
  { id: "home-tips", label: "Home Tips" }
];

// Single Large Featured Article
const featuredArticle = {
  id: "feat-01",
  title: "Complete Guide to Planning Your Dream Home Interior",
  category: "interior-design",
  categoryLabel: "Interior Design",
  image: projectCoastal,
  date: "June 28, 2026",
  author: "Elena Suthar",
  readTime: "8 min read",
  excerpt: "Everything you should know before starting your interior project—from budgeting and planning to choosing materials and hiring the right professionals.",
  content: `Starting an interior design project for your dream home is a deeply personal and exciting journey. However, without a structured approach, it can quickly become overwhelming. At Suthar Interior Studio, we believe that flawless execution is the result of thorough planning and alignment of vision. Here is our complete step-by-step guide to successfully planning your home interior.

### 1. Define Your Vision & Functional Scope
Before diving into materials, take the time to analyze how you live. Do you entertain guests frequently? Do you need a dedicated quiet space for remote work? Collect inspiration images, but focus more on the "feeling" and functionality of the spaces rather than copying catalog pages. A home should be tailored to your daily rituals.

### 2. Establish a Realistic Budget Early
A transparent budget is the anchor of any design project. Divide your budget into critical columns: civil work, modular cabinetry, custom loose furniture, lighting fixtures, and professional fees. Setting a 10% contingency fund is highly recommended to accommodate unforeseen site requirements or material upgrades.

### 3. Choose the Right Professional Partner
Select a design-build studio that aligns with your design aesthetic and demonstrates technical mastery. Look for transparent material catalogs, real-world experience, and clear project management processes. A turnkey partner handles design, procurement, and site coordination, minimizing execution friction.

### 4. Material and Hardware Selection
Never compromise on foundational materials. For long-term structural integrity, prioritize water-resistant plywood (BWR or Marine grade) for wet zones like kitchens. Invest in premium, German-engineered soft-close hinges and heavy-duty drawer slides that stand up to daily operations.

### 5. Lighting Layout is Paramount
Lighting should never be an afterthought. We recommend layering your light sources:
- **Ambient**: Soft, indirect LED runs recessed in ceilings to provide uniform warmth.
- **Task**: Focused under-cabinet spotlights in kitchens or directional reading sconces in bedrooms.
- **Accent**: Angled lightwells grazing raw stone textures, showcasing architectural contours.`
};

// 14 realistic, high-quality placeholder articles
const blogArticles = [
  {
    id: "art-01",
    title: "How to Choose the Right Interior Designer",
    category: "interior-design",
    categoryLabel: "Interior Design",
    image: transitionLuxury,
    date: "June 25, 2026",
    author: "Elena Suthar",
    readTime: "6 min read",
    excerpt: "Finding a designer who understands your aesthetic and respects your budget is crucial. Learn the essential questions you must ask.",
    content: `Choosing an interior designer is like choosing a long-term collaborator for one of your most valuable assets: your home. It goes far beyond matching color palettes; it requires technical synergy, shared timelines, and absolute budget transparency.

### Look at Practical Execution, Not Just Renderings
Modern interior designers can create breathtaking 3D computer models. However, the true test of an expert is their physical portfolio. Ask to see photographs of completed, lived-in projects. Inspect the joinery edges, drawer alignments, and how materials look under natural daylight.

### Clarify Pricing Structures
Interior design costs vary. Some charge a flat fee, others a percentage of the total project cost, and some charge per square foot. Ask for a detailed, itemized breakdown. Ensure there are no hidden markups on hardware or third-party vendor sourcing.

### Test Communication Dynamics
Your designer will be in your life for months. You must feel comfortable discussing budget limits, voicing critiques, and making decisions together. Choose a studio that listens attentively and translates your lifestyle constraints into authentic spatial logic.`
  },
  {
    id: "art-02",
    title: "Modern Living Room Design Ideas",
    category: "living-rooms",
    categoryLabel: "Living Rooms",
    image: heroSlide3,
    date: "June 22, 2026",
    author: "Rajesh Suthar",
    readTime: "5 min read",
    excerpt: "Explore contemporary layouts that maximize natural light, embrace custom wooden dividers, and highlight hand-picked furniture.",
    content: `The modern living room has evolved from a formal receiving room into a fluid, multi-purpose pavilion. Designing this space requires balancing comfort with high-impact visual statements that define the home's identity.

### Embrace Asymmetry and Open Layouts
Instead of placing identical heavy sofas facing each other, create a dynamic arrangement. Pair a low-slung, modular sofa with organic upholstered accent chairs in bouclé or linen. This allows the gaze to travel freely through the space, making the layout feel larger and more welcoming.

### Architectural Timber Room Dividers
Open-concept homes benefit from subtle boundaries. Custom-turned vertical wooden slatted screens act as beautiful light-filtering dividers, separating the entry vestibule or dining space from the main lounge without blocking natural ventilation.

### Statement Feature Backings
An elegant living room needs an anchor point. A book-matched marble slab or a textured slate stone wall behind the media console introduces depth. Pair this raw texture with indirect, warm 2700K lighting runs to make the stone glow at twilight.`
  },
  {
    id: "art-03",
    title: "Best Materials for Custom Furniture",
    category: "furniture",
    categoryLabel: "Furniture",
    image: aboutImg,
    date: "June 19, 2026",
    author: "Karan Suthar",
    readTime: "7 min read",
    excerpt: "A deep dive into solid American Walnut, European Oak, and Indian Teak wood, exploring how grain selection dictates longevity.",
    content: `In an era of mass-produced MDF furniture, choosing custom-built timber furniture is an investment in family heritage. The materials you select dictate not only the final aesthetic but how the piece will age and handle natural atmosphere changes.

### The Kings of Hardwood: Teak, Walnut, and Oak
- **Indian Teakwood**: Highly oil-rich and naturally resistant to pests and warping, Teak is the ultimate material for longevity in humid climates.
- **American Walnut**: Famous for its deep, smoky chocolate hues and flowing grain patterns. It provides an immediate mid-century or contemporary elegance.
- **European White Oak**: A incredibly dense wood with fine texture, perfect for minimalist, warm-Scandinavian, or classic European styles.

### Premium Joinery Techniques
A custom credenza should never rely on metal brackets or cheap nails. True craftsmanship uses sliding dovetails, mortise-and-tenon joints, and organic wood dowels. These joints strengthen as the timber responds to changes in room humidity.

### Finishes That Breathe
Avoid heavy polyurethane coatings that suffocate wood. Instead, opt for hand-polished shellac, natural oils, or matte water-based lacquers. These protect the timber while allowing the authentic tactile feel of the grain to remain accessible.`
  },
  {
    id: "art-04",
    title: "How Much Does Interior Design Cost?",
    category: "budget-planning",
    categoryLabel: "Budget Planning",
    image: lobbyBanner,
    date: "June 14, 2026",
    author: "Elena Suthar",
    readTime: "9 min read",
    excerpt: "Demystifying pricing models, materials estimates, and turnkey contractor fees to help you budget transparently for your home.",
    content: `Understanding where your investment goes is the foundation of a stress-free home transformation. Let's pull back the curtain on interior design pricing and technical budgeting.

### The Budget Formula
Generally, a high-quality, customized interior design project falls into these percentages:
- **Fixed Carpentry & Modular Millwork (45-50%)**: Wardrobes, modular kitchens, TV units, and hidden storage.
- **Civil & Services (20-25%)**: Electrical rewiring, plumbing, flooring upgrades, and painting.
- **Loose Furniture & Curated Decor (15-20%)**: Sofas, dining sets, mattresses, and drapery.
- **Lighting & Tech (10%)**: Automated switches, premium fixtures, and warm ceiling LED runs.
- **Professional Fees (10-15%)**: Designing, layout blueprinting, and complete site supervision.

### Avoid Cheap Compromises in Wet Zones
If you need to optimize costs, do not do it on your kitchen base cabinets or bathroom fittings. Standard plywood will rot within years when exposed to moisture. Spend on Marine Grade ply and premium hinges, and save by selecting clean, high-quality laminates instead of exotic veneers for guest bedrooms.`
  },
  {
    id: "art-05",
    title: "Kitchen Design Trends for Modern Homes",
    category: "modular-kitchen",
    categoryLabel: "Modular Kitchen",
    image: heroBg,
    date: "June 10, 2026",
    author: "Rajesh Suthar",
    readTime: "6 min read",
    excerpt: "Discover how matte black cabinets, touchless hardware, and integrated spice carousels are transforming today's kitchens.",
    content: `The modern kitchen has transcended utility; it is the social heart of the contemporary residence. Contemporary design blends smart storage systems with ultra-clean surfaces that conceal appliances until needed.

### Matte Anti-Fingerprint Surfaces
Traditional high-gloss kitchen cabinets are highly prone to visible smudges and grease stains. Modern premium kitchens utilize nanotech acrylic surfaces (like Fenix NTM) which are completely matte, highly scratch-resistant, and self-heal micro-scratches under heat.

### Invisible Storage Solutions
Keep counter spaces clean by integrating dedicated storage appliances:
- **Tandem Pantry Units**: Pull-out metal racks that bring all pantry contents into clear view with one motion.
- **Magic Corners**: Rotating blind corner carousels that utilize deep corner cabinets which are usually wasted.
- **Integrated Appliance Garages**: Sliding roll-up doors that hide coffee stations and mixers behind fluted panels.

### Seamless Stone Backsplashes
Instead of traditional tiled walls with grout lines that accumulate oils, run the countertop quartz or quartzite up the wall as a single, continuous slab backsplash. This looks incredibly clean, expansive, and is exceptionally easy to wipe down.`
  },
  {
    id: "art-06",
    title: "Wardrobe Design Ideas",
    category: "bedrooms",
    categoryLabel: "Bedrooms",
    image: projectLoft,
    date: "June 05, 2026",
    author: "Karan Suthar",
    readTime: "5 min read",
    excerpt: "Maximize your storage with floor-to-ceiling slatted wood doors, automatic sensor-led wardrobe hang rails, and hidden velvet drawers.",
    content: `A master wardrobe is far more than a place to store clothing; it is a personalized boutique dressing experience. By utilizing custom layouts and integrated technology, your closet can simplify your morning routines while adding premium aesthetic value.

### Floor-to-Ceiling Fluted Panels
Create a seamless look by designing wardrobe doors that extend all the way to the plaster ceiling, eliminating dust-collecting tops. Use fluted wood or slatted panels to add vertical textures, visually elevating the height of the master suite.

### Automated Sensored Illuminations
Never search for accessories in the dark. Mount vertical warm LED tracks behind tinted tempered glass shelves. Use micro-motion sensors that gently fade the wardrobe lights in when the doors open, casting an inviting, golden glow.

### Curated Valet Drawers
Incorporate shallow, customized valet drawers lined with soft velvet or Alcantara. Design dedicated grid slots for watches, jewelry, sunglasses, and leather belts, keeping your most-used accessories perfectly organized and easily accessible.`
  },
  {
    id: "art-07",
    title: "Office Interior Design Tips",
    category: "office-design",
    categoryLabel: "Office Design",
    image: transitionLuxury,
    date: "May 28, 2026",
    author: "Rajesh Suthar",
    readTime: "7 min read",
    excerpt: "Creating productive workspace hubs that combine acoustic soundproofing panels with dynamic ergonomic sit-to-stand wood desks.",
    content: `A premium corporate environment or home office must serve as a cognitive filter. It should foster deep concentration, accommodate advanced media systems, and support physical wellness over hours of intense, creative focus.

### Layered Acoustic Isolation
Noise distraction is the primary killer of workplace efficiency. Implement acoustic wood panels with micro-perforations backed by dense mineral wool. This absorbs high-frequency sounds, making online conferences clear and keeping the room quiet.

### Ergonomics Meets Fine Timber
Sit-to-stand desks are excellent for physical circulation, but cheap metal models ruin a luxury office vibe. We build custom sit-stand desks where the quiet electric motors are entirely enclosed within solid wood timber pillars, topped with a beautiful walnut desk slab.

### Smart Lighting Control
Avoid direct blue light fluorescent ceiling grids. Set up smart indirect lights that shift color temperature automatically as the day progresses—supporting morning focus with crisp daylight, and transitioning to warm amber light in the evening.`
  },
  {
    id: "art-08",
    title: "Luxury Bedroom Inspiration",
    category: "bedrooms",
    categoryLabel: "Bedrooms",
    image: heroSlide2,
    date: "May 22, 2026",
    author: "Elena Suthar",
    readTime: "6 min read",
    excerpt: "Transform your suite into a five-star retreat using low-slung platform wood beds, organic linens, and dimmable amber light wells.",
    content: `A luxury bedroom should function as a sensory sanctuary, filtering out the chaotic visual and acoustic noise of the outside world. Here's how to create an incredibly serene, resort-level master suite.

### Low-Slung Custom Platform Beds
A low-profile bed creates a relaxed, grounding ambiance. We handcraft platform beds with wide timber ledges that serve as floating bedside tables, integrating power outlets and reading light controls directly within the headboard.

### Padded Fluted Headboards
Elevate the main wall with floor-to-ceiling padded fabric panels. Choose high-contrast textures like boucle, raw linen, or fine suede. Run warm LED strip lines in deep recessed alcoves on either side to frame the headboard with ambient golden light.

### Organic Textile Layering
True luxury is tactile. Skip shiny synthetic fabrics and embrace pure Belgian flax linens, organic cottons, and heavy merino wool throws. Layer these textures in earthy, neutral tones like slate, sand, and charcoal for organic elegance.`
  },
  {
    id: "art-09",
    title: "Mistakes to Avoid During Home Renovation",
    category: "renovation",
    categoryLabel: "Renovation",
    image: projectLoft,
    date: "May 15, 2026",
    author: "Karan Suthar",
    readTime: "10 min read",
    excerpt: "Avoid costly delays by steering clear of structural wall tampering, early-stage appliance purchases, and cheap laminate compromises.",
    content: `Home renovation is a complex structural dance. While it is highly rewarding to breathe fresh life into old spaces, rookie mistakes can lead to major budget overruns and lasting structural issues. Here is what you should avoid.

### Tampering with Unidentified Walls
Never knock down a wall without a structural engineer's approval. Some brick walls that appear non-load-bearing actually provide critical lateral stability. Accidentally severing a hidden column or electrical conduit can compromise the entire building's safety.

### Buying Appliances Too Early
Do not purchase a heavy double-door refrigerator or massive built-in microwave before the kitchen cabinetry blueprints are finalized. Modular kitchens require millimetric precision. Even a 5mm discrepancy can prevent a custom oven door from opening.

### Neglecting Waterproofing Measures
A beautiful living room drywall will quickly ruin if there's minor water seepage behind the shared bathroom wall. Always execute thorough wet-zone pressure testing and apply elastomeric waterproofing membranes before applying final wall finishes.`
  },
  {
    id: "art-10",
    title: "Choosing the Right Plywood",
    category: "materials",
    categoryLabel: "Materials",
    image: aboutImg,
    date: "May 08, 2026",
    author: "Rajesh Suthar",
    readTime: "8 min read",
    excerpt: "Understand the structural differences between BWR, Marine Grade ply, MDF, and particleboard to protect your kitchen from moisture.",
    content: `The structural longevity of your furniture is entirely decided by what lies beneath the surface veneers. Choosing the wrong underlying boards can cause wardrobes to sag, or kitchen cabinet shelves to buckle within years.

### BWR vs. BWP vs. Commercial Plywood
- **Commercial (MR) Plywood**: Moisture Resistant, but only suitable for dry bedroom wardrobes and TV consoles.
- **BWR Plywood**: Boiling Water Resistant, perfect for kitchen wall cabinets, dining room sideboards, and general furniture.
- **BWP (Marine) Plywood**: Boiling Water Proof, the ultimate grade of plywood made with phenol-formaldehyde synthetic resins. Essential for base kitchen sink cabinets, vanity counters, and outdoor areas.

### Avoid MDF & Particle Board in High-Load Zones
Medium-Density Fiberboard (MDF) and Particle Board are made from compressed wood dust and synthetic adhesives. While cheap and perfectly flat, they hold screws poorly and absorb moisture like a sponge, causing irreversible swelling and structural failure.`
  },
  {
    id: "art-11",
    title: "Benefits of Turnkey Interior Solutions",
    category: "interior-design",
    categoryLabel: "Interior Design",
    image: lobbyBanner,
    date: "May 01, 2026",
    author: "Elena Suthar",
    readTime: "7 min read",
    excerpt: "Why custom design-build services reduce execution friction, ensure precise carpentry handoffs, and protect your schedule.",
    content: `Managing separate designers, civil contractors, carpenters, electricians, and painters is a recipe for endless finger-pointing and unexpected expenses. Turnkey interior solutions solve this by placing entire accountability on one partner.

### A Single Point of Contact
With turnkey services, you work with one design manager who oversees the entire project lifecycle. If there's an issue with plumbing alignments or custom joinery fits, the design-build studio resolves it internally without troubling your schedule.

### Millimetric Handoffs
When the same company that drafts the technical layout is also fabricating the custom modular units in their advanced workshop, error margins drop to zero. Blueprints translate flawlessly into physical elements with perfectly aligned joints.

### Protection Against Price Escalations
Separate contractors often provide low initial quotes only to hit you with major "add-on" bills during construction. A reputable turnkey studio provides a comprehensive, fixed-price contract, guaranteeing that your final invoice matches your initial budget.`
  },
  {
    id: "art-12",
    title: "How to Plan a Small Apartment",
    category: "home-tips",
    categoryLabel: "Home Tips",
    image: projectCoastal,
    date: "April 24, 2026",
    author: "Karan Suthar",
    readTime: "6 min read",
    excerpt: "Unlock secret spatial layers with custom vertical storage, transparent glass dividers, and sliding pocket door architectures.",
    content: `Designing a compact apartment is an exercise in structural precision and spatial choreography. By eliminating dead spaces and choosing smart furniture, you can live in a cozy apartment that feels double its actual square footage.

### Elevate and Utilize Vertical Planes
When floor space is scarce, go vertical. Run custom cabinetry all the way to the ceiling, utilizing the high bays for seasonal suitcases or holiday decor. Use light, reflective paint finishes for the cabinet fronts to keep the rooms feeling airy.

### Sliding Pocket Doors
Standard swinging doors require a 3-foot radius of empty floor space to swing open, completely wasting valuable corners. Replace them with custom sliding pocket doors that slide smoothly into the drywalls, freeing up space for desks or chairs.

### Reflective Panels & Glass Partitions
Replace solid brick partitions with clear or fluted black-framed glass walls. This allows morning sunlight to flow deep into the apartment, visually linking adjacent spaces while maintaining clear functional boundaries.`
  },
  {
    id: "art-13",
    title: "Restoring Historic Archways",
    category: "architecture",
    categoryLabel: "Architecture",
    image: heroBg,
    date: "April 15, 2026",
    author: "Rajesh Suthar",
    readTime: "7 min read",
    excerpt: "The sensitive geometry of restoring traditional stone arches and timber ceiling beams in coastal architectural retreats.",
    content: `Preserving historical architecture requires a deep understanding of traditional masonry and geometric engineering. Archways represent some of humanity's most resilient structural achievements, but they are highly sensitive to moisture and shifting foundations.

### Understanding Vault Geometry
Arches distribute weight through compressive forces, sending structural loads downward into side pillars. When restoring a vintage archway, we build custom temporary wooden scaffolds (centering) to support the weight while we carefully replace damaged mortar or stones.

### Material Compatibility is Key
Modern Portland cement is too rigid for vintage lime-mortar masonry. Using modern cement on old porous stone walls traps humidity, causing the old bricks to crack. We formulate custom lime-sand mixes to match the elasticity and breathability of the original structure.

### Combining Heritage with Modern Infrastructure
To make historical spaces livable, we carefully integrate electrical conduits and warm architectural lighting into structural mortar lines, keeping modern wiring entirely hidden while illuminating the ancient arch silhouettes.`
  },
  {
    id: "art-14",
    title: "Aesthetics of Boutique Showrooms",
    category: "commercial",
    categoryLabel: "Commercial",
    image: transitionLuxury,
    date: "April 05, 2026",
    author: "Elena Suthar",
    readTime: "8 min read",
    excerpt: "Designing luxury retail spaces that curate customer sensory paths, use custom brass fixtures, and showcase quiet elegance.",
    content: `In the age of online shopping, a luxury boutique showroom must serve as a physical sanctuary. It's not merely a display of products, but an immersive sensory narrative that builds deep brand emotional resonance.

### The Art of the Controlled Sensory Path
A premium store layout should never look like a busy grocery aisle. We design layouts that guide visitors along a gentle curve, utilizing spacious empty margins and quiet corners that encourage slow, deliberate browsing.

### Custom PVD Brass Sconces
Lighting is everything in retail design. Avoid harsh overhead spotlights that cause visual glare. Instead, use soft, dimmable LED fixtures integrated into custom brass displays, lighting up the products from within to show off raw textures.

### Materials That Convey Longevity
Integrate materials that feel premium to the touch: Italian travertine flooring, custom silk hand-woven carpets, and solid walnut panels. These elements evoke permanence and trust, encouraging visitors to connect deeply with the collections.`
  }
];

// Popular topics configs with lucide icons
const popularTopics = [
  { name: "Interior Design", id: "interior-design", icon: Paintbrush, count: 4, desc: "Aesthetic guidelines, luxury space curation, and spatial color rules." },
  { name: "Architecture", id: "architecture", icon: Compass, count: 2, desc: "Structural layouts, geometric arches, and monolithic planning guides." },
  { name: "Furniture", id: "furniture", icon: Hammer, count: 2, desc: "Timber comparisons, classic joineries, and mid-century modern credenzas." },
  { name: "Renovation", id: "renovation", icon: Sliders, count: 2, desc: "Site preparation checklists, waterproofing, and layout conversions." },
  { name: "Materials", id: "materials", icon: ShieldCheck, count: 2, desc: "Plywood categorizations, stone selections, and German hardware reviews." },
  { name: "Space Planning", id: "home-tips", icon: Layers, count: 2, desc: "Optimizing vertical layouts, pocket door alignments, and compact flats." },
  { name: "Lighting", id: "interior-design", icon: Lightbulb, count: 3, desc: "Recessed lines, ambient illumination arcs, and dimming curves." },
  { name: "Commercial Interiors", id: "commercial", icon: Building2, count: 2, desc: "Boutique retail paths, ergonomic desks, and branding environments." }
];

// Why Read Journal configs
const valueCards = [
  {
    title: "Expert Advice",
    description: "Written by professionals with years of practical experience.",
    icon: Award,
    color: "from-stone-50 to-stone-100"
  },
  {
    title: "Real Projects",
    description: "Learn from real-world residential and commercial projects.",
    icon: Building2,
    color: "from-stone-50 to-stone-100"
  },
  {
    title: "Material Knowledge",
    description: "Understand materials, hardware, finishes, and furniture quality.",
    icon: Layers,
    color: "from-stone-50 to-stone-100"
  },
  {
    title: "Design Inspiration",
    description: "Discover ideas to transform your home or workspace.",
    icon: Sparkles,
    color: "from-stone-50 to-stone-100"
  }
];

export default function BlogPage({ onBackToHome, onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeArticle, setActiveArticle] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // References for smooth scrolling
  const articlesSectionRef = useRef(null);

  // Reset page when category changes to prevent getting stuck on empty pages
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // Dispatch custom SEO events for active blog details
  useEffect(() => {
    if (activeArticle) {
      window.dispatchEvent(
        new CustomEvent("seo-update", {
          detail: {
            type: "blog-detail",
            id: activeArticle.id,
            title: activeArticle.title,
            desc: activeArticle.summary || activeArticle.content?.slice(0, 150) || "",
            image: activeArticle.image,
            author: activeArticle.author,
            category: activeArticle.categoryLabel,
            date: activeArticle.date,
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
  }, [activeArticle]);

  const handleOpenConsultation = () => {
    if (onOpenQuote) {
      onOpenQuote();
    } else {
      window.dispatchEvent(new CustomEvent("open-consultation"));
    }
  };

  const scrollToArticles = () => {
    if (articlesSectionRef.current) {
      articlesSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleTopicClick = (categoryId) => {
    setSelectedCategory(categoryId);
    // Smooth scroll down to articles section
    setTimeout(scrollToArticles, 100);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setNewsletterSubmitted(true);
      setEmail("");
    }
  };

  // Filter latest articles (excluding the main featured article to prevent duplication)
  const filteredArticles = selectedCategory === "all"
    ? blogArticles
    : blogArticles.filter(art => art.category === selectedCategory);

  // Pagination config
  const articlesPerPage = 6;
  const totalArticles = filteredArticles.length;
  const totalPages = Math.ceil(totalArticles / articlesPerPage);

  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      // Smoothly scroll back to the top of the articles section for beautiful navigation feel
      scrollToArticles();
    }
  };

  return (
    <div className="bg-bg-base text-stone-900 font-sans selection:bg-gold-accent/30 selection:text-stone-950 pt-[80px] overflow-hidden">
      
      {/* ==================================================== */}
      {/* PAGE HERO                                            */}
      {/* ==================================================== */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[var(--color-surface-dark)] text-white" id="blog-hero">
        <div className="absolute inset-0 z-0">
          <img
            src={SITE_IMAGES.lobbyBanner}
            alt="Suthar Interior Studio Immersive Journal Banner"
            className="w-full h-full object-cover opacity-20 filter brightness-[0.3]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/85 to-transparent" />
        </div>

        {/* Blueprint drafting grids overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-5 z-10">
          <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-4 gap-12 px-6">
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full border-r" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full text-left space-y-8 py-20">
          <div className="inline-flex items-center space-x-2 text-stone-400 text-xs tracking-[0.25em] font-mono uppercase">
            <button onClick={onBackToHome} className="hover:text-gold-accent transition-colors cursor-pointer uppercase font-bold">HOME</button>
            <span>/</span>
            <span className="text-gold-accent font-bold">JOURNAL</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <span className="text-gold-accent text-xs sm:text-sm tracking-[0.3em] font-mono font-bold block uppercase">
              INSIGHTS & JOURNAL
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight uppercase"
            >
              Ideas That <br />
              <span className="text-gold-accent">Inspire Better</span> Spaces.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="text-[var(--color-text-muted)] font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl pt-2"
            >
              Discover expert advice, interior design inspiration, architectural ideas, furniture guides, renovation tips, and practical knowledge from the team at Suthar Interior Studio.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button
              onClick={scrollToArticles}
              className="inline-flex items-center justify-center space-x-3 text-stone-900 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-gold-accent hover:bg-gold-accent px-6 py-4 rounded-none cursor-pointer"
            >
              <span>Browse Articles</span>
              <div className="w-8 h-8 rounded-full border border-stone-950/10 bg-[var(--color-surface-dark)]/5 flex items-center justify-center text-stone-950">
                <ArrowRight size={12} strokeWidth={2.5} />
              </div>
            </button>

            <button
              onClick={handleOpenConsultation}
              className="inline-flex items-center justify-center px-6 py-4 border border-white/20 text-white text-xs font-mono tracking-[0.2em] uppercase font-bold transition-all duration-300 rounded-none bg-white/5 backdrop-blur-md cursor-pointer hover:border-gold-accent hover:text-gold-accent"
            >
              Book Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* SECTION 01: FEATURED ARTICLE                         */}
      {/* ==================================================== */}
      <section className="py-24 bg-white border-b border-stone-100" id="featured-article">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between border-b border-stone-200/60 pb-8 mb-16">
            <div className="text-left space-y-3">
              <span className="text-gold-accent text-xs font-mono tracking-[0.3em] font-bold block uppercase">
                FEATURED SPOTLIGHT
              </span>
              <h2 className="text-3xl md:text-6xl font-light tracking-tight text-stone-900 uppercase">
                The Master <span className="text-gold-accent">Colleague</span>
              </h2>
            </div>
            <p className="text-stone-500 font-light text-sm max-w-md mt-4 lg:mt-0 leading-relaxed text-left">
              Delve into our most-read publication, offering deep, practical insights regarding luxury design orchestration and technical precision.
            </p>
          </div>

          <div className="bg-bg-base rounded-3xl overflow-hidden border border-stone-200/40 shadow-sm hover:shadow-2xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              
              {/* Left Column: Premium Image frame */}
              <div 
                className="lg:col-span-7 relative overflow-hidden bg-stone-100 aspect-video lg:aspect-auto min-h-[350px] cursor-pointer group"
                onClick={() => setActiveArticle(featuredArticle)}
              >
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-[1.03] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-[var(--color-surface-dark)] text-gold-accent font-mono text-[10px] font-bold uppercase tracking-widest px-3.5 py-2 shadow-lg">
                  {featuredArticle.categoryLabel}
                </div>
                <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center border border-white/20 group-hover:bg-gold-accent group-hover:text-stone-950 transition-all duration-300">
                  <Maximize2 size={16} />
                </div>
              </div>

              {/* Right Column: Editorial metadata details */}
              <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between text-left bg-white">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 text-[11px] font-mono font-bold text-stone-400 uppercase tracking-widest">
                    <span className="flex items-center space-x-1.5">
                      <Calendar size={12} className="text-gold-accent" />
                      <span>{featuredArticle.date}</span>
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center space-x-1.5">
                      <Clock size={12} className="text-gold-accent" />
                      <span>{featuredArticle.readTime}</span>
                    </span>
                  </div>

                  <h3 
                    onClick={() => setActiveArticle(featuredArticle)}
                    className="text-2xl sm:text-3xl md:text-4xl font-light font-serif tracking-tight text-stone-950 hover:text-gold-accent transition-colors cursor-pointer leading-tight uppercase"
                  >
                    {featuredArticle.title}
                  </h3>

                  <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="pt-8 mt-8 border-t border-stone-100 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-stone-700">
                    <div className="w-8 h-8 rounded-full bg-stone-100 border border-stone-200/50 flex items-center justify-center text-gold-accent font-mono text-xs">
                      ES
                    </div>
                    <span>By {featuredArticle.author}</span>
                  </div>

                  <button
                    onClick={() => setActiveArticle(featuredArticle)}
                    className="inline-flex items-center space-x-2.5 text-xs font-bold font-mono tracking-widest uppercase text-stone-900 hover:text-gold-accent transition-colors cursor-pointer group"
                  >
                    <span>Read Article</span>
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ==================================================== */}
      {/* SECTION 02: BLOG CATEGORIES FILTER BAR               */}
      {/* ==================================================== */}
      <section ref={articlesSectionRef} className="py-12 bg-bg-base border-b border-stone-100 sticky top-[80px] z-30 shadow-sm" id="articles-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col xl:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center space-x-2.5 text-stone-400 font-mono text-[10px] sm:text-xs tracking-widest uppercase shrink-0">
            <Sliders size={14} className="text-gold-accent" />
            <span className="font-bold">Select Category</span>
          </div>

          {/* Elegant customizable filter buttons */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full no-scrollbar py-2 px-1">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4.5 py-2.5 text-[11px] font-mono font-bold uppercase tracking-widest transition-all duration-300 rounded-none border whitespace-nowrap cursor-pointer ${
                  selectedCategory === tab.id
                    ? "bg-[var(--color-surface-dark)] text-gold-accent border-stone-950 shadow-md scale-95"
                    : "bg-white text-stone-600 border-stone-200/80 hover:border-gold-accent/50 hover:text-stone-950"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================== */}
      {/* SECTION 03: LATEST ARTICLES GRID                     */}
      {/* ==================================================== */}
      <section className="py-24 bg-white" id="articles-grid">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex justify-between items-center mb-10 border-b border-stone-100 pb-4">
            <div className="text-xs font-mono text-stone-400 tracking-wider">
              SHOWING <span className="text-stone-950 font-bold">{totalArticles}</span> {totalArticles === 1 ? "ARTICLE" : "ARTICLES"} IN{" "}
              <span className="text-stone-950 font-bold uppercase">
                {filterTabs.find(t => t.id === selectedCategory)?.label}
              </span>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-xs font-mono text-stone-400">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-accent animate-pulse" />
              <span>Select card to read full publication</span>
            </div>
          </div>

          {/* Fallback for empty categories */}
          {totalArticles === 0 ? (
            <div className="py-20 text-center space-y-4 bg-bg-base rounded-3xl border border-dashed border-stone-200">
              <BookOpen size={40} className="mx-auto text-[var(--color-text-muted)]" />
              <h3 className="text-lg font-serif font-medium text-stone-800 uppercase">No publications found</h3>
              <p className="text-stone-500 text-xs font-light max-w-md mx-auto">
                We haven't uploaded articles under this specific category filter yet. Please browse another section or explore our featured guide.
              </p>
              <button 
                onClick={() => setSelectedCategory("all")}
                className="px-5 py-2.5 bg-[var(--color-surface-dark)] text-gold-accent text-xs font-mono font-bold uppercase tracking-widest cursor-pointer hover:bg-stone-900 transition-colors"
              >
                Show All Articles
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {paginatedArticles.map((article) => (
                  <motion.article
                    key={article.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="group bg-bg-base border border-stone-200/60 hover:border-primary rounded-2xl overflow-hidden hover:shadow-[0_20px_50px_rgba(197,168,128,0.2)] hover:bg-white transition-all duration-500 flex flex-col justify-between text-left"
                  >
                    <div className="space-y-6">
                      {/* Featured Image */}
                      <div 
                        className="relative w-full aspect-[16/10] overflow-hidden bg-stone-100 cursor-pointer"
                        onClick={() => setActiveArticle(article)}
                      >
                        <img
                          src={article.image}
                          alt={article.title}
                          loading="lazy"
                          className="w-full h-full object-cover filter brightness-[0.98] group-hover:scale-105 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4 bg-[var(--color-surface-dark)] text-gold-accent font-mono text-[9px] font-bold uppercase tracking-widest px-2.5 py-1.5 shadow-md">
                          {article.categoryLabel}
                        </div>
                      </div>

                      {/* Content excerpt and meta */}
                      <div className="px-6 space-y-3">
                        <div className="flex items-center space-x-3 text-[10px] text-stone-400 font-mono tracking-wider font-bold uppercase">
                          <span className="flex items-center space-x-1">
                            <Calendar size={11} className="text-gold-accent" />
                            <span>{article.date}</span>
                          </span>
                          <span>&bull;</span>
                          <span className="flex items-center space-x-1">
                            <Clock size={11} className="text-gold-accent" />
                            <span>{article.readTime}</span>
                          </span>
                        </div>

                        <h3 
                          onClick={() => setActiveArticle(article)}
                          className="text-lg md:text-xl font-serif text-stone-900 group-hover:text-gold-accent transition-colors duration-300 leading-snug cursor-pointer font-medium uppercase"
                        >
                          {article.title}
                        </h3>

                        <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer details */}
                    <div className="p-6 pt-4 mt-6 border-t border-stone-200/50 flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-[11px] font-mono font-bold text-stone-400 uppercase">
                        <User size={12} className="text-gold-accent" />
                        <span>By {article.author.split(" ")[0]}</span>
                      </div>

                      <button
                        onClick={() => setActiveArticle(article)}
                        className="text-[10px] uppercase tracking-widest font-bold font-mono text-stone-950 hover:text-gold-accent transition-colors inline-flex items-center space-x-1 cursor-pointer group"
                      >
                        <span>Read More</span>
                        <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>

                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* ==================================================== */}
          {/* SECTION 07: SEO-FRIENDLY PAGINATION                  */}
          {/* ==================================================== */}
          {totalPages > 1 && (
            <div className="mt-16 pt-8 border-t border-stone-100 flex items-center justify-center space-x-2" id="pagination">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  currentPage === 1
                    ? "border-stone-100 text-[var(--color-text-muted)] cursor-not-allowed"
                    : "border-stone-200 text-stone-700 hover:border-gold-accent hover:text-gold-accent cursor-pointer"
                }`}
                title="Previous Page"
              >
                <ChevronLeft size={16} />
              </button>

              {/* Numbered Buttons */}
              {Array.from({ length: totalPages }, (_, idx) => {
                const pageNum = idx + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-10 h-10 font-mono text-xs font-bold transition-all duration-300 rounded-full cursor-pointer ${
                      currentPage === pageNum
                        ? "bg-[var(--color-surface-dark)] text-gold-accent border border-stone-950 shadow-md scale-95"
                        : "bg-white text-stone-600 border border-stone-200/60 hover:border-gold-accent hover:text-stone-950"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  currentPage === totalPages
                    ? "border-stone-100 text-[var(--color-text-muted)] cursor-not-allowed"
                    : "border-stone-200 text-stone-700 hover:border-gold-accent hover:text-gold-accent cursor-pointer"
                }`}
                title="Next Page"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ==================================================== */}
      {/* SECTION 04: POPULAR TOPICS                           */}
      {/* ==================================================== */}
      <section className="py-24 bg-bg-base border-t border-b border-stone-100" id="popular-topics">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-gold-accent text-xs tracking-[0.25em] font-mono font-bold uppercase block">
              DISCOVER MORE KNOWLEDGE
            </span>
            <h2 className="text-3xl md:text-6xl font-light tracking-tight text-stone-900 uppercase">
              Popular <span className="text-gold-accent">Topics</span>
            </h2>
            <p className="text-stone-500 font-light text-sm sm:text-base leading-relaxed">
              Explore deep dives across structural architecture, fine woodworking joinery, luxury material selection catalogs, and smart space blueprints.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularTopics.map((topic, idx) => {
              const IconComponent = topic.icon;
              return (
                <div
                  key={idx}
                  onClick={() => handleTopicClick(topic.id)}
                  className="bg-white border border-stone-200/40 p-6 rounded-2xl text-left space-y-4 hover:shadow-lg hover:border-gold-accent/30 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-bg-base border border-stone-200/30 flex items-center justify-center text-gold-accent group-hover:bg-gold-accent/10 transition-colors">
                      <IconComponent size={18} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-stone-950 group-hover:text-gold-accent transition-colors">
                        {topic.name}
                      </h3>
                      <p className="text-stone-500 text-xs font-light leading-relaxed">
                        {topic.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-50 flex justify-between items-center text-[10px] font-mono text-stone-400 font-bold uppercase tracking-widest">
                    <span>Explore Section</span>
                    <ChevronRight size={12} className="text-gold-accent group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==================================================== */}
      {/* SECTION 06: WHY READ OUR JOURNAL                     */}
      {/* ==================================================== */}
      <section className="py-24 bg-white border-b border-stone-100" id="why-read">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-gold-accent text-xs tracking-[0.25em] font-mono font-bold uppercase block">
              CURATED DESIGN EXCELLENCE
            </span>
            <h2 className="text-3xl md:text-6xl font-light tracking-tight text-stone-900 uppercase">
              Why Read <span className="text-gold-accent">Our</span> Journal?
            </h2>
            <p className="text-stone-500 font-light text-sm sm:text-base leading-relaxed">
              We translate our family design values into clear, transparent, and authoritative literature to empower your real-world blueprint planning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-bg-base border border-stone-200/40 p-8 rounded-2xl text-left space-y-4 hover:bg-white hover:shadow-xl hover:border-gold-accent/20 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-stone-200/30 flex items-center justify-center text-gold-accent shadow-sm">
                    <IconComp size={20} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-stone-950">
                      {card.title}
                    </h3>
                    <p className="text-stone-500 text-xs leading-relaxed font-light">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==================================================== */}
      {/* SECTION 05: NEWSLETTER                               */}
      {/* ==================================================== */}
      <section className="py-24 bg-[var(--color-surface-dark)] text-white relative overflow-hidden" id="newsletter">
        <div className="absolute right-0 top-0 w-[50%] h-[100%] bg-[radial-gradient(ellipse_at_top_right,_rgba(197,168,128,0.06),_transparent_70%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-accent mx-auto mb-4">
            <Mail size={22} className="animate-pulse" />
          </div>

          <div className="space-y-3">
            <span className="text-gold-accent text-xs tracking-[0.25em] font-mono font-bold block uppercase">
              WEEKLY DIGEST
            </span>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-white uppercase leading-none">
              Stay <span className="text-gold-accent">Inspired.</span>
            </h2>
            <p className="text-[var(--color-text-muted)] font-light text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Receive design inspiration, renovation tips, material guides, and architecture insights directly in your inbox.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!newsletterSubmitted ? (
              <motion.form
                key="newsletter-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -15 }}
                onSubmit={handleNewsletterSubmit}
                className="max-w-md mx-auto pt-4"
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-5 py-3.5 bg-stone-900 border border-white/10 text-white placeholder-stone-500 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-gold-accent focus:border-gold-accent"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-gold-accent hover:bg-gold-accent text-stone-950 font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-[10px] text-stone-500 font-mono mt-3 uppercase tracking-wider">
                  No Spam. Secure Opt-Out Anytime.
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="newsletter-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-md mx-auto py-8 px-6 bg-white/5 border border-white/10 rounded-2xl space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-gold-accent/10 border border-gold-accent/30 flex items-center justify-center text-gold-accent mx-auto">
                  <Check size={20} strokeWidth={3} className="animate-bounce" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-gold-accent text-sm uppercase font-mono font-bold tracking-widest">
                    Thank You!
                  </h4>
                  <p className="text-white text-xs sm:text-sm font-light leading-relaxed">
                    You've successfully subscribed to the Suthar Journal. Keep an eye on your inbox for our latest design volumes.
                  </p>
                </div>
                <button
                  onClick={() => setNewsletterSubmitted(false)}
                  className="text-[10px] font-mono tracking-widest uppercase text-stone-400 hover:text-white transition-colors underline cursor-pointer"
                >
                  Subscribe another email
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* ==================================================== */}
      {/* FINAL CTA                                            */}
      {/* ==================================================== */}
      <section className="relative w-full overflow-hidden py-24 md:py-32 bg-bg-base" id="final-cta">
        <div className="absolute inset-0 z-0 opacity-[0.03]">
          <div className="h-full w-full bg-[radial-gradient(var(--color-gold-accent)_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-8">
          <div className="space-y-4 max-w-4xl mx-auto">
            <span className="text-gold-accent text-xs tracking-[0.3em] font-mono font-bold block uppercase">
              START YOUR JOURNEY WITH US
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-stone-900 leading-tight uppercase">
              Ready To Transform <br />
              <span className="text-gold-accent">Your</span> Space?
            </h2>
            <p className="text-stone-500 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Whether you're planning your first home or a large commercial project, our team is ready to guide you from concept to completion.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={handleOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 text-stone-900 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-gold-accent hover:bg-gold-accent px-8 py-4.5 rounded-none cursor-pointer"
            >
              <span>Book Free Consultation</span>
              <div className="w-8 h-8 rounded-full border border-stone-950/10 bg-[var(--color-surface-dark)]/5 flex items-center justify-center text-stone-950">
                <ArrowRight size={12} strokeWidth={2.5} />
              </div>
            </button>

            <button
              onClick={onBackToHome}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4.5 border border-stone-900/10 text-stone-900 text-xs font-mono tracking-[0.2em] uppercase font-bold transition-all duration-300 rounded-none bg-[var(--color-surface-dark)]/5 cursor-pointer hover:bg-[var(--color-surface-dark)] hover:text-white"
            >
              Explore Our Projects
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* IMMERSIVE SLIDE-OVER ARTICLE READER PANEL            */}
      {/* ==================================================== */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex justify-end" id="blog-reader-overlay">
            {/* Dark background cover with fade transit */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="absolute inset-0 bg-[var(--color-surface-dark)] cursor-pointer"
            />

            {/* Solid reader panel slides in from the right side */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-3xl bg-white h-full relative z-10 flex flex-col shadow-2xl overflow-y-auto text-left"
            >
              {/* Floating control bar */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4.5 border-b border-stone-100 flex items-center justify-between z-30">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="inline-flex items-center space-x-2.5 text-stone-500 hover:text-stone-950 text-xs font-mono font-bold uppercase tracking-widest cursor-pointer"
                >
                  <ArrowLeft size={16} />
                  <span>BACK TO JOURNAL</span>
                </button>

                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Article link copied to clipboard!");
                    }}
                    className="p-2.5 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-950 transition-colors cursor-pointer" 
                    title="Copy Article Link"
                  >
                    <Share2 size={16} />
                  </button>
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="p-2.5 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-950 transition-colors cursor-pointer"
                    title="Close Reader"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Header Image Cover */}
              <div className="w-full aspect-[2/1] bg-stone-100 overflow-hidden relative">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="bg-gold-accent text-stone-950 font-mono text-[9px] font-black uppercase tracking-widest px-2.5 py-1.5 shadow">
                    {activeArticle.categoryLabel}
                  </span>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-serif font-light tracking-tight text-white uppercase leading-tight">
                    {activeArticle.title}
                  </h1>
                </div>
              </div>

              {/* Text Editorial Content */}
              <div className="p-6 md:p-12 space-y-8 flex-1">
                
                {/* Author Metadata Box */}
                <div className="flex flex-wrap items-center gap-6 pb-6 border-b border-stone-100 text-stone-400 font-mono text-[10px] tracking-wider uppercase font-bold">
                  <div className="flex items-center space-x-2 text-stone-600">
                    <User size={13} className="text-gold-accent" />
                    <span>Written by <strong className="font-semibold text-stone-900">{activeArticle.author}</strong></span>
                  </div>
                  <div className="flex items-center space-x-2 text-stone-600">
                    <Calendar size={13} className="text-gold-accent" />
                    <span>Published on {activeArticle.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-stone-600">
                    <Clock size={13} className="text-gold-accent" />
                    <span>Duration: {activeArticle.readTime}</span>
                  </div>
                </div>

                {/* Styled Article content with lines formatting */}
                <div className="prose prose-stone prose-sm sm:prose-base max-w-none text-stone-700 font-light leading-relaxed space-y-6">
                  {activeArticle.content.split("\n\n").map((para, i) => {
                    if (para.startsWith("###")) {
                      return (
                        <h3 key={i} className="text-lg md:text-xl font-serif font-bold text-stone-950 pt-6 border-l-2 border-gold-accent pl-4 uppercase tracking-tight">
                          {para.replace("### ", "")}
                        </h3>
                      );
                    }
                    if (para.startsWith("- **")) {
                      const listItems = para.split("\n");
                      return (
                        <ul key={i} className="space-y-3 pl-4 pt-2">
                          {listItems.map((item, keyIdx) => {
                            const trimmedItem = item.replace("- ", "");
                            return (
                              <li key={keyIdx} className="list-disc text-stone-600 text-xs sm:text-sm leading-relaxed">
                                {trimmedItem}
                              </li>
                            );
                          })}
                        </ul>
                      );
                    }
                    return (
                      <p key={i} className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                        {para}
                      </p>
                    );
                  })}
                </div>

                {/* Call-to-action bottom panel */}
                <div className="bg-bg-base border border-stone-200/50 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 mt-16 text-center md:text-left">
                  <div className="space-y-1">
                    <span className="text-gold-accent text-[10px] tracking-widest font-mono font-bold uppercase flex items-center justify-center md:justify-start gap-1">
                      <Sparkles size={12} className="animate-pulse" />
                      <span>CO-CREATE YOUR BLUEPRINT</span>
                    </span>
                    <h4 className="text-sm uppercase tracking-wider text-stone-900 font-bold">
                      Inspired by Suthar's design advice?
                    </h4>
                    <p className="text-stone-500 text-[11px] font-light">
                      Book a blueprint draft session with our master builders.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setActiveArticle(null);
                      handleOpenConsultation();
                    }}
                    className="w-full md:w-auto px-6 py-3.5 bg-[var(--color-surface-dark)] hover:bg-gold-accent hover:text-stone-950 text-white font-bold text-xs uppercase tracking-widest transition-colors rounded-none cursor-pointer shrink-0"
                  >
                    Consult With {activeArticle.author.split(" ")[0]}
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
