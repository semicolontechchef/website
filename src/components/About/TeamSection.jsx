function TeamSection() {
  const totalImages = 12;

  // Generate array of team image paths
  const teamImages = Array.from(
    { length: totalImages },
    (_, i) => `${import.meta.env.BASE_URL}img/about/team/team-${i + 1}.png`
  );

  // Duplicate images for seamless infinite loop
  const duplicatedImages = [...teamImages, ...teamImages];

  return (
    <section className="relative w-full z-20 overflow-hidden" dir="ltr">
      <img
        src={`${import.meta.env.BASE_URL}img/layout/white-bg-top.svg`}
        alt="white-bg"
        className="w-full h-full object-contain"
      />
      <div className="bg-white px-8">
        <div className="container mx-auto pb-[15rem] md:pb-[25rem] lg:pb-40 max-w-6xl relative z-10">
          <div className="relative overflow-hidden">
            {/* Slider container */}
            <div className="flex slide-continuous">
              {duplicatedImages.map((imageSrc, index) => (
                <div key={index} className="flex-shrink-0 w-full md:w-1/3 px-3">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={imageSrc}
                      alt={`Team member ${(index % totalImages) + 1}`}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
            <style>{`
              .slide-continuous {
                animation: slide 5s linear infinite;
              }
              @keyframes slide {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
