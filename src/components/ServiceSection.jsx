// src/components/WhyChooseUs.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
    FaHospitalAlt,
    FaClipboardList,
    FaStar,
    FaBriefcase,
    FaTicketAlt,
    FaFileSignature,
    FaGraduationCap,

} from "react-icons/fa";


import { cn } from '../lib/utils';

const ServiceSection = () => {
    const features = [
        {
            icon: <FaPlane className="text-3xl" />,
            title: "Airline Tickets",
            subtitle: "Best routes & fares",
            description: "Fly where you want, when you want. We find the best flight deals and handle all the details.",
            features: ["Best routes", "Flexible booking", "All major airlines"],
            color: "blue",
            background: "bg-[url('https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
        },
        {
            icon: <FaPassport className="text-3xl" />,
            title: "Tourist Visas",
            subtitle: "Fast approvals & help",
            description: "Get your tourist visa done right, the first time. Smooth paperwork, clear guidance, no stress.",
            features: ["Fast processing", "Expert help", "Wide country coverage"],
            color: "green",
            background: "bg-[url('https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
        },
        {
            icon: <FaGlobeAsia className="text-3xl" />,
            title: "UAE, Oman & Bahrain Visas",
            subtitle: "Easy Gulf travel visas",
            description: "Planning a Gulf trip? We handle UAE, Oman, and Bahrain visas with speed and care.",
            features: ["Hassle-free approvals", "Updated requirements", "Local expertise"],
            color: "orange",
            background: "bg-[url('https://images.unsplash.com/photo-1597853747221-fd73e0f24f03?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
        },
        {
            icon: <FaHotel className="text-3xl" />,
            title: "Hotel Booking",
            subtitle: "Comfortable trusted stays",
            description: "Stay in trusted hotels that fit your budget and style — no hidden charges, just comfort.",
            features: ["Handpicked stays", "Great locations", "Best price guarantee"],
            color: "purple",
            background: "bg-[url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
        },
        {
            icon: <FaShieldAlt className="text-3xl" />,
            title: "Travel Insurance",
            subtitle: "Peace of mind, anywhere",
            description: "Travel with peace of mind. We cover you with plans that protect you and your plans.",
            features: ["Emergency coverage", "Medical protection", "Easy claims"],
            color: "red",
            background: "bg-[url('https://images.unsplash.com/photo-1578926280423-99f67aa4e2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
        },
        {
            icon: <FaCarSide className="text-3xl" />,
            title: "Airport Transfers",
            subtitle: "Arrive & depart stress-free",
            description: "No more last-minute taxi stress. Pre-booked rides that get you to your hotel safely and on time.",
            features: ["Reliable drivers", "Clean vehicles", "24/7 availability"],
            color: "yellow",
            background: "bg-[url('https://images.unsplash.com/photo-1568229463188-817cd29d72b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
        },
        {
            icon: <FaGlobe className="text-3xl" />,
            title: "Worldwide Visa Service",
            subtitle: "Visas for every destination",
            description: "Wherever you want to go, we handle the paperwork. From Asia to Europe and beyond.",
            features: ["Tourist & business visas", "Application help", "Global destinations"],
            color: "teal",
            background: "bg-[url('https://images.unsplash.com/photo-1537202108838-76f1c1082b8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
        },
        {
            icon: <FaUsers className="text-3xl" />,
            title: "Family Visa Services",
            subtitle: "Keep loved ones close",
            description: "Smooth family visa processing for reunions, relocation, or long visits.",
            features: ["Clear steps", "Trusted advice", "Full support"],
            color: "pink",
            background: "bg-[url('https://images.unsplash.com/photo-1593697820393-b7a46a3c9a47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
        },
        {
            icon: <FaFileAlt className="text-3xl" />,
            title: "All Immigration Works",
            subtitle: "Complete immigration help",
            description: "One-stop solution for immigration needs—updates, renewals, applications, and official paperwork.",
            features: ["Residency services", "Renewals & extensions", "Document clearances"],
            color: "indigo",
            background: "bg-[url('https://images.unsplash.com/photo-1603357462531-6f17de9d7b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
        },
        {
            icon: <FaGlobe className="text-3xl" />,
            title: "Schengen Visa",
            subtitle: "Easy Europe travel",
            description: "Dreaming of Europe? We handle your Schengen visa so you can focus on planning your adventure.",
            features: ["Paperwork help", "Embassy updates", "Smooth approvals"],
            color: "cyan",
            background: "bg-[url('https://images.unsplash.com/photo-1506466010722-395aa2bef877?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
        },
        {
            icon: <FaKaaba className="text-3xl" />,
            title: "Hajj & Umrah Visa",
            subtitle: "Your sacred journey",
            description: "Plan your sacred journey with confidence. We manage all visa and travel arrangements for Hajj & Umrah.",
            features: ["Authentic guidance", "Approved agents", "Full support"],
            color: "amber",
            background: "bg-[url('https://images.unsplash.com/photo-1593697573420-d4514a1cb43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
        },
        {
            icon: <FaUmbrellaBeach className="text-3xl" />,
            title: "Holiday Packages",
            subtitle: "All-in-one dream trips",
            description: "All-in-one trips for any style — adventure, family, luxury, or budget. Just pack & go.",
            features: ["Custom itineraries", "Flights & hotels", "Local activities"],
            color: "lime",
            background: "bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
        },
        {
            icon: <FaUserFriends className="text-3xl" />,
            title: "Group Tours",
            subtitle: "Travel & save together",
            description: "Perfect for schools, corporates, or friends. Travel together and enjoy exclusive group rates.",
            features: ["Tailored group rates", "Expert leaders", "Sightseeing & activities"],
            color: "emerald",
            background: "bg-[url('https://images.unsplash.com/photo-1595942759420-4d79fba399a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
        },
        {
            icon: <FaHeart className="text-3xl" />,
            title: "Honeymoon Packages",
            subtitle: "Romantic escapes",
            description: "Start your forever with the perfect getaway — romantic stays, stunning destinations, unforgettable memories.",
            features: ["Private stays", "Romantic activities", "Fully customized"],
            color: "rose",
            background: "bg-[url('https://images.unsplash.com/photo-1520440229-24e1f772d484?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
        },
        {
            icon: <FaCar className="text-3xl" />,
            title: "Car Rentals",
            subtitle: "Freedom on the road",
            description: "Reliable cars for daily hire, road trips, or city exploration. Drive your way.",
            features: ["Economy to luxury", "Self-drive or chauffeur", "Flexible plans"],
            color: "fuchsia",
            background: "bg-[url('https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
        },
        {
            icon: <FaHospitalAlt className="text-3xl" />,
            title: "Medical & Health Tourism",
            subtitle: "World-class care & travel",
            description: "Combine world-class treatment with travel. Trusted medical partners and travel support in one place.",
            features: ["Certified hospitals", "Visa & stay help", "Personal care support"],
            color: "blue",
            background: "bg-[url('https://images.unsplash.com/photo-1603398938378-73f546c01b1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
        },
        {
            icon: <FaClipboardList className="text-3xl" />,
            title: "Travel Consultation",
            subtitle: "Plan smarter, travel better",
            description: "Not sure where to go or how to plan it? We help you design the perfect trip.",
            features: ["Expert advice", "Best time & budget tips", "Local insights"],
            color: "violet",
            background: "bg-[url('https://images.unsplash.com/photo-1572854975725-06bc9e6cfcb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
        },
        {
            icon: <FaStar className="text-3xl" />,
            title: "VIP & Luxury Travel",
            subtitle: "Exclusive experiences",
            description: "Private jets, five-star stays, custom experiences. For travelers who want the best of the best.",
            features: ["Premium bookings", "Personal concierge", "Custom luxury tours"],
            color: "yellow",
            background: "bg-[url('https://images.unsplash.com/photo-1554825203-76d2fc6c9f43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
        },
        {
            icon: <FaBriefcase className="text-3xl" />,
            title: "Corporate Travel Solutions",
            subtitle: "Business trips made easy",
            description: "Flights, hotels, and visa services for busy professionals. Travel, sorted.",
            features: ["Corporate rates", "Dedicated manager", "Flexible changes"],
            color: "indigo",
            background: "bg-[url('https://images.unsplash.com/photo-1581091870622-3f9a9b89f3e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
        },
        {
            icon: <FaTicketAlt className="text-3xl" />,
            title: "Event & Festival Packages",
            subtitle: "Attend global events",
            description: "Concerts, sports, cultural events — complete travel arrangements, tickets, and local experiences.",
            features: ["Concerts & sports trips", "Cultural events", "Hassle-free bookings"],
            color: "cyan",
            background: "bg-[url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
        },
        {
            icon: <FaFileSignature className="text-3xl" />,
            title: "Document Attestation",
            subtitle: "Fast & secure processing",
            description: "We handle certificate attestation for overseas work, education, or immigration.",
            features: ["Embassy attestation", "Quick turnaround", "Secure handling"],
            color: "gray",
            background: "bg-[url('https://images.unsplash.com/photo-1554224155-59e068fe5488?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
        },
        {
            icon: <FaGraduationCap className="text-3xl" />,
            title: "Work & Study Visas",
            subtitle: "Plan your future abroad",
            description: "We guide you through student and employment visa processes with confidence.",
            features: ["Country-specific advice", "Paperwork checks", "Reliable processing"],
            color: "emerald",
            background: "bg-[url('https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
        }
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
                            background={feature.background}
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
    background = "bg-gradient-to-br from-blue-500 to-blue-700"
}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const colorMap = {
        blue: {
            gradient: "from-blue-500/20 to-blue-500/10",
            text: "text-blue-600",
            icon: "text-blue-500"
        },
        emerald: {
            gradient: "from-emerald-500/20 to-emerald-500/10",
            text: "text-emerald-600",
            icon: "text-emerald-500"
        },
        amber: {
            gradient: "from-amber-500/20 to-amber-500/10",
            text: "text-amber-600",
            icon: "text-amber-500"
        },
        rose: {
            gradient: "from-rose-500/20 to-rose-500/10",
            text: "text-rose-600",
            icon: "text-rose-500"
        },
        violet: {
            gradient: "from-violet-500/20 to-violet-500/10",
            text: "text-violet-600",
            icon: "text-violet-500"
        }
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
                        background,
                        "bg-cover bg-center",
                        "border border-slate-200/30",
                        "shadow-lg",
                        "transition-all duration-700",
                        "group-hover:shadow-xl",
                        isFlipped ? "opacity-0" : "opacity-100"
                    )}
                >
                    <div className="relative h-full overflow-hidden p-6 flex flex-col bg-black/10">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className={`w-16 h-16 rounded-full ${colors.icon} flex items-center justify-center bg-white/50`}>
                                {React.cloneElement(icon, { className: "text-3xl" })}
                            </div>
                        </div>

                        {/* Title and subtitle at bottom */}
                        <div className="mt-auto text-center">
                            <h3 className="text-xl font-bold text-white leading-tight">
                                {title}
                            </h3>
                            <p className="text-white/90 mt-2 text-sm">
                                {subtitle}
                            </p>
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
                                        <div className={`min-w-[16px] h-4 rounded-full ${colors.icon} flex items-center justify-center mt-0.5`}>
                                            <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                                        </div>
                                        <span className="leading-tight">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="pt-2 mt-auto">
                        <div
                            className={cn(
                                "group/start relative",
                                "flex items-center justify-between",
                                "p-3 -m-3 rounded-xl",
                                "transition-all duration-300",
                                "bg-gradient-to-r from-slate-100 to-slate-50",
                                "hover:from-blue-500/10 hover:from-0% hover:via-blue-500/5 hover:via-100% hover:to-transparent hover:to-100%",
                                "hover:scale-[1.02] hover:cursor-pointer"
                            )}
                        >
                            <span className={`text-xs font-medium ${colors.text} transition-colors duration-300 group-hover/start:text-blue-600`}>
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
                                <svg xmlns="http://www.w3.org/2000/svg" className={`relative z-10 w-3.5 h-3.5 ${colors.icon} transition-all duration-300 group-hover/start:translate-x-0.5 group-hover/start:scale-110`} viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
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