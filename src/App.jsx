import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Component/Header";
import Footer from "./Component/Footer";
import ScrollToTop from "./Component/ScrollToTop";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import ServiceDetail from "./Pages/ServiceDetail";
import Blog from "./Pages/Blog";
import BlogPost from "./Pages/BlogPost";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-white">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Service />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;