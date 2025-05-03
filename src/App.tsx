import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Specifications from './components/Specifications';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import OrderSection from './components/OrderSection';
import Footer from './components/Footer';


function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <HeroSection />
        <Features />
        <Specifications />
        <Testimonials />
        <FAQ />
        <OrderSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;