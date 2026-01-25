import { useTranslation } from "react-i18next";
import { getAssetPath } from "../../../../utils/paths";

function DescSection() {
  const { t, i18n } = useTranslation();

  return (
    <section className="relative w-full z-20 overflow-hidden">
      <img
        src={getAssetPath("img/layout/black-bg-top.svg")}
        alt="black-bg"
        className=" w-full h-full object-cover -mb-1"
      />
      <div className="bg-black px-8 text-center">
        <div
          className={`container mx-auto pb-[35rem] md:pb-[25rem] lg:pb-40  pt-16 max-w-6xl relative z-10 ${
            i18n.language === "ar" ? "font-bukra font-bold" : "font-montserrat"
          }`}
        >
          <h2 className="font-achemost text-[#FFF000] text-4xl lg:text-6xl text-center mb-8 font-bold">
            {t("work.media-production.desc.title")}
          </h2>
          <p className="text-white text-xl text-center mb-8">
            {t("work.media-production.desc.desc")}
          </p>
          <p className="text-[#FFF000] text-xl text-center">
            {t("work.media-production.desc.desc-yellow")}
          </p>
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

export default DescSection;
