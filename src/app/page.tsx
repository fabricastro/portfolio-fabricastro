import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { AboutMe } from './../components/AboutMe';
import { Contact } from './../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <AboutMe />
      <Contact />
    </>
  );
}
