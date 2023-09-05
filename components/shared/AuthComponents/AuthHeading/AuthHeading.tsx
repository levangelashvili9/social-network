type Props = {
  text: string;
};

export const AuthHeading: React.FC<Props> = ({ text }) => {
  return (
    <div className="text-center mb-9">
      <h2 className="text-2xl text-gray-900 font-semibold">{text}</h2>
    </div>
  );
};
