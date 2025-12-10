import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2 px-3 py-1 font-montserrat text-xl uppercase">
      {i18n.language === "ar" && (
        <button
          onClick={() => changeLanguage("en")}
          className={`transition-colors ${
            i18n.language === "en"
              ? "text-[#FFF100] font-bold"
              : "text-white hover:text-[#FFF100]"
          }`}
        >
          {t("nav.language")}
        </button>
      )}
      {/* <span className="text-white">|</span> */}
      {i18n.language === "en" && (
        <button
          onClick={() => changeLanguage("ar")}
          className={`transition-colors ${
            i18n.language === "ar"
              ? "text-[#FFF100] font-bold"
              : "text-white hover:text-[#FFF100]"
          }`}
        >
          {t("nav.language")}
        </button>
      )}
    </div>
  );
}

export default LanguageSwitcher;
