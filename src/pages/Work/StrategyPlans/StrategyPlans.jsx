import { getAssetPath } from "../../../utils/paths";
import { useTranslation } from "react-i18next";
import HeroSection from "../../../components/HeroSection";
import DescSection from "../shared/DescSection";

function StrategyPlans() {
  const banners = ["strategy-plans"];
  const { t, i18n } = useTranslation();

  return (
    <div className="w-full relative flex flex-col overflow-hidden">
      <div className="flex-1 z-10">
        <HeroSection banners={banners} />
      </div>
      <div className="flex-1 -mt-[120px] md:-mt-[80px]">
        <div
          style={{
            backgroundImage: `url("${getAssetPath(
              "img/layout/background.png"
            )}")`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <section className="pt-8 md:pt-16 px-4 z-10 pb-16 md:pb-36">
            <div
              className={`container mx-auto max-w-6xl my-24 relative  ${
                i18n.language === "ar" ? "font-bukra" : "font-achemost"
              }`}
            >
              <h2 className="text-black bg-white px-8 py-2 rounded-full text-center max-w-4xl mx-auto text-4xl lg:text-6xl mb-8 font-bold ">
                {t("work.strategy-plans.header.title")}
              </h2>
              <p className="text-black text-6xl max-w-2xl mx-auto text-center mb-8 md:mb-20 font-bold">
                {t("work.strategy-plans.header.desc")}
              </p>

              <p className="text-black text-3xl mb-8">
                {t("work.strategy-plans.section.desc")}
              </p>

              <p className="text-black text-3xl mb-8 md:mb-20 font-bold mt-1">
                {t("work.strategy-plans.section.desc-bold")}
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="flex-1 -mt-[120px] relative">
        <DescSection
          desc={t("work.strategy-plans.desc.desc")}
          descYellow={t("work.strategy-plans.desc.desc-yellow")}
        />
      </div>
    </div>
  );
}

export default StrategyPlans;
