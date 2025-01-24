import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import TestimonialsSlider from "@/components/TestimonialsSlider";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Services />
      <Projects />
      <TestimonialsSlider />
      <Contact />
    </div>
  );
}
