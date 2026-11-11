import React from 'react';
import { ChevronRight } from 'lucide-react';

import Aboutimg from '../assets/images/main/Aboutimg.png';
import cloudleft from '../assets/images/About/cloudleft.png';
import cloudright from '../assets/images/About/cloudright.png';

import { FaYoutube, FaTwitter, FaDiscord, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const AboutSection = () => {
  return (
    // Section padding kam ki hai (py-30 se py-10)
    <section className="w-full flex justify-center py-10 md:py-16 px-4 bg-white overflow-hidden">

      {/* Main Container - Width kam ki hai (max-w-3xl) aur padding bhi kam */}
      <div className="relative w-full max-w-3xl bg-[#FFC800] rounded-[30px] md:rounded-[40px] border border-black/20 flex flex-col md:flex-row items-center shadow-lg py-3 md:py-4 overflow-visible">

        {/* Left Cloud */}
        <img
          src={cloudleft}
          alt="Left Cloud"
          className="absolute left-[-10px] bottom-[-30px] md:left-[-20px] md:bottom-[-40px] w-20 sm:w-24 md:w-28 h-auto object-contain z-30"
        />

        {/* Right Cloud */}
        <img
          src={cloudright}
          alt="Right Cloud"
          className="absolute right-[-10px] top-[-15px] md:right-[-20px] md:top-[-25px] w-20 sm:w-24 md:w-28 h-auto object-contain z-30"
        />

        {/* Left Side: Dog Image */}
        <div className="relative w-full md:w-[30%] flex justify-center md:justify-end md:pr-0 z-20 mt-[-30px] md:mt-[-40px] mb-[-15px] md:mb-[-25px] md:translate-x-8">
          <img
            src={Aboutimg}
            alt="Dogecoin Mascot"
            className="w-40 md:w-[14rem] h-auto object-contain drop-shadow-2xl scale-110"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-[60%] p-4 md:pr-6 md:pl-2 z-10 text-center md:text-left flex flex-col items-center md:items-start mt-2 md:mt-0 md:translate-x-10">

          <h2 className="text-xl md:text-2xl font-extrabold text-black uppercase tracking-tight mb-2 whitespace-nowrap">
            About $DOGCOIN
          </h2>

          <p className="text-black font-medium text-[11px] md:text-xs leading-relaxed tracking-wide mb-3 max-w-sm">
            The day had begun on a bright note. The sun finally peeked through the rain for the first time in a week, and the birds were singing in its warmth. There was no way to anticipate what was about to happen. It was a worst-case scenario and there was no way out of it.
          </p>

          {/* Buttons Row */}
          <div className="flex flex-col sm:flex-row gap-2 w-full mb-3 justify-center md:justify-start">
            <button className="flex items-center justify-center gap-2 bg-white text-black font-bold py-1.5 px-3 w-full sm:min-w-[120px] sm:w-auto rounded-lg border-b-4 border-black/80 hover:bg-gray-100 transition-colors shadow-[2px_2px_0px_rgba(0,0,0,0.8)] active:translate-y-[2px] active:shadow-none text-xs">
              Buy now
              <ChevronRight strokeWidth={3} size={14} />
            </button>

            <button className="flex items-center justify-center bg-transparent text-black font-bold py-1.5 px-3 w-full sm:min-w-[120px] sm:w-auto rounded-lg border-2 border-black/80 hover:bg-black/5 transition-colors shadow-[2px_2px_0px_rgba(0,0,0,0.8)] active:translate-y-[2px] active:shadow-none text-xs">
              Stake and earn
            </button>
          </div>

          {/* Socials Section */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-extrabold text-black text-[10px] md:text-xs uppercase tracking-wider">
              Join the community
            </span>
            <div className="flex gap-1.5">
              <SocialButton icon={<FaYoutube size={14} />} />
              <SocialButton icon={<FaTwitter size={14} />} />
              <SocialButton icon={<FaXTwitter size={12} />} />
              <SocialButton icon={<FaDiscord size={14} />} />
              <SocialButton icon={<FaInstagram size={14} />} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const SocialButton = ({ icon }) => {
  return (
    <button className="w-7 h-7 flex items-center justify-center bg-white border-2 border-black/70 rounded-md hover:bg-black hover:text-white transition-colors shadow-[2px_2px_0px_rgba(0,0,0,0.7)] active:translate-y-[1px] active:shadow-none text-black">
      {icon}
    </button>
  );
};

export default AboutSection;