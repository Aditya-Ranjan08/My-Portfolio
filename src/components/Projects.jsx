import { projects } from "../assets/assets";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="bg-dark-200 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-purple">
            Selected Work
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Real-world web applications built with React.js and full-stack technologies.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title.trim()} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;