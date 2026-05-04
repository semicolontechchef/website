import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getAssetPath } from "../../../utils/paths";
import { useLocalizedNavigation } from "../../../hooks/useLocalizedNavigation";

function ArtWorkSection() {
  const { t, i18n } = useTranslation();
  const { getPath } = useLocalizedNavigation();

  return (
    <div
      style={{
        backgroundImage: `url("${getAssetPath("img/layout/background.png")}")`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Art Work Section */}
      <section className="pt-8 md:pt-16 px-4 z-10 pb-16 md:pb-36">
        <div
          className={`container mx-auto max-w-6xl my-24 relative text-center ${
            i18n.language === "ar"
              ? "font-bukra font-bold"
              : "font-achemost font-bold"
          }`}
        >
          <h2
            className="text-black bg-white py-2 rounded-full inline-block text-4xl lg:text-6xl mb-8 md:mb-20"
            data-aos="fade-up"
          >
            {t("work.art-work.title")}
          </h2>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* Creative Designs */}
            <a
              href={getAssetPath("portfolio/creative-designs.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="relative"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-2 md:mb-4">
                  <img
                    src={getAssetPath("img/work/services/creative-designs.png")}
                    alt="art-work"
                    className="w-full h-auto"
                  />
                </div>
                <p className="px-4 py-2 rounded-full inline-block text-xl md:text-4xl text-center w-full max-w-md mx-auto">
                  {t(`services.creative-designs`)}
                </p>
              </div>
            </a>
            {/* Billboard */}
            <a
              href={getAssetPath("portfolio/billboard.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="relative"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-2 md:mb-4">
                  <img
                    src={getAssetPath("img/work/services/billboard.png")}
                    alt="art-work"
                    className="w-full h-auto"
                  />
                </div>
                <p className="px-4 py-2 rounded-full inline-block text-xl md:text-4xl text-center w-full max-w-md mx-auto">
                  {t(`services.billboard`)}
                </p>
              </div>
            </a>
            {/* Social Media */}
            <a
              href={getAssetPath("portfolio/social-media.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="relative"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-2 md:mb-4">
                  <img
                    src={getAssetPath("img/work/services/social-media.png")}
                    alt="art-work"
                    className="w-full h-auto"
                  />
                </div>
                <p className="px-4 py-2 rounded-full inline-block text-xl md:text-4xl text-center w-full max-w-md mx-auto">
                  {t(`services.social-media`)}
                </p>
              </div>
            </a>
            {/* Media Production */}
            <Link
              to={getPath("/work/media-production")}
              className="relative"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-2 md:mb-4">
                  <img
                    src={getAssetPath("img/work/services/media-production.png")}
                    alt="art-work"
                    className="w-full h-auto"
                  />
                </div>
                <p className="px-4 py-2 rounded-full inline-block text-xl md:text-4xl text-center w-full max-w-md mx-auto">
                  {t(`services.media-production`)}
                </p>
              </div>
            </Link>
            {/* Printings */}
            <a
              href={getAssetPath("portfolio/printings.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="relative"
              data-aos="fade-up"
              data-aos-delay={500}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-2 md:mb-4">
                  <img
                    src={getAssetPath("img/work/services/printings.png")}
                    alt="art-work"
                    className="w-full h-auto"
                  />
                </div>
                <p className="px-4 py-2 rounded-full inline-block text-xl md:text-4xl text-center w-full max-w-md mx-auto">
                  {t(`services.printings`)}
                </p>
              </div>
            </a>
            {/* Tv Ads */}
            <Link
              to={getPath("/work/tv-ads")}
              className="relative"
              data-aos="fade-up"
              data-aos-delay={600}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-2 md:mb-4">
                  <img
                    src={getAssetPath("img/work/services/tv-ads.png")}
                    alt="art-work"
                    className="w-full h-auto"
                  />
                </div>
                <p className="px-4 py-2 rounded-full inline-block text-xl md:text-4xl text-center w-full max-w-md mx-auto">
                  {t(`services.tv-ads`)}
                </p>
              </div>
            </Link>
            {/* Public Transportation */}
            <a
              href={getAssetPath("portfolio/transportation.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="relative"
              data-aos="fade-up"
              data-aos-delay={700}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-2 md:mb-4">
                  <img
                    src={getAssetPath(
                      "img/work/services/public-transportation.png"
                    )}
                    alt="art-work"
                    className="w-full h-auto"
                  />
                </div>
                <p className="px-4 py-2 rounded-full inline-block text-xl md:text-4xl text-center w-full max-w-md mx-auto">
                  {t(`services.public-transportation`)}
                </p>
              </div>
            </a>
            {/* Strategy Plans */}
            <Link
              to={getPath("/work/strategy-plans")}
              className="relative"
              data-aos="fade-up"
              data-aos-delay={800}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-2 md:mb-4">
                  <img
                    src={getAssetPath("img/work/services/strategy-plans.png")}
                    alt="art-work"
                    className="w-full h-auto"
                  />
                </div>
                <p className="px-4 py-2 rounded-full inline-block text-xl md:text-4xl text-center w-full max-w-md mx-auto">
                  {t(`services.strategy-plans`)}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArtWorkSection;
