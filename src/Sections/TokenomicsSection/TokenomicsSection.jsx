
import React from 'react';
import TokenDetailCard from '../../Component/TokenDetailCard/TokenDetailCard';
import { tokenomicsData } from '../../Data/tokenomicsData';
import Heroimg from '../../assets/images/Hero/Heroimg.png';

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts';

const COLORS = [
  '#FFD000',
  '#FFA500',
  '#FFF8DC',
  '#FFE066'
];

const TokenomicsSection = () => {
  const leftCards = tokenomicsData.filter(
    (item) => item.side === 'left'
  );

  const rightCards = tokenomicsData.filter(
    (item) => item.side === 'right'
  );

  const chartData = tokenomicsData.map((item, index) => ({
    name: item.title,
    value: Number(String(item.percent).replace('%', '')) || 25,
    color: COLORS[index % COLORS.length]
  }));

  return (
    <section className="relative w-full min-h-screen bg-[#111111] flex flex-col items-center font-sans overflow-hidden">

      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center pt-24 pb-12">

        <h2
          className="text-4xl md:text-5xl font-black text-white uppercase mb-12 relative z-10 tracking-widest"
          style={{
            WebkitTextStroke: '2px black',
            textShadow: '3px 3px 0px rgba(0,0,0,1)'
          }}
        >
          Tokenomics
        </h2>

        <div className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0 z-10">

          {/* Left Cards */}
          <div className="flex flex-col gap-10 w-full lg:w-1/3 lg:items-end lg:pr-8 z-20">

            {leftCards.map((card) => (
              <div
                key={card.id}
                className="relative w-fit max-w-full
                after:hidden lg:after:block
                after:absolute after:top-1/2 after:-right-8
                after:w-8 after:h-[2px]
                after:bg-[#FFD000]
                after:shadow-[0_0_8px_#FFD000]"
              >
                {/* Golden Dot */}
                <span className="hidden lg:block absolute top-1/2 -right-9 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FFD000] shadow-[0_0_10px_#FFD000] z-30" />

                <TokenDetailCard
                  title={card.title}
                  percent={card.percent}
                  description={card.description}
                  side={card.side}
                />
              </div>
            ))}

          </div>

          {/* Animated Recharts Pie Chart */}
          <div className="relative w-64 h-64 md:w-[320px] md:h-[320px] shrink-0 z-10">

            <div className="w-full h-full rounded-full border-[4px] border-black shadow-[0_0_30px_rgba(255,208,0,0.3)] overflow-hidden">

              <ResponsiveContainer width="100%" height="100%">

                <PieChart>

                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius="100%"
                    innerRadius={0}
                    paddingAngle={0}
                    stroke="#111111"
                    strokeWidth={1}
                    isAnimationActive={true}
                    animationBegin={0}
                    animationDuration={1500}
                    animationEasing="ease-out"
                    label={({ cx, cy, midAngle, outerRadius, percent }) => {
                      const RADIAN = Math.PI / 180;
                      const radius = outerRadius * 0.68;

                      const x =
                        cx + radius * Math.cos(-midAngle * RADIAN);

                      const y =
                        cy + radius * Math.sin(-midAngle * RADIAN);

                      return (
                        <text
                          x={x}
                          y={y}
                          fill="#000000"
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize={12}
                          fontWeight="bold"
                        >
                          {`${(percent * 100).toFixed(0)}%`}
                        </text>
                      );
                    }}
                  >

                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                      />
                    ))}

                  </Pie>

                </PieChart>

              </ResponsiveContainer>

            </div>

            {/* Center Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-36 md:h-36 bg-white rounded-full border-[4px] border-black flex items-center justify-center overflow-hidden z-20 shadow-inner p-1">

              <img
                src={Heroimg}
                alt="Dogecoin Mascot"
                className="w-full h-full object-contain"
              />

            </div>

          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-10 w-full lg:w-1/3 lg:items-start lg:pl-8 z-20">

            {rightCards.map((card) => (
              <div
                key={card.id}
                className="relative w-fit max-w-full
                before:hidden lg:before:block
                before:absolute before:top-1/2 before:-left-8
                before:w-8 before:h-[2px]
                before:bg-[#FFD000]
                before:shadow-[0_0_8px_#FFD000]"
              >
                {/* Golden Dot */}
                <span className="hidden lg:block absolute top-1/2 -left-9 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FFD000] shadow-[0_0_10px_#FFD000] z-30" />

                <TokenDetailCard
                  title={card.title}
                  percent={card.percent}
                  description={card.description}
                  side={card.side}
                />
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
