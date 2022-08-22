import React from 'react';
import Homeinnerpage from '../InnerPages/HomeInnerpage/Homeinnerpage';
import InnerAbout from '../InnerPages/AboutInnerpages/InnerAbout';
import Service from '../InnerPages/HomeInnerpage/Service';
import InnerSupport from '../InnerPages/HomeInnerpage/InnerSupport';
import InnerPlatform from '../InnerPages/HomeInnerpage/InnerPlatform';
import InnerPricing from '../InnerPages/HomeInnerpage/InnerPricing';
import Footer from '../InnerPages/HomeInnerpage/Footer';


const HomePage = () => {
  return (
    <>
    <Homeinnerpage />
    {/* <Service /> */} 
    <InnerAbout />
    <InnerSupport />
    <InnerPlatform /> 
    <InnerPricing />
    <Footer />
  
    </>
 
  )
}

export default HomePage

