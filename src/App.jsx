import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Component/Header";
import Footer from "./Component/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import ServiceDetail from "./Pages/ServiceDetail";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-white">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Service />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;