import Image from "next/image";

export const ViewProfile = () => {
  return (
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
  );
};
