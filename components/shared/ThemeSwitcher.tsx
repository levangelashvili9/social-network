"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      onClick={themeToggler}
      className="flex items-center gap-2 pl-2 cursor-pointer hover:bg-secondary-light dark:hover:bg-secondary-dark rounded-lg h-12 group"
    >
      <div className="rounded-full w-9 h-9 bg-secondary-light dark:bg-secondary-dark flex justify-center items-center cursor-pointer group-hover:bg-third-light dark:group-hover:bg-third-dark">
        <Image
          src={
            theme === "dark" ? "/svgs/moon-light.svg" : "/svgs/moon-dark.svg"
          }
          alt="sun"
          width={20}
          height={20}
        />
      </div>
      <p className="font-medium">
        Dark Mode Is {theme === "dark" ? "On" : "Off"}
      </p>
    </div>
  );
};
