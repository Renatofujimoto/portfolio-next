import Image from "next/image";
import Section from "./components/Initial/Section";
import Navbar from "./components/Navbar/Navbar";
import AchievementsSection from "./components/Project/AchievementsSection";
import AboutSection from "./components/About/About";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#262630]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Section />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
