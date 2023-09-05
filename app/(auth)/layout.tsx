import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authorization",
  description: "Login and Register",
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-[22rem] bg-white px-6 py-8 shadow-xl rounded-md">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
