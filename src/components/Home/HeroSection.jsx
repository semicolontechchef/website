import { useTranslation } from "react-i18next";

function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{
        backgroundImage: `url('${
          import.meta.env.BASE_URL
        }/img/home/banner-1.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-50 h-1/4"></div>
      <div className="relative z-10 text-center px-4">
        <img
          src={`${import.meta.env.BASE_URL}logo/text.svg`}
          alt="hero-text"
          className="w-full h-auto mb-16 "
        />
        {/* <h1 className="font-montserrat font-black text-white text-4xl sm:text-6xl md:text-8xl lg:text-9xl uppercase mb-4 md:mb-8 stroke-black stroke-1">
          {t("home.hero.semicolon")}
        </h1> */}
        <h2 className="font-achemost text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
          <span className="font-achemost text-white">{t("home.hero.we")}</span>
          <br />
          <span className="font-achemost text-[#FFF100] text-3xl sm:text-4xl md:text-6xl lg:text-8xl">
            {t("home.hero.turn")}
          </span>
          <br />
          <span className="font-achemost text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            {t("home.hero.heads")}
          </span>
        </h2>
      </div>
    </section>
  );
}

export default HeroSection;
