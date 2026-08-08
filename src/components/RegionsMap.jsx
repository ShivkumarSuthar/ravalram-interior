"use client";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* ── City coordinates (lat, lng) ── */
const MARKERS = [
  { lat: 19.0760, lng: 72.8777, label: "Mumbai",      isHQ: true },
  { lat: 18.5204, lng: 73.8567, label: "Pune" },
  { lat: 15.2993, lng: 74.1240, label: "Goa" },
  { lat: 12.9716, lng: 77.5946, label: "Bengaluru" },
  { lat: 17.3850, lng: 78.4867, label: "Hyderabad" },
  { lat: 15.3647, lng: 75.1240, label: "Hubballi" },
  { lat: 14.4267, lng: 74.4135, label: "Kumta" },
  { lat: 14.2798, lng: 74.4439, label: "Honnavar" },
  { lat: 14.0941, lng: 74.4842, label: "Murudeshwar" },
];

/* ── Custom dot icon factory ── */
function dotIcon(isHQ = false) {
  const size = isHQ ? 14 : 9;
  const color = isHQ ? "var(--color-primary)" : "var(--color-bg-dark)";
  const border = isHQ ? "var(--color-primary-hover)" : "var(--color-text-muted)";
  const pulse = isHQ
    ? `<span style="position:absolute;top:50%;left:50%;width:28px;height:28px;margin:-14px 0 0 -14px;border-radius:50%;border:1.5px solid var(--color-primary);opacity:0;animation:hqPulse 2.5s ease-out infinite;"></span>`
    : "";

  return L.divIcon({
    className: "",
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    html: `
      <div style="position:relative;width:${size}px;height:${size}px;">
        ${pulse}
        <span style="display:block;width:${size}px;height:${size}px;border-radius:50%;background:${color};border:${isHQ ? 2 : 1}px solid ${border};box-shadow:0 0 ${isHQ ? 8 : 3}px ${color}40;"></span>
      </div>
    `,
  });
}

/* ── Tooltip label factory ── */
function labelHtml(label, isHQ = false) {
  const badge = isHQ
    ? `<span style="display:inline-block;margin-left:5px;padding:1px 5px;font-size:8px;font-weight:800;font-family:'JetBrains Mono',monospace;background:var(--color-primary);color:var(--color-bg-dark);border-radius:3px;vertical-align:middle;">HQ</span>`
    : "";
  return `<span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:${isHQ ? 13 : 11}px;font-weight:${isHQ ? 700 : 500};color:#44403c;white-space:nowrap;">${label}${badge}</span>`;
}

export default function RegionsMap() {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    /* Inject pulse keyframes once */
    if (!document.getElementById("hq-pulse-style")) {
      const style = document.createElement("style");
      style.id = "hq-pulse-style";
      style.textContent = `
        @keyframes hqPulse {
          0%   { transform: scale(0.5); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        /* Remove Leaflet default link styling from tooltips */
        .leaflet-tooltip { background: transparent !important; border: none !important; box-shadow: none !important; padding: 0 !important; }
        .leaflet-tooltip::before { display: none !important; }
        /* Grayscale the map tiles */
        .grayscale-tiles img { filter: grayscale(1) brightness(1.05) contrast(0.95) !important; }
        /* Hide leaflet attribution to keep it minimal */
        .regions-map .leaflet-control-attribution { font-size: 9px; opacity: 0.4; }
        .regions-map .leaflet-control-attribution a { color: var(--color-text-muted) !important; }
      `;
      document.head.appendChild(style);
    }

    /* Create map */
    const map = L.map(containerRef.current, {
      center: [16.2, 75.8],
      zoom: 6,
      zoomControl: false,
      scrollWheelZoom: false,
      dragging: false,
      touchZoom: false,
      doubleClickZoom: false,
      attributionControl: true,
    });

    /* Grayscale tile layer — CartoDB Positron (free, no API key) */
    const tileLayer = L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png",
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }
    );
    tileLayer.addTo(map);

    /* Apply grayscale class to tile pane */
    const tilePane = map.getPane("tilePane");
    if (tilePane) tilePane.classList.add("grayscale-tiles");

    /* Add city markers */
    MARKERS.forEach((m) => {
      const marker = L.marker([m.lat, m.lng], { icon: dotIcon(m.isHQ) }).addTo(map);
      marker.bindTooltip(labelHtml(m.label, m.isHQ), {
        permanent: true,
        direction: m.isHQ ? "right" : "auto",
        offset: [m.isHQ ? 12 : 8, 0],
        className: "",
      });
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="regions-map w-full rounded-2xl overflow-hidden border border-stone-200/60"
      style={{ height: "480px" }}
      aria-label="Map of India showing Suthar Interior Studio active regions"
    />
  );
}
