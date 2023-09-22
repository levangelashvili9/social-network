import { ThemeSwitcher } from "@/components/shared";
import Image from "next/image";

type Props = {
  theme: string | undefined;
  displayBarToggler: () => void;
};

export const DisplayBar: React.FC<Props> = ({ theme, displayBarToggler }) => {
  return (
    <div className="bg-main-light dark:bg-main-dark w-80 absolute right-0 top-[2.75rem] rounded-lg p-3">
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-secondary-light dark:border-secondary-dark">
        <div
          onClick={displayBarToggler}
          className="rounded-full w-10 h-10 bg-secondary-light dark:bg-secondary-dark hover:bg-third-light dark:hover:bg-third-dark flex justify-center items-center cursor-pointer"
        >
          <Image
            src={
              theme === "dark"
                ? "/svgs/chevron-left-light.svg"
                : "/svgs/chevron-left-dark.svg"
            }
            alt="settings icon"
            width={25}
            height={25}
          />
        </div>
        <h3 className="text-xl">Display</h3>
      </div>
      <div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
