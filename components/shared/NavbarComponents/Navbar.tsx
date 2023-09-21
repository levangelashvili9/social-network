"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { Notifications } from "@/components/shared";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div className="bg-main-light dark:bg-main-dark h-14 flex justify-between items-center px-4 border-b border-secondary-light dark:border-secondary-dark">
      <div>Search</div>
      <div className="flex gap-2 relative">
        <Notifications theme={theme} />
        <div className="rounded-full w-10 h-10 bg-secondary-light dark:bg-secondary-dark flex justify-center items-center">
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
        <Image
          src="/images/avatar.png"
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    </div>
  );
};
