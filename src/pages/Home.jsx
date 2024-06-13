import '../global.css'; // Adjust the path if necessary
import Timeline from "../components/Timeline";
import OurEvents from "../components/OurEvents";
import HeroSection from "../components/HeroSection";
// import Speakers from "../components/SpeakerSection/Speakers";
import Footer from "../components/Footer";
import AboutNITJ from "../components/AboutNITJ";
import AboutNews from "../components/AboutNews";
import SponsorShip from "../components/Sponsorship";
import { useEffect, useState } from "react";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";

function Home(props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen width is less than 768px (typical mobile screen width)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Listen to resize events to update the state
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Scroll to the top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center p-2 md:p-4 pt-10 -mt-5 md:mt-0"
        style={{
          backgroundImage: isMobile ? "url('background.png')" : "url('22.png')",
          backgroundSize: "cover", // Ensure the image covers the entire background
          backgroundRepeat: "no-repeat", // Prevent the image from repeating
          backgroundPosition: "center", // Center the background image
        }}
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
