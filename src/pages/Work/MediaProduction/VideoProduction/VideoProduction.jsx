import HeroSection from "../../../../components/HeroSection";
import DescSection from "../../shared/DescSection";
import VideosGrid from "../../shared/VideosGrid";
import { useTranslation } from "react-i18next";

function VideoProduction() {
  const banners = ["video-production"];
  const { t } = useTranslation();

  const videos = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/MoJ3tSCTt_k",
      title: "Video 1",
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/8lVLqSrhVGw",
      title: "Video 2",
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/REAo1-7SGpM",
      title: "Video 3",
    },
    {
      id: 4,
      url: "https://www.youtube.com/embed/CyXHt76PTMk",
      title: "Video 4",
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
          title={t("work.media-production.video-production.header.title")}
          subtitle={t("work.media-production.video-production.header.desc")}
        />
      </div>
      <div className="flex-1 -mt-[120px] relative">
        <DescSection
          desc={t("work.media-production.video-production.desc.desc")}
          descYellow={t(
            "work.media-production.video-production.desc.desc-yellow"
          )}
        />
      </div>
    </div>
  );
}

export default VideoProduction;
