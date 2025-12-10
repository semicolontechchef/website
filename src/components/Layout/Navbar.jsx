import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleNavClick = () => {
    closeDrawer();
  };

  const isRTL = i18n.language === "ar";

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      {/* Top Navigation Bar - Dark Blue */}
      <div className="bg-transparent px-4 py-8">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <a
            href={`${import.meta.env.BASE_URL}`}
            className="flex items-center gap-2 md:gap-4"
          >
            <img
              src={`${import.meta.env.BASE_URL}logo/logo-white.svg`}
              alt="logo-white"
              className="h-auto max-w-[150px] md:max-w-[200px] w-auto mx-auto md:mx-0"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-white font-montserrat font-medium text-xl uppercase">
            <a
              href={`${import.meta.env.BASE_URL}`}
              className="hover:text-[#FFF100] transition-colors"
            >
              {t("nav.home")}
            </a>
            <a
              href={`${import.meta.env.BASE_URL}about`}
              className="hover:text-[#FFF100] transition-colors"
            >
              {t("nav.about")}
            </a>
            <a
              href={`${import.meta.env.BASE_URL}work`}
              className="hover:text-[#FFF100] transition-colors"
            >
              {t("nav.work")}
            </a>
            <a
              href={`${import.meta.env.BASE_URL}contact`}
              className="hover:text-[#FFF100] transition-colors"
            >
              {t("nav.contact")}
            </a>
          </nav>

          {/* Right Side - Language Switcher and Hamburger */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleDrawer}
              className="lg:hidden text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isDrawerOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Off-Canvas Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeDrawer}
        />
      )}

      {/* Off-Canvas Drawer */}
      <div
        className={`fixed top-0 h-full w-80 bg-[#1a2b4a] z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isRTL ? "left-0" : "right-0"
        } ${
          isDrawerOpen
            ? "translate-x-0"
            : isRTL
            ? "-translate-x-full"
            : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Drawer Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <span className="text-[#FFF100] font-achemost text-4xl">;</span>
              <div className="flex flex-col">
                <span className="text-white font-montserrat font-bold text-lg uppercase">
                  SEMICOLON
                </span>
                <span className="text-white font-montserrat text-xs uppercase">
                  ADVERTISING AGENCY
                </span>
              </div>
            </div>
            <button
              onClick={closeDrawer}
              className="text-white p-2 focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-4 flex-1">
            <a
              href="#home"
              onClick={handleNavClick}
              className="text-white font-montserrat font-medium text-xl uppercase hover:text-[#FFF100] transition-colors py-2"
            >
              {t("nav.home")}
            </a>
            <a
              href="#about"
              onClick={handleNavClick}
              className="text-white font-montserrat font-medium text-xl uppercase hover:text-[#FFF100] transition-colors py-2"
            >
              {t("nav.about")}
            </a>
            <a
              href="#work"
              onClick={handleNavClick}
              className="text-white font-montserrat font-medium text-xl uppercase hover:text-[#FFF100] transition-colors py-2"
            >
              {t("nav.work")}
            </a>
            <a
              href="#contact"
              onClick={handleNavClick}
              className="text-white font-montserrat font-medium text-xl uppercase hover:text-[#FFF100] transition-colors py-2"
            >
              {t("nav.contact")}
            </a>
          </nav>

          {/* Language Switcher in Drawer */}
          <div className="mt-auto pt-6 border-t border-white border-opacity-20">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
