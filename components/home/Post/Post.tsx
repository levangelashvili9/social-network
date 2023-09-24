import Image from "next/image";

export const Post = () => {
  return (
    <div className="bg-main-light dark:bg-main-dark h-32">
      <div className="p-3">
        <Image
          src="/images/avatar.png"
          alt="profile photo"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    </div>
  );
};
