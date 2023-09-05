import Link from "next/link";

export const LinkChanger: React.FC<{
  text: string;
  button: string;
  link: string;
}> = ({ text, button, link }) => {
  return (
    <h4 className="text-base opacity-70">
      {text}{" "}
      <span className="font-medium hover:opacity-70">
        <Link href={`/${link}`}>{button}</Link>
      </span>
    </h4>
  );
};
