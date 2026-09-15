import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Metrics from "@/components/Metrics";
import Experience from "@/components/Experience";
import Archive from "@/components/Archive";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { PortfolioFilterProvider } from "@/lib/PortfolioFilterContext";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-16 md:pt-[5.75rem] bg-surface">
        <PortfolioFilterProvider>
          <Hero />
          <Projects />
        </PortfolioFilterProvider>
        <Metrics />
        <Experience />
        <Archive />
        <About />
      </main>
      <Footer />
    </>
  );
}