

import { motion as Motion, useReducedMotion } from "framer-motion";
import { aboutInfo } from "../assets/assets";

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-dark-200 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <h2 id="about-heading" className="text-3xl font-bold text-white sm:text-4xl">
            About <span className="text-purple">Me</span>
          </h2>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <Motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
          >
            <p className="text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              I’m a B.Tech graduate in Computer Science &amp; Design and an entry-level software developer focused on React.js and frontend development. Through hands-on projects and internships, I’ve gained practical experience building responsive interfaces and working with backend APIs, authentication, databases, and application workflows.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              I enjoy turning ideas into useful, user-focused web applications. I’m looking to contribute to a development team, solve real-world problems, and continue growing as a software developer.
            </p>

            <div className="mt-7 border-l-2 border-purple/60 pl-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-purple">Education</p>
              <h3 className="mt-2 text-base font-semibold text-white sm:text-lg">
                B.Tech — Computer Science &amp; Design
              </h3>
              <p className="mt-1 text-sm leading-6 text-gray-300">
                Seth Vishambhar Nath Institute of Engineering &amp; Technology (SVNIET)
              </p>
              <p className="text-sm leading-6 text-gray-400">
                Affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU), Uttar Pradesh.
              </p>
            </div>
          </Motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {aboutInfo.map((item, index) => (
              <Motion.article
                key={item.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.45,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                className="flex items-start gap-3 rounded-lg border border-white/10 bg-dark-300 p-4 transition-colors duration-300 hover:border-purple/40 motion-reduce:transition-none"
              >
                <item.icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-purple" />
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm leading-5 text-gray-400">{item.description}</p>
                </div>
              </Motion.article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;