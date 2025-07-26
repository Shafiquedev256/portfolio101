import { Metadata } from "next";
import About1 from "../components/about";
import FooterSection from "../components/footer";
import Header from "../components/header";

export function generateMetadata(): Metadata {
  return {
    title: `Affordable Freelance Web Developer – ShafiqueDev | Updated ${new Date().getFullYear()}`,
    description:
      "Get professional, budget-friendly freelance web design and development services with ShafiqueDev.",
  };
}

const About_Page = () => {
  return (
    <main className='bg-gray-900'>
      <Header />
      <About1 />
      <FooterSection />
    </main>
  );
};

export default About_Page;
