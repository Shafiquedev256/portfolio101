"use client";
import { useState, useRef } from "react";
const projects = [
  {
    title: "WIZZ GYM",
    client: "Fitness Center",
    image: "/wizzgym.png",
    url: "www.wizzgym.com",
    tags: ["Next js", "Tailwind CSS ", "SEO", "UI/UX Design"],
  },
  {
    title: "SITI GYM",
    client: "Fitness Center",
    image: "/siti-gym.png",
    url: "www.sitigym.com",
    tags: ["Next js", "Tailwind CSS ", "SEO", "UI/UX Design"],
  },
  {
    title: "PROSELLER",
    client: "Bussiness Uganda",
    image: "/proseller.png",
    url: "https://production102.vercel.app/",
    tags: ["Dashboard", "Admin Panel", "payment Integration"],
  },
  {
    title: "WEDDING WEBSITE",
    client: "PRIVATE",
    image: "/wedding.png",
    url: "https://wedding101.vercel.app/",
    tags: ["Design", "Responsive", "Form Integration"],
  },
];
export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollToProject = (index: number) => {
    setActiveIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth =
        container.querySelector(".project-card")?.clientWidth || 0;
      const gap = 16; // gap-4 = 16px
      const scrollPosition = (cardWidth + gap) * index;
      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth =
        container.querySelector(".project-card")?.clientWidth || 0;
      const gap = 16;
      const scrollLeft = container.scrollLeft;
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(newIndex);
    }
  };
  return (
    <section id='projects'>
      <div className='bg-gray-900  py-16 md:py-24 px-0'>
        <div className='max-w-7xl mx-auto'>
          <div className='mb-12 md:mb-16 px-6 md:px-8'>
            <p className='text-white text-xs md:text-sm font-semibold tracking-widest uppercase mb-3 md:mb-4'>
              OUR WORK
            </p>
            <h2 className='text-green-500 text-3xl md:text-4xl lg:text-5xl font-bold'>
              PROJECTS PORTFOLIO
            </h2>
          </div>
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className='flex gap-4 overflow-x-auto snap-x snap-mandatory overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-6 md:px-8 pb-4'
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className='project-card flex-shrink-0 w-[85vw] md:w-[400px] snap-center'
              >
                <div className='bg-[#0A0A0A] rounded-3xl overflow-hidden h-[420px] md:h-[480px] group cursor-pointer'>
                  <div className='relative h-[60%] overflow-hidden'>
                    <img
                      alt={project.title}
                      className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110'
                      src={project.image}
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent'></div>
                  </div>
                  <div className='p-6 md:p-8 h-[40%] flex flex-col'>
                    <h3 className='text-white font-bold text-xl md:text-2xl mb-2'>
                      {project.title}
                    </h3>
                    <p className='text-green-500 text-sm uppercase tracking-wide mb-3'>
                      {project.client}
                    </p>
                    <div className='flex flex-row gap-2 mb-4'>
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className='text-white text-xs border border-green-500/50 px-3 py-1 rounded-full whitespace-nowrap'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      target='_blank'
                      href={project.url}
                      className='text-white text-sm font-medium inline-flex items-center gap-2 mt-auto group/link cursor-pointer whitespace-nowrap relative'
                    >
                      VIEW PROJECT
                      <i className='ri-arrow-right-line group-hover/link:translate-x-1 transition-transform'></i>
                      <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover/link:w-24 transition-all duration-300'></span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='flex justify-center gap-2 mt-8 md:mt-10'>
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToProject(index)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === index
                    ? "w-8 h-3 bg-green-500"
                    : "w-3 h-3 bg-green-500/30 hover:bg-green-500/50"
                }`}
                aria-label={`Go to project ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
