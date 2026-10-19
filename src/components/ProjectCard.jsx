import { motion as Motion, useReducedMotion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const isExternalUrl = (url) => typeof url === "string" && /^https?:\/\//i.test(url);

const ProjectCard = ({ title, category, description, image, tech = [], demo, code, index = 0 }) => {
    const shouldReduceMotion = useReducedMotion();
    const projectTitle = title.trim();
    const entrance = shouldReduceMotion ? {} : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
    };

    return (
        <Motion.article
            {...entrance}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: shouldReduceMotion ? 0 : 0.55,
                delay: shouldReduceMotion ? 0 : index * 0.1,
                ease: "easeOut",
            }}
            whileHover={shouldReduceMotion ? undefined : { y: -6 }}
            className="group flex h-full flex-col overflow-hidden rounded-lg border border-purple/20 bg-dark-300 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-purple/50 hover:shadow-[0_14px_36px_rgba(0,0,0,0.28)] motion-reduce:transition-none"
        >
            <div className="aspect-16/10 overflow-hidden bg-dark-400">
                <img
                    src={image}
                    alt={`${projectTitle} project preview`}
                    loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-400 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                />
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-purple">
                    {category}
                </p>
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    {projectTitle}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-400 sm:text-base">
                    {description}
                </p>

                <ul aria-label={`Technologies used in ${projectTitle}`} className="mt-5 flex flex-wrap gap-2">
                    {tech.map((technology) => (
                        <li
                            key={technology}
                            className="rounded border border-white/10 bg-dark-400/70 px-2.5 py-1 text-xs font-medium text-gray-300"
                        >
                            {technology}
                        </li>
                    ))}
                </ul>

                <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
                    {isExternalUrl(demo) && (
                        <Motion.a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Live Demo for ${projectTitle}`}
                            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                            className="button-control button-primary w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
                        >
                            Live Demo <FaArrowUpRightFromSquare aria-hidden="true" className="text-xs" />
                        </Motion.a>
                    )}
                    {isExternalUrl(code) && (
                        <Motion.a
                            href={code}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`GitHub repository for ${projectTitle}`}
                            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                            className="button-control button-secondary w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
                        >
                            GitHub <FaArrowUpRightFromSquare aria-hidden="true" className="text-xs" />
                        </Motion.a>
                    )}
                </div>
            </div>
        </Motion.article>
    );
};

export default ProjectCard;

