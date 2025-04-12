"use client";

import { useEffect } from "react";

export default function ReloadScrollToTop() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Save scroll position before unload
    const handleBeforeUnload = () => {
      sessionStorage.setItem("scrollPosition", "0");
    };

    // Handle scroll restoration on page load
    const handleLoad = () => {
      if (history.scrollRestoration) {
        history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return null;
}