import React from 'react';

const SwapCard = ({ data }) => {
  return (
    <div className="w-full max-w-[420px] bg-white rounded-[24px] border-[3px] border-black p-6 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
      
      {/* Card Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-extrabold text-black">{data.cardHeader}</h3>
        <span className="text-[10px] font-bold text-gray-600 uppercase">{data.viaText}</span>
      </div>

      {/* You Pay Input Section */}
      <div className="mb-4">
        <label className="text-xs font-bold text-gray-500 mb-2 block">{data.youPayLabel}</label>
        <div className="w-full bg-gray-100 rounded-xl p-3 flex items-center justify-between border border-transparent hover:border-gray-300 transition-colors">
          <div className="flex items-center gap-2">
            <img src={data.payIcon} alt={data.payCurrency} className="w-6 h-6 rounded-full" />
            <input 
              type="text" 
              defaultValue={data.payAmount} 
              className="bg-transparent w-24 font-bold text-lg outline-none text-black"
            />
          </div>
          <span className="font-bold text-gray-500 text-sm">{data.payCurrency}</span>
        </div>
      </div>

      {/* You Receive Input Section */}
      <div className="mb-6">
        <label className="text-xs font-bold text-gray-500 mb-2 block">{data.youReceiveLabel}</label>
        <div className="w-full bg-gray-100 rounded-xl p-3 flex items-center justify-between border border-transparent hover:border-gray-300 transition-colors">
          <div className="flex items-center gap-2">
            <img src={data.receiveIcon} alt={data.receiveCurrency} className="w-6 h-6 rounded-full" />
            <input 
              type="text" 
              defaultValue={data.receiveAmount} 
              className="bg-transparent w-24 font-bold text-lg outline-none text-black"
            />
          </div>
          <span className="font-bold text-gray-500 text-sm">{data.receiveCurrency}</span>
        </div>
      </div>

      {/* Details Section */}
      <div className="flex flex-col gap-2 mb-6">
        {data.details.map((detail, index) => (
          <div key={index} className="flex justify-between text-xs">
            <span className="text-gray-500 font-bold">{detail.label}</span>
            <span className="text-black font-bold">{detail.value}</span>
          </div>
        ))}
      </div>

      {/* Swap Button */}
      <button className="w-full bg-[#FFD000] text-black font-black text-lg py-3 rounded-xl border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 active:translate-y-[2px] active:shadow-none transition-all">
        {data.buttonText}
      </button>

    </div>
  );
};

export default SwapCard;