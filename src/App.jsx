import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Sections/Navbar/Navbar';

// Pages Import
import AboutSection from './Pages/About';
import Swap from './pages/Swap';
import HowToBuy from './pages/HowToBuy';
import Stake from './pages/Stake';
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