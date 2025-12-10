import { useTranslation } from "react-i18next";
import { services } from "../../constants/services";

function WhoIsSection() {
  const { t } = useTranslation();

  return (
    <div
      style={{
        backgroundImage: `url("${
          import.meta.env.BASE_URL
        }img/layout/background.png")`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Who Semicolon Section */}
      <section id="about" className="pt-5">
        <img
          src={`${import.meta.env.BASE_URL}img/home/who-is.png`}
          alt="who-is"
          className="w-[600px] max-w-full h-auto mx-auto mb-4 md:mb-10"
        />

        {/* Description */}
        <div className="container mx-auto max-w-6xl border-b-2 border-black pb-8 md:pb-12 px-4">
          <p className="font-montserrat text-black text-sm sm:text-base md:text-xl font-medium text-center">
            <span className="font-montserrat font-black text-black text-lg sm:text-xl md:text-2xl">
              {t("home.hero.semicolon")}{" "}
            </span>
            {t("home.who.description")}
          </p>
        </div>
      </section>

      {/* What are we experts in? Section */}
      <section className="pt-8 md:pt-16 px-4 z-10 pb-16 md:pb-36">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-achemost font-black text-black text-4xl lg:text-6xl text-center mb-8 md:mb-20">
            {t("home.experts.title-1")}
            <br />
            {t("home.experts.title-2")}
          </h2>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {services.map((service, index) => (
              <div key={service.key} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-2 md:mb-4">
                    <img
                      src={service.icon}
                      alt={service.name}
                      className="w-[160px] h-[160px]"
                    />
                  </div>
                  <p className="font-achemost font-medium text-black text-xl md:text-4xl">
                    {t(`home.experts.${service.key}`)}
                  </p>
                </div>
                {index < services.length - 1 && index % 4 !== 3 && (
                  <div className="hidden md:block absolute bottom-0 -right-4 w-1 h-16 bg-black transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhoIsSection;
