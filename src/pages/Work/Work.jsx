import HeroSection from "../../components/HeroSection";
import DescSection from "./components/DescSection";
import ArtWorkSection from "./components/ArtWorkSection";

function Work() {
  const banners = [
    // "public-transportation",
    "ai-production",
    "tv-ads",
    "strategy-plans",
    // "media-production",
    // "creative-designs",
  ];

  return (
    <div className="w-full relative flex flex-col overflow-hidden">
      <div className="flex-1 z-10">
        <HeroSection banners={banners} />
      </div>
      <div className="flex-1 -mt-[120px] md:-mt-[80px]">
        <ArtWorkSection />
      </div>
      <div className="flex-1 -mt-[120px] relative">
        <DescSection />
      </div>
    </div>
  );
}

export default Work;
