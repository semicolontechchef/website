import { getAssetPath } from "../../../utils/paths";
import { useTranslation } from "react-i18next";

function InfoSection() {
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
      {/* Message Section */}
      <section className="py-36 flex flex-col md:flex-row items-center justify-center gap-24 px-4 md:px-24">
        <div className="container mx-auto md:max-w-6xl">
          <h2
            className={`text-black text-3xl text-center font-bold mb-8 ${
              i18n.language === "ar"
                ? "font-bukra font-bold"
                : "font-montserrat"
            }`}
          >
            {t("contact.info.desc")}
          </h2>
        </div>
      </section>
    </div>
  );
}

export default InfoSection;
