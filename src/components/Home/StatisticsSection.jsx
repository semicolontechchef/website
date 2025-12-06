import { useTranslation } from "react-i18next";

function StatisticsSection() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full z-20 overflow-hidden">
      <img
        src={`${import.meta.env.BASE_URL}img/layout/black-bg-top.svg`}
        alt="black-bg"
        className=" w-full h-full object-contain"
      />
      <div className="bg-black px-8">
        <div className="container mx-auto py-12 sm:py-20 md:py-28 lg:py-36 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="font-montserrat font-black text-white text-4xl sm:text-5xl md:text-7xl lg:text-9xl">
                  05
                </span>
                <span className="text-yellow-400 font-montserrat font-bold text-3xl sm:text-4xl md:text-6xl lg:text-9xl">
                  +
                </span>
              </div>
              <p className="font-montserrat text-white font-bold text-sm sm:text-base md:text-2xl lg:text-4xl uppercase">
                {t("home.stats.years")}
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="font-montserrat font-black text-white text-4xl sm:text-5xl md:text-7xl lg:text-9xl">
                  40
                </span>
                <span className="text-yellow-400 font-montserrat font-bold text-3xl sm:text-4xl md:text-6xl lg:text-9xl">
                  +
                </span>
              </div>
              <p className="font-montserrat text-white font-bold text-sm sm:text-base md:text-2xl lg:text-4xl uppercase">
                {t("home.stats.professionals")}
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="font-montserrat font-black text-white text-4xl sm:text-5xl md:text-7xl lg:text-9xl">
                  800
                </span>
                <span className="text-yellow-400 font-montserrat font-bold text-3xl sm:text-4xl md:text-6xl lg:text-9xl">
                  +
                </span>
              </div>
              <p className="font-montserrat text-white font-bold text-sm sm:text-base md:text-2xl lg:text-4xl uppercase">
                {t("home.stats.projects")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src={`${import.meta.env.BASE_URL}img/layout/black-bg-bottom.svg`}
        alt="black-bg"
        className="w-full h-full object-contain"
      />
    </section>
  );
}

export default StatisticsSection;
