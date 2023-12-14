import Footer from "@/components/Footer/Footer";
import HomePage from "@/components/Home/Home";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mt-20 mx-auto px-12 py-4">
        <HomePage />
      </div>
      <Footer />
    </main>
  );
}
