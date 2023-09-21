"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex">
      <p>Dark Mode</p>
      <button onClick={() => setTheme("light")}>Off</button>
      <button onClick={() => setTheme("dark")}>On</button>
    </div>
  );
};
