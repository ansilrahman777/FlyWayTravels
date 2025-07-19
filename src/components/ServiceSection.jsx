// src/components/WhyChooseUs.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
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
        },
        {
            icon: <FaPassport className="text-3xl" />,
            title: "Tourist Visas",
            subtitle: "Fast approvals & help",
            description: "Get your tourist visa done right, the first time. Smooth paperwork, clear guidance, no stress.",
            features: ["Fast processing", "Expert help", "Wide country coverage"],
            color: "green",
            image: touristvisas,
        },
        {
            icon: <FaGlobeAsia className="text-3xl" />,
            title: "UAE, Oman & Bahrain Visas",
            subtitle: "Easy Gulf travel visas",
            description: "Planning a Gulf trip? We handle UAE, Oman, and Bahrain visas with speed and care.",
            features: ["Hassle-free approvals", "Updated requirements", "Local expertise"],
            color: "orange",
            image: uaebahrainomanvisas,
        },
        {
            icon: <FaHotel className="text-3xl" />,
            title: "Hotel Booking",
            subtitle: "Comfortable trusted stays",
            description: "Stay in trusted hotels that fit your budget and style — no hidden charges, just comfort.",
            features: ["Handpicked stays", "Great locations", "Best price guarantee"],
            color: "purple",
            image: hotelbooking,
        },
        {
            icon: <FaShieldAlt className="text-3xl" />,
            title: "Travel Insurance",
            subtitle: "Peace of mind, anywhere",
            description: "Travel with peace of mind. We cover you with plans that protect you and your plans.",
            features: ["Emergency coverage", "Medical protection", "Easy claims"],
            color: "red",
            image: travelinsurance,
        },
        {
            icon: <FaCarSide className="text-3xl" />,
            title: "Airport Transfers",
            subtitle: "Arrive & depart stress-free",
            description: "No more last-minute taxi stress. Pre-booked rides that get you to your hotel safely and on time.",
            features: ["Reliable drivers", "Clean vehicles", "24/7 availability"],
            color: "yellow",
            image: airporttransfers,
        },
        {
            icon: <FaGlobe className="text-3xl" />,
            title: "Worldwide Visa Service",
            subtitle: "Visas for every destination",
            description: "Wherever you want to go, we handle the paperwork. From Asia to Europe and beyond.",
            features: ["Tourist & business visas", "Application help", "Global destinations"],
            color: "teal",
            image: worldwidevisaservice,
        },
        {
            icon: <FaUsers className="text-3xl" />,
            title: "Family Visa Services",
            subtitle: "Keep loved ones close",
            description: "Smooth family visa processing for reunions, relocation, or long visits.",
            features: ["Clear steps", "Trusted advice", "Full support"],
            color: "pink",
            image: familyvisaservices,
        },
        {
            icon: <FaFileAlt className="text-3xl" />,
            title: "All Immigration Works",
            subtitle: "Complete immigration help",
            description: "One-stop solution for immigration needs—updates, renewals, applications, and official paperwork.",
            features: ["Residency services", "Renewals & extensions", "Document clearances"],
            color: "indigo",
            image: allimmigrationworks,
        },
        {
            icon: <FaGlobe className="text-3xl" />,
            title: "Schengen Visa",
            subtitle: "Easy Europe travel",
            description: "Dreaming of Europe? We handle your Schengen visa so you can focus on planning your adventure.",
            features: ["Paperwork help", "Embassy updates", "Smooth approvals"],
            color: "cyan",
            image: schengenvisa,
        },
        {
            icon: <FaKaaba className="text-3xl" />,
            title: "Hajj & Umrah Visa",
            subtitle: "Your sacred journey",
            description: "Plan your sacred journey with confidence. We manage all visa and travel arrangements for Hajj & Umrah.",
            features: ["Authentic guidance", "Approved agents", "Full support"],
            color: "amber",
            image: hajjnumrahvisa,
        },
        {
            icon: <FaUmbrellaBeach className="text-3xl" />,
            title: "Holiday Packages",
            subtitle: "All-in-one dream trips",
            description: "All-in-one trips for any style — adventure, family, luxury, or budget. Just pack & go.",
            features: ["Custom itineraries", "Flights & hotels", "Local activities"],
            color: "lime",
            image: holidaypackages,
        },
        {
            icon: <FaUserFriends className="text-3xl" />,
            title: "Group Tours",
            subtitle: "Travel & save together",
            description: "Perfect for schools, corporates, or friends. Travel together and enjoy exclusive group rates.",
            features: ["Tailored group rates", "Expert leaders", "Sightseeing & activities"],
            color: "emerald",
            image: grouptours,
        },
        {
            icon: <FaHeart className="text-3xl" />,
            title: "Honeymoon Packages",
            subtitle: "Romantic escapes",
            description: "Start your forever with the perfect getaway — romantic stays, stunning destinations, unforgettable memories.",
            features: ["Private stays", "Romantic activities", "Fully customized"],
            color: "rose",
            image: honeymoonpackages,
        },
        {
            icon: <FaCar className="text-3xl" />,
            title: "Car Rentals",
            subtitle: "Freedom on the road",
            description: "Reliable cars for daily hire, road trips, or city exploration. Drive your way.",
            features: ["Economy to luxury", "Self-drive or chauffeur", "Flexible plans"],
            color: "fuchsia",
            image: carrentals,
        },
        {
            icon: <FaClipboardList className="text-3xl" />,
            title: "Travel Consultation",
            subtitle: "Plan smarter, travel better",
            description: "Not sure where to go or how to plan it? We help you design the perfect trip.",
            features: ["Expert advice", "Best time & budget tips", "Local insights"],
            color: "violet",
            image: travelconsultation,
        },
        {
            icon: <FaStar className="text-3xl" />,
            title: "VIP & Luxury Travel",
            subtitle: "Exclusive experiences",
            description: "Private jets, five-star stays, custom experiences. For travelers who want the best of the best.",
            features: ["Premium bookings", "Personal concierge", "Custom luxury tours"],
            color: "yellow",
            image: vipluxurytravel,
        },
        {
            icon: <FaBriefcase className="text-3xl" />,
            title: "Corporate Travel Solutions",
            subtitle: "Business trips made easy",
            description: "Flights, hotels, and visa services for busy professionals. Travel, sorted.",
            features: ["Corporate rates", "Dedicated manager", "Flexible changes"],
            color: "indigo",
            image: corporatetravelsolutions,
        },
        {
            icon: <FaTicketAlt className="text-3xl" />,
            title: "Event & Festival Packages",
            subtitle: "Attend global events",
            description: "Concerts, sports, cultural events — complete travel arrangements, tickets, and local experiences.",
            features: ["Concerts & sports trips", "Cultural events", "Hassle-free bookings"],
            color: "cyan",
            image: eventfestivalpackages,
        },
        {
            icon: <FaFileSignature className="text-3xl" />,
            title: "Document Attestation",
            subtitle: "Fast & secure processing",
            description: "We handle certificate attestation for overseas work, education, or immigration.",
            features: ["Embassy attestation", "Quick turnaround", "Secure handling"],
            color: "gray",
            image: documentattestation,
        },
        {
            icon: <FaGraduationCap className="text-3xl" />,
            title: "Work & Study Visas",
            subtitle: "Plan your future abroad",
            description: "We guide you through student and employment visa processes with confidence.",
            features: ["Country-specific advice", "Paperwork checks", "Reliable processing"],
            color: "emerald",
            image: workstudyvisas,
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
                            image={feature.image} // <-- pass image URL here
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
    features = ["Fast booking", "Global options", "Enterprise tools", "Best prices"],
    color = "blue",
    image, // receive image URL
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
        green: {
            gradient: "from-green-500/20 to-green-500/10",
            text: "text-green-600",
            icon: "text-green-500",
        },
        orange: {
            gradient: "from-orange-500/20 to-orange-500/10",
            text: "text-orange-600",
            icon: "text-orange-500",
        },
        purple: {
            gradient: "from-purple-500/20 to-purple-500/10",
            text: "text-purple-600",
            icon: "text-purple-500",
        },
        red: {
            gradient: "from-red-500/20 to-red-500/10",
            text: "text-red-600",
            icon: "text-red-500",
        },
        yellow: {
            gradient: "from-yellow-500/20 to-yellow-500/10",
            text: "text-yellow-600",
            icon: "text-yellow-500",
        },
        teal: {
            gradient: "from-teal-500/20 to-teal-500/10",
            text: "text-teal-600",
            icon: "text-teal-500",
        },
        pink: {
            gradient: "from-pink-500/20 to-pink-500/10",
            text: "text-pink-600",
            icon: "text-pink-500",
        },
        indigo: {
            gradient: "from-indigo-500/20 to-indigo-500/10",
            text: "text-indigo-600",
            icon: "text-indigo-500",
        },
        cyan: {
            gradient: "from-cyan-500/20 to-cyan-500/10",
            text: "text-cyan-600",
            icon: "text-cyan-500",
        },
        gray: {
            gradient: "from-gray-500/20 to-gray-500/10",
            text: "text-gray-600",
            icon: "text-gray-500",
        },
        lime: {
            gradient: "from-lime-500/20 to-lime-500/10",
            text: "text-lime-600",
            icon: "text-lime-500",
        },
        fuchsia: {
            gradient: "from-fuchsia-500/20 to-fuchsia-500/10",
            text: "text-fuchsia-600",
            icon: "text-fuchsia-500",
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
                    isFlipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"
                )}
            >
                {/* Front of card with background image via inline style */}
                <div
                    className={cn(
                        "absolute inset-0 w-full h-full",
                        "[backface-visibility:hidden] [transform:rotateY(0deg)]",
                        "overflow-hidden rounded-2xl",
                        "border border-slate-200/30",
                        "shadow-lg",
                        "transition-all duration-700",
                        "group-hover:shadow-xl",
                        isFlipped ? "opacity-0" : "opacity-100"
                    )}
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
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
                            <h3 className="text-xl font-bold text-white leading-tight">{title}</h3>
                            <p className="text-white/90 mt-2 text-sm">{subtitle}</p>
                        </div>
                    </div>
                </div>

                {/* Back of card */}
                <div
                    className={cn(
                        "absolute inset-0 w-full h-full",
                        "[backface-visibility:hidden] [transform:rotateY(180deg)]",
                        "overflow-hidden rounded-2xl",
                        "border border-slate-200/30",
                        "bg-white shadow-lg",
                        "transition-all duration-700",
                        isFlipped ? "opacity-100" : "opacity-0"
                    )}
                >
                    <div className="flex flex-col h-full p-6 overflow-y-auto feature-scrollbar">
                        <h3 className={`${colors.text} text-xl font-semibold mb-2`}>{title}</h3>
                        <p className="text-gray-600 mb-4 text-sm">{description}</p>
                        <ul className="flex-1 space-y-2 text-gray-700 text-sm list-disc list-inside">
                            {features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                        <button
                            type="button"
                            className={cn(
                                "mt-6 rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                                `bg-${color}-600 text-white hover:bg-${color}-700`
                            )}
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// StatCard component for animated statistics
const StatCard = ({ icon, number, label, delay = 0 }) => {
    return (
        <motion.div
            className="flex flex-col items-center p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
        >
            <div className="mb-4 p-3 rounded-full bg-white/20 backdrop-blur-sm">
                {icon}
            </div>
            <div className="text-3xl font-bold mb-2">
                {number}
            </div>
            <div className="text-sm opacity-90 text-center">{label}</div>
        </motion.div>
    );
};

export default ServiceSection;
