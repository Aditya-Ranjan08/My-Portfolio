import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-dark-200">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-6 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
        <div>
          <a href="#home" className="text-lg font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple">
            Aditya<span className="text-purple">Ranjan</span>
          </a>
          <p className="mt-1 text-sm text-gray-400">Software Developer | React.js | Full Stack</p>
        </div>

        <nav aria-label="Footer links" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <a href="https://github.com/Aditya-Ranjan08" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple">
            <FaGithub aria-hidden="true" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/aditya-ranjan-b3a85836b/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple">
            <FaLinkedin aria-hidden="true" /> LinkedIn
          </a>
          <a href="mailto:adityar0807@gmail.com" className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple">
            <FaEnvelope aria-hidden="true" /> Email
          </a>
        </nav>

        <p className="text-xs text-gray-400">© 2026 Aditya Ranjan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;