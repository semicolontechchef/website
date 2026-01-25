import { useTranslation } from "react-i18next";
import { getAssetPath } from "../../../utils/paths";

function OurPartnersSection() {
  const { t, i18n } = useTranslation();

  const totalImages = 55;

  const partnerImages = Array.from({ length: totalImages }, (_, i) =>
    getAssetPath(`img/home/partners/${i + 1}.png`)
  );

  return (
    <section className="relative px-4 w-full z-30">
      <div className="container mx-auto pt-28 pb-[40rem] sm:pb-[15rem] md:pb-42 max-w-6xl relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2
            className={`font-bold text-black text-center mb-8 md:mb-20 ${
              i18n.language === "ar" ? "font-bukra" : "font-achemost"
            }`}
            data-aos="fade-up"
          >
            {/* text-4xl sm:text-5xl md:text-7xl lg:text-8xl  */}
            {t("home.partners.title-1") && (
              <span className="text-4xl lg:text-6xl">
                {t("home.partners.title-1")}
              </span>
            )}
            <br />
            <span className="text-6xl lg:text-8xl">
              {t("home.partners.title-2")}
            </span>
          </h2>

          {/* Services Grid */}
          <div
            className="flex flex-wrap gap-4 md:gap-8 justify-center items-center"
            dir="ltr"
          >
            {partnerImages.map((partnerImage, index) => (
              <img
                key={index}
                src={partnerImage}
                alt={`partner-${index + 1}`}
                className="w-full h-auto object-contain max-w-[200px] max-h-[100px]"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPartnersSection;
