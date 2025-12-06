import { useTranslation } from "react-i18next";
import { partners } from "../../constants/partners";

function OurPartnersSection() {
  const { t } = useTranslation();

  return (
    <section className="relative px-4 w-full z-30">
      <div className="container mx-auto py-12 sm:py-20 md:py-28 lg:py-36 max-w-6xl relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-achemost font-black text-black text-xl sm:text-2xl md:text-3xl lg:text-6xl text-center mb-8 md:mb-20">
            {t("home.partners.title-1")}
            <br />
            <span className="text-xl sm:text-4xl md:text-6xl lg:text-8xl">
              {t("home.partners.title-2")}
            </span>
          </h2>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 justify-center items-center">
            {partners.map((partner) => (
              <div key={partner.key} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-2 md:mb-4">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPartnersSection;
