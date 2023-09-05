const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-[22rem] bg-white px-6 py-8">{children}</div>
    </div>
  );
};

export default AuthLayout;
