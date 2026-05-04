import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocalizedNavigation } from "../../hooks/useLocalizedNavigation";
import { getAssetPath } from "../../utils/paths";
import { getPathWithoutLang } from "../../utils/paths";

function Navbar() {
  const { t, i18n } = useTranslation();
  const { getPath } = useLocalizedNavigation();
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Get current path without language prefix
  const currentPath = getPathWithoutLang(location.pathname);

  // Check if a route is active
  const isActive = (path) => {
    if (path === "/") {
      return currentPath === "/" || currentPath === "";
    }
    return currentPath.startsWith(path);
  };

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
    <header
      className={`absolute top-0 left-0 right-0 z-50 ${
        i18n.language === "ar"
          ? "font-arsian text-4xl"
          : "font-montserrat text-xl"
      }`}
    >
      {/* Top Navigation Bar - Dark Blue */}
      <div className="bg-transparent px-4 py-8">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to={getPath("/")} className="flex items-center gap-2 md:gap-4">
            <img
              src={getAssetPath("logo/logo-white.svg")}
              alt="logo-white"
              className="h-auto max-w-[150px] md:max-w-[200px] w-auto mx-auto md:mx-0"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-white font-medium uppercase">
            <Link
              to={getPath("/")}
              className={`transition-colors ${
                isActive("/") ? "text-[#FFF100]" : "hover:text-[#FFF100]"
              }`}
            >
              {t("nav.home")}
            </Link>
            <Link
              to={getPath("/about")}
              className={`transition-colors ${
                isActive("/about") ? "text-[#FFF100]" : "hover:text-[#FFF100]"
              }`}
            >
              {t("nav.about")}
            </Link>
            <Link
              to={getPath("/work")}
              className={`transition-colors ${
                isActive("/work") ? "text-[#FFF100]" : "hover:text-[#FFF100]"
              }`}
            >
              {t("nav.work")}
            </Link>
            <Link
              to={getPath("/contact")}
              className={`transition-colors ${
                isActive("/contact") ? "text-[#FFF100]" : "hover:text-[#FFF100]"
              }`}
            >
              {t("nav.contact")}
            </Link>
          </nav>

          {/* Right Side - Language Switcher and Hamburger */}
          <div className="flex items-center gap-4">
            <div className="hidden h-auto w-[150px] md:w-[200px] mx-auto md:mx-0 lg:flex items-center justify-end gap-4">
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
        className={`fixed top-0 h-full w-80 bg-black z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
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
            <Link to={getPath("/")} className="flex items-center gap-2">
              <img
                src={getAssetPath("logo/logo-white.svg")}
                alt="logo-white"
                className="h-auto w-full mx-auto md:mx-0"
              />
            </Link>
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
            <Link
              to={getPath("/")}
              onClick={handleNavClick}
              className={`font-medium text-xl uppercase transition-colors py-2 ${
                isActive("/")
                  ? "text-[#FFF100]"
                  : "text-white hover:text-[#FFF100]"
              }`}
            >
              {t("nav.home")}
            </Link>
            <Link
              to={getPath("/about")}
              onClick={handleNavClick}
              className={`font-medium text-xl uppercase transition-colors py-2 ${
                isActive("/about")
                  ? "text-[#FFF100]"
                  : "text-white hover:text-[#FFF100]"
              }`}
            >
              {t("nav.about")}
            </Link>
            <Link
              to={getPath("/work")}
              onClick={handleNavClick}
              className={`font-medium text-xl uppercase transition-colors py-2 ${
                isActive("/work")
                  ? "text-[#FFF100]"
                  : "text-white hover:text-[#FFF100]"
              }`}
            >
              {t("nav.work")}
            </Link>
            <Link
              to={getPath("/contact")}
              onClick={handleNavClick}
              className={`font-medium text-xl uppercase transition-colors py-2 ${
                isActive("/contact")
                  ? "text-[#FFF100]"
                  : "text-white hover:text-[#FFF100]"
              }`}
            >
              {t("nav.contact")}
            </Link>
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
