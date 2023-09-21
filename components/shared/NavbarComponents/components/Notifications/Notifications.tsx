"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import { useCloseOnOutsideClick } from "@/hooks";

type Props = {
  theme: string | undefined;
};

export const Notifications: React.FC<Props> = ({ theme }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const notificationsBarRef = useRef(null);

  useCloseOnOutsideClick(notificationsBarRef, () => setIsVisible(false));

  return (
    <div ref={notificationsBarRef}>
      <div
        onClick={() => setIsVisible((prev) => !prev)}
        className="rounded-full w-10 h-10 bg-secondary-light dark:bg-secondary-dark flex justify-center items-center cursor-pointer"
      >
        <Image
          src={
            theme === "dark"
              ? "/svgs/notification-light.svg"
              : "/svgs/notification-dark.svg"
          }
          alt="notification"
          width={20}
          height={20}
        />
      </div>
      {isVisible && (
        <div className="bg-main-light dark:bg-main-dark w-80 h-96 absolute right-0 top-[2.75rem] rounded-lg"></div>
      )}
    </div>
  );
};
