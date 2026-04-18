import { useState, useEffect } from "react";
import { getAssetPath } from "../utils/paths";
import { useTranslation } from "react-i18next";

function HeroSection({ banners = ["banner-1"] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { i18n } = useTranslation();

  // Auto-slide functionality
  useEffect(() => {
    if (banners.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [banners.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative h-[900px] flex items-center justify-center pt-20 overflow-hidden">
      {/* Slider container */}
      <div className="absolute inset-0">
        {banners.map((bannerName, index) => (
          <div
            key={bannerName}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${getAssetPath(
                `img/banners/${bannerName}/banner.png`
              )}')`,
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-50 h-1/4"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full">
        {banners.map((bannerName, index) => (
          <div
            key={bannerName}
            className={`flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out ${
              index === currentIndex
                ? "opacity-100 relative"
                : "opacity-0 absolute inset-0 pointer-events-none"
            }`}
          >
            {bannerName === "home-hero" && (
              <img
                src={getAssetPath(`logo/text-${i18n.language}.svg`)}
                alt="hero-text"
                className="w-auto h-auto mb-16 mx-auto"
                // data-aos="fade-up"
              />
            )}
            <img
              src={getAssetPath(
                `img/banners/${bannerName}/text-${i18n.language}.svg`
              )}
              alt={`hero-text-${bannerName}`}
              className="w-auto h-auto mb-16 mx-auto"
              // data-aos={index === currentIndex ? "fade-up" : undefined}
            />
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      {banners.length > 1 && (
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {banners.map((bannerName, index) => (
            <button
              key={bannerName}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-3 h-3 bg-white"
                  : "w-3 h-3 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default HeroSection;
