"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import { useCloseOnOutsideClick } from "@/hooks";

import {
  Display,
  Settings,
  Logout,
  ViewProfile,
  DisplayBar,
} from "./components";

export const Profile = () => {
  const [barVisible, setBarVisible] = useState<string | null>(null);
  const profileBarRef = useRef(null);
  const { theme } = useTheme();

  useCloseOnOutsideClick(profileBarRef, () => setBarVisible(null));

  const profileBarToggler = () => {
    barVisible === "profile" || barVisible === "display"
      ? setBarVisible(null)
      : setBarVisible("profile");
  };

  const displayBarToggler = () => {
    barVisible === "display"
      ? setBarVisible("profile")
      : setBarVisible("display");
  };

  return (
    <div ref={profileBarRef}>
      <div onClick={profileBarToggler} className="cursor-pointer">
        <Image
          src="/images/avatar.png"
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>

      {barVisible === "profile" && (
        <div className="bg-main-light dark:bg-main-dark w-80 absolute right-0 top-[2.75rem] rounded-lg p-3">
          <ViewProfile />
          <Settings />
          <Display theme={theme} displayBarToggler={displayBarToggler} />
          <Logout />
        </div>
      )}
      {barVisible === "display" && (
        <DisplayBar theme={theme} displayBarToggler={displayBarToggler} />
      )}
    </div>
  );
};
