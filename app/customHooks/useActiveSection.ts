"use client";
import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[], offset: number = 180) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let current: string | null = null;

      for (const id of sectionIds) {
        const el = document.getElementById(id);

        if (el && el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }

      if (current) setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
