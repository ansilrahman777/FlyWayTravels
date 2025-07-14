import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaPlaneUp } from "react-icons/fa6";

const slides = [
  {
    title: "Disney land \nParis",
    image: "https://i.ibb.co/TvD7fnk/disney-slide.jpg",
  },
  {
    title: "Caribbean\nCruise",
    image: "https://picsum.photos/id/1018/700/350",
  },
  {
    title: "Firework\nFestival",
    image: "https://picsum.photos/id/1015/700/350",
  },
];

const HeroSection04 = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full max-w-7xl mx-auto rounded-lg relative overflow-visible">
      <p className="text-white text-lg italic text-center max-w-3xl mx-auto mb-10 leading-relaxed">
        Let us transport you to the fairytale worlds of your favourite Disney
        stories
        <br />
        and immerse yourself in the magic of Disneyland.
      </p>

      <div className="overflow-visible relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex ml-[10%] md:ml-[15%]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`relative flex-[0_0_80%] md:flex-[0_0_70%] mr-10 md:mr-20 transition-opacity duration-500 ${
                  selectedIndex === index ? "opacity-100" : "opacity-30"
                } overflow-visible`}
              >
                <div className="relative w-4/5 h-[250px] rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="absolute top-1/2 -left-5 md:-left-20 transform -translate-y-1/2 z-50">
                  <h2 className="font-emilys text-white text-2xl md:text-5xl font-semibold whitespace-pre-line drop-shadow-2xl leading-tight">
                    {slide.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          <button
            onClick={scrollPrev}
            className="text-white backdrop-blur px-4 py-3 rounded-full transition-transform duration-300 hover:scale-110"
          >
            <FaPlaneUp className="-rotate-90 text-xl" />
          </button>
          <button
            onClick={scrollNext}
            className="text-white backdrop-blur px-4 py-3 rounded-full transition-transform duration-300 hover:scale-110"
          >
            <FaPlaneUp className="rotate-90 text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection04;
