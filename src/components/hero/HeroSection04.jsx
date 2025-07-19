import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaPlaneUp } from "react-icons/fa6";

import DubaiCityTour from "../../assets/carousel/DubaiCityTour.jpg";
import AbuDhabiDesertSafari from "../../assets/carousel/AbuDhabiDesertSafari.jpg";
import DubaiMarinaYachtRide from "../../assets/carousel/DubaiMarinaYachtRide.jpg";
import IstanbulBosphorusCruise from "../../assets/carousel/IstanbulBosphorusCruise.jpg";
import VeniceGondolaRide from "../../assets/carousel/VeniceGondolaRide.jpg";
import LondonCitySightseeing from "../../assets/carousel/LondonCitySightseeing.jpg";
import IndiaTajMahalVisit from "../../assets/carousel/IndiaTajMahalVisit.jpg";
import KazakhstanSnowAdventure from "../../assets/carousel/KazakhstanSnowAdventure.jpg";
import MoroccoHotAirBalloon from "../../assets/carousel/MoroccoHotAirBalloon.jpg";
import SwitzerlandParagliding from "../../assets/carousel/SwitzerlandParagliding.jpg";
import GeorgiaGudauriSkiTrip from "../../assets/carousel/GeorgiaGudauriSkiTrip.jpg";
import KyrgyzstanNomadVillageTour from "../../assets/carousel/KyrgyzstanNomadVillageTour.jpg";
import AzerbaijanBakuOldCity from "../../assets/carousel/AzerbaijanBakuOldCity.jpg";
import SaudiArabiaHajjUmrahPackage from "../../assets/carousel/SaudiArabiaHajj&UmrahPackage.jpg";
import FranceEiffelTowerVisit from "../../assets/carousel/FranceEiffelTowerVisit.jpg";

const slides = [
  {
    title: "Dubai\nCity Tour",
    image: DubaiCityTour,
  },
  {
    title: "Abu Dhabi\nDesert Safari",
    image: AbuDhabiDesertSafari,
  },
  {
    title: "Dubai\nMarina Yacht Ride",
    image: DubaiMarinaYachtRide,
  },
  {
    title: "Istanbul\nBosphorus Cruise",
    image: IstanbulBosphorusCruise,
  },
  {
    title: "Venice\nGondola Ride",
    image: VeniceGondolaRide,
  },
  {
    title: "London\nCity Sightseeing",
    image: LondonCitySightseeing,
  },
  {
    title: "India\nTaj Mahal Visit",
    image: IndiaTajMahalVisit,
  },
  {
    title: "Kazakhstan\nSnow Adventure",
    image: KazakhstanSnowAdventure,
  },
  {
    title: "Morocco\nHot Air Balloon",
    image: MoroccoHotAirBalloon,
  },
  {
    title: "Switzerland\nParagliding",
    image: SwitzerlandParagliding,
  },
  {
    title: "Georgia\nGudauri Ski Trip",
    image: GeorgiaGudauriSkiTrip,
  },
  {
    title: "Kyrgyzstan\nNomad Village Tour",
    image: KyrgyzstanNomadVillageTour,
  },
  {
    title: "Azerbaijan\nBaku Old City",
    image: AzerbaijanBakuOldCity,
  },
  {
    title: "Saudi Arabia\nHajj & Umrah Package",
    image: SaudiArabiaHajjUmrahPackage,
  },
  {
    title: "France\nEiffel Tower Visit",
    image: FranceEiffelTowerVisit,
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
    <div className="w-full py-8 md:py-14 lg:py-28 mx-auto rounded-lg relative overflow-visible">
      <p className="text-white font-emilys text-xl italic text-center max-w-3xl mx-auto mb-20 leading-relaxed">
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
                <div className="relative w-4/5 h-[350px] rounded-xl overflow-hidden shadow-2xl">
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
