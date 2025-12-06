import { useState, useEffect } from "react";

function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesPerView, setImagesPerView] = useState(1);
  const totalImages = 12;

  // Generate array of team image paths
  const teamImages = Array.from(
    { length: totalImages },
    (_, i) => `${import.meta.env.BASE_URL}img/about/team/team-${i + 1}.png`
  );

  // Handle responsive images per view
  useEffect(() => {
    const handleResize = () => {
      setImagesPerView(window.innerWidth >= 768 ? 3 : 1);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset index when imagesPerView changes to prevent out-of-bounds
  useEffect(() => {
    const maxIndex = totalImages - imagesPerView;
    if (currentIndex > maxIndex) {
      setCurrentIndex(0);
    }
  }, [imagesPerView, currentIndex, totalImages]);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Calculate the maximum starting index to show imagesPerView images
        const maxIndex = totalImages - imagesPerView;
        // If we've reached the end, loop back to start
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [totalImages, imagesPerView]);

  return (
    <section className="relative w-full z-20 overflow-hidden pb-20" dir="ltr">
      <img
        src={`${import.meta.env.BASE_URL}img/layout/white-bg-top.svg`}
        alt="white-bg"
        className="w-full h-full object-contain"
      />
      <div className="bg-white px-8">
        <div className="container mx-auto pb-12 sm:pb-20 md:pb-28 lg:pb-36 max-w-6xl relative z-10">
          <div className="relative overflow-hidden">
            {/* Slider container */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / imagesPerView)
                }%)`,
              }}
            >
              {teamImages.map((imageSrc, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-1/3 px-3"
                  style={{ minWidth: `${100 / imagesPerView}%` }}
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={imageSrc}
                      alt={`Team member ${index + 1}`}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
