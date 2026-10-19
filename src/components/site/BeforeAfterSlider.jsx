"use client";

import { useCallback, useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

const clamp = (n) => Math.min(100, Math.max(0, n));

// Before/after comparison: drag anywhere on the image (mouse or touch), or focus the handle and use
// the arrow keys. `before` is revealed on the left of the handle, `after` on the right.
export default function BeforeAfterSlider({ before, after }) {
  const boxRef = useRef(null);
  const dragging = useRef(false);
  const [pos, setPos] = useState(50);
  const [touched, setTouched] = useState(false);

  const moveTo = useCallback((clientX) => {
    const rect = boxRef.current.getBoundingClientRect();
    setPos(clamp(((clientX - rect.left) / rect.width) * 100));
  }, []);

  const onPointerDown = (e) => {
    dragging.current = true;
    setTouched(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    moveTo(e.clientX);
  };

  const onPointerMove = (e) => {
    if (dragging.current) moveTo(e.clientX);
  };

  const stopDragging = () => {
    dragging.current = false;
  };

  const onKeyDown = (e) => {
    const step = e.shiftKey ? 20 : 5;
    const next = { ArrowLeft: pos - step, ArrowRight: pos + step, Home: 0, End: 100 }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    setTouched(true);
    setPos(clamp(next));
  };

  return (
    <div
      ref={boxRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      className="relative aspect-4/3 w-full cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-3xl bg-surface-dark shadow-2xl sm:aspect-video"
    >
      {/* After: full image underneath, with its label on the right */}
      <div className="pointer-events-none absolute inset-0">
        <img src={after.src} alt={after.alt} draggable={false} loading="lazy" decoding="async" className="size-full object-cover" />
        <span className="absolute right-4 top-4 rounded-full bg-black/55 px-4 py-1.5 font-heading text-eyebrow uppercase text-white backdrop-blur-md sm:right-6 sm:top-6">
          {after.label}
        </span>
      </div>

      {/* Before: same size, clipped so only the part left of the handle shows; its label is clipped with it,
          so a label disappears as the handle passes over it */}
      <div className="pointer-events-none absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={before.src} alt={before.alt} draggable={false} loading="lazy" decoding="async" className="size-full object-cover" />
        <span className="absolute left-4 top-4 rounded-full bg-black/55 px-4 py-1.5 font-heading text-eyebrow uppercase text-white backdrop-blur-md sm:left-6 sm:top-6">
          {before.label}
        </span>
      </div>

      {/* Divider line + handle */}
      <div className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow-lg" style={{ left: `${pos}%` }}>
        <div
          role="slider"
          tabIndex={0}
          aria-label={`Compare ${before.label} and ${after.label}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          aria-valuetext={`${Math.round(pos)}% ${before.label}`}
          onKeyDown={onKeyDown}
          className="pointer-events-auto absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full border-2 border-white bg-primary text-white shadow-xl sm:size-14"
        >
          <ChevronsLeftRight className="size-5 sm:size-6" />
        </div>
      </div>

      {!touched && (
        <span className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/55 px-4 py-2 font-heading text-sm text-white backdrop-blur-md sm:bottom-6">
          Drag to compare
        </span>
      )}
    </div>
  );
}
