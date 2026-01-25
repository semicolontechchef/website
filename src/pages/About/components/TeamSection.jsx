import { getAssetPath } from "../../../utils/paths";
import { useTranslation } from "react-i18next";

function TeamSection() {
  const { t, i18n } = useTranslation();

  const totalImages = 15;

  // Generate array of team image paths
  const teamImages = Array.from({ length: totalImages }, (_, i) =>
    getAssetPath(`img/about/team/${i + 1}.png`)
  );

  // Duplicate images for seamless infinite loop
  const duplicatedImages = [...teamImages, ...teamImages];

  const totalWidthMobile = duplicatedImages.length * 100; // 2400%
  const totalWidthDesktop = (duplicatedImages.length / 3) * 100; // 800%

  return (
    <section>
      <p
        className={`font-bold text-white bg-black px-4 py-2 rounded-full text-xl md:text-6xl text-center w-full mx-auto -rotate-2 my-10 ${
          i18n.language === "ar"
            ? "font-bukra max-w-lg"
            : "font-achemost max-w-2xl"
        }`}
      >
        {t(`about.team.title`)}
      </p>

      <div className="relative w-full z-20 overflow-hidden" dir="ltr">
        <div className="bg-white">
          <div className="w-full pb-[35rem] md:pb-[25rem] lg:pb-40 relative z-10">
            <div className="relative overflow-hidden w-full">
              {/* Slider container */}
              <div className="flex slide-continuous">
                {duplicatedImages.map((imageSrc, index) => (
                  <div key={index} className="flex-shrink-0 slide-item">
                    <div className="relative overflow-hidden rounded-lg px-3">
                      <img
                        src={imageSrc}
                        alt={`Team member ${(index % totalImages) + 1}`}
                        className="h-auto object-contain max-h-[550px]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <style>{`
              .slide-continuous {
                animation: slide 60s linear infinite;
                width: ${totalWidthMobile}%;
              }
              @media (min-width: 768px) {
                .slide-continuous {
                  width: ${totalWidthDesktop}% !important;
                }
              }
              @keyframes slide {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
            `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
