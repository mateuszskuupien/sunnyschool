import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/Main/Main";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Main />
      <div className="container">
        <Title subTitle="OUR OFFER" title="How We Learn" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="GALLERY" title="Us Having Fun" />
        <Campus />
        <Title subTitle="THE STAFF" title="Meet Our Team" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get In Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
