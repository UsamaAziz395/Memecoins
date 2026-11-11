
import React from 'react';
import { buyNowData } from '../../Data/buyNowData';
import Rightimg from '../../assets/images/main/Rightimg.png';
import leftimg from '../../assets/images/main/leftimg.png';

const BuyNowSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#111111] flex flex-col items-center justify-center">

      {/* Main Content Area */}
      <div className="relative w-full max-w-7xl flex flex-col items-center justify-center py-16 px-4 z-10">

        {/* Wavy Background Pattern */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: `repeating-radial-gradient(circle at center, transparent, transparent 10px, #222 10px, #222 20px)`
          }}
        ></div>

      {/* Left Cloud */}
<img
  src={leftimg}
  alt="Left Cloud"
  className="absolute left-[5%] bottom-8 w-16 sm:w-20 md:w-28 lg:w-32 h-auto object-contain z-20"
/>
{/* Right Cloud */}
<img
  src={Rightimg}
  alt="Right Cloud"
  className="absolute right-[3%] top-[25%] w-16 sm:w-20 md:w-28 lg:w-32 h-auto object-contain z-20"
/>

        {/* Content Wrapper */}
        <div className="relative z-30 flex flex-col items-center text-center">

          {/* Heading */}
          <h2 className="text-xl md:text-3xl font-extrabold text-white mb-8 tracking-wide max-w-2xl leading-tight">
            {buyNowData.heading} <br /> {buyNowData.subHeading}
          </h2>

          {/* Payment Icons Row */}
          <div className="flex items-center justify-center gap-4 mb-4">
            {buyNowData.paymentMethods.map((method) => (
              <div
                key={method.id}
                className="bg-white rounded-md flex items-center justify-center border-2 border-gray-300 shadow-md overflow-hidden p-1 w-20 h-14"
              >
                <img
                  src={method.image}
                  alt={method.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Moonshot Text */}
          <p className="text-sm text-white mb-8 tracking-widest font-semibold">
            {buyNowData.footerText}
          </p>

          {/* Buy Now Button */}
          <button className="bg-[#FFD000] text-black font-black text-lg md:text-xl py-3 px-12 rounded-xl border-2 border-black shadow-[4px_4px_0px_rgba(255,255,255,0.2)] hover:bg-yellow-400 active:translate-y-[2px] active:shadow-none transition-all">
            {buyNowData.buttonText}
          </button>

        </div>
      </div>

    </section>
  );
};

export default BuyNowSection;
 