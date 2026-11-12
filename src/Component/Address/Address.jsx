import React, { useState } from 'react';

const ContractAddress = () => {
  const [isCopied, setIsCopied] = useState(false);
  const address = "4S94Bfgd8f235dHklO4JfkXs51tPump";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-6">
      
      {/* Heading */}
      <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-black mb-4 text-center">
        Solana Contract Address
      </h3>

      {/* Input & Button Wrapper - Mobile par column, Desktop par row */}
      <div className="w-full max-w-2xl flex flex-col sm:flex-row items-stretch sm:items-center bg-white border-[2.5px] border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_rgba(0,0,0,0.15)]">
        
        {/* Address Text */}
        <input 
          type="text" 
          readOnly 
          value={address}
          className="w-full sm:flex-grow px-3 py-2.5 md:px-4 md:py-3 text-xs sm:text-sm md:text-base font-semibold text-black outline-none bg-transparent truncate"
        />

        {/* Copy Button - Mobile par full width, Desktop par right side */}
        <button 
          onClick={handleCopy}
          className="w-full sm:w-auto bg-[#FFD000] text-black font-extrabold text-sm md:text-lg px-4 py-2.5 md:px-8 md:py-3 border-t-[2.5px] sm:border-t-0 sm:border-l-[2.5px] border-black hover:bg-yellow-400 transition-colors whitespace-nowrap"
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </button>

      </div>
    </div>
  );
};

export default ContractAddress;