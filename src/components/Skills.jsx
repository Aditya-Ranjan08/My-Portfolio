

import { motion as Motion, useReducedMotion } from "framer-motion";
import { skills } from "../assets/assets";

const Skills = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="bg-dark-100 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-9 text-center sm:mb-12">
          <h2 id="skills-heading" className="text-3xl font-bold text-white sm:text-4xl">
            Tech Stack <span className="text-purple">&amp; Skills</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Technologies I use to build modern, responsive and full-stack web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:gap-5">
          {skills.map((skill, index) => (
            <SkillCategory
              key={skill.title}
              skill={skill}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ skill, index, shouldReduceMotion }) => (
  <Motion.article
    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{
      duration: shouldReduceMotion ? 0 : 0.5,
      delay: shouldReduceMotion ? 0 : index * 0.1,
      ease: "easeOut",
    }}
    whileHover={shouldReduceMotion ? undefined : { y: -4 }}
    className={`rounded-lg border bg-dark-300 p-5 transition-[border-color,box-shadow] duration-300 sm:p-6 motion-reduce:transition-none ${
      skill.title === "Frontend Development"
        ? "border-purple/35 hover:border-purple/60"
        : "border-white/10 hover:border-purple/40"
    }`}
  >
    <div className="flex items-center gap-3">
      <Motion.div
        whileHover={shouldReduceMotion ? undefined : { y: -2 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${
          skill.title === "Frontend Development" ? "bg-purple/15 text-purple" : "bg-white/5 text-gray-300"
        }`}
      >
        <skill.icon aria-hidden="true" className="h-5 w-5" />
      </Motion.div>
      <div>
        <h3 className="text-lg font-semibold text-white sm:text-xl">{skill.title}</h3>
        <p className="mt-1 text-sm leading-5 text-gray-400">{skill.description}</p>
      </div>
    </div>

    <ul aria-label={`${skill.title} technologies`} className="mt-5 flex flex-wrap gap-2">
      {skill.technologies.map((technology) => {
        const TechnologyIcon = technology.icon;

        return (
          <Motion.li
            key={technology.name}
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`inline-flex min-h-9 max-w-full items-center gap-2 rounded-md border px-2.5 py-1.5 text-sm leading-5 transition-colors duration-200 motion-reduce:transition-none ${
              technology.primary
                ? "border-purple/50 bg-purple/10 font-semibold text-white"
                : technology.secondary
                  ? "border-purple/20 bg-purple/5 text-gray-200 hover:border-purple/40 hover:text-white"
                : "border-white/10 bg-dark-400/70 text-gray-300 hover:border-purple/40 hover:text-white"
            }`}
          >
            <TechnologyIcon aria-hidden="true" className={`h-4 w-4 shrink-0 ${technology.primary || technology.secondary ? "text-purple/90" : "text-gray-400"}`} />
            <span className="wrap-break-word">{technology.name}</span>
          </Motion.li>
        );
      })}
    </ul>
  </Motion.article>
);

export default Skills;