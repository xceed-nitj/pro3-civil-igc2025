import Timeline from "../components/Timeline";
import OurEvents from "../components/OurEvents";
import HeroSection from "../components/HeroSection";
// import Speakers from "../components/SpeakerSection/Speakers";
import Footer from "../components/Footer";
import AboutNITJ from "../components/AboutNITJ";
import AboutNews from "../components/AboutNews";
import SponsorShip from "../components/Sponsorship";
import { useEffect } from "react";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";

function Home(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center p-2 md:p-4 pt-10 -mt-4 md:mt-0" // Adjust margin-top for mobile view
        style={{ backgroundImage: "url('1.png')" }}
      >
        <div className="top-0 w-screen z-40">
          <Navbar />
        </div>
        <HeroSection confid={props.confId} />
      </div>
      <AboutNews confid={props.confId} />
      <Slider confid={props.confId} />
      <Timeline confid={props.confId} />
      {/* <Speakers /> */}
      <OurEvents confid={props.confId} />
      <AboutNITJ confid={props.confId} />
      <SponsorShip confid={props.confId} />
      <Footer />
    </>
  );
}

export default Home;
