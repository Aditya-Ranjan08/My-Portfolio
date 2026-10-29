import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { assets } from "../assets/assets";

const entrance = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <Motion.section
      id="home"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
      }}
      className="hero-surface relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden py-10 sm:py-14 lg:py-12"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-5 sm:gap-10 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:gap-x-8 md:gap-y-0 lg:gap-x-14">
        <div className="order-1 min-w-0 max-w-3xl">
          <Motion.p
            variants={entrance}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-purple sm:text-base"
          >
            Hi, I&apos;m Aditya Ranjan
          </Motion.p>

          <Motion.h1
            variants={entrance}
            className="text-[clamp(1.75rem,7vw,2rem)] font-bold leading-[1.14] text-white sm:text-5xl lg:text-[3.35rem]"
          >
            <span className="block">Software Developer</span>
            <span className="mt-1 block">
              <span className="text-purple">| React.js</span>
              <span className="text-white/75"> | Full Stack</span>
            </span>
          </Motion.h1>

          <Motion.p
            variants={entrance}
            className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8"
          >
            I build modern, responsive web applications with React.js and JavaScript, bringing thoughtful frontend experiences together with backend and database technologies.
          </Motion.p>

          <Motion.div
            variants={entrance}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <a
              href="#projects"
              className="button-control button-primary w-full shadow-md shadow-purple/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple sm:w-auto"
            >
              View My Projects
            </a>
            <a
              href={assets.myResume}
              download="Aditya_Ranjan_Resume.pdf"
              className="button-control button-secondary w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple sm:w-auto"
            >
              Download Resume
            </a>
          </Motion.div>

          <Motion.div
            variants={entrance}
            className="mt-6 flex flex-wrap items-center gap-2 sm:mt-7 sm:gap-2.5"
          >
            <span className="mr-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/45 sm:text-xs">
              Let&apos;s connect
            </span>
            <a
              href="https://github.com/Aditya-Ranjan08"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="group inline-flex min-h-10 items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] py-1.5 pl-1.5 pr-3 text-sm font-medium text-white/75 transition-colors duration-200 hover:border-purple/40 hover:bg-purple/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded bg-white/5 text-white/75 transition-colors group-hover:bg-purple/15 group-hover:text-purple">
                <FaGithub aria-hidden="true" className="text-sm" />
              </span>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-ranjan-b3a85836b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="group inline-flex min-h-10 items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] py-1.5 pl-1.5 pr-3 text-sm font-medium text-white/75 transition-colors duration-200 hover:border-purple/40 hover:bg-purple/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded bg-white/5 text-white/75 transition-colors group-hover:bg-purple/15 group-hover:text-purple">
                <FaLinkedin aria-hidden="true" className="text-sm" />
              </span>
              LinkedIn
            </a>
          </Motion.div>
        </div>

        <Motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.96 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
          }}
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="order-2 mx-auto w-full max-w-48 sm:max-w-64 md:max-w-64 lg:max-w-80 xl:max-w-96"
        >
          <div className="profile-frame aspect-square overflow-hidden rounded-full border border-purple/50 bg-dark-300 p-2 sm:p-3">
            <img
              className="h-full w-full rounded-full object-cover object-center"
              src={assets.adityaImg}
              alt="Aditya Ranjan"
              fetchPriority="high"
            />
          </div>
        </Motion.div>

      </div>
    </Motion.section>
  );
};

export default Hero;
