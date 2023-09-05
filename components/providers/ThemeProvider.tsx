"use client";

import { useState, useEffect } from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>;

  return <NextThemesProvider attribute="class">{children}</NextThemesProvider>;
}
