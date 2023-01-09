import { useEffect, useState } from "react";

import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Navbar from "../components/Navbar/Navbar";
import Offer from "../components/Offer/Offer";
import Stats from "../components/Stats/Stats";
import LoggedIn from "../pages/LoggedIn";

function Home() {
  const [authenticated, setauthenticated] = useState(false);

  useEffect(() => {
    const loggedInUserName = localStorage.getItem("username");
    const loggedInUserPass = localStorage.getItem("password");

    if (loggedInUserName && loggedInUserPass) {
      setauthenticated(true);
    }
  }, []);

  console.log(authenticated);

  return (
    <div className="">
      {authenticated && <LoggedIn />}
      {!authenticated && (
        <>
          <Navbar />
          <Hero />
          <Stats />
          <Offer />
          <HowItWorks />
        </>
      )}
    </div>
  );
}

export default Home;
