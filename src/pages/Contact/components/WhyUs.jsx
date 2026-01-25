import { useTranslation } from "react-i18next";
import { getAssetPath } from "../../../utils/paths";

function WhyUsSection() {
  const { t, i18n } = useTranslation();

  return (
    <div
      style={{
        backgroundImage: `url("${getAssetPath("img/contact/why-us.png")}")`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Message Section */}
      <section className="py-72 flex flex-col items-center justify-center gap-12 px-4 md:px-24">
        <div
          className="flex flex-col justify-center items-center w-full"
          data-aos="fade-right"
        >
          <h2
            className={`text-white text-center text-6xl mb-6 ${
              i18n.language === "ar" ? "font-bukra font-bold" : "font-achemost"
            }`}
          >
            {t("contact.why-us.title")}
          </h2>
          <img
            src={getAssetPath(
              i18n.language === "ar"
                ? "logo/text-ar-white.svg"
                : "logo/text-en-yellow.svg"
            )}
            alt="message"
            className="w-full h-auto max-w-md md:max-w-2xl mx-auto"
          />
        </div>
        <div
          className={`container mx-auto md:max-w-6xl pb-[25rem] md:pb-12 px-4 ${
            i18n.language === "ar" ? "font-bukra font-bold" : "font-montserrat"
          }`}
        >
          <p className="text-white text-center text-2xl font-normal">
            {t("contact.why-us.desc")}
          </p>
          <p className="text-[#FFF000] text-center font-bold text-2xl">
            {t("contact.why-us.desc-yellow")}
          </p>
        </div>
      </section>
    </div>
  );
}

export default WhyUsSection;
