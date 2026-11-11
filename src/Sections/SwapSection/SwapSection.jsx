import React from 'react';
import SwapCard from '../../Component/SwapCard/SwapCard';
import Address from '../../Component/Address/Address';
import { swapData } from '../../Data/swapData';

const SwapSection = () => {
  return (
    // Reduced section padding
    <section className="relative w-full min-h-[80vh] bg-[#FAFAFA] flex flex-col items-center pb-8 overflow-hidden pt-16">
      
      {/* Main Content Area - Reduced max width from 6xl to 5xl */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center px-6">
        
        {/* Top Row: Left & Right Side */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10">
          
          {/* Left Side Area */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
            <div className="mb-4">
              <p className="text-gray-600 font-bold text-base md:text-lg">{swapData.leftSection.subHeading}</p>
              <h2 className="text-3xl md:text-4xl font-black text-black uppercase mt-1">
                {swapData.leftSection.heading}
              </h2>
            </div>

            <div className="mb-4 relative">
              <img 
                src={swapData.leftSection.image} 
                alt="Dogecoin" 
                className="w-48 md:w-64 h-auto object-contain drop-shadow-2xl mx-auto"
              />
            </div>
          </div>

          {/* Right Side Area */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <SwapCard data={swapData.rightSection} />
          </div>

        </div>

        {/* Bottom Row: Address Centered */}
        <div className="w-full flex justify-center mt-8">
          <div className="w-full max-w-lg">
            <Address />
          </div>
        </div>

      </div>
    </section>
  );
};

export default SwapSection;