import React from 'react';
import { FaYoutube, FaTwitter, FaDiscord, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import Heroimg from '../../assets/images/Hero/Heroimg.png'; 
import Navbar from '../../Sections/Navbar/Navbar'; 
import MarqueeLabel from '../../Component/Label/Label';
import Address from '../../Component/Address/Address'; 

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[80vh] bg-gray-900 flex flex-col pb-6">
      
      <div className="absolute inset-0 overflow-hidden z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>

      <div className="absolute top-0 w-full z-50">
        <Navbar />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 flex-grow pt-24 pb-4 mt-8 md:mt-0">
        
        <div className="w-full md:w-[50%] flex flex-col items-start mb-8 md:mb-0">
          
          <h1 
            className="text-5xl md:text-[4rem] font-black text-[#FFD000] tracking-tighter uppercase mb-3 mt-4 md:mt-6" 
            style={{ WebkitTextStroke: '3px black', textShadow: '4px 4px 0px rgba(0,0,0,0.8)' }}
          >
            $DOGCOIN
          </h1>

          {/* Paragraph spacing fixed (mb-0) */}
          <p className="text-white leading-relaxed mb-0 max-w-md text-sm md:text-base">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
          </p>

          {/* Address spacing fixed (mt-0, mb-4) */}
          <div className="w-full max-w-md mb-4 mt-0">
            <Address />
          </div>

          <div className="flex flex-col gap-2 mt-1">
            <span className="text-white font-bold text-xs uppercase tracking-wider">Join the community</span>
            <div className="flex gap-2">
              <SocialIcon icon={<FaYoutube size={18} />} />
              <SocialIcon icon={<FaTwitter size={18} />} />
              <SocialIcon icon={<FaXTwitter size={16} />} />
              <SocialIcon icon={<FaDiscord size={18} />} />
              <SocialIcon icon={<FaInstagram size={18} />} />
            </div>
          </div>

        </div>

        <div className="w-full md:w-[50%] flex justify-center md:justify-end relative">
          <img 
            src={Heroimg} 
            alt="Dogecoin Mascot" 
            className="w-48 md:w-[18rem] h-auto object-contain relative z-10 drop-shadow-2xl"
          />
        </div>

      </div>

      <div className="relative w-full z-30 -mb-16 md:-mb-20">
        <MarqueeLabel />
      </div>

    </section>
  );
};

const SocialIcon = ({ icon }) => {
  return (
    <button className="w-8 h-8 flex items-center justify-center bg-black/60 border border-white/30 rounded-lg text-white hover:bg-[#FFD000] hover:text-black hover:border-black transition-all">
      {icon}
    </button>
  );
};

export default HeroSection;