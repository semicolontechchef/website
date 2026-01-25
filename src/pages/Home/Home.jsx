import HeroSection from "../../components/HeroSection";
import WhoIsSection from "./components/WhoIsSection";
import StatisticsSection from "./components/StatisticsSection";
import OurPartnersSection from "./components/OurPartners";

function Home() {
  const banners = [
    "home-hero",
    // "media-production",
    // "creative-designs"
  ];

  return (
    <div className="w-full relative flex flex-col overflow-hidden">
      <div className="flex-1 z-10">
        <HeroSection banners={banners} />
      </div>
      <div className="flex-1 -mt-[120px] md:-mt-[80px]">
        <WhoIsSection />
      </div>
      <div className="flex-1 -mt-[60px] md:-mt-[120px] relative">
        <StatisticsSection />
      </div>
      <div className="flex-1 pb-16 md:pb-36 relative">
        <OurPartnersSection />
      </div>
    </div>
  );
}

export default Home;
