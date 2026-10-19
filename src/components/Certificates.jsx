import { motion as Motion, useReducedMotion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";
import { certificationData } from "../assets/assets";

const Certificates = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="certificates"
      aria-labelledby="certificates-heading"
      className="bg-dark-100 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-9 text-center sm:mb-12">
          <h2 id="certificates-heading" className="text-3xl font-bold text-white sm:text-4xl">
            Certifications <span className="text-purple">&amp; Workshops</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Certifications and practical learning experiences that support my development journey.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certificationData.map((cert, index) => (
            <Motion.article
              key={cert.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.08,
                ease: "easeOut",
              }}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="flex h-full flex-col rounded-lg border border-white/10 bg-dark-300 p-5 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-purple/40 hover:shadow-lg hover:shadow-black/15 motion-reduce:transition-none sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-purple/25 bg-purple/10 text-purple">
                  <FiAward aria-hidden="true" size={19} />
                </span>
                {cert.date && (
                  <time className="pt-1 text-right text-xs font-medium text-gray-400 sm:text-sm">
                    {cert.date}
                  </time>
                )}
              </div>

              <h3 className="mt-4 text-lg font-semibold leading-snug text-white">
                {cert.title}
              </h3>
              {cert.organization && (
                <p className="mt-1 text-sm font-medium text-purple">
                  {cert.organization}
                </p>
              )}
              {cert.description && (
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {cert.description}
                </p>
              )}

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View certificate: ${cert.title}`}
                  className="button-control button-accent-outline mt-auto w-fit justify-start focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple"
                >
                  View Certificate <FiExternalLink aria-hidden="true" size={14} />
                </a>
              )}
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;