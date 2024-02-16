import React from 'react';
import Navbar from './navbar';
import Header from './Header';
import HowItWorks from './HowItWorks';
import AboutUs from './AboutUs';
import Services from './Services';

const App = () => {
  return (
    <>
       <Navbar/>
       <Header/>
       <HowItWorks/>
       <AboutUs/>
       <Services/>
    </>
  )
};

export default App;