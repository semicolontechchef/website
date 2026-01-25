import { getAssetPath } from "../../../utils/paths";
import { useTranslation } from "react-i18next";

function VideosGrid({ videos, title, subtitle }) {
  const { i18n } = useTranslation();
  return (
    <div
      style={{
        backgroundImage: `url("${getAssetPath("img/layout/background.png")}")`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Videos Grid Section */}
      <section className="pt-8 md:pt-16 px-4 z-10 pb-16 md:pb-36">
        <div
          className={`container mx-auto max-w-6xl my-24 relative text-center ${
            i18n.language === "ar"
              ? "font-bukra font-bold"
              : "font-achemost font-bold"
          }`}
        >
          {title && (
            <h2 className="text-black bg-white py-2 rounded-full inline-block text-4xl lg:text-6xl mb-8">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-black text-4xl lg:text-6xl text-center mb-8 md:mb-20">
              {subtitle}
            </p>
          )}
          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="relative"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <iframe
                  width="100%"
                  height="315"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default VideosGrid;
