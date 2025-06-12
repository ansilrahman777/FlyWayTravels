import { motion } from "framer-motion";

import dubai from '../assets/badges/1.png';
import bag_passport from '../assets/badges/2.png';
import camera from '../assets/badges/3.png';
import stamp_pass from '../assets/badges/4.png';
import tourBadge from '../assets/badges/5.png';
import flight from '../assets/badges/6.png';
import place from '../assets/badges/8.png';
import cityCard from '../assets/badges/9.png';
import seal from '../assets/badges/10.png';
import stampballon from '../assets/badges/11.png';
import parisseal from '../assets/badges/12.png';
import visastamp from '../assets/badges/13.png';
import travelstamp from '../assets/badges/14.png';
import travelstamp2 from '../assets/badges/15.png';
import travelstamp3 from '../assets/badges/16.png';
import hat from '../assets/badges/17.png';
import globe from '../assets/badges/18.png';

const HeroSection4 = () => {
    return (
        <section className="relative overflow-hidden min-h-[800px] py-24 flex justify-center items-center">
            <img src={dubai} className="absolute top-8 left-8 w-[80px] sm:w-[130px]" alt="dubai" />
            <img src={visastamp} className="absolute top-[90px] left-[130px] w-[50px] sm:w-[90px]" alt="visa stamp" />
            <img src={travelstamp} className="absolute top-3 left-[180px] w-[120px] sm:w-[150px]" alt="travel stamp" />
            <img src={globe} className="absolute top-6 left-[30%] w-[200px] sm:w-[390px]" alt="globe" />
            <img src={parisseal} className="absolute top-2 right-[200px] w-[250px]" alt="paris seal" />
            <img src={stampballon} className="absolute top-[30px] right-8 w-[150px]" alt="stampballon" />
            <img src={seal} className="absolute top-[80px] right-[130px] w-[100px]" alt="seal" />
            <img src={travelstamp2} className="absolute top-[160px] left-[10px] w-[120px]" alt="travelstamp2" />
            <img src={camera} className="absolute top-[210px] left-[150px] w-[100px]" alt="camera" />
            <img src={flight} className="absolute top-[190px] right-[200px] w-[250px]" alt="flight" />
            <img src={tourBadge} className="absolute top-[320px] right-[70px] w-[150px]" alt="tourBadge" />
            <img src={bag_passport} className="absolute bottom-[140px] left-[120px] w-[260px]" alt="bag_passport" />
            <img src={cityCard} className="absolute bottom-[100px] left-[30px] w-[120px]" alt="city card" />
            <img src={travelstamp3} className="absolute bottom-[110px] left-[45%] w-[120px]" alt="travelstamp3" />
            <img src={place} className="absolute bottom-[80px] right-[35%] w-[200px]" alt="place" />
            <img src={hat} className="absolute bottom-[100px] left-[38%] w-[120px]" alt="hat" />
            <img src={stamp_pass} className="absolute bottom-[60px] right-[60px] w-[200px] rounded-full" alt="stamp_pass" />

            {/* Main Content */}
            <div className="relative z-10 text-center px-4">
                <div class="font font-Poppins">
                    <div class="flex flex-col items-center relative">
                        <h1 class="absolute text-6xl md:text-9xl font-semibold text-white opacity-10  ">
                            FLY WAY 
                        </h1>
                        <div class="relative flex flex-col items-center mt-5 md:mt-10">
                            <h1 class="text-2xl md:text-4xl lg:text-6xl font-semibold text-gray-100">FLY WAY TRAVEL</h1>
                            <div class="md:w-28 w-14 md:h-[4px] h-[2px] bg-orange-600 mt-2"></div>
                        </div>
                    </div>
                </div>
                <p className="text-white text-lg sm:text-xl max-w-2xl mx-auto mb-8">
                    We have made the ultimate theme for travel agencies. Craft a remarkable website and grow your travel business!
                </p>
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg font-bold px-8 py-3 rounded-full transition duration-300">
                    Contact US
                </button>
            </div>
        </section>

    )
}

export default HeroSection4