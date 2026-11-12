import React from 'react';
// Importing exact icons from react-icons
import { FaYoutube, FaTiktok, FaDiscord, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Communityimg from '../../assets/images/community/Communityimg.png'

const CommunitySection = () => {
  return (
    <section className="w-full flex justify-center py-12 px-4 bg-white">
      
      {/* Main Yellow Container - Changed: border-b-[6px] added for thicker bottom border */}
      <div className="relative w-full max-w-4xl bg-[#FFD000] rounded-[32px] border-[2px] border-black overflow-hidden flex flex-col md:flex-row items-center shadow-[8px_8px_0px_rgba(0,0,0,1)]">
        
        {/* Left Side: Dog Image */}
        <div className="relative w-full md:w-[45%] flex justify-center md:justify-end z-10 mt-8 md:mt-0">
          <img 
            src={Communityimg} 
            alt="Dogecoin Mascot" 
            className="w-64 md:w-[20rem] h-auto object-contain"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-[55%] p-8 md:p-10 z-10 text-center md:text-left flex flex-col items-center md:items-start">
          
          {/* Heading - Changed: Smaller font size and whitespace-nowrap to keep in one line */}
          <h2 className="text-2xl md:text-3xl lg:text-[2.2rem] font-bold text-black uppercase tracking-tight mb-4 whitespace-nowrap">
            Join the community
          </h2>

          {/* Paragraph */}
          <p className="text-black font-semibold text-sm md:text-base leading-relaxed mb-8 max-w-md">
            The day had begun on a bright note. The sun finally peeked through the rain for the first time in a week, and the birds were singing in its warmth.
          </p>

          {/* Social Icons Row */}
          <div className="flex gap-3">
            <SocialButton icon={<FaYoutube size={20} />} />
            <SocialButton icon={<FaTiktok size={18} />} />
            <SocialButton icon={<FaXTwitter size={18} />} /> 
            <SocialButton icon={<FaDiscord size={20} />} /> 
            <SocialButton icon={<FaInstagram size={20} />} />
          </div>

        </div>
      </div>
    </section>
  );
};

// Reusable Social Button Component - Changed: White background and thicker bottom border
const SocialButton = ({ icon }) => {
  return (
    <button className="w-11 h-11 flex items-center justify-center bg-white border-2 border-b-[4px] border-black rounded-xl hover:bg-black hover:text-white transition-all active:translate-y-[1px] text-black">
      {icon}
    </button>
  );
};

export default CommunitySection;