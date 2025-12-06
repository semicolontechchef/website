import HeroSection from "../components/Home/HeroSection";
import WhoIsSection from "../components/Home/WhoIsSection";
import StatisticsSection from "../components/Home/StatisticsSection";
import OurPartnersSection from "../components/Home/OurPartners";

function Home() {
  return (
    <div className="w-full relative flex flex-col overflow-hidden">
      <div className="flex-1">
        <HeroSection />
      </div>
      <div className="flex-1 -mt-[120px] md:-mt-[120px] z-10">
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
