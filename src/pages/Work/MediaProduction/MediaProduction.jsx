import HeroSection from "../../../components/HeroSection";
import DescSection from "./components/DescSection";
import MediaTypes from "./components/MediaTypes";

function MediaProduction() {
  const banners = [
    // "media-production",
    "video-production",
    "ai-production",
    "radio-production",
  ];

  return (
    <div className="w-full relative flex flex-col overflow-hidden">
      <div className="flex-1 z-10">
        <HeroSection banners={banners} />
      </div>
      <div className="flex-1 -mt-[120px] md:-mt-[80px]">
        <MediaTypes />
      </div>
      <div className="flex-1 -mt-[120px] relative">
        <DescSection />
      </div>
    </div>
  );
}

export default MediaProduction;
