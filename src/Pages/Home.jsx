import React from 'react'
import About from '../Pages/About';
import CommunitySection from '../Sections/Community/Community';
import HeroSection from '../Sections/Hero/Hero';
import Address from '../Component/Address/Address'
import Footer from '../Sections/Footer/Footer';
import TokenomicsSection from '../Sections/TokenomicsSection/TokenomicsSection';
import StakeSection from '../Sections/StakeSection/StakeSection'
import BuyNowSection from '../Sections/BuyNowSection/BuyNowSection';
import SwapSection from '../Sections/SwapSection/SwapSection';

function Home() {
  return (
    <div>
      <HeroSection />
        <About />
        <SwapSection />
        <TokenomicsSection />    
        <StakeSection />
        <BuyNowSection />
   <CommunitySection />
    <Address />
        <Footer />

        
      
    </div>
  )
}

export default Home
