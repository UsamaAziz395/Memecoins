import React from 'react';
import { FaYoutube, FaTiktok, FaDiscord, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import FooterLogo from '../../assets/images/Hero/Heroimg.png'; 

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-16 pb-12 px-6 border-t border-gray-200">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        <div className="w-full md:w-[40%] flex flex-col gap-4">
          
          <div className="flex items-center gap-3">
            <img 
              src={FooterLogo} 
              alt="Dogcoin Logo" 
              className="w-10 h-10 object-contain rounded-full border-2 border-black"
            />
            <h2 className="text-3xl font-black text-black tracking-tight">
              $Dogcoin
            </h2>
          </div>

          <p className="text-gray-800 font-medium text-sm leading-relaxed max-w-sm">
            The day had begun on a bright note. The sun finally peeked through the rain for the first time in a week, and the birds were singing in its warmth.
          </p>

          <p className="text-black font-bold text-sm mt-2">
            @Dogcoin 2024 All rights reserved.
          </p>
        </div>

        <div className="w-full md:w-[60%] flex flex-row justify-start md:justify-end gap-16 md:gap-24">
          
          <div className="flex flex-col gap-3">
            <h3 className="font-extrabold text-black text-lg mb-1">Links</h3>
            <a href="#about" className="font-bold text-gray-800 hover:text-black transition-colors text-sm">About</a>
            <a href="#tokenomics" className="font-bold text-gray-800 hover:text-black transition-colors text-sm">Tokenomics</a>
            <a href="#how-to-buy" className="font-bold text-gray-800 hover:text-black transition-colors text-sm">How to buy?</a>
            <a href="#stake" className="font-bold text-gray-800 hover:text-black transition-colors text-sm">Stake</a>
            <a href="#contact" className="font-bold text-gray-800 hover:text-black transition-colors text-sm">Contact</a>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-extrabold text-black text-lg mb-1">Community:</h3>
            
            {/* 3 Icons in first row, 2 in second row */}
            <div className="grid grid-cols-6 gap-3">
              {/* First Row (3 icons, each taking 2 columns) */}
              <div className="col-span-2"><SocialIcon icon={<FaYoutube size={18} />} /></div>
              <div className="col-span-2"><SocialIcon icon={<FaTiktok size={18} />} /></div>
              <div className="col-span-2"><SocialIcon icon={<FaXTwitter size={18} />} /></div>
              
              {/* Second Row (2 icons, centered) */}
              <div className="col-span-2 col-start-2"><SocialIcon icon={<FaDiscord size={18} />} /></div>
              <div className="col-span-2 col-start-4"><SocialIcon icon={<FaInstagram size={18} />} /></div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => {
  return (
    <a 
      href="#" 
      className="w-11 h-11 flex items-center justify-center bg-white border-[3px] border-black rounded-xl text-black hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-y-[1px] active:shadow-none"
    >
      {icon}
    </a>
  );
};

export default Footer;