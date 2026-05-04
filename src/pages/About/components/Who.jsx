import { useTranslation } from "react-i18next";
import { getAssetPath } from "../../../utils/paths";

function WhoSection() {
  const { t, i18n } = useTranslation();

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
      <section className="pt-8 md:pt-16 px-4 z-10 pb-16">
        <div className="container mx-auto  my-24 flex flex-col">
          <div
            className="flex flex-col gap-8 items-center justify-center mb-10"
            data-aos="fade-up"
          >
            <h2
              className={`text-black px-24 py-0 rounded-full text-center text-4xl lg:text-6xl mb-8 md:mb-6 ${
                i18n.language === "ar"
                  ? "font-bukra font-bold"
                  : "font-achemost font-semibold"
              }`}
            >
              {t("about.who.who-are-we.title")}
            </h2>
            <p
              className={`text-center text-black text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl ${
                i18n.language === "ar"
                  ? "font-bukra"
                  : "font-montserrat font-light"
              }`}
            >
              {t("about.who.who-are-we.text")}
            </p>
          </div>
          <div
            className="flex flex-col gap-8 items-center justify-center mb-10"
            data-aos="fade-up"
          >
            <h2
              className={`text-blackpx-24 py-0 rounded-full text-center text-4xl lg:text-6xl mb-8 md:mb-6 ${
                i18n.language === "ar"
                  ? "font-bukra font-bold"
                  : "font-achemost font-semibold"
              }`}
            >
              {t("about.who.our-vision.title")}
            </h2>
            <p
              className={`text-center text-black text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl ${
                i18n.language === "ar"
                  ? "font-bukra"
                  : "font-montserrat font-light"
              }`}
            >
              {t("about.who.our-vision.text")}
            </p>
          </div>
          <div
            className="flex flex-col gap-8 items-center justify-center mb-10"
            data-aos="fade-up"
          >
            <h2
              className={`text-blackpx-24 py-0 rounded-full text-center text-4xl lg:text-6xl mb-8 md:mb-6 ${
                i18n.language === "ar"
                  ? "font-bukra font-bold"
                  : "font-achemost font-semibold"
              }`}
            >
              {t("about.who.our-mission.title")}
            </h2>
            <p
              className={`text-center text-black text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl ${
                i18n.language === "ar"
                  ? "font-bukra"
                  : "font-montserrat font-light"
              }`}
            >
              {t("about.who.our-mission.text")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhoSection;
