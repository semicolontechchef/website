import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { getLocalizedPath, getBaseUrl } from "../../utils/paths";

function SEO({ title, description, keywords, image, type = "website" }) {
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const baseUrl = getBaseUrl();
  const currentLang = i18n.language;
  const currentPath = location.pathname;

  // Get path without language prefix
  const pathWithoutLang = currentPath.replace(/^\/(en|ar)/, "") || "/";

  // Get alternate language paths
  const enPath = getLocalizedPath(pathWithoutLang, "en");
  const arPath = getLocalizedPath(pathWithoutLang, "ar");
  // Get site URL - use environment variable or window location
  const siteUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://semicolon-adv.com";
  const baseUrlWithoutSlash = baseUrl.replace(/\/$/, "");
  const fullUrl = `${siteUrl}${baseUrlWithoutSlash}${currentPath}`;
  const enUrl = `${siteUrl}${baseUrlWithoutSlash}${enPath}`;
  const arUrl = `${siteUrl}${baseUrlWithoutSlash}${arPath}`;

  // Default values
  const defaultTitle =
    t("seo.title") ||
    "Semicolon Agency - Creative Advertising & Media Production";
  const defaultDescription =
    t("seo.description") ||
    "Semicolon Agency is a leading advertising agency providing innovative marketing, media production, and strategic planning services.";
  const defaultKeywords =
    t("seo.keywords") ||
    "advertising agency, marketing, media production, creative design, semicolon";
  // Ensure absolute URL for og:image
  const defaultImage = image
    ? image.startsWith("http")
      ? image
      : `${siteUrl}${baseUrl}${image.replace(/^\//, "")}`
    : `${siteUrl}${baseUrl}img/card.png`;

  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageKeywords = keywords || defaultKeywords;
  // Ensure image is always an absolute URL
  const pageImage =
    image && image.startsWith("http")
      ? image
      : image
      ? `${siteUrl}${baseUrl}${image.replace(/^\//, "")}`
      : defaultImage;

  useEffect(() => {
    // Update document title
    document.title = pageTitle;

    // Update or create meta tags
    const updateMetaTag = (name, content, attribute = "name") => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Basic SEO meta tags
    updateMetaTag("description", pageDescription);
    updateMetaTag("keywords", pageKeywords);
    updateMetaTag("author", "Semicolon Agency");
    updateMetaTag("language", currentLang);
    updateMetaTag("robots", "index, follow");

    // Open Graph meta tags
    updateMetaTag("og:title", pageTitle, "property");
    updateMetaTag("og:description", pageDescription, "property");
    updateMetaTag("og:image", pageImage, "property");
    updateMetaTag("og:url", fullUrl, "property");
    updateMetaTag("og:type", type, "property");
    updateMetaTag(
      "og:locale",
      currentLang === "ar" ? "ar_SA" : "en_US",
      "property"
    );
    updateMetaTag("og:site_name", "Semicolon Agency", "property");

    // Twitter Card meta tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", pageTitle);
    updateMetaTag("twitter:description", pageDescription);
    updateMetaTag("twitter:image", pageImage);

    // Language alternates
    let hreflangEn = document.querySelector(
      'link[rel="alternate"][hreflang="en"]'
    );
    if (!hreflangEn) {
      hreflangEn = document.createElement("link");
      hreflangEn.setAttribute("rel", "alternate");
      hreflangEn.setAttribute("hreflang", "en");
      document.head.appendChild(hreflangEn);
    }
    hreflangEn.setAttribute("href", enUrl);

    let hreflangAr = document.querySelector(
      'link[rel="alternate"][hreflang="ar"]'
    );
    if (!hreflangAr) {
      hreflangAr = document.createElement("link");
      hreflangAr.setAttribute("rel", "alternate");
      hreflangAr.setAttribute("hreflang", "ar");
      document.head.appendChild(hreflangAr);
    }
    hreflangAr.setAttribute("href", arUrl);

    // x-default hreflang (default language)
    let hreflangDefault = document.querySelector(
      'link[rel="alternate"][hreflang="x-default"]'
    );
    if (!hreflangDefault) {
      hreflangDefault = document.createElement("link");
      hreflangDefault.setAttribute("rel", "alternate");
      hreflangDefault.setAttribute("hreflang", "x-default");
      document.head.appendChild(hreflangDefault);
    }
    hreflangDefault.setAttribute("href", enUrl); // Default to English

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);

    // Update html lang attribute
    document.documentElement.lang = currentLang;
  }, [
    pageTitle,
    pageDescription,
    pageKeywords,
    pageImage,
    fullUrl,
    enUrl,
    arUrl,
    currentLang,
    type,
  ]);

  return null; // This component doesn't render anything
}

export default SEO;
