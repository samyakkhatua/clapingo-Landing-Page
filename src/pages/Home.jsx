import { useEffect, useState } from "react";
import { useNavigate  } from 'react-router-dom';

import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Navbar from "../components/Navbar/Navbar";
import Offer from "../components/Offer/Offer";
import Stats from "../components/Stats/Stats";

function Home() {
  const [authenticated, setauthenticated] = useState(false);
  let navigate = useNavigate();

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
      {!authenticated && (
        navigate('/user')
      )

      }
      {authenticated && (
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
