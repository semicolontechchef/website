import { getAssetPath } from "../../../utils/paths";
import { useTranslation } from "react-i18next";
import { team } from "../../../constants/team";

function TeamSection() {
  const { t, i18n } = useTranslation();

  const totalCards = team.length;

  // Duplicate images for seamless infinite loop
  const duplicatedCards = [...team, ...team];

  const totalWidthMobile = duplicatedCards.length * 100; // 2400%
  const totalWidthDesktop = (duplicatedCards.length / 3) * 100; // 800%

  return (
    <section className="team-section">
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
                {duplicatedCards.map((card, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 slide-item relative"
                  >
                    <div className="relative overflow-hidden rounded-lg px-3">
                      <img
                        src={getAssetPath(card.image)}
                        alt={`Team member ${(index % totalCards) + 1}`}
                        className="h-auto object-contain max-h-[550px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-end px-4 pb-16">
                      <p
                        className={`text-white text-center mb-4 ${
                          i18n.language === "ar"
                            ? "font-arsian text-8xl"
                            : "font-montserrat font-semibold text-5xl"
                        }`}
                      >
                        {card.name[i18n.language]}
                      </p>
                      <p
                        className={`text-white text-center ${
                          i18n.language === "ar"
                            ? "font-arsian text-6xl"
                            : "font-montserrat font-medium text-3xl"
                        }`}
                      >
                        {card.title[i18n.language]}
                      </p>
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
              .team-section:hover .slide-continuous {
                animation-play-state: paused;
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
