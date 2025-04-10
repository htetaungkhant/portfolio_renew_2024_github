import { useRef } from "react";
import { useInView } from "framer-motion";

export const useScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px" // Add negative margin to trigger animation earlier
  });

  return { ref, isInView };
};

export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (!section) return;
  
  section.scrollIntoView({ behavior: "smooth" });
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};