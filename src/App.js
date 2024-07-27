import React from "react";
import Hero from "../src/components/Hero/Hero";
import Services from "./components/services/service";
import WheretoBuy from "./components/where to buy/wheretoBuy";
import Appbanner from "../src/components/Appbaner/Appbaner";
import Footer from "./components/footer/footer";
 const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <WheretoBuy />
      <Appbanner />
      <Footer/>
       
    </div>
  );
};

export default App;
