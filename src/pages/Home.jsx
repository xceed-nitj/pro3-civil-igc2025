import '../global.css'; // Adjust the path if necessary
import Timeline from "../components/Timeline";
import OurEvents from "../components/events";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import SponsorShip from "../components/Sponsorship";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import About from '../components/About';
import { useEffect } from "react";

function Home(props) {
  useEffect(() => {
    // Scroll to the top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <div
        className="relative min-h-screen bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 text-white p-2 md:p-4 pt-10 -mt-5 md:mt-0"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      > */}
      <div
        className="relative min-h-screen bg-transparent text-white p-2 md:p-4 pt-10 -mt-5 md:mt-0"
        style={{
          backgroundImage: 'url(background1.png)', // Adjust the path if necessary
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
          <Navbar />
        <div className="top-0 w-screen z-40">

        </div>
        <HeroSection confid={props.confId} />
      </div>

      <div className="bg-white py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <About confid={props.confId} />
          <Slider confid={props.confId} />
          <Timeline confid={props.confId} />
          <OurEvents confid={props.confId} />
          <SponsorShip confid={props.confId} />
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default Home;
