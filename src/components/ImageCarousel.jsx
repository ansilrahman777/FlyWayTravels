import { useState } from 'react';

const slides = [
  {
    imgSrc: 'https://penguinui.s3.amazonaws.com/component-assets/carousel/aspect-slide-1.webp',
    imgAlt: 'New collection - ride the wave of excitement.',
  },
  {
    imgSrc: 'https://penguinui.s3.amazonaws.com/component-assets/carousel/aspect-slide-2.webp',
    imgAlt: 'Up to 30% discount, gear up for adventure.',
  },
  {
    imgSrc: 'https://penguinui.s3.amazonaws.com/component-assets/carousel/aspect-slide-3.webp',
    imgAlt: '30% off all surfing essentials, ride like a pro.',
  },
];

const ImageCarousel = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const previous = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative w-full py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
          Explore the Wave
        </h2>

        <div className="relative w-full overflow-hidden">
          {/* Previous Button */}
          <button
            type="button"
            className="absolute left-5 top-1/2 z-20 flex rounded-full -translate-y-1/2 items-center justify-center bg-white/40 p-2 text-neutral-600 transition hover:bg-white/60 focus-visible:outline-2 dark:bg-neutral-950/40 dark:text-neutral-300 dark:hover:bg-neutral-950/60"
            aria-label="previous slide"
            onClick={previous}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeWidth="3"
              className="size-5 md:size-6 pr-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Next Button */}
          <button
            type="button"
            className="absolute right-5 top-1/2 z-20 flex rounded-full -translate-y-1/2 items-center justify-center bg-white/40 p-2 text-neutral-600 transition hover:bg-white/60 focus-visible:outline-2 dark:bg-neutral-950/40 dark:text-neutral-300 dark:hover:bg-neutral-950/60"
            aria-label="next slide"
            onClick={next}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeWidth="3"
              className="size-5 md:size-6 pl-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          {/* Slides */}
          <div className="relative aspect-[3/1] w-full rounded-lg overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${currentSlideIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <img
                  className="absolute w-full h-full object-cover"
                  src={slide.imgSrc}
                  alt={slide.imgAlt}
                />
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="absolute rounded-sm bottom-3 md:bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-3 bg-white/75 px-2 py-1 dark:bg-neutral-950/75" role="group" aria-label="slides">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`size-2 rounded-full transition ${
                  currentSlideIndex === index
                    ? 'bg-neutral-600 dark:bg-neutral-300'
                    : 'bg-neutral-600/50 dark:bg-neutral-300/50'
                }`}
                onClick={() => setCurrentSlideIndex(index)}
                aria-label={`slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageCarousel;