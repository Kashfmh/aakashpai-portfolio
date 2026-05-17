import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// wip — sections added one by one after testing
export default function Home() {
  return (
    <main className="relative z-10 min-h-screen">
      <Navbar />
      <Hero />
    </main>
  );
}
