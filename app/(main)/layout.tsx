import { Navbar } from "@/components/shared/NavbarComponents/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Main",
  description: "Main Layout",
};

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="pt-14">{children}</div>
    </div>
  );
};

export default MainLayout;
