import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import HomeIcon from "@mui/icons-material/Home";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer";
import NotFound from "./components/404/NotFound";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../src/pages/Home";
import AboutUs from "../src/pages/AboutUs";
import Faqs from "../src/pages/Faqs";
import Blog from "../src/pages/Blog";
import Madagascars from "./pages/Madagascars";
import GalleryPhoto from "./components/GalleryPhoto";
import Tour from "../src/pages/Tour";
import Contact from "./pages/Contact";
import BaobabSafari from "./components/Tours/BaobabSafari";
import DivingTour from "./components/Tours/DivingTour";
import TourHighlightsCard from "./components/TourHighlightsCard";
import TermOfCondition from "./components/TermOfCondition";
import DryDeciduousBirding from "./components/Tours/DryDeciduousBirding";
import EasternWonder from "./components/Tours/EasternWonder";
import IndriEncouter from "./components/Tours/IndriEncouter";
import MadaNorthernSafari from "./components/Tours/MadaNorthernSafari";
import MadaSouthernSafari from "./components/Tours/MadaSouthernSafari";
import MalagasyCultureDiscovery from "./components/Tours/MalagasyCultureDiscovery";
import PostWeddingSafari from "./components/Tours/PostWeddingSafari";
import RainForestBirding from "./components/Tours/RainForestBirding";
import RiverTrip from "./components/Tours/RiverTrip";
import SouthernTrekking from "./components/Tours/SouthernTrekking";
import TanaSurrounding from "./components/Tours/TanaSurrounding";
import VanillaCruise from "./components/Tours/VanillaCruise";
import OnePost from "./components/Blog/OnePost";
// import AllPosts from "./components/Blog/AllPosts";
import MainLayout from "./components/MainLayout/MainLayout";
import AllArticles from "./components/Blog/AllArticles";



function App(props) {
  return (
    <div className="App">
      
     
      <Router>
        <Routes>
          <Route path="*" element={<NoMatch />} />

          <Route exact path="/" element={<MainLayout />}>
            <Route exact index element={<Home {...props} />} />

            <Route exact path="AboutUs" element={<AboutUs {...props} />} />
            <Route exact path="Faqs" element={<Faqs {...props} />} />
            <Route
              exact
              path="Madagascars"
              element={<Madagascars {...props} />}
            />
            <Route
              exact
              path="GalleryPhoto"
              element={<GalleryPhoto {...props} />}
            />
            <Route path="Tour" element={<Tour {...props} />}>
              <Route index element={<TourHighlightsCard />} />
              <Route path="safari" element={<BaobabSafari />} />
              <Route path="diving-tour" element={<DivingTour />} />
              <Route
                path="dry-deciduous-birding"
                element={<DryDeciduousBirding />}
              />
              <Route path="eastern-wonder" element={<EasternWonder />} />
              <Route path="indri-encouter" element={<IndriEncouter />} />
              <Route
                path="mada-northern-safari"
                element={<MadaNorthernSafari />}
              />
              <Route
                path="mada-southern-safari"
                element={<MadaSouthernSafari />}
              />
              <Route
                path="malagasy-culture-discovery"
                element={<MalagasyCultureDiscovery />}
              />
              <Route
                path="post-wedding-safari"
                element={<PostWeddingSafari />}
              />
              <Route
                path="rainforest-birding"
                element={<RainForestBirding />}
              />
              <Route path="river-trip" element={<RiverTrip />} />
              <Route path="southern-trekking" element={<SouthernTrekking />} />
              <Route path="tana-surrounding" element={<TanaSurrounding />} />
              <Route path="vanilla-cruise" element={<VanillaCruise />} />
            </Route>
            <Route exact path="Contact" element={<Contact {...props} />} />
            <Route
              exact
              path="term-of-condition"
              element={<TermOfCondition {...props} />}
            />
            <Route exact path="blog" element={<Blog {...props} />}>
              <Route exact index element={<AllArticles />} />
              <Route exact path=":slug" element={<OnePost />} />
            </Route>
          </Route>
        </Routes>
        
        <Footer />
      </Router>

      <MessengerCustomerChat pageId="169223953712845" appId="985211278867130" />
    </div>
  );
}

export default App;

function NoMatch() {
  return (
    <div className="NotFoundBody">
      <h2 className="text-light text-center">
        Nothing to see here!{" "}
        <span role="img" aria-label="halako zao">
          😝
        </span>{" "}
      </h2>
      <p className="GoHome">
        <Link className="btn BtnBookNow GoHome" to="/">
          {" "}
          <HomeIcon /> Go back to home
        </Link>
      </p>

      <NotFound />
    </div>
  );
}
