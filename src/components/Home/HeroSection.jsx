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
      {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
      <div className="absolute inset-0 bg-[#964B00] bg-opacity-20"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="font-montserrat font-black text-white text-4xl sm:text-6xl md:text-8xl lg:text-9xl uppercase mb-4 md:mb-8">
          {t("home.hero.semicolon")}
        </h1>
        <div className="flex flex-col items-center font-bold gap-0 leading-none text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
          <span className="font-achemost text-white">{t("home.hero.we")}</span>
          <span className="font-achemost text-yellow-400 text-3xl sm:text-4xl md:text-6xl lg:text-8xl">
            {t("home.hero.turn")}
          </span>
          <span className="font-achemost text-white uppercase tracking-widest text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            {t("home.hero.heads")}
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
