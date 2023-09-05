"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <div>{theme}</div>
      <button onClick={() => setTheme("light")}>LIGHT</button>
      <button onClick={() => setTheme("dark")}>DARK</button>
    </div>
  );
};
