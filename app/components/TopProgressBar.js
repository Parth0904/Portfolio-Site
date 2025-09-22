// components/TopProgressBar.jsx
"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function TopProgressBar() {
  const pathname = usePathname();
  const firstRender = useRef(true);

  useEffect(() => {
    NProgress.configure({ showSpinner: false, speed: 400, minimum: 0.2 });

    if (firstRender.current) {
      firstRender.current = false;
      return; // Skip initial load
    }

    NProgress.start();

    // Finish after small delay so bar shows even on fast loads
    const timer = setTimeout(() => {
      NProgress.done();
    }, 300);

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [pathname]);

  return null;
}
