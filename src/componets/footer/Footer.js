"use client";
import { useEffect, useState } from "react";
import FooterContent from "./FooterContent";
import FooterSkeleton from "./FooterSkeleton";

export default function Footer() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHydrated(true);
    }
  }, []);

  return hydrated ? <FooterContent /> : <FooterSkeleton />;
}
