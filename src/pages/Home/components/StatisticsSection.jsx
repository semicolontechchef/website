import { useTranslation } from "react-i18next";
import { getAssetPath } from "../../../utils/paths";

function StatisticsSection() {
  const { t, i18n } = useTranslation();

  return (
    <section className="relative w-full z-20 overflow-hidden">
      <img
        src={getAssetPath("img/layout/black-bg-top.svg")}
        alt="black-bg"
        className="w-full h-full object-cover -mb-1"
      />
      <div className="bg-black px-8" dir="ltr">
        <div className="container mx-auto py-12 sm:py-20 md:py-28 lg:py-36 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div
              className="text-center md:text-left"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="font-montserrat font-bold text-white text-4xl sm:text-5xl md:text-7xl lg:text-9xl">
                  05
                </span>
                <span className="text-[#FFF100] font-bold text-3xl sm:text-4xl md:text-6xl lg:text-9xl">
                  +
                </span>
              </div>
              <p
                className={`text-white font-bold text-sm sm:text-base md:text-2xl lg:text-4xl uppercase ${
                  i18n.language === "ar" ? "font-bukra" : "font-montserrat"
                }`}
              >
                {t("home.stats.years")}
              </p>
            </div>
            <div
              className="text-center md:text-left"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="font-montserrat font-bold text-white text-4xl sm:text-5xl md:text-7xl lg:text-9xl">
                  40
                </span>
                <span className="text-[#FFF100] font-montserrat font-bold text-3xl sm:text-4xl md:text-6xl lg:text-9xl">
                  +
                </span>
              </div>
              <p
                className={`text-white font-bold text-sm sm:text-base md:text-2xl lg:text-4xl uppercase ${
                  i18n.language === "ar" ? "font-bukra" : "font-montserrat"
                }`}
              >
                {t("home.stats.professionals")}
              </p>
            </div>
            <div
              className="text-center md:text-left"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="font-montserrat font-bold text-white text-4xl sm:text-5xl md:text-7xl lg:text-9xl">
                  800
                </span>
                <span className="text-[#FFF100] font-montserrat font-bold text-3xl sm:text-4xl md:text-6xl lg:text-9xl">
                  +
                </span>
              </div>
              <p
                className={`text-white font-bold text-sm sm:text-base md:text-2xl lg:text-4xl uppercase ${
                  i18n.language === "ar" ? "font-bukra" : "font-montserrat"
                }`}
              >
                {t("home.stats.projects")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src={getAssetPath("img/layout/black-bg-bottom.svg")}
        alt="black-bg"
        className="w-full h-full object-cover -mt-1"
      />
    </section>
  );
}

export default StatisticsSection;
