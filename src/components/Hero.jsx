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
      className="hero-surface relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden py-14 sm:py-16 lg:py-12"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:grid-rows-[auto_auto] lg:gap-x-16 lg:gap-y-0">
        <div className="order-1 max-w-3xl">
          <Motion.p
            variants={entrance}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-purple sm:text-base"
          >
            Hi, I&apos;m Aditya Ranjan
          </Motion.p>

          <Motion.h1
            variants={entrance}
            className="text-[clamp(1.5rem,7vw,2rem)] font-bold leading-[1.14] text-white sm:text-5xl lg:text-[3.35rem]"
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
            className="mt-8 flex flex-col gap-3 min-[380px]:flex-row min-[380px]:flex-wrap"
          >
            <a
              href="#projects"
              className="button-control button-primary shadow-md shadow-purple/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
            >
              View My Projects
            </a>
            <a
              href={assets.myResume}
              download="Aditya_Ranjan_Resume.pdf"
              className="button-control button-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
            >
              Download Resume
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
          className="order-2 mx-auto w-full max-w-68 sm:max-w-80 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-100"
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

        <Motion.div
          variants={entrance}
          className="order-3 flex items-center gap-5 lg:col-start-1 lg:row-start-2"
        >
          <span className="text-sm text-white/50">Connect</span>
          <a
            href="https://github.com/Aditya-Ranjan08"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-xl text-white/65 transition-colors hover:text-purple focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple"
          >
            <FaGithub aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-ranjan-b3a85836b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-xl text-white/65 transition-colors hover:text-purple focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple"
          >
            <FaLinkedin aria-hidden="true" />
          </a>
        </Motion.div>
      </div>
    </Motion.section>
  );
};

export default Hero;
