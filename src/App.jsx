import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Component/Header';
import Footer from './Component/Footer';
import ScrollToTop from './Component/ScrollToTop';
import PageLoader from './Component/PageLoader';

const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Contact = lazy(() => import('./Pages/Contact'));
const Service = lazy(() => import('./Pages/Service'));
const ServiceDetail = lazy(() => import('./Pages/ServiceDetail'));
const Blog = lazy(() => import('./Pages/Blog'));
const BlogPost = lazy(() => import('./Pages/BlogPost'));
const Legal = lazy(() => import('./Pages/Legal'));

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-white">
        <Header />

        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Service />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/legal/:slug" element={<Legal />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
