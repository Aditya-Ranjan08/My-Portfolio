import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { FaBars, FaDownload } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { assets } from "../assets/assets";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Certifications", id: "certificates" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-white/10 bg-dark-100/95 shadow-lg shadow-black/20"
          : "border-white/6 bg-dark-100/80"
      } backdrop-blur-xl`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <a
          href="#home"
          onClick={closeMenu}
          className="shrink-0 text-xl font-semibold tracking-normal text-white sm:text-2xl"
        >
          Aditya<span className="text-purple">Ranjan</span>
        </a>

        <div className="hidden items-center gap-4 lg:flex xl:gap-5">
          {navItems.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={activeSection === id ? "location" : undefined}
              className={`group relative py-2 text-sm font-medium transition-colors duration-200 ${
                activeSection === id ? "text-white" : "text-white/65 hover:text-white"
              }`}
            >
              {label}
              {activeSection === id && (
                <Motion.span
                  layoutId="active-nav-indicator"
                  className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-purple/80"
                  transition={{ duration: 0.2 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="hidden shrink-0 lg:block">
          <a
            href={assets.myResume}
            download="Aditya_Ranjan_Resume.pdf"
            className="button-control button-primary"
          >
            <FaDownload aria-hidden="true" className="text-xs text-white/85" />
            Resume
          </a>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white transition-colors hover:border-purple/50 hover:text-purple lg:hidden"
        >
          {isMenuOpen ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </nav>

      {isMenuOpen && (
        <Motion.div
          id="mobile-navigation"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="overflow-hidden border-t border-white/6 lg:hidden"
        >
            <div className="mx-auto max-w-6xl space-y-1 px-5 py-3 sm:px-8">
              {navItems.map(({ label, id }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  aria-current={activeSection === id ? "location" : undefined}
                  onClick={closeMenu}
                  className={`block rounded-md border-l-2 px-3 py-2.5 text-sm font-medium transition-colors ${
                    activeSection === id
                      ? "border-purple bg-purple/10 text-white"
                      : "border-transparent text-white/70 hover:bg-white/4 hover:text-white"
                  }`}
                >
                  {label}
                </a>
              ))}
              <a
                href={assets.myResume}
                download="Aditya_Ranjan_Resume.pdf"
                onClick={closeMenu}
                className="button-control button-primary mt-2"
              >
                <FaDownload aria-hidden="true" className="text-xs text-purple" />
                Download Resume
              </a>
            </div>
        </Motion.div>
      )}
    </header>
  );
};

export default Navbar;
