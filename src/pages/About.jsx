import HeroSection from "../components/About/HeroSection";
import MessageSection from "../components/About/Message";
import TeamSection from "../components/About/TeamSection";

function About() {
  return (
    <div className="w-full relative flex flex-col overflow-hidden">
      <div className="flex-1">
        <HeroSection />
      </div>
      <div className="flex-1 -mt-[120px] md:-mt-[120px] z-10 relative">
        <MessageSection />
      </div>
      <div className="flex-1 -mt-[60px] md:-mt-[120px] relative">
        <TeamSection />
      </div>
    </div>
  );
}

export default About;
