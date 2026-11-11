import React, { useState } from 'react';

const ContractAddress = () => {
  const [isCopied, setIsCopied] = useState(false);
  const address = "4S94Bfgd8f235dHklO4JfkXs51tPump";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // 2 second baad wapas "Copy" ho jaye
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-4">
      
      {/* Heading */}
      <h3 className="text-2xl md:text-3xl font-extrabold text-black mb-4">
        Solana Contract Address
      </h3>

      {/* Input & Button Wrapper */}
      <div className="w-full max-w-2xl flex items-center bg-white border-[2.5px] border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_rgba(0,0,0,0.15)]">
        
        {/* Address Text */}
        <input 
          type="text" 
          readOnly 
          value={address}
          className="flex-grow px-4 py-3 md:py-4 text-base md:text-lg font-semibold text-black outline-none bg-transparent"
        />

        {/* Copy Button */}
        <button 
          onClick={handleCopy}
          className="bg-[#FFD000] text-black font-extrabold text-lg px-6 md:px-8 py-3 md:py-4 border-l-[2.5px] border-black hover:bg-yellow-400 transition-colors h-full"
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </button>

      </div>
    </div>
  );
};

export default ContractAddress;