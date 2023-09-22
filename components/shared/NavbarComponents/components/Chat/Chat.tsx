"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

export const Chat = () => {
  const { theme } = useTheme();

  return (
    <div className="rounded-full w-10 h-10 bg-secondary-light dark:bg-secondary-dark hover:bg-third-light dark:hover:bg-third-dark flex justify-center items-center cursor-pointer">
      <Image
        src={
          theme === "dark"
            ? "/svgs/messages-light.svg"
            : "/svgs/messages-dark.svg"
        }
        alt="notification"
        width={22}
        height={22}
      />
    </div>
  );
};
