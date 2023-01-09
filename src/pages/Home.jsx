import React, {useState} from 'react'
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Navbar from "../components/Navbar/Navbar";
import Offer from "../components/Offer/Offer";
import Stats from "../components/Stats/Stats";

export default function Home() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

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
