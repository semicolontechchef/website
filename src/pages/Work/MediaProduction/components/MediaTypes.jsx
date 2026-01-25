import { useTranslation } from "react-i18next";
import { getAssetPath } from "../../../../utils/paths";
import { Link } from "react-router-dom";
import { useLocalizedNavigation } from "../../../../hooks/useLocalizedNavigation";

function MediaTypes() {
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
            i18n.language === "ar" ? "font-bukra font-bold" : "font-achemost"
          }`}
        >
          <h2
            className="text-black bg-white py-2 rounded-full inline-block text-4xl lg:text-6xl mb-8"
            data-aos="fade-up"
          >
            {t("work.media-production.title-1")}
          </h2>
          <h2
            className="text-black text-4xl lg:text-6xl mb-8 md:mb-20"
            data-aos="fade-up"
          >
            {t("work.media-production.title-2")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-20">
            <Link
              to={getPath("/work/media-production/video-production")}
              className="relative overflow-hidden"
              data-aos="fade-up"
            >
              <img
                src={getAssetPath(
                  "img/work/media-production/video-production.png"
                )}
                alt="media-types"
                className="w-full h-auto"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h3 className="text-white text-6xl text-center">
                  {t("work.media-production.video-production.video")}
                </h3>
                <p
                  className={`text-white text-center ${
                    i18n.language === "ar" ? "text-6xl" : "text-4xl"
                  }`}
                >
                  {t("work.media-production.video-production.production")}
                </p>
              </div>
            </Link>

            <Link
              to={getPath("/work/media-production/ai-production")}
              className="relative overflow-hidden"
              data-aos="fade-up"
            >
              <img
                src={getAssetPath(
                  "img/work/media-production/ai-production.png"
                )}
                alt="media-types"
                className="w-full h-auto"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h3 className="text-white text-6xl text-center">
                  {t("work.media-production.ai-production.ai")}
                </h3>
                <p
                  className={`text-white text-center ${
                    i18n.language === "ar" ? "text-6xl" : "text-4xl"
                  }`}
                >
                  {t("work.media-production.ai-production.production")}
                </p>
              </div>
            </Link>

            <Link
              to={getPath("/work/media-production/radio-production")}
              className="relative overflow-hidden"
              data-aos="fade-up"
            >
              <img
                src={getAssetPath(
                  "img/work/media-production/radio-production.png"
                )}
                alt="media-types"
                className="w-full h-auto"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h3 className="text-white text-6xl text-center">
                  {t("work.media-production.radio-production.radio")}
                </h3>
                <p
                  className={`text-white text-center ${
                    i18n.language === "ar" ? "text-6xl" : "text-4xl"
                  }`}
                >
                  {t("work.media-production.radio-production.production")}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MediaTypes;
