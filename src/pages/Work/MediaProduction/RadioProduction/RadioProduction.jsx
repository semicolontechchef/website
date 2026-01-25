import HeroSection from "../../../../components/HeroSection";
import DescSection from "../../shared/DescSection";
import VideosGrid from "../../shared/VideosGrid";
import { useTranslation } from "react-i18next";

function RadioProduction() {
  const banners = ["radio-production"];
  const { t } = useTranslation();

  const videos = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/rl7UeuJyetw",
      title: "Radio Production",
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/BoCYyPSEvEQ",
      title: "Radio Production",
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/ZPzwJEDdw-I",
      title: "Radio Production",
    },
    {
      id: 4,
      url: "https://www.youtube.com/embed/H1VTlIJJcBk",
      title: "Radio Production",
    },
  ];

  return (
    <div className="w-full relative flex flex-col overflow-hidden">
      <div className="flex-1 z-10">
        <HeroSection banners={banners} />
      </div>
      <div className="flex-1 -mt-[120px] md:-mt-[80px]">
        <VideosGrid
          videos={videos}
          title={t("work.media-production.radio-production.header.title")}
          subtitle={t("work.media-production.radio-production.header.desc")}
        />
      </div>
      <div className="flex-1 -mt-[120px] relative">
        <DescSection
          desc={t("work.media-production.radio-production.desc.desc")}
          descYellow={t(
            "work.media-production.radio-production.desc.desc-yellow"
          )}
        />
      </div>
    </div>
  );
}

export default RadioProduction;
