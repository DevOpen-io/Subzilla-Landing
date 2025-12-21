import React, { useState, useEffect } from "react";
import {
  MoonStar,
  SunMedium,
  Github,
  AlignJustify,
  CircleX,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import ConfigData from "@/config";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: t("nav_features"), href: "#features" },
    { name: t("nav_tech"), href: "#tech" },
    { name: t("nav_install"), href: "#install" },
  ];

  const currentFlag = language === "tr" ? "🇹🇷" : "🇬🇧";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-lg py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
              <img src="public/App_Logo.png" className=" rounded-lg"/>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-lg transition-opacity" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800 dark:text-white">
              {ConfigData.app_name.substring(0, 3)}<span className="text-blue-600">{ConfigData.app_name.substring(3)}</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}

            <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2" />

            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-1.5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400 font-bold text-xs"
              aria-label="Toggle language"
            >
              <span className="text-base leading-none">{currentFlag}</span>
              <span>{language.toUpperCase()}</span>
            </motion.button>

            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ rotate: 20, scale: 1.1 }}
              whileTap={{ scale: 0.9, rotate: -20 }}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
              aria-label="Toggle theme"
            >
              {darkMode ? <SunMedium size={20} /> : <MoonStar size={20} />}
            </motion.button>

            <motion.a
              href={ConfigData.github_url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Github size={16} />
              <span>{t("nav_star")}</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400 font-bold text-xs"
            >
              <span className="text-base leading-none">{currentFlag}</span>
              <span>{language.toUpperCase()}</span>
            </button>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
            >
              {darkMode ? <SunMedium size={20} /> : <MoonStar size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-slate-600 dark:text-slate-300"
            >
              <AlignJustify size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Moved outside nav to prevent backdrop-filter stacking issues */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-white dark:bg-slate-900 p-6 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2"
            >
              <CircleX
                size={32}
                className="text-slate-600 dark:text-slate-300"
              />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-slate-800 dark:text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href={ConfigData.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-bold text-lg"
            >
              <Github size={20} />
              GitHub
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
