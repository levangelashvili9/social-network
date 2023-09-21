"use client";

import { Notifications, Chat, Profile } from "@/components/shared";

export const Navbar = () => {

  return (
    <div className="bg-main-light dark:bg-main-dark h-14 flex justify-between items-center px-4 border-b border-secondary-light dark:border-secondary-dark">
      <div>Search</div>
      <div className="flex gap-2 relative">
        <Notifications  />
        <Chat />
        <Profile />
      </div>
    </div>
  );
};
