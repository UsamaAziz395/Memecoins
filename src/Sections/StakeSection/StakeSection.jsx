import React from 'react';
import StakeCard from '../../Component/StakeCard/StakeCard';
import { stakeData } from '../../Data/stakeData';
import MarqueeLabel from '../../Component/Label/Label';
import DarkLabel from '../../Component/Darklabel/Darklabel';

import cloudleft from '../../assets/images/main/cloudleft.png';
import cloudright from '../../assets/images/main/cloudright.png';

const StakeSection = () => {
  return (
    <section className="relative w-full min-h-[80vh] bg-[#FAFAFA] flex flex-col items-center pb-8 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-[url('/path-to-bg-pattern.png')] opacity-20 pointer-events-none"></div>
      </div>

      {/* Left Cloud - Hidden on mobile (hidden md:block) */}
      <img
        src={cloudleft}
        alt="Left Cloud"
        className="hidden md:block absolute top-[12%] left-[-2%] w-20 sm:w-24 md:w-28 lg:w-36 h-auto object-contain z-[5]"
      />

      {/* Right Cloud - Hidden on mobile (hidden md:block) */}
      <img
        src={cloudright}
        alt="Right Cloud"
        className="hidden md:block absolute top-[15%] right-[-1%] w-20 sm:w-24 md:w-28 lg:w-36 h-auto object-contain z-[5]"
      />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center pt-16 pb-6 px-4 flex-grow">

        {/* Top Text Area */}
        <div className="text-center max-w-2xl mb-8">

          <h2
            className="text-3xl md:text-5xl font-black text-white uppercase tracking-widest mb-4"
            style={{
              WebkitTextStroke: '3px black',
              textShadow: '4px 4px 0px rgba(0,0,0,1)'
            }}
          >
            Stake and earn
          </h2>

          <p className="text-black font-semibold text-xs md:text-sm leading-relaxed">
            The day had begun on a bright note. The sun finally peeked through the rain for the first time in a week, and the birds were singing in its warmth. There was no way to anticipate what was about to happen. It was a worst-case scenario and there was no way out of it.
          </p>

        </div>

        {/* Cards Container */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8">

          {stakeData.map((data) => (
            <StakeCard
              key={data.id}
              apr={data.apr}
              duration={data.duration}
              image={data.image}
              inputPlaceholder={data.inputPlaceholder}
            />
          ))}

        </div>

      </div>

      {/* Labels Area - Overlapping Style */}
      <div className="relative w-full z-30 -mb-16 md:-mb-20 flex flex-col items-center justify-center mt-8">
        
        {/* Dark Label (Nichey/Background) */}
        <div className="w-full relative z-10 translate-y-10 md:translate-y-14">
          <DarkLabel />
        </div>

        {/* Yellow Marquee Label (Upar/Foreground) */}
        <div className="w-full relative z-20 -mt-12 md:-mt-16">
          <MarqueeLabel />
        </div>

      </div>

    </section>
  );
};

export default StakeSection;