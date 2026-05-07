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
        <div className="w-auto md:order-2 relative">
          <div
            className="flex justify-center items-center"
            data-aos="fade-right"
          >
            <img
              src={getAssetPath("img/about/ceo.png")}
              alt="message"
              className="h-auto max-h-[500px] max-w-full"
            />
          </div>
          <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-start px-2 pt-16">
            <p
              className={`text-white text-center  ${
                i18n.language === "ar"
                  ? "font-arsian text-8xl mb-52"
                  : "font-montserrat font-semibold text-6xl mb-64"
              }`}
            >
              {t("about.message-1.name")}
            </p>
            <p
              className={`text-white text-center  ${
                i18n.language === "ar"
                  ? "font-arsian text-6xl"
                  : "font-montserrat font-medium text-5xl"
              }`}
            >
              {t("about.message-1.title")}
            </p>
          </div>
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
          <h3
            className={`text-black text-2xl mb-6 ${
              i18n.language === "ar"
                ? "font-bukra font-bold"
                : "font-montserrat font-semibold"
            }`}
          >
            {t("about.message-1.name")}
          </h3>
          <div
            className={`text-black text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl space-y-6 ${
              i18n.language === "ar" ? "font-bukra" : "font-montserrat"
            }`}
          >
            {t("about.message-1.paragraphs", { returnObjects: true }).map(
              (paragraph, index) => (
                <p key={index}>{paragraph}</p>
              )
            )}
          </div>
        </div>
      </div>

      <div className=" flex flex-col md:flex-row items-center justify-center gap-12 px-4 md:px-24 bg-white py-16">
        <div className="w-auto  relative">
          <div
            className="flex justify-center items-center"
            data-aos="fade-right"
          >
            <img
              src={getAssetPath("img/about/co-founder.png")}
              alt="message"
              className="h-auto max-h-[500px] max-w-full"
            />
          </div>
          <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-start px-4 pt-16">
            <p
              className={`text-white text-center ${
                i18n.language === "ar"
                  ? "font-arsian text-6xl mb-52"
                  : "font-montserrat font-semibold text-5xl mb-64"
              }`}
            >
              {t("about.message-2.name")}
            </p>
            <p
              className={`text-white text-center  ${
                i18n.language === "ar"
                  ? "font-arsian text-4xl"
                  : "font-montserrat font-medium text-3xl"
              }`}
            >
              {t("about.message-2.title")}
            </p>
          </div>
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
          <h3
            className={`text-black text-2xl mb-6 ${
              i18n.language === "ar"
                ? "font-bukra font-bold"
                : "font-montserrat font-semibold"
            }`}
          >
            {t("about.message-2.name")}
          </h3>
          <div
            className={`text-black text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl space-y-6 ${
              i18n.language === "ar" ? "font-bukra" : "font-montserrat"
            }`}
          >
            {t("about.message-2.paragraphs", { returnObjects: true }).map(
              (paragraph, index) => (
                <p key={index}>{paragraph}</p>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MessageSection;
