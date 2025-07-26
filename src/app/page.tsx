import { Metadata } from "next";
import About1 from "./components/about";
import Contact from "./components/contact";
import FooterSection from "./components/footer";
import Header from "./components/header";
import HeroSection from "./components/herosection";
import Portfolio from "./components/portfolio";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Affordable freelance web design & development – ShafiqueDev. Updated-${new Date().getFullYear()}`,
    description: "Find a budget friendly freelance website developer near you",
  };
}

export default function Home() {
  return (
    <main className='bg-gray-900 min-h-[100vh]'>
      <Header />
      <HeroSection />
      <About1 />
      <Portfolio />
      <Contact />
      <FooterSection />
    </main>
  );
}
