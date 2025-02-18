"use client";

import { Accessibility } from "accessibility";
import { useEffect } from "react";

export default function AccessibilityBar() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener(
        "load",
        function () {
          new Accessibility();
        },
        false
      );
    }
  }, []);

  return null;
}
