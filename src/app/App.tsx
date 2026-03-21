import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Features } from "./components/Features";
import { Markets } from "./components/Markets";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#040d08",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Markets />
      <CTA />
      <Footer />
    </div>
  );
}
