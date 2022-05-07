import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navtop from './components/Navtop';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Slider from './components/Slider';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from '../src/pages/Home';
import AboutUs from '../src/pages/AboutUs';
import Faqs from '../src/pages/Faqs';
import Madagascars from './pages/Madagascars';
import Tour from '../src/pages/Tour';
import Contact from './pages/Contact';
import BaobabSafari from './components/Tours/BaobabSafari';
import DivingTour from './components/Tours/DivingTour';
import TourHighlightsCard from './components/TourHighlightsCard';
import TermOfCondition from './components/TermOfCondition';
// import Disclaimer from './components/Disclaimer';
import DryDeciduousBirding from './components/Tours/DryDeciduousBirding';
import EasternWonder from './components/Tours/EasternWonder';
import IndriEncouter from './components/Tours/IndriEncouter';
import MadaNorthernSafari from './components/Tours/MadaNorthernSafari';
import MadaSouthernSafari from './components/Tours/MadaSouthernSafari';
import MalagasyCultureDiscovery from './components/Tours/MalagasyCultureDiscovery';
import PostWeddingSafari from './components/Tours/PostWeddingSafari';
import RainForestBirding from './components/Tours/RainForestBirding';
import RiverTrip from './components/Tours/RiverTrip';
import SouthernTrekking from './components/Tours/SouthernTrekking';
import TanaSurrounding from './components/Tours/TanaSurrounding';
import VanillaCruise from './components/Tours/VanillaCruise';
import ProtocolCovid from './components/ProtocolCovid';
import ScrollToTops from './components/ScrollToTop/ScrollToTops';

function App() {
  return (

    <div className="App">
      <Router>
      
      <ScrollToTops />
        <Navtop />
        <NavBar />
        <Slider />

        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="protocol-covid" element={<ProtocolCovid />} /> 
          <Route exact path="AboutUs" element={<AboutUs />} />
          <Route exact path="Faqs" element={<Faqs />} />
          <Route exact path="Madagascars" element={<Madagascars />} />
          <Route path="Tour" element={<Tour />}>
            <Route index element={<TourHighlightsCard />} />
            <Route path='safari' element={<BaobabSafari />} />
            <Route path='diving-tour' element={<DivingTour />} />
            <Route path='dry-deciduous-birding' element={<DryDeciduousBirding />} />
            <Route path='eastern-wonder' element={<EasternWonder />} />
            <Route path='indri-encouter' element={<IndriEncouter />} />
            <Route path='mada-northern-safari' element={<MadaNorthernSafari />} />
            <Route path='mada-southern-safari' element={<MadaSouthernSafari />} />
            <Route path='malagasy-culture-discovery' element={<MalagasyCultureDiscovery />} />
            <Route path='post-wedding-safari' element={<PostWeddingSafari />} />
            <Route path='rainforest-birding' element={<RainForestBirding />} />
            <Route path='river-trip' element={<RiverTrip />} />
            <Route path='southern-trekking' element={<SouthernTrekking />} />
            <Route path='tana-surrounding' element={<TanaSurrounding />} />
            <Route path='vanilla-cruise' element={<VanillaCruise />} />

          </Route>
         
          
          <Route exact path="Contact" element={<Contact />} />
          <Route exact path="term-of-condition" element={<TermOfCondition />} />
          {/* <Route exact path="disclaimer" element={<Disclaimer />} />
          <Route exact path="condition-of-services" element={<ConditionOfService />} /> */}
          <Route  path="*" element={<NoMatch/>} />

        </Routes>


        <Footer />
      </Router>
      <MessengerCustomerChat pageId="169223953712845" appId="985211278867130"/>
    </div>

  );
}



export default App;

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>

    
  );
}