import { useTranslation } from "react-i18next";
import { getAssetPath } from "../../../utils/paths";

function DescSection({ desc, descYellow }) {
  const { i18n } = useTranslation();

  return (
    <section className="relative w-full z-20 overflow-hidden">
      <img
        src={getAssetPath("img/layout/black-bg-top.svg")}
        alt="black-bg"
        className=" w-full h-full object-cover -mb-1"
      />
      <div className="bg-black px-8 text-center">
        <div
          className={`container mx-auto pb-[38rem] md:pb-[25rem] lg:pb-40  pt-16 max-w-6xl relative z-10 ${
            i18n.language === "ar"
              ? "font-bukra font-bold"
              : "font-montserrat font-medium"
          }`}
        >
          <p className="text-white text-xl text-center mb-8">{desc}</p>
          <p className="text-[#FFF000] text-xl text-center">{descYellow}</p>
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
