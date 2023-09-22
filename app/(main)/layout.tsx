import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { Navbar } from "@/components/shared/NavbarComponents/Navbar";

export const metadata: Metadata = {
  title: "Main",
  description: "Main Layout",
};

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  if (!cookies().has("is_user_logged_in")) {
    redirect("/login");
  }

  return (
    <div>
      <Navbar />
      <div className="pt-14">{children}</div>
    </div>
  );
};

export default MainLayout;
