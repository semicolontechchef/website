import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef, useCallback } from "react";
import { getAssetPath } from "../../../utils/paths";

function useCountUp(end, durationMs, enabled) {
  const [value, setValue] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setValue(end);
      return;
    }

    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(eased * end));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setValue(end);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [end, durationMs, enabled]);

  return value;
}

function StatisticsSection() {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const hasTriggered = useRef(false);

  const onIntersect = useCallback((entries) => {
    const [entry] = entries;
    if (!entry?.isIntersecting || hasTriggered.current) return;
    hasTriggered.current = true;
    setShouldAnimate(true);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(onIntersect, {
      threshold: 0.25,
      rootMargin: "0px 0px -10% 0px",
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [onIntersect]);

  const years = useCountUp(5, 1400, shouldAnimate);
  const professionals = useCountUp(40, 1600, shouldAnimate);
  const projects = useCountUp(800, 2200, shouldAnimate);

  return (
    <section ref={sectionRef} className="relative w-full z-20 overflow-hidden">
      <img
        src={getAssetPath("img/layout/black-bg-top.svg")}
        alt="black-bg"
        className="w-full h-full object-cover -mb-1"
      />
      <div className="bg-black px-8" dir="ltr">
        <div className="container mx-auto py-12 sm:py-20 md:py-28 lg:py-36 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div
              className="text-center md:text-left"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="font-montserrat font-bold text-white text-4xl sm:text-5xl md:text-7xl lg:text-9xl tabular-nums">
                  {String(years).padStart(2, "0")}
                </span>
                <span className="text-[#FFF100] font-bold text-3xl sm:text-4xl md:text-6xl lg:text-9xl">
                  +
                </span>
              </div>
              <p
                className={`text-white font-bold text-sm sm:text-base md:text-2xl lg:text-4xl uppercase ${
                  i18n.language === "ar" ? "font-bukra" : "font-montserrat"
                }`}
              >
                {t("home.stats.years")}
              </p>
            </div>
            <div
              className="text-center md:text-left"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="font-montserrat font-bold text-white text-4xl sm:text-5xl md:text-7xl lg:text-9xl tabular-nums">
                  {professionals}
                </span>
                <span className="text-[#FFF100] font-montserrat font-bold text-3xl sm:text-4xl md:text-6xl lg:text-9xl">
                  +
                </span>
              </div>
              <p
                className={`text-white font-bold text-sm sm:text-base md:text-2xl lg:text-4xl uppercase ${
                  i18n.language === "ar" ? "font-bukra" : "font-montserrat"
                }`}
              >
                {t("home.stats.professionals")}
              </p>
            </div>
            <div
              className="text-center md:text-left"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="font-montserrat font-bold text-white text-4xl sm:text-5xl md:text-7xl lg:text-9xl tabular-nums">
                  {projects}
                </span>
                <span className="text-[#FFF100] font-montserrat font-bold text-3xl sm:text-4xl md:text-6xl lg:text-9xl">
                  +
                </span>
              </div>
              <p
                className={`text-white font-bold text-sm sm:text-base md:text-2xl lg:text-4xl uppercase ${
                  i18n.language === "ar" ? "font-bukra" : "font-montserrat"
                }`}
              >
                {t("home.stats.projects")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src={getAssetPath("img/layout/black-bg-bottom.svg")}
        alt="black-bg"
        className="w-full h-full object-cover -mt-1"
      />
    </section>
  );
}

export default StatisticsSection;
