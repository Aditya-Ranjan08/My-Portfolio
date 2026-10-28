import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { projects } from "../assets/assets";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectsRef = useRef(null);

  const scrollProjects = (direction) => {
    const carousel = projectsRef.current;
    const firstCard = carousel?.firstElementChild;

    if (!carousel || !firstCard) return;

    const gap = Number.parseFloat(window.getComputedStyle(carousel).columnGap) || 0;
    const scrollAmount = firstCard.getBoundingClientRect().width + gap;

    carousel.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  };

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

        <div className="mb-4 flex justify-end gap-3">
          <button
            type="button"
            aria-label="Scroll to previous project"
            aria-controls="projects-carousel"
            onClick={() => scrollProjects(-1)}
            className="project-carousel-button button-control button-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
          >
            <FaChevronLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Scroll to next project"
            aria-controls="projects-carousel"
            onClick={() => scrollProjects(1)}
            className="project-carousel-button button-control button-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
          >
            <FaChevronRight aria-hidden="true" />
          </button>
        </div>

        <div
          id="projects-carousel"
          ref={projectsRef}
          role="region"
          aria-label="Featured projects"
          tabIndex={0}
          className="projects-scroll mx-auto flex max-w-6xl snap-x snap-mandatory gap-5 overflow-x-auto sm:gap-6"
        >
          {projects.map((project, index) => (
            <div
              key={project.title.trim()}
              className="project-card-item shrink-0 snap-start"
            >
              <ProjectCard {...project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;