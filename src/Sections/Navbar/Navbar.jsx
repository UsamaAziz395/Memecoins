import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center pt-8 px-4 absolute top-0 z-50">
      <div className="w-full max-w-6xl bg-white rounded-2xl border-2 border-black flex items-center justify-between px-6 py-3 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-black tracking-tight">
          Dogcoin
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-14 font-bold text-black text-sm uppercase tracking-wide">
          <Link to="/about" className="hover:text-gray-600 transition-colors">About</Link>
          <Link to="/swap" className="hover:text-gray-600 transition-colors">Swap</Link>
          <Link to="/how-to-buy" className="hover:text-gray-600 transition-colors">How to Buy</Link>
          <Link to="/stake" className="hover:text-gray-600 transition-colors">Stake</Link>
          
          {/* Dropdown Menu (More) */}
          {/* Note: Abhi ke liye isko simple Link rakha hai, baad mein isme dropdown logic add kar sakte hain */}
          <Link to="/more" className="flex items-center gap-1 cursor-pointer hover:text-gray-600 transition-colors group">
            More
            <ChevronDown size={18} strokeWidth={3} className="group-hover:translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* CTA Button */}
        <div>
          <Link to="/buy">
            <button className="bg-[#FFD000] text-black font-extrabold py-2.5 px-8 rounded-lg border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 active:translate-y-[2px] active:shadow-none transition-all">
              Buy now
            </button>
          </Link>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;