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
        }/img/about/banner-1.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
      <div className="absolute inset-0 bg-[#964B00] bg-opacity-20"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="flex flex-col items-center font-bold gap-0 leading-none text-3xl sm:text-4xl md:text-6xl lg:text-8xl">
          <span className="font-achemost text-white">
            {t("about.hero.our")}
          </span>
          <span className="font-achemost text-[#FFF100] text-3xl sm:text-4xl md:text-6xl lg:text-6xl">
            {t("about.hero.creative")}
          </span>
          <span className="font-achemost text-white uppercase tracking-widest text-3xl sm:text-4xl md:text-6xl lg:text-8xl">
            {t("about.hero.team")}
          </span>
        </h1>
      </div>
    </section>
  );
}

export default HeroSection;
