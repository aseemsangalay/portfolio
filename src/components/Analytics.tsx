"use client";

import { useEffect } from "react";

export default function Analytics() {
  useEffect(() => {
    // Only load analytics in production
    if (
      process.env.NODE_ENV === "production" &&
      process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
    ) {
      const script = document.createElement("script");
      script.defer = true;
      script.dataset.domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
      script.src = "https://plausible.io/js/script.js";
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, []);

  return null;
}
