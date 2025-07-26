import { Metadata } from "next";
import Contact from "../components/contact";
import FooterSection from "../components/footer";
import Header from "../components/header";

export function generateMetadata(): Metadata {
  return {
    title: `Contact ShafiqueDev – Affordable Freelance Web Developer | Updated ${new Date().getFullYear()}`,
    description:
      "Get in touch with ShafiqueDev for affordable freelance web design and development services. Let's build your website today.",
  };
}

const Contact_Page = () => {
  return (
    <main className='bg-gray-900'>
      <Header />
      <Contact />
      <FooterSection />
    </main>
  );
};

export default Contact_Page;
