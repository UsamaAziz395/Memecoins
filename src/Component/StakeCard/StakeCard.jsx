import React from 'react';

const StakeCard = ({ apr, duration, image, inputPlaceholder }) => {
  return (
    <div className="w-full max-w-[340px] md:max-w-[400px] mx-auto bg-white rounded-[20px] md:rounded-[24px] border-[3px] border-black overflow-hidden flex flex-col shadow-[6px_6px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)]">
      
      <div className="w-full bg-[#FFD000] h-48 md:h-64 flex justify-center items-end border-b-[3px] border-black relative">
        <img 
          src={image} 
          alt="Staking Mascot" 
          className="h-[85%] md:h-[90%] object-contain z-10" 
        />
      </div>

      <div className="p-4 md:p-6 flex flex-col gap-3 md:gap-4">
        
        <div className="flex justify-between items-center">
          <h3 className="text-xl md:text-3xl font-black text-black">
            {apr} APR
          </h3>
          <span className="text-gray-700 font-bold text-xs md:text-base">
            {duration}
          </span>
        </div>

        <input 
          type="text" 
          placeholder={inputPlaceholder} 
          className="w-full bg-[#E5E5E5] text-gray-800 font-semibold px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl outline-none focus:ring-2 focus:ring-black placeholder-gray-500 text-sm md:text-base"
        />

        <button className="w-full bg-[#FFD000] text-black font-black text-base md:text-lg py-2.5 md:py-3 rounded-lg md:rounded-xl border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 active:translate-y-[2px] active:shadow-none transition-all mt-1 md:mt-2">
          Stake
        </button>

      </div>
    </div>
  );
};

export default StakeCard;