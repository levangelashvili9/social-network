import Image from "next/image";
import { useTheme } from "next-themes";

export const Settings = () => {
  const { theme } = useTheme();

  return (
    <div className="flex items-center gap-2 cursor-pointer hover:bg-secondary-light dark:hover:bg-secondary-dark rounded-lg h-12 px-2 group">
      <div className="rounded-full w-9 h-9 bg-secondary-light dark:bg-secondary-dark flex justify-center items-center cursor-pointer group-hover:bg-third-light dark:group-hover:bg-third-dark">
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
  );
};
