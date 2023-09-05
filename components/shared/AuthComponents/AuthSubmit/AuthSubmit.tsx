type Props = {
  text: string;
};

export const AuthSubmit: React.FC<Props> = ({ text }) => {
  return (
    <button
      type="submit"
      className="bg-[#1089ff] text-white w-full h-12 rounded-md mb-1"
    >
      {text}
    </button>
  );
};
