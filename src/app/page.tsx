import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TestimonialsSlider from "@/components/TestimonialsSlider";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Services />
      <TestimonialsSlider />
    </div>
  );
}
