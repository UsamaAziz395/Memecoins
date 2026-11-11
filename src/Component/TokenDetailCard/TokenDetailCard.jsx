import React from 'react';

const TokenDetailCard = ({ title, description, side }) => {
  // Agar side 'right' hai to left align, agar 'left' hai to right align (desktop par)
  const alignmentClass = side === 'right' 
    ? 'lg:text-left lg:items-start' 
    : 'lg:text-right lg:items-end';
  
  return (
    // Border hata diya gaya hai, sirf bg aur blur hai
    <div className={`relative w-full max-w-[280px] bg-black/40 backdrop-blur-sm p-4 text-white flex flex-col ${alignmentClass} text-left lg:text-inherit`}>
      
      {/* Title */}
      <div className={`flex items-center gap-2 mb-2 w-full ${side === 'right' ? 'lg:justify-start' : 'lg:justify-end'} justify-start`}>
        <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
      </div>
      
      {/* Paragraph */}
      <p className="text-xs md:text-sm text-gray-300 leading-relaxed w-full">
        {description}
      </p>
    </div>
  );
};

export default TokenDetailCard;