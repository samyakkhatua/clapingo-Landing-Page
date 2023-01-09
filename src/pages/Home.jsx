import React from 'react'
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Navbar from "../components/Navbar/Navbar";
import Offer from "../components/Offer/Offer";
import Stats from "../components/Stats/Stats";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Stats />
      <Offer />
      <HowItWorks />
    </div>
  )
}
