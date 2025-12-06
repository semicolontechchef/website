import { useTranslation } from "react-i18next";

function OurPartnersSection() {
  const { t } = useTranslation();

  const totalImages = 29;

  const partnerImages = Array.from(
    { length: totalImages },
    (_, i) =>
      `${import.meta.env.BASE_URL}img/home/partners/partner-${i + 1}.png`
  );

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
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 justify-center items-center">
            {partnerImages.map((partnerImage, index) => (
              <img
                key={index}
                src={partnerImage}
                alt="partner"
                className="w-full h-auto object-contain max-w-[200px] max-h-[100px]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPartnersSection;
