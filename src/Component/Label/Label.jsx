import React from 'react';

const MarqueeLabel = () => {
  return (
    // Wrapper to hide overflow and handle spacing
    <div className="w-full py-12 overflow-hidden relative z-20 bg-transparent">
      
    
      <div className="w-[115%] -ml-[7.5%] bg-[#FFD000] border-y-[4px] border-black py-4 transform rotate-[3deg] flex justify-center items-center shadow-lg">
        
        {/* Text Container - Zoomed in text */}
        <div className="flex items-center gap-10 font-bold px-4 whitespace-nowrap">
          
          {/* Text size badha kar text-3xl md:text-4xl kiya gaya hai */}
          <span className="text-black font-extrabold text-3xl md:text-4xl uppercase tracking-wider">
            DOGCOIN OFFICIAL
          </span>
          
          <span className="text-black font-black text-3xl md:text-4xl">-</span>
          
          <span className="text-black font-extrabold text-3xl md:text-4xl uppercase tracking-wider">
            $DOGCOIN OFFICIAL
          </span>
          
          <span className="text-black font-black text-3xl md:text-4xl">-</span>
          
          <span className="text-black font-extrabold text-3xl md:text-4xl uppercase tracking-wider">
            DOGCOIN OFFICIAL
          </span>

        </div>
      </div>
    </div>
  );
};

export default MarqueeLabel;