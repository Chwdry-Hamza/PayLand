import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import IndustryPage from "./pages/IndustryPage";
import ContactPage from "./pages/ContactPage";

import WhoWeAre from "./pages/WhoWeAre";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import TermsCnditions from "./pages/TremsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Cookies from "./pages/Cookies";
import InformationSecurityPolicy from "./pages/InformationSecurityPolicy";
import Company from "./pages/Company";

export default function App({ mode, toggleMode }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar mode={mode} toggleMode={toggleMode} />

      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/home" element={<Home mode={mode} toggleMode={toggleMode} />} />
          <Route path="/product/:slug" element={<Product mode={mode} toggleMode={toggleMode} />} />
          <Route path="/industry/:slug" element={<IndustryPage mode={mode} toggleMode={toggleMode} />} />
          <Route path="/contact" element={<ContactPage mode={mode} />} />
          <Route path="/company" element={<Company mode={mode} />} />

          <Route path="/terms-and-conditions" element={<TermsCnditions mode={mode} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy mode={mode} />} />
          <Route path="/Cookies" element={<Cookies mode ={mode}/>}/>
          <Route path="/Information Security Policy"element={<InformationSecurityPolicy mode={mode}/>}/>

          {/* THREE SEPARATE PAGES */}
          <Route path="/about/who-we-are" element={<WhoWeAre mode={mode} />} />
          <Route path="/about/careers" element={<Careers mode={mode} />} />
          <Route path="/about/contact" element={<ContactUs mode={mode} />} />

          <Route path="*" element={<Home mode={mode} toggleMode={toggleMode}/>} />
        </Routes>
      </div>

      <Footer mode={mode} toggleMode={toggleMode}/>
    </div>
  );
}