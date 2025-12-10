import { useTranslation } from "react-i18next";

function MessageSection() {
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
      {/* Message Section */}
      <section
        id="about"
        className="py-36 flex flex-col md:flex-row items-center justify-center gap-24 px-24"
      >
        <div className="flex justify-center items-center w-full md:w-1/3">
          <img
            src={`${import.meta.env.BASE_URL}img/about/ceo.png`}
            alt="message"
            className="w-full h-auto max-w-md md:max-w-2xl"
          />
        </div>
        <div className="flex flex-col items-start justify-center w-full md:w-2/3">
          <h2 className="font-achemost font-black text-black text-4xl lg:text-6xl text-center mb-8">
            {t("about.message.title")}
          </h2>
          <p className="font-montserrat text-black text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl leading-relaxed font-medium">
            {t("about.message.description")}
          </p>
        </div>
      </section>
    </div>
  );
}

export default MessageSection;
