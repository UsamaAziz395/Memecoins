import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Sections/Navbar/Navbar';

// Pages Import
import About from './pages/About';
import Swap from './pages/Swap';
import HowToBuy from './pages/HowToBuy';
import Stake from './pages/Stake';
import More from './pages/More';
import Home from './Pages/Home';

function App() {
  return (
    <div className="relative min-h-screen">
    
   

      {/* Routes Define Karein */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/how-to-buy" element={<HowToBuy />} />
        <Route path="/stake" element={<Stake />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </div>
  );
}

export default App;