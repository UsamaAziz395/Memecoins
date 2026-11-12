import React from 'react';
import { Routes, Route } from 'react-router-dom'
import AboutSection from './Pages/About';
import Swap from './Pages/Swap';
import HowToBuy from './Pages/HowToBuy';
import Stake from './Pages/Stake';
import More from './Pages/More'
import Home from './Pages/Home';

function App() {
  return (
    <div className="relative min-h-screen">
    
   

      {/* Routes Define Karein */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/how-to-buy" element={<HowToBuy />} />
        <Route path="/stake" element={<Stake />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </div>
  );
}

export default App;