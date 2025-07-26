import { Metadata } from "next";
import FooterSection from "../components/footer";
import Header from "../components/header";
import Portfolio from "../components/portfolio";

export function generateMetadata(): Metadata {
  return {
    title: `Portfolio – Freelance Web Projects by ShafiqueDev | Updated ${new Date().getFullYear()}`,
    description:
      "Explore recent freelance web development and design projects by ShafiqueDev. Affordable, responsive, and results-driven websites.",
  };
}

const Portfolio_Page = () => {
  return (
    <main className='bg-gray-900'>
      <Header />
      <Portfolio />
      <FooterSection />
    </main>
  );
};

export default Portfolio_Page;
