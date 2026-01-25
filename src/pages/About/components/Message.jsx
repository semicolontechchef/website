import { useTranslation } from "react-i18next";
import { getAssetPath } from "../../../utils/paths";

function MessageSection() {
  const { t, i18n } = useTranslation();

  return (
    <section className="relative w-full overflow-hidden ">
      <img
        src={getAssetPath("img/layout/white-bg-top.svg")}
        alt="white-bg"
        className=" w-full h-full object-cover"
      />

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-4 md:px-24 bg-white py-16">
        <div
          className="flex justify-center items-center w-auto md:order-2"
          data-aos="fade-right"
        >
          <img
            src={getAssetPath("img/about/ceo.png")}
            alt="message"
            className="h-auto max-h-[500px] max-w-full"
          />
        </div>
        <div
          className="flex flex-col items-start justify-center w-full md:w-2/3"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h2
            className={`text-black text-4xl mb-8 ${
              i18n.language === "ar"
                ? "font-bukra font-bold"
                : "font-achemost font-semibold"
            }`}
          >
            {t("about.message-1.title")}
          </h2>
          <p
            className={`text-black text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl ${
              i18n.language === "ar" ? "font-bukra" : "font-montserrat"
            }`}
          >
            {t("about.message-1.description")}
          </p>
        </div>
      </div>

      <div className=" flex flex-col md:flex-row items-center justify-center gap-12 px-4 md:px-24 bg-white py-16">
        <div
          className="flex justify-center items-center w-auto"
          data-aos="fade-right"
        >
          <img
            src={getAssetPath("img/about/co-founder.png")}
            alt="message"
            className="h-auto max-h-[500px] max-w-full"
          />
        </div>
        <div
          className="flex flex-col items-start justify-center w-full md:w-2/3"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h2
            className={`text-black text-4xl mb-8 ${
              i18n.language === "ar"
                ? "font-bukra font-bold"
                : "font-achemost font-semibold"
            }`}
          >
            {t("about.message-2.title")}
          </h2>
          <p
            className={`text-black text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl ${
              i18n.language === "ar" ? "font-bukra" : "font-montserrat"
            }`}
          >
            {t("about.message-2.description")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default MessageSection;
