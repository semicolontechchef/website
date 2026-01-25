import { useTranslation } from "react-i18next";
import { getAssetPath } from "../../../utils/paths";
import { useLocalizedNavigation } from "../../../hooks/useLocalizedNavigation";
import { Link } from "react-router-dom";

function WhoIsSection() {
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
      {/* Who Semicolon Section */}
      <section className="pt-20 md:pt-5">
        <img
          src={getAssetPath(`img/home/who-is/who-is-${i18n.language}.png`)}
          alt="who-is"
          className="w-[600px] max-w-full h-auto mx-auto mb-4 md:mb-10"
          data-aos="fade-up"
        />

        {/* Description */}
        <div
          className={`container mx-auto max-w-6xl border-b-2 border-black pb-8 md:pb-12 px-4 ${
            i18n.language === "ar" ? "font-bukra" : "font-montserrat"
          }`}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-black text-sm sm:text-base md:text-xl font-medium">
            <span className="font-bold text-black text-lg sm:text-xl md:text-4xl">
              •
            </span>
            <span className="font-bold text-black text-lg sm:text-xl md:text-2xl">
              {t("home.who.p1.bold")}{" "}
            </span>
            {t("home.who.p1.text")}
          </p>
          <p className="text-black text-sm sm:text-base md:text-xl font-medium">
            <span className="font-bold text-black text-lg sm:text-xl md:text-4xl">
              •
            </span>
            <span className="font-bold text-black text-lg sm:text-xl md:text-2xl">
              {t("home.who.p2.bold")}{" "}
            </span>
            {t("home.who.p2.text")}
          </p>
          <p className="text-black text-sm sm:text-base md:text-xl font-medium">
            <span className="font-bold text-black text-lg sm:text-xl md:text-4xl">
              •
            </span>
            <span className="font-bold text-black text-lg sm:text-xl md:text-2xl">
              {t("home.who.p3.bold")}{" "}
            </span>
            {t("home.who.p3.text")}
          </p>
        </div>
      </section>

      {/* What are we experts in? Section */}
      <section className="pt-8 md:pt-16 px-4 z-10 pb-16 md:pb-36">
        <div
          className={`container mx-auto max-w-6xl ${
            i18n.language === "ar" ? "font-bukra" : "font-achemost"
          }`}
        >
          <h2
            className={`text-black text-4xl lg:text-6xl text-center mb-8 md:mb-20 ${
              i18n.language === "ar" ? "font-bold" : "font-medium"
            }`}
            data-aos="fade-up"
          >
            {t("home.experts.title")}
          </h2>

          {/* Services Grid */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
            dir="ltr"
          >
            {/* Creative Design */}
            <div className="relative" data-aos="fade-up" data-aos-delay={0}>
              <a
                href={getAssetPath("portfolio/creative-designs.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center"
              >
                <div className="mb-2 md:mb-8">
                  <img
                    src={getAssetPath("img/home/services/creative-designs.svg")}
                    alt="creative-designs"
                    className="w-[160px] h-[160px]"
                  />
                </div>
                <p
                  className={`text-black text-xl md:text-4xl ${
                    i18n.language === "ar" ? "font-bold" : "font-medium"
                  }`}
                >
                  {t("services.creative-designs")}
                </p>
              </a>
              <div className="hidden md:block absolute bottom-0 -right-4 w-1 h-16 bg-black transform -translate-y-1/2"></div>
            </div>
            {/* Billboards */}
            <div className="relative" data-aos="fade-up" data-aos-delay={100}>
              <a
                href={getAssetPath("portfolio/billboard.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center"
              >
                <div className="mb-2 md:mb-8">
                  <img
                    src={getAssetPath("img/home/services/billboard.svg")}
                    alt="billboard"
                    className="w-[160px] h-[160px]"
                  />
                </div>
                <p
                  className={`text-black text-xl md:text-4xl ${
                    i18n.language === "ar" ? "font-bold" : "font-medium"
                  }`}
                >
                  {t("services.billboard")}
                </p>
              </a>
              <div className="hidden md:block absolute bottom-0 -right-4 w-1 h-16 bg-black transform -translate-y-1/2"></div>
            </div>
            {/* Social Media */}
            <div className="relative" data-aos="fade-up" data-aos-delay={200}>
              <a
                href={getAssetPath("portfolio/social-media.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center"
              >
                <div className="mb-2 md:mb-8">
                  <img
                    src={getAssetPath("img/home/services/social-media.svg")}
                    alt="social-media"
                    className="w-[160px] h-[160px]"
                  />
                </div>
                <p
                  className={`text-black text-xl md:text-4xl ${
                    i18n.language === "ar" ? "font-bold" : "font-medium"
                  }`}
                >
                  {t("services.social-media")}
                </p>
              </a>
              <div className="hidden md:block absolute bottom-0 -right-4 w-1 h-16 bg-black transform -translate-y-1/2"></div>
            </div>
            {/* Media Production */}
            <div className="relative" data-aos="fade-up" data-aos-delay={300}>
              <Link
                to={getPath("/work/media-production")}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-2 md:mb-8">
                  <img
                    src={getAssetPath("img/home/services/media-production.svg")}
                    alt="media-production"
                    className="w-[160px] h-[160px]"
                  />
                </div>
                <p
                  className={`text-black text-xl md:text-4xl ${
                    i18n.language === "ar" ? "font-bold" : "font-medium"
                  }`}
                >
                  {t("services.media-production")}
                </p>
              </Link>
            </div>
            {/* Printings */}
            <div className="relative" data-aos="fade-up" data-aos-delay={400}>
              <a
                href={getAssetPath("portfolio/printings.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center"
              >
                <div className="mb-2 md:mb-8">
                  <img
                    src={getAssetPath("img/home/services/printings.svg")}
                    alt="printings"
                    className="w-[160px] h-[160px]"
                  />
                </div>
                <p
                  className={`text-black text-xl md:text-4xl ${
                    i18n.language === "ar" ? "font-bold" : "font-medium"
                  }`}
                >
                  {t("services.printings")}
                </p>
              </a>
              <div className="hidden md:block absolute bottom-0 -right-4 w-1 h-16 bg-black transform -translate-y-1/2"></div>
            </div>
            {/* TV Ads */}
            <div className="relative" data-aos="fade-up" data-aos-delay={500}>
              <Link
                to={getPath("/work/tv-ads")}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-2 md:mb-8">
                  <img
                    src={getAssetPath("img/home/services/tv-ads.svg")}
                    alt="tv-ads"
                    className="w-[160px] h-[160px]"
                  />
                </div>
                <p
                  className={`text-black text-xl md:text-4xl ${
                    i18n.language === "ar" ? "font-bold" : "font-medium"
                  }`}
                >
                  {t("services.tv-ads")}
                </p>
              </Link>
              <div className="hidden md:block absolute bottom-0 -right-4 w-1 h-16 bg-black transform -translate-y-1/2"></div>
            </div>
            {/* Public Transportation */}
            <div className="relative" data-aos="fade-up" data-aos-delay={600}>
              <a
                href={getAssetPath("portfolio/transportation.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center"
              >
                <div className="mb-2 md:mb-8">
                  <img
                    src={getAssetPath(
                      "img/home/services/public-transportation.svg"
                    )}
                    alt="public-transportation"
                    className="w-[160px] h-[160px]"
                  />
                </div>
                <p
                  className={`text-black text-xl md:text-4xl ${
                    i18n.language === "ar" ? "font-bold" : "font-medium"
                  }`}
                >
                  {t("services.public-transportation")}
                </p>
              </a>
              <div className="hidden md:block absolute bottom-0 -right-4 w-1 h-16 bg-black transform -translate-y-1/2"></div>
            </div>
            {/* Strategy Plans */}
            <div className="relative" data-aos="fade-up" data-aos-delay={700}>
              <Link
                to={getPath("/work/strategy-plans")}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-2 md:mb-8">
                  <img
                    src={getAssetPath("img/home/services/strategy-plans.svg")}
                    alt="strategy-plans"
                    className="w-[160px] h-[160px]"
                  />
                </div>
                <p
                  className={`text-black text-xl md:text-4xl ${
                    i18n.language === "ar" ? "font-bold" : "font-medium"
                  }`}
                >
                  {t("services.strategy-plans")}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhoIsSection;
