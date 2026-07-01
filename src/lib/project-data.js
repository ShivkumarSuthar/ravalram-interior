/**
 * Suthar Interior Studio & Architecture - Unified Portfolio Project Registry
 */

export const projects = [
  {
    slug: "luxury-residence",
    id: 1,
    title: "Luxury Residence",
    category: "Residential Interior",
    filterKey: "Residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    description: "A warm contemporary home designed with custom furniture, premium finishes, and carefully planned lighting to create elegant everyday living.",
    location: "Santacruz West, Mumbai",
    scope: "Full-scale Turnkey Residential Design, Civil Works, Plumbing, custom wooden millwork, and lighting overlays.",
    year: "2025",
    content: `This double-height luxury penthouse was redesigned from its skeletal concrete frames into an editorial, light-filled modern home. Our focus was on maximizing the expansive coastal light and balancing raw organic stones with customized timber carpentry.

### Spatial Flow & Layout Planning
To make the flow of the duplex feel coherent, we demolished redundant partition walls to create an open-plan lounge, dining pavilion, and show-kitchen suite. The entry vestibule features a floating vertical slatted partition screen hand-carved in solid Indian Teak wood, acting as a functional room divider while preserving ambient wind currents.

### Materials & Craftsmanship Details
For the core cabinetry, Suthar's master craftsmen selected marine BWR plywood finished with premium American Walnut veneers. The grains of the Walnut were meticulously hand-aligned across cabinet faces to maintain a continuous, fluid wave. Solid brass insert handles were flushed directly into wardrobe doors for a sleek tactile experience.

### Architectural Illumination Layers
We rejected direct downlight glare in favor of subtle indirect illumination layers. Integrated 2700K warm LED runs graze custom fluted plaster wall backdrops, casting soft golden glows. Track spotlights pinpoint the custom teak dining table, ensuring a comfortable, cozy dining atmosphere at twilight.`
  },
  {
    slug: "modern-office-workspace",
    id: 2,
    title: "Modern Office Workspace",
    category: "Commercial Interior",
    filterKey: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
    description: "A productive and inspiring workspace balancing functionality, comfort, and modern aesthetics for growing businesses.",
    location: "Koregaon Park, Pune",
    scope: "Commercial Interior Design, layout blueprinting, glass partitioning, acoustic paneling, and customized conference cabinetry.",
    year: "2026",
    content: `Our task was to transform a cold corporate block into a warm, ergonomic, and highly productive headquarters. By bringing residential spatial design philosophies into the commercial sphere, we created a workspace that feels inspiring and comfortable.

### Ergonomic Space & Acoustic Planning
To maintain focus and prevent acoustic reverberations across double-glazed glass enclosures, we engineered custom fabric-upholstered wall panels stuffed with high-density rockwool. Collaborative hot-desking zones are separated from private cabins by planters filled with air-purifying foliage.

### Customized Executive Furniture
The boardroom is centered around a massive 14-foot boat-shaped conference table manufactured entirely in our native woodworking facility. We used a solid oak timber top with customized electrical pop-up housing flushed under solid brass hatches. Matching credenzas house system equipment behind seamless soft-close panels.`
  },
  {
    slug: "premium-modular-kitchen",
    id: 3,
    title: "Premium Modular Kitchen",
    category: "Custom Furniture",
    filterKey: "Furniture",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200",
    description: "A beautifully crafted modular kitchen designed around efficiency, premium materials, and timeless style.",
    location: "Donapaula, Goa",
    scope: "Modular kitchen design, customized BWR cabinetry fabrication, German soft-close fittings, and quartz continuous slab backsplashes.",
    year: "2026",
    content: `Designed to withstand heavy daily use and coastal humidity, this premium modular kitchen combines cutting-edge European functional hardware with Suthar's authentic joinery workmanship.

### Moisture-Resistant Construction
Standard kitchen cabinets warp or decay when exposed to Goa's intense humidity. We utilized premium 100% waterproof Marine Grade plywood (IS 710) for all cabinet carcasses. Cabinet drawers run on Blumotion soft-close tandemboxes with a load capacity of up to 50kg per drawer.

### Premium Nanotech Surfaces
The external door shutters utilize ultra-matte acrylic sheets in slate gray. These surfaces feature advanced thermal healing and finger-print resistance, keeping the kitchen pristine with a simple wipe-down. The countertop is a seamless 15mm thick white quartz slab running continuously up the wall as a full-height backsplash.`
  },
  {
    slug: "home-renovation",
    id: 4,
    title: "Home Renovation",
    category: "Renovation",
    filterKey: "Renovation",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200",
    description: "Transforming an existing home into a brighter, more functional, and contemporary living environment while preserving its character.",
    location: "Candolim, Goa",
    scope: "Total structural renovation, plumbing overhauls, custom modular wardrobes, floor tiling, and decorative finishes.",
    year: "2025",
    content: `An old coastal bungalow was completely gutted and rebuilt to modernize its spatial mechanics while retaining its historical ceiling heights and structural character.

### Structural Redesign & Civil Works
We reinforced the traditional timber roof trusses and exposed raw brick pillars. Redundant internal doorways were widened and styled with classic archways, drawing natural cross-breezes throughout the master bedroom and living room suite.

### Custom Modular Wardrobe System
The master suite is elevated by a custom floor-to-ceiling wardrobe with fluted wood sliding doors. Inside, we integrated warm motion-sensored lighting rails that activate upon opening, beautifully showcasing accessories behind dark tempered glass shelves.`
  }
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
