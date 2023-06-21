import Image from "next/image";
import { Inter } from "next/font/google";
import Landing from "@/components/Landing";
import Services from "@/components/services";
import Testing from "@/components/Testing";
import AboutTools from "@/components/aboutToolsSection";
import HireNow from "@/components/hireNow";
import Contact from "@/components/contact";
import JoinTeam from "@/components/JoinTeam";
import Security from "@/components/Security";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Landing />
      <Services limit={6} />
      <JoinTeam />
      {/* <AboutTools /> */}
      {/* <HireNow /> */}
      <Contact />
    </main>
  );
}
