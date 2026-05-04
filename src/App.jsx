import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Careers from "./components/Careers";
import Analytics from "./components/Analytics";
import Work from "./components/Work";
import Gallery from "./components/Gallery";
import Sponsorship from "./components/Sponsorship";
import Footer from "./components/Footer";
import { Toaster } from "sonner";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f0] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Work />
        <Gallery />
        <Analytics />
        <Careers />
        <Sponsorship />
      </main>
      <Footer />
      <div className="grain-fixed" aria-hidden="true" />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster richColors position="bottom-right" />
    </div>
  );
}

export default App;
