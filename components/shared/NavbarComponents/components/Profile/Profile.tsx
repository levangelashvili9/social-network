"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import { useCloseOnOutsideClick } from "@/hooks";
import { logoutUser } from "@/services";
import { ThemeSwitcher } from "@/components/shared";

export const Profile = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const profileBarRef = useRef(null);

  useCloseOnOutsideClick(profileBarRef, () => setIsVisible(false));

  return (
    <div ref={profileBarRef}>
      <div
        onClick={() => setIsVisible((prev) => !prev)}
        className="cursor-pointer"
      >
        <Image
          src="/images/avatar.png"
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>

      {isVisible && (
        <div className="bg-main-light dark:bg-main-dark w-80 absolute right-0 top-[2.75rem] rounded-lg p-3">
          <div className="py-1 mb-2 border-b border-secondary-light dark:border-secondary-dark">
            <div className="flex items-center gap-2 cursor-pointer hover:bg-secondary-light dark:hover:bg-secondary-dark rounded-lg h-14 px-2">
              <Image
                src="/images/avatar.png"
                alt="avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h2>Levan Gelashvili</h2>
            </div>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:bg-secondary-light dark:hover:bg-secondary-dark rounded-lg h-12 px-2">
            <div className="rounded-full w-9 h-9 bg-secondary-light dark:bg-secondary-dark flex justify-center items-center cursor-pointer">
              <Image
                src={
                  theme === "dark"
                    ? "/svgs/settings-light.svg"
                    : "/svgs/settings-dark.svg"
                }
                alt="settings icon"
                width={20}
                height={20}
              />
            </div>
            <h3>Settings</h3>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:bg-secondary-light dark:hover:bg-secondary-dark rounded-lg h-12 px-2">
            <div className="rounded-full w-9 h-9 bg-secondary-light dark:bg-secondary-dark flex justify-center items-center cursor-pointer">
              <Image
                src={
                  theme === "dark"
                    ? "/svgs/eye-light.svg"
                    : "/svgs/eye-dark.svg"
                }
                alt="settings icon"
                width={20}
                height={20}
              />
            </div>
            <h3>Display</h3>
            {/* <ThemeSwitcher /> */}
          </div>

          <div
            onClick={logoutUser}
            className="flex items-center gap-2 cursor-pointer hover:bg-secondary-light dark:hover:bg-secondary-dark rounded-lg h-12 px-2"
          >
            <div className="rounded-full w-9 h-9 bg-secondary-light dark:bg-secondary-dark flex justify-center items-center cursor-pointer">
              <Image
                src={
                  theme === "dark"
                    ? "/svgs/logout-light.svg"
                    : "/svgs/logout-dark.svg"
                }
                alt="settings icon"
                width={20}
                height={20}
              />
            </div>
            <h3>Logout</h3>
          </div>
        </div>
      )}
    </div>
  );
};
