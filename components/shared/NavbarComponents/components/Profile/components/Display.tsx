import Image from "next/image";

type Props = {
  theme: string | undefined;
  displayBarToggler: () => void;
};

export const Display: React.FC<Props> = ({ theme, displayBarToggler }) => {
  return (
    <div
      onClick={displayBarToggler}
      className="flex items-center gap-2 cursor-pointer hover:bg-secondary-light dark:hover:bg-secondary-dark rounded-lg h-12 px-2 relative group"
    >
      <div className="rounded-full w-9 h-9 bg-secondary-light dark:bg-secondary-dark flex justify-center items-center cursor-pointer group-hover:bg-third-light dark:group-hover:bg-third-dark">
        <Image
          src={theme === "dark" ? "/svgs/eye-light.svg" : "/svgs/eye-dark.svg"}
          alt="settings icon"
          width={20}
          height={20}
        />
      </div>
      <h3>Display</h3>
      <div className="absolute right-0">
        <Image
          src={
            theme === "dark"
              ? "/svgs/chevron-right-light.svg"
              : "/svgs/chevron-right-dark.svg"
          }
          alt="settings icon"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};
