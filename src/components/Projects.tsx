"use client";
import { useState } from "react";
import { projects } from "../data/data";
import ProjectCard from "./ProjectCard";
import HeadingSubheading from "./shared/HeadingSubheading";

export default function Projects() {
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "UI/UX",
    "Web Design",
    "Mobile Design",
    "Graphic Design",
  ];

  return (
    <div className="container mx-auto pt-36" id="projects">
      <HeadingSubheading
        heading="My Projects"
        subheading="Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus"
      />
      <div className="pt-16 flex flex-wrap gap-[22px] justify-center items-center">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`border rounded-xl px-5 py-[10px] text-2xl ${
              category === cat
                ? "!bg-primary text-white border-primary"
                : "bg-secondaryBg text-black hover:bg-primary/50 hover:text-white hover:border-primary"
            } transition-all duration-300 ease-in-out`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="pt-16 flex flex-wrap lg:flex-nowrap lg:grid lg:grid-cols-3 gap-12 lg:gap-8 items-center justify-center">
        {projects
          .filter(
            (project) => project.category === category || category === "All"
          )
          .map((project) => (
            <ProjectCard key={project?.id} project={project} />
          ))}
      </div>
    </div>
  );
}
