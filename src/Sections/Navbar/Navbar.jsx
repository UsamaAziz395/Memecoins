import React, { useState } from 'react';
// React Icons se icons import kiye
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex justify-center pt-8 px-4 absolute top-0 z-50">
        <div className="w-full max-w-6xl bg-white rounded-2xl border-2 border-black flex items-center justify-between px-6 py-3 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold text-black tracking-tight">
            Dogcoin
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-14 font-bold text-black text-sm uppercase tracking-wide">
            <Link to="/about" className="hover:text-gray-600 transition-colors">About</Link>
            <Link to="/swap" className="hover:text-gray-600 transition-colors">Swap</Link>
            <Link to="/how-to-buy" className="hover:text-gray-600 transition-colors">How to Buy</Link>
            <Link to="/stake" className="hover:text-gray-600 transition-colors">Stake</Link>
            <Link to="/more" className="flex items-center gap-1 cursor-pointer hover:text-gray-600 transition-colors group">
              More
              <FaChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link to="/buy">
              <button className="bg-[#FFD000] text-black font-extrabold py-2.5 px-8 rounded-lg border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 active:translate-y-[2px] active:shadow-none transition-all">
                Buy now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <button 
            className="md:hidden text-black p-1"
            onClick={() => setIsOpen(true)}
          >
            <FaBars size={24} />
          </button>
          
        </div>
      </nav>

      {/* --- MOBILE SIDEBAR OVERLAY --- */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* --- MOBILE SIDEBAR PANEL --- */}
      <div 
        className={`fixed top-0 right-0 h-full w-[75vw] max-w-sm bg-white z-[70] flex flex-col pt-6 px-6 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header with Logo and Close Button */}
        <div className="flex justify-between items-center mb-10 border-b-2 border-black/10 pb-4">
          <Link to="/" className="text-2xl font-extrabold text-black" onClick={() => setIsOpen(false)}>
            Dogcoin
          </Link>
          <button 
            className="text-black p-1 hover:rotate-90 transition-transform"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col gap-6 font-bold text-black text-lg uppercase tracking-wide">
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-[#FFD000] transition-colors">About</Link>
          <Link to="/swap" onClick={() => setIsOpen(false)} className="hover:text-[#FFD000] transition-colors">Swap</Link>
          <Link to="/how-to-buy" onClick={() => setIsOpen(false)} className="hover:text-[#FFD000] transition-colors">How to Buy</Link>
          <Link to="/stake" onClick={() => setIsOpen(false)} className="hover:text-[#FFD000] transition-colors">Stake</Link>
          <Link to="/more" onClick={() => setIsOpen(false)} className="flex items-center justify-between hover:text-[#FFD000] transition-colors">
            More
            <FaChevronDown size={16} />
          </Link>
        </div>

        {/* Mobile CTA Button */}
        <div className="mt-10">
          <Link to="/buy" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-[#FFD000] text-black font-extrabold py-3 px-8 rounded-xl border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 active:translate-y-[2px] active:shadow-none transition-all text-lg">
              Buy now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;