import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../App";
import { NAV_LINKS } from "../constants";
import { Sun, Moon, Download } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  isLandingPage: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLandingPage }) => {
  const [activeSection, setActiveSection] = useState(NAV_LINKS[0].href);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (isLandingPage) {
        const sections = NAV_LINKS.map((link) =>
          document.querySelector(link.href)
        );
        let currentSection = NAV_LINKS[0].href;

        sections.forEach((section) => {
          if (section) {
            const rect = section.getBoundingClientRect();
            // Section is in the middle of the viewport
            if (
              rect.top <= window.innerHeight / 2 &&
              rect.bottom >= window.innerHeight / 2
            ) {
              currentSection = `#${section.id}`;
            }
          }
        });
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLandingPage]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center py-3 transition-all duration-300 ${
        isScrolled ? "pt-3" : "pt-6"
      }`}
    >
      <div className="flex items-center justify-between w-full max-w-6xl px-4">
        {/* Logo Capsule */}
        <div className="bg-white/5 dark:bg-black/5 backdrop-blur-lg rounded-full shadow-lg border border-black/10 dark:border-white/10">
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#home")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center justify-center px-6 py-2"
          >
            {/* Using a standard font to approximate 'Atlyp BL Extra Bold Italic' */}
            <span className="text-2xl font-extrabold italic text-brand-dark dark:text-brand-light">
              Xs
            </span>
          </Link>
        </div>

        {/* Navigation Capsule */}
        {isLandingPage && (
          <nav className="hidden md:flex bg-white/5 dark:bg-black/5 backdrop-blur-lg rounded-full p-2 shadow-lg border border-black/10 dark:border-white/10">
            <ul className="flex items-center space-x-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        ?.querySelector(link.href)
                        ?.scrollIntoView({ behavior: "instant" });
                      setActiveSection(link.href);
                    }}
                    className={`relative px-4 py-1 text-sm font-medium rounded-full transition-colors ${
                      activeSection === link.href
                        ? "text-brand-light dark:text-brand-dark"
                        : "text-brand-secondary hover:text-brand-dark dark:hover:text-brand-light"
                    }`}
                  >
                    {activeSection === link.href && (
                      <motion.div
                        layoutId="active-capsule"
                        className="absolute inset-0 bg-brand-dark dark:bg-brand-light rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                          bounce: 0.25,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Action Buttons Capsule */}
        <div className="flex items-center space-x-2 bg-white/5 dark:bg-black/5 backdrop-blur-lg rounded-full p-1.5 shadow-lg border border-black/10 dark:border-white/10">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-brand-secondary hover:text-brand-dark dark:hover:text-brand-light transition-colors"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={theme}
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.25 }}
              >
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </motion.div>
            </AnimatePresence>
          </button>
          <button className="flex items-center space-x-2 bg-brand-accent hover:bg-brand-accent-hover text-white text-sm font-semibold px-4 py-1.5 rounded-full transition-colors">
            <Download size={16} />
            <span>Download</span>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
