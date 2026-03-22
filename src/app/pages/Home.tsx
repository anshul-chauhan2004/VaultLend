import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Stats } from "../components/Stats";
import { Markets } from "../components/Markets";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <Markets />
      <CTA />
      <Footer />
    </>
  );
}
