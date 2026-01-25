import HeroSection from "../../../../components/HeroSection";
import DescSection from "../../shared/DescSection";
import VideosGrid from "../../shared/VideosGrid";
import { useTranslation } from "react-i18next";

function AiProduction() {
  const banners = ["ai-production"];
  const { t } = useTranslation();

  const videos = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/PlOve2QGquU",
      title: "Video 1",
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/AQ54bpHMGZU",
      title: "Video 2",
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/wvepsJt-oVA",
      title: "Video 3",
    },
    {
      id: 4,
      url: "https://www.youtube.com/embed/f59gO0weSsE",
      title: "Video 4",
    },
    {
      id: 5,
      url: "https://www.youtube.com/embed/ZCNikq2mFgQ",
      title: "Video 5",
    },
    {
      id: 6,
      url: "https://www.youtube.com/embed/SYp4bvlRWZQ",
      title: "Video 6",
    },
    {
      id: 7,
      url: "https://www.youtube.com/embed/WzOdzXKK2Sw",
      title: "Video 7",
    },
    {
      id: 8,
      url: "https://www.youtube.com/embed/WusBKMlYiaA",
      title: "Video 8",
    },
    {
      id: 9,
      url: "https://www.youtube.com/embed/Ldcei99hx_I",
      title: "Video 9",
    },
    {
      id: 10,
      url: "https://www.youtube.com/embed/U3kjo7NcCkc",
      title: "Video 10",
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
          title={t("work.media-production.ai-production.header.title")}
          subtitle={t("work.media-production.ai-production.header.desc")}
        />
      </div>
      <div className="flex-1 -mt-[120px] relative">
        <DescSection
          desc={t("work.media-production.ai-production.desc.desc")}
          descYellow={t("work.media-production.ai-production.desc.desc-yellow")}
        />
      </div>
    </div>
  );
}

export default AiProduction;
