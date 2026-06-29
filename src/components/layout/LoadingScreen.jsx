"use client";

import { useEffect, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".loader-logo", {
      opacity: 0,
      y: 50,
      duration: 1,
    });

    tl.to(".loader-screen", {
      opacity: 0,
      duration: 0.8,
      delay: 1,
      onComplete() {
        setLoading(false);
      },
    });
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-screen fixed inset-0 z-[9999] bg-white flex items-center justify-center">

      <div className="text-center">

        <h1 className="loader-logo text-7xl font-bold tracking-[12px]">
          ANTRA
        </h1>

        <p className="mt-4 text-neutral-500 uppercase tracking-[6px]">
          Interior Studio
        </p>

      </div>

    </div>
  );
}