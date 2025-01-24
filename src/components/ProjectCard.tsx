interface Project {
  title: string;
  category: string;
  image1: string;
  image2: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="cursor-pointer group">
      <div className="max-w-[445px] w-full h-[490px] bg-[#FFEBDB] relative rounded-xl overflow-hidden">
        <img
          src={project.image1}
          alt="Project 1"
          className="w-[275px] h-full absolute top-20 left-10 z-20 group-hover:scale-110 transition-all duration-300 ease-in-out"
        />
        <img
          src={project.image2}
          alt=""
          className="w-[275px] h-full absolute top-0 right-7 z-10 group-hover:scale-110 group-hover:z-30 transition-all duration-500 ease-in-out"
        />
      </div>
      <p className="text-lg text-primary pt-9">{project.category}</p>
      <h3 className="text-2xl font-bold pt-3">{project.title}</h3>
    </div>
  );
}
