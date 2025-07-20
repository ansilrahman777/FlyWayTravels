import { FaCheckCircle, FaGlobeEurope, FaClock, FaClipboardList, FaPassport, FaDownload } from "react-icons/fa";


const SchengenVisa = () => {
    return (
        <main
            style={{
                backgroundImage:
                    "linear-gradient(135deg, #da082d 3%, #5d1dab 37%, #67d71a 69%, #b1c709 95%)",
                color: "#fff",
            }}
        >
            <section className="overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[600px]">
                    <div className="relative flex items-center justify-center w-full lg:order-1 lg:w-7/12">
                        <div className="absolute bottom-0 right-0 hidden lg:block">
                            <img
                                className="object-contain w-auto h-48"
                                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"
                                alt=""
                            />
                        </div>

                        <div className="relative font-emilys px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
                            <h1 className="text-4xl font-bold text-white sm:text-6xl xl:text-7xl">
                                Schengen Visa Services
                            </h1>
                            <p className="mt-6 text-lg font-bold text-white sm:text-xl">
                                Planning a European adventure? Flyway Travel is your trusted
                                partner for hassle-free Schengen Visa processing.
                            </p>
                            <p className="mt-4 text-base text-white font-bold max-w-xl">
                                Get complete assistance with documentation, appointment booking,
                                and step-by-step support for a smooth visa approval.
                            </p>
                        </div>

                        <div className="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-right-20">
                            <img
                                className="w-32 h-32 md:w-40 md:h-40"
                                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/circular-text.png"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="relative w-full overflow-hidden lg:order-2 h-screen lg:w-5/12">
                        <div className="absolute inset-0">
                            <img
                                className="object-cover w-full h-full scale-150"
                                src="https://images.unsplash.com/photo-1585487000160-489b27c51db7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                                alt="Schengen Visa"
                            />
                        </div>

                        <div className="absolute bottom-0 left-0">
                            <div className="p-4 font-emilys sm:p-6 lg:p-8">
                                <div className="flex items-center">
                                    <svg
                                        className="w-10 h-10 text-orange-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <h2 className="ml-3 text-4xl font-bold text-black">1,500+</h2>
                                </div>
                                <p className="max-w-xs mt-1.5 text-base text-black">
                                    Schengen Visas successfully processed for happy travelers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl font-synemono mx-auto px-4 py-20 text-white">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex  justify-center items-center gap-2 text-gradient">
                        <FaGlobeEurope className="text-primary text-4xl" />
                        Unlock Europe with a Schengen Visa
                    </h2>
                    <p className="text-lg text-white max-w-4xl text-justify mx-auto">
                        Dreaming of strolling through Paris, savoring pizza in Rome, or exploring the canals of Amsterdam — all on a single trip? The Schengen Visa makes it possible! With one simple visa, you can travel freely across 27 beautiful European countries without border hassles. Whether you’re planning an unforgettable holiday, a family visit, or an important business trip, the Schengen Visa keeps your journey smooth, stress-free, and full of adventure.
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                                <FaGlobeEurope className="text-secondary" /> Eligible Countries
                            </h3>
                            <p className="text-white/80">
                                The Schengen Area covers popular destinations like France, Spain, Italy, Germany, Switzerland, Netherlands, Greece, Belgium, and more. Once inside, you can travel freely across borders without separate visas for each country.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                                <FaPassport className="text-yellow-400" /> Types of Schengen Visas
                            </h3>
                            <p className="text-white">
                                Depending on your purpose, you can apply for:
                            </p>
                            <ul className="list-disc list-inside text-white/80 space-y-1">
                                <li>Tourist Visa – leisure trips & sightseeing</li>
                                <li>Business Visa – attend meetings & events</li>
                                <li>Family/Friends Visit – visit relatives or friends</li>
                                <li>Medical Visa – treatment in a Schengen country</li>
                                <li>Transit Visa – passing through the Schengen zone</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                                <FaClock className="text-pink-400" /> Processing Time & Validity
                            </h3>
                            <p className="text-white">
                                It usually takes 15–20 working days to process. Once approved, you can stay up to 90 days within a 180-day period. It’s best to apply at least a month before your travel dates.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                                <FaClipboardList className="text-blue-400" /> Required Documents
                            </h3>
                            <p className="text-white">
                                To strengthen your application and avoid rejections, prepare these essentials:
                            </p>
                            <ul className="list-disc list-inside text-white/80 space-y-1">
                                <li>Valid passport with at least 6 months validity</li>
                                <li>Completed application form</li>
                                <li>Flight & hotel bookings</li>
                                <li>Travel insurance covering €30,000</li>
                                <li>Bank statements & income proof</li>
                                <li>Cover letter explaining your trip</li>
                                <li>Passport-size photos (as per Schengen norms)</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                                <FaCheckCircle className="text-green-400" /> How Flyway Makes it Easy
                            </h3>
                            <p className="text-white">
                                Our experienced team makes your visa journey stress-free:
                            </p>
                            <ul className="list-decimal list-inside text-white/80 space-y-1">
                                <li>Free consultation & eligibility check</li>
                                <li>Expert advice on required documents</li>
                                <li>Form filling & covering letter drafting</li>
                                <li>Appointment booking at VFS/Embassy</li>
                                <li>Regular updates & full support until approval</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="/schengen-visa-form.pdf"
                        download
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full shadow hover:shadow-lg hover:bg-gray-200 transition-all duration-300"
                    >
                        <FaDownload /> Download Application Form
                    </a>
                </div>
            </section>



            <div style={{ overflow: "hidden" }}>
                <svg
                    preserveAspectRatio="none"
                    viewBox="0 0 1200 120"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        fill: "#77ffc2",
                        width: "100%",
                        height: 165,
                        transform: "rotate(180deg)",
                    }}
                >
                    <path
                        d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
                        opacity=".25"
                    />
                    <path
                        d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
                        opacity=".5"
                    />
                    <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
                </svg>
            </div>
        </main>
    );
};

export default SchengenVisa;
