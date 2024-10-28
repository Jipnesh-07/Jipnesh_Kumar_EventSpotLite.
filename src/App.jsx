import React from "react";
import Header from "./components/Header";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import EventCards from "./components/EventCards";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header></Header>
        <Hero></Hero>
        <EventCards></EventCards>
        <Footer></Footer>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
