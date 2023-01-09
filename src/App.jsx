import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Navbar from "./components/Navbar/Navbar";
import Offer from "./components/Offer/Offer";
import Stats from "./components/Stats/Stats";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Stats />
      <Offer />
      <HowItWorks />
    </div>
  );
}

export default App;
