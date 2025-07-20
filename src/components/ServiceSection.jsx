import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    FaPlane,
    FaPassport,
    FaGlobeAsia,
    FaHotel,
    FaShieldAlt,
    FaCarSide,
    FaGlobe,
    FaUsers,
    FaFileAlt,
    FaKaaba,
    FaUmbrellaBeach,
    FaUserFriends,
    FaHeart,
    FaCar,
    FaClipboardList,
    FaStar,
    FaBriefcase,
    FaTicketAlt,
    FaFileSignature,
    FaGraduationCap,
} from "react-icons/fa";

import { cn } from "../lib/utils";

import airlinetickets from "../assets/services/AirlineTickets2.jpg";
import touristvisas from "../assets/services/TouristVisas2.jpg";
import uaebahrainomanvisas from "../assets/services/UAEOman&BahrainVisas2.jpg";
import hotelbooking from "../assets/services/HotelBooking2.jpg";
import travelinsurance from "../assets/services/TravelInsurance2.jpg";
import airporttransfers from "../assets/services/AirportTransfers2.jpg";
import worldwidevisaservice from "../assets/services/WorldwideVisaService2.jpg";
import familyvisaservices from "../assets/services/FamilyVisaServices2.jpg";
import allimmigrationworks from "../assets/services/AllImmigrationWorks2.jpg";
import schengenvisa from "../assets/services/SchengenVisa2.jpg";
import hajjnumrahvisa from "../assets/services/Hajj&UmrahVisa2.jpg";
import holidaypackages from "../assets/services/HolidayPackages2.jpg";
import grouptours from "../assets/services/GroupTours2.jpg";
import honeymoonpackages from "../assets/services/HoneymoonPackages2.jpg";
import carrentals from "../assets/services/CarRentals2.jpg";
import travelconsultation from "../assets/services/TravelConsultation2.jpg";
import vipluxurytravel from "../assets/services/VIP&LuxuryTravel2.jpg";
import corporatetravelsolutions from "../assets/services/CorporateTravelSolutions2.jpg";
import eventfestivalpackages from "../assets/services/Event&FestivalPackage2.jpg";
import documentattestation from "../assets/services/DocumentAttestation2.jpg";
import workstudyvisas from "../assets/services/Work&StudyVisas2.jpg";

const ServiceSection = () => {
    const features = [
        {
            icon: <FaPlane className="text-3xl" />,
            title: "Airline Tickets",
            subtitle: "Best routes & fares",
            description: "Fly where you want, when you want. We find the best flight deals and handle all the details.",
            features: ["Best routes", "Flexible booking", "All major airlines"],
            color: "blue",
            image: airlinetickets,
            slug: "contact",

        },
        {
            icon: <FaPassport className="text-3xl" />,
            title: "Tourist Visas",
            subtitle: "Fast approvals & help",
            description: "Get your tourist visa done right, the first time. Smooth paperwork, clear guidance, no stress.",
            features: ["Fast processing", "Expert help", "Wide country coverage"],
            color: "green",
            image: touristvisas,
            slug: "contact",
        },
        {
            icon: <FaGlobeAsia className="text-3xl" />,
            title: "UAE, Oman & Bahrain Visas",
            subtitle: "Easy Gulf travel visas",
            description: "Planning a Gulf trip? We handle UAE, Oman, and Bahrain visas with speed and care.",
            features: ["Hassle-free approvals", "Updated requirements", "Local expertise"],
            color: "orange",
            image: uaebahrainomanvisas,
            slug: "contact",
        },
        {
            icon: <FaHotel className="text-3xl" />,
            title: "Hotel Booking",
            subtitle: "Comfortable trusted stays",
            description: "Stay in trusted hotels that fit your budget and style — no hidden charges, just comfort.",
            features: ["Handpicked stays", "Great locations", "Best price guarantee"],
            color: "purple",
            image: hotelbooking,
            slug: "contact",
        },
        {
            icon: <FaShieldAlt className="text-3xl" />,
            title: "Travel Insurance",
            subtitle: "Peace of mind, anywhere",
            description: "Travel with peace of mind. We cover you with plans that protect you and your plans.",
            features: ["Emergency coverage", "Medical protection", "Easy claims"],
            color: "red",
            image: travelinsurance,
            slug: "contact",
        },
        {
            icon: <FaCarSide className="text-3xl" />,
            title: "Airport Transfers",
            subtitle: "Arrive & depart stress-free",
            description: "No more last-minute taxi stress. Pre-booked rides that get you to your hotel safely and on time.",
            features: ["Reliable drivers", "Clean vehicles", "24/7 availability"],
            color: "yellow",
            image: airporttransfers,
            slug: "contact",
        },
        {
            icon: <FaGlobe className="text-3xl" />,
            title: "Worldwide Visa Service",
            subtitle: "Visas for every destination",
            description: "Wherever you want to go, we handle the paperwork. From Asia to Europe and beyond.",
            features: ["Tourist & business visas", "Application help", "Global destinations"],
            color: "teal",
            image: worldwidevisaservice,
            slug: "contact",
        },
        {
            icon: <FaUsers className="text-3xl" />,
            title: "Family Visa Services",
            subtitle: "Keep loved ones close",
            description: "Smooth family visa processing for reunions, relocation, or long visits.",
            features: ["Clear steps", "Trusted advice", "Full support"],
            color: "pink",
            image: familyvisaservices,
            slug: "contact",
        },
        {
            icon: <FaFileAlt className="text-3xl" />,
            title: "All Immigration Works",
            subtitle: "Complete immigration help",
            description: "One-stop solution for immigration needs—updates, renewals, applications, and official paperwork.",
            features: ["Residency services", "Renewals & extensions", "Document clearances"],
            color: "indigo",
            image: allimmigrationworks,
            slug: "contact",
        },
        {
            icon: <FaGlobe className="text-3xl" />,
            title: "Schengen Visa",
            subtitle: "Easy Europe travel",
            description: "Dreaming of Europe? We handle your Schengen visa so you can focus on planning your adventure.",
            features: ["Paperwork help", "Embassy updates", "Smooth approvals"],
            color: "cyan",
            image: schengenvisa,
            slug: "schengen-visa",
        },
        {
            icon: <FaKaaba className="text-3xl" />,
            title: "Hajj & Umrah Visa",
            subtitle: "Your sacred journey",
            description: "Plan your sacred journey with confidence. We manage all visa and travel arrangements for Hajj & Umrah.",
            features: ["Authentic guidance", "Approved agents", "Full support"],
            color: "amber",
            image: hajjnumrahvisa,
            slug: "contact",
        },
        {
            icon: <FaUmbrellaBeach className="text-3xl" />,
            title: "Holiday Packages",
            subtitle: "All-in-one dream trips",
            description: "All-in-one trips for any style — adventure, family, luxury, or budget. Just pack & go.",
            features: ["Custom itineraries", "Flights & hotels", "Local activities"],
            color: "lime",
            image: holidaypackages,
            slug: "contact",
        },
        {
            icon: <FaUserFriends className="text-3xl" />,
            title: "Group Tours",
            subtitle: "Travel & save together",
            description: "Perfect for schools, corporates, or friends. Travel together and enjoy exclusive group rates.",
            features: ["Tailored group rates", "Expert leaders", "Sightseeing & activities"],
            color: "emerald",
            image: grouptours,
            slug: "contact",
        },
        {
            icon: <FaHeart className="text-3xl" />,
            title: "Honeymoon Packages",
            subtitle: "Romantic escapes",
            description: "Start your forever with the perfect getaway — romantic stays, stunning destinations, unforgettable memories.",
            features: ["Private stays", "Romantic activities", "Fully customized"],
            color: "rose",
            image: honeymoonpackages,
            slug: "contact",
        },
        {
            icon: <FaCar className="text-3xl" />,
            title: "Car Rentals",
            subtitle: "Freedom on the road",
            description: "Reliable cars for daily hire, road trips, or city exploration. Drive your way.",
            features: ["Economy to luxury", "Self-drive or chauffeur", "Flexible plans"],
            color: "fuchsia",
            image: carrentals,
            slug: "contact",
        },
        {
            icon: <FaClipboardList className="text-3xl" />,
            title: "Travel Consultation",
            subtitle: "Plan smarter, travel better",
            description: "Not sure where to go or how to plan it? We help you design the perfect trip.",
            features: ["Expert advice", "Best time & budget tips", "Local insights"],
            color: "violet",
            image: travelconsultation,
            slug: "contact",
        },
        {
            icon: <FaStar className="text-3xl" />,
            title: "VIP & Luxury Travel",
            subtitle: "Exclusive experiences",
            description: "Private jets, five-star stays, custom experiences. For travelers who want the best of the best.",
            features: ["Premium bookings", "Personal concierge", "Custom luxury tours"],
            color: "yellow",
            image: vipluxurytravel,
            slug: "contact",
        },
        {
            icon: <FaBriefcase className="text-3xl" />,
            title: "Corporate Travel Solutions",
            subtitle: "Business trips made easy",
            description: "Flights, hotels, and visa services for busy professionals. Travel, sorted.",
            features: ["Corporate rates", "Dedicated manager", "Flexible changes"],
            color: "indigo",
            image: corporatetravelsolutions,
            slug: "contact",
        },
        {
            icon: <FaTicketAlt className="text-3xl" />,
            title: "Event & Festival Packages",
            subtitle: "Attend global events",
            description: "Concerts, sports, cultural events — complete travel arrangements, tickets, and local experiences.",
            features: ["Concerts & sports trips", "Cultural events", "Hassle-free bookings"],
            color: "cyan",
            image: eventfestivalpackages,
            slug: "contact",
        },
        {
            icon: <FaFileSignature className="text-3xl" />,
            title: "Document Attestation",
            subtitle: "Fast & secure processing",
            description: "We handle certificate attestation for overseas work, education, or immigration.",
            features: ["Embassy attestation", "Quick turnaround", "Secure handling"],
            color: "gray",
            image: documentattestation,
            slug: "contact",
        },
        {
            icon: <FaGraduationCap className="text-3xl" />,
            title: "Work & Study Visas",
            subtitle: "Plan your future abroad",
            description: "We guide you through student and employment visa processes with confidence.",
            features: ["Country-specific advice", "Paperwork checks", "Reliable processing"],
            color: "emerald",
            image: workstudyvisas,
            slug: "about",
        },
    ];

    return (
        <section className="py-16 px-4 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"></div>
            <div className="absolute bottom-10 -left-20 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {features.map((feature, index) => (
                        <FeatureFlipCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            subtitle={feature.subtitle}
                            description={feature.description}
                            features={feature.features}
                            color={feature.color}
                            background={feature.image}
                            slug={feature.slug}
                        />
                    ))}
                </div>
            </div>

            {/* Custom scrollbar styles */}
            <style jsx>{`
        .feature-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .feature-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .feature-scrollbar::-webkit-scrollbar-thumb {
          background: #c5c5c5;
          border-radius: 4px;
        }
        .feature-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `}</style>
        </section>
    );
};

const FeatureFlipCard = ({
    icon,
    title = "Travel Solution",
    subtitle = "Explore the benefits",
    description = "Experience premium travel management services.",
    features = [
        "Fast booking",
        "Global options",
        "Enterprise tools",
        "Best prices",
    ],
    color = "blue",
    background = "bg-gradient-to-br from-blue-500 to-blue-700",
    slug, 
}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const colorMap = {
        blue: {
            gradient: "from-blue-500/20 to-blue-500/10",
            text: "text-blue-600",
            icon: "text-blue-500",
        },
        emerald: {
            gradient: "from-emerald-500/20 to-emerald-500/10",
            text: "text-emerald-600",
            icon: "text-emerald-500",
        },
        amber: {
            gradient: "from-amber-500/20 to-amber-500/10",
            text: "text-amber-600",
            icon: "text-amber-500",
        },
        rose: {
            gradient: "from-rose-500/20 to-rose-500/10",
            text: "text-rose-600",
            icon: "text-rose-500",
        },
        violet: {
            gradient: "from-violet-500/20 to-violet-500/10",
            text: "text-violet-600",
            icon: "text-violet-500",
        },
    };

    const colors = colorMap[color] || colorMap.blue;

    return (
        <div
            className="relative w-full aspect-[3/4] group [perspective:2000px]"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div
                className={cn(
                    "relative w-full h-full",
                    "[transform-style:preserve-3d]",
                    "transition-all duration-700",
                    isFlipped
                        ? "[transform:rotateY(180deg)]"
                        : "[transform:rotateY(0deg)]"
                )}
            >
                {/* Front of card with background image */}
                <div
                    className={cn(
                        "absolute inset-0 w-full h-full",
                        "[backface-visibility:hidden] [transform:rotateY(0deg)]",
                        "overflow-hidden rounded-2xl",
                        "bg-cover bg-center",
                        "border border-slate-200/30",
                        "shadow-lg",
                        "transition-all duration-700",
                        "group-hover:shadow-xl",
                        isFlipped ? "opacity-0" : "opacity-100"
                    )}
                    style={{
                        backgroundImage: `url(${background})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >

                    <div className="relative h-full overflow-hidden p-6 flex flex-col bg-black/10">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div
                                className={`w-16 h-16 rounded-full ${colors.icon} flex items-center justify-center bg-white/50`}
                            >
                                {React.cloneElement(icon, { className: "text-3xl" })}
                            </div>
                        </div>

                        {/* Title and subtitle at bottom */}
                        <div className="mt-auto text-center">
                            <h3 className="text-xl font-bold text-white leading-tight">
                                {title}
                            </h3>
                            <p className="text-white/90 mt-2 text-sm">{subtitle}</p>
                        </div>
                    </div>
                </div>

                {/* Back of card - adjusted layout */}
                <div
                    className={cn(
                        "absolute inset-0 w-full h-full",
                        "[backface-visibility:hidden] [transform:rotateY(180deg)]",
                        "p-4 rounded-2xl",
                        "bg-gradient-to-b from-slate-50 to-white",
                        "border border-slate-200",
                        "shadow-lg",
                        "flex flex-col",
                        "transition-all duration-700",
                        "group-hover:shadow-xl",
                        !isFlipped ? "opacity-0" : "opacity-100"
                    )}
                >
                    <div className="flex-1 overflow-hidden flex flex-col">
                        <div className="mb-3">
                            <h3 className="text-base font-bold text-slate-900 text-center leading-tight">
                                {title}
                            </h3>
                            <p className="text-xs text-slate-600 text-center mt-1">
                                {description}
                            </p>
                        </div>

                        {/* Feature list with scroll */}
                        <div className="flex-1 min-h-0 overflow-y-auto feature-scrollbar pr-1">
                            <div className="space-y-2">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-2 text-xs text-slate-700 transition-all duration-500"
                                        style={{
                                            transform: isFlipped
                                                ? "translateX(0)"
                                                : "translateX(-10px)",
                                            opacity: isFlipped ? 1 : 0,
                                            transitionDelay: `${index * 100 + 200}ms`,
                                        }}
                                    >
                                        <div
                                            className={`min-w-[16px] h-4 rounded-full ${colors.icon} flex items-center justify-center mt-0.5`}
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                                        </div>
                                        <span className="leading-tight">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="pt-2 mt-auto">
                        <Link
                            to={`/${slug}`}
                            className={cn(
                                "group/start relative",
                                "flex items-center justify-between",
                                "p-3 -m-3 rounded-xl",
                                "transition-all duration-300",
                                "bg-gradient-to-r from-slate-100 to-slate-50",
                                "hover:from-blue-500/10 hover:via-blue-500/5 hover:to-transparent",
                                "hover:scale-[1.02] hover:cursor-pointer"
                            )}
                            type="button"
                        >
                            <span
                                className={`text-xs font-medium ${colors.text} transition-colors duration-300 group-hover/start:text-blue-600`}
                            >
                                Learn more
                            </span>
                            <div className="relative group/icon">
                                <div
                                    className={cn(
                                        "absolute inset-[-6px] rounded-lg transition-all duration-300",
                                        `bg-gradient-to-br ${colors.gradient}`,
                                        "opacity-0 group-hover/start:opacity-100 scale-90 group-hover/start:scale-100"
                                    )}
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`relative z-10 w-3.5 h-3.5 ${colors.icon} transition-all duration-300 group-hover/start:translate-x-0.5 group-hover/start:scale-110`}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
