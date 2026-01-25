import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AOS from "aos";
import { getBaseUrlWithoutSlash, getLangFromPath } from "./utils/paths";

// Components
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import SEO from "./components/SEO/SEO";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Work from "./pages/Work/Work";
import MediaProduction from "./pages/Work/MediaProduction/MediaProduction";
import VideoProduction from "./pages/Work/MediaProduction/VideoProduction/VideoProduction";
import AiProduction from "./pages/Work/MediaProduction/AiProduction/AiProduction";
import RadioProduction from "./pages/Work/MediaProduction/RadioProduction/RadioProduction";
import StrategyPlans from "./pages/Work/StrategyPlans/StrategyPlans";
import TvAds from "./pages/Work/TvAds/TvAds";

// Language route wrapper component
function LanguageRoute({ children }) {
  const location = useLocation();
  const { i18n } = useTranslation();

  const pathLang = getLangFromPath(location.pathname);

  // If language in URL doesn't match current i18n language, update i18n
  useEffect(() => {
    if (pathLang && pathLang !== i18n.language) {
      i18n.changeLanguage(pathLang);
    }
  }, [pathLang, i18n]);

  return children;
}

function AppContent() {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    // Refresh AOS on route change
    AOS.refresh();
  }, [location.pathname]);

  return (
    <LanguageRoute>
      <SEO />
      <div className="min-h-screen flex flex-col relative overflow-hidden bg-white">
        <Navbar />
        <main className="flex-1 relative pb-[350px]">
          <Routes>
            {/* Redirect root to default language */}
            <Route path="/" element={<Navigate to="/en" replace />} />

            {/* Language-prefixed routes */}
            <Route path="/:lang" element={<Home />} />
            <Route path="/:lang/about" element={<About />} />
            <Route path="/:lang/work" element={<Work />} />
            <Route
              path="/:lang/work/media-production"
              element={<MediaProduction />}
            />
            <Route
              path="/:lang/work/media-production/video-production"
              element={<VideoProduction />}
            />
            <Route
              path="/:lang/work/media-production/ai-production"
              element={<AiProduction />}
            />
            <Route
              path="/:lang/work/media-production/radio-production"
              element={<RadioProduction />}
            />
            <Route
              path="/:lang/work/strategy-plans"
              element={<StrategyPlans />}
            />
            <Route path="/:lang/work/tv-ads" element={<TvAds />} />
            <Route path="/:lang/contact" element={<Contact />} />

            {/* Catch-all redirect to default language */}
            <Route path="*" element={<Navigate to="/en" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageRoute>
  );
}

function App() {
  const basename = getBaseUrlWithoutSlash();

  return (
    <BrowserRouter basename={basename}>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
