import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Component/Header';
import ScrollToTop from './Component/ScrollToTop';
import PageLoader from './Component/PageLoader';
import Home from './Pages/Home';

const About = lazy(() => import('./Pages/About'));
const Contact = lazy(() => import('./Pages/Contact'));
const Service = lazy(() => import('./Pages/Service'));
const ServiceDetail = lazy(() => import('./Pages/ServiceDetail'));
const Blog = lazy(() => import('./Pages/Blog'));
const BlogPost = lazy(() => import('./Pages/BlogPost'));
const Legal = lazy(() => import('./Pages/Legal'));
const Footer = lazy(() => import('./Component/Footer'));
const ChatBot = lazy(() => import('./Component/ChatBot/ChatBot'));

const useDeferredMount = (timeout = 1500) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const enable = () => setReady(true);

    if (typeof window.requestIdleCallback === 'function') {
      const idleId = window.requestIdleCallback(enable, { timeout });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(enable, timeout);
    return () => window.clearTimeout(timeoutId);
  }, [timeout]);

  return ready;
};

const FooterSlot = ({ children }) => (
  <div className="min-h-[1600px] bg-brand-dark" aria-hidden={children ? undefined : true}>
    {children}
  </div>
);

const DeferredFooter = () => {
  const ready = useDeferredMount(1200);
  if (!ready) return <FooterSlot />;

  return (
    <FooterSlot>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </FooterSlot>
  );
};

const DeferredChatBot = () => {
  const ready = useDeferredMount(3500);
  if (!ready) return null;

  return (
    <Suspense fallback={null}>
      <ChatBot />
    </Suspense>
  );
};

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

        <DeferredFooter />
        <DeferredChatBot />
      </div>
    </BrowserRouter>
  );
};

export default App;
