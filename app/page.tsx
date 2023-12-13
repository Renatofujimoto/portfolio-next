import Footer from "../components/Footer/Footer";
import Section from "../components/Initial/Section";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#262630]">
      <div className="container mx-auto px-9">
        <Section />
      </div>
      <Footer />
    </main>
  );
}
