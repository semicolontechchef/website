import HeroSection from "../../components/HeroSection";
import InfoSection from "./components/Info";
import WhyUsSection from "./components/WhyUs";

function Contact() {
  return (
    <div className="w-full relative flex flex-col overflow-hidden">
      <div className="flex-1">
        <HeroSection banners={["contact-us"]} />
      </div>
      <div className="flex-1 -mt-[120px] md:-mt-[120px] z-10 relative">
        <InfoSection />
      </div>
      <div className="flex-1 -mt-[60px] md:-mt-[120px] z-20 relative">
        <WhyUsSection />
      </div>
    </div>
  );
}

export default Contact;
