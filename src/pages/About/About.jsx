import HeroSection from "../../components/HeroSection";
import WhoSection from "./components/Who";
import MessageSection from "./components/Message";
import TeamSection from "./components/TeamSection";

function About() {
  return (
    <div className="w-full relative flex flex-col overflow-hidden">
      <div className="flex-1">
        <HeroSection banners={["our-creative-team"]} />
      </div>
      <div className="flex-1 -mt-[120px] md:-mt-[80px]">
        <WhoSection />
      </div>
      <div className="flex-1 -mt-[120px] md:-mt-[120px] z-10 relative">
        <MessageSection />
      </div>
      <div className="flex-1 mb-20">
        <TeamSection />
      </div>
    </div>
  );
}

export default About;
