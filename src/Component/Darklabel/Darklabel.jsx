import React from 'react';

const DarkLabel = () => {
  return (
    <div className="w-full py-12 overflow-hidden relative z-20 bg-transparent">
      
      {/* Direction change: rotate-[-3deg] lagaya hai taaki left-bottom se right-top jaye */}
      <div className="w-[115%] -ml-[7.5%] bg-black border-y-[4px] border-white/30 py-4 transform rotate-[-3deg] flex justify-center items-center shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
        
        <div className="flex items-center gap-10 font-bold px-4 whitespace-nowrap">
          
          <span className="text-white font-extrabold text-3xl md:text-4xl uppercase tracking-wider">
            DOGCOIN OFFICIAL
          </span>
          
          <span className="text-white font-black text-3xl md:text-4xl">-</span>
          
          <span className="text-white font-extrabold text-3xl md:text-4xl uppercase tracking-wider">
            $DOGCOIN OFFICIAL
          </span>
          
          <span className="text-white font-black text-3xl md:text-4xl">-</span>
          
          <span className="text-white font-extrabold text-3xl md:text-4xl uppercase tracking-wider">
            DOGCOIN OFFICIAL
          </span>

        </div>
      </div>
    </div>
  );
};

export default DarkLabel;