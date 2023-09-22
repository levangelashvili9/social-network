import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Authorization",
  description: "Login and Register",
};

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  if (cookies().has("is_user_logged_in")) {
    redirect("/");
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-[22rem] bg-white px-6 py-8 shadow-xl rounded-md">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
