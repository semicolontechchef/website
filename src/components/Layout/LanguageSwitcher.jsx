import { useTranslation } from "react-i18next";
import { useLocalizedNavigation } from "../../hooks/useLocalizedNavigation";

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const { switchLanguage } = useLocalizedNavigation();

  const handleLanguageChange = (newLang) => {
    switchLanguage(newLang);
  };

  return (
    <div className="flex gap-2 px-3 py-1 text-xl uppercase">
      {i18n.language === "ar" && (
        <button
          onClick={() => handleLanguageChange("en")}
          className="font-montserrat transition-colors text-white hover:text-[#FFF100]"
        >
          {t("nav.switch-lang")}
        </button>
      )}
      {i18n.language === "en" && (
        <button
          onClick={() => handleLanguageChange("ar")}
          className="font-bukra transition-colors text-white hover:text-[#FFF100]"
        >
          {t("nav.switch-lang")}
        </button>
      )}
    </div>
  );
}

export default LanguageSwitcher;
