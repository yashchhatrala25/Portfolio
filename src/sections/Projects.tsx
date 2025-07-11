"use client";
import { motion } from "framer-motion";
import variants from "../utils/variants";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import summary from "@/assets/images/summary.png";
import cryptoImage from "@/assets/images/crypto1.png";
import learnifyImage from "@/assets/images/Learnify.png";
import Card from "@/components/Card";
import Github from "@/assets/images/github.png";
import positivus from "@/assets/images/positivus.png";
import usabilityHub from "@/assets/images/usabilityHub.png";
import movieHub from "@/assets/images/movieHub.png";

const portfolioProjects = [
  {
    company: "Learnify.",
    year: "2025",
    title: "Leanrify is a complete EdTech solution.",
    results: [
      { title: "Instructors to upload and manage their courses" },
      { title: "Students to browse, buy, and learn through premium content" },
      { title: "Seamless user authentication (OTP & JWT) " },
    ],
    link: "https://learnify-git-main-mukuljoshi6312s-projects.vercel.app/",
    githubLink: "https://github.com/MukulJoshi6312/Learnify",
    image: learnifyImage,
  },
  {
    company: "CryptoBucks.",
    year: "2024",
    title: "Track Crypto Real Time.",
    results: [
      { title: "Track crypto through a public api in real time" },
      { title: "Compare Two crypto using graph" },
      { title: "List crypto in dynamic list" },
    ],
    link: "https://crypto-bucks-theta.vercel.app/",
    githubLink: "https://github.com/MukulJoshi6312/DoscApp",
    image: cryptoImage,
  },
  {
    company: "Movie Hub.",
    year: "2024",
    title: "Find all the trending movies.",
    results: [
      { title: "Fetch the data from the TMDB API's" },
      { title: "Store the trending movies into APPWRITE database." },
    ],
    link: "https://movie-hub-six-rose.vercel.app/",
    githubLink: "https://github.com/MukulJoshi6312/MovieHub",
    image: movieHub,
  },
  {
    company: "ShortSummary",
    year: "2024",
    title: "Summrize the artical using OpenAI",
    results: [
      { title: "Get the data from rapid api" },
      { title: "Summrize the artical into short summary" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://short-summary-lime.vercel.app/",
    githubLink: "https://github.com/MukulJoshi6312/ShortSummary/",
    image: summary,
  },
  {
    company: "Positivus",
    year: "2023",
    title: "Digital Agency Landing Page",
    results: [
      { title: "Positivus the landing page of Website" },
      { title: "Impliment smooth animations, framer-motion" },
      { title: "Responsive in all devices" },
    ],
    link: "https://makes-brands.vercel.app/",
    githubLink: "https://github.com/MukulJoshi6312/MakesBrands",
    image: positivus,
  },
  {
    company: "UsabilityHub",
    year: "2022",
    title: "We have a new name, fresh look!",
    results: [
      { title: "UsabilityHub the landing page of Website" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://usabilityhub-clone-one.vercel.app/",
    githubLink: "https://github.com/MukulJoshi6312/usabilityhub-clone",
    image: usabilityHub,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={variants("bottom", 0.2)}
        >
          <SectionHeader
            title="Real-world Results"
            eyebrow="Featured Projects"
            description="See how i transformed concepts into engaging digital experience"
          />
        </motion.div>

        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className=" px-8 pb-0 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r from-emerald-300
                    to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text"
                  >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5 ">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 ">
                    <a
                      href={project.link}
                      target="_blank"
                      className="w-full md:w-max"
                    >
                      <button className="group bg-white text-gray-950 h-12 w-full md:w-auto md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className="size-4 group-hover:rotate-45 transition" />
                      </button>
                    </a>

                    <a href={project.githubLink}>
                      <div className="size-12 bg-white p-2 rounded-full mt-8">
                        <Image src={Github} alt={project.title} />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
