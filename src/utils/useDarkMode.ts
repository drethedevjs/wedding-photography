"use client";
import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    setIsDarkMode(mediaQuery.matches);
    setIsLoading(false);

    const handleChange = (e: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => setIsDarkMode(e.matches);

    // Use the newer addEventListener API
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return { isDarkMode, isLoading };
}
