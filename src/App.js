import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import DailyPrices from './components/DailyPrices';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import SignUp from './components/SignUp';
import RoadMap from './components/RoadMap';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';




const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <DailyPrices />
      <AboutUs />
      <Services />
      <SignUp />
      <RoadMap />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App