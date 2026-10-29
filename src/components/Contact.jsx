import { motion as Motion, useReducedMotion } from "framer-motion";
import Swal from "sweetalert2";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  const shouldReduceMotion = useReducedMotion();

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    
    formData.append("access_key", "518f2f5f-9492-486d-a0a8-cc9c4b58911b");

    
    formData.append("from_name", "Portfolio Contact");
    formData.append("subject", "New Contact Message from Portfolio");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();

      
      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });

        event.target.reset(); 
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to send message!",
          icon: "error",
        });
      }

    } catch (error) {
      
      Swal.fire({
        title: "Network Error!",
        text: "Please try again later.",
        icon: "warning",
      });
      console.error(error);
    }
  };

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : delay, ease: "easeOut" },
  });

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-dark-200 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Motion.div {...reveal()} className="mb-9 sm:mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple">Contact</p>
          <h2 id="contact-heading" className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            I&apos;m open to software development, frontend, React.js and full-stack opportunities.
          </p>
        </Motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <Motion.div {...reveal(0.08)} className="space-y-6">
            <p className="max-w-md text-base leading-7 text-gray-300">
              I&apos;m an entry-level developer looking to contribute, learn, and grow with a team building useful web applications.
            </p>

            <ul aria-label="Contact information" className="space-y-4">
              <li className="flex items-start gap-3">
                <FaEnvelope aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-purple" />
                <a href="mailto:adityar0807@gmail.com" className="text-sm text-gray-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple sm:text-base">
                  adityar0807@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaPhone aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-purple" />
                <a href="tel:9628137355" className="text-sm text-gray-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple sm:text-base">
                  9628137355
                </a>
              </li>
            </ul>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="https://github.com/Aditya-Ranjan08"
                target="_blank"
                rel="noopener noreferrer"
                className="button-control button-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
              >
                <FaGithub aria-hidden="true" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-ranjan-b3a85836b/"
                target="_blank"
                rel="noopener noreferrer"
                className="button-control button-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
              >
                <FaLinkedin aria-hidden="true" /> LinkedIn
              </a>
            </div>
          </Motion.div>

          <Motion.div {...reveal(0.16)}>
            <form onSubmit={onSubmit} className="space-y-5 rounded-lg border border-white/10 bg-dark-300 p-5 sm:p-6">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-gray-200">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your name"
                  required
                  className="min-h-11 w-full rounded-md border border-dark-400 bg-dark-200 px-3.5 py-2.5 text-base text-white placeholder:text-gray-500 focus:border-purple focus:outline-none focus:ring-2 focus:ring-purple/30"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-gray-200">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  className="min-h-11 w-full rounded-md border border-dark-400 bg-dark-200 px-3.5 py-2.5 text-base text-white placeholder:text-gray-500 focus:border-purple focus:outline-none focus:ring-2 focus:ring-purple/30"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-gray-200">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me a little about what you have in mind"
                  required
                  className="w-full resize-y rounded-md border border-dark-400 bg-dark-200 px-3.5 py-3 text-base text-white placeholder:text-gray-500 focus:border-purple focus:outline-none focus:ring-2 focus:ring-purple/30"
                />
              </div>

              <Motion.button
                type="submit"
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
                className="button-control button-primary w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
              >
                Send Message
              </Motion.button>
            </form>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;