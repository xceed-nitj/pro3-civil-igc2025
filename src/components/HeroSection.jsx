import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const photos = [
    'https://cgu-odisha.ac.in/wp-content/uploads/2023/05/diversityandinclusionincivilengineering3.jpg',
    'https://st.depositphotos.com/1154952/4624/i/450/depositphotos_46247795-stock-photo-engineer-working-table-plan-home.jpg',
    'https://storables.com/wp-content/uploads/2023/11/why-is-it-called-civil-engineering-1699953005.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="relative min-h-screen bg-cover bg-center p-2 md:p-4 pt-10 ml-4" style={{ backgroundImage: "url('/background.png')" }}>
      <div className="info md:flex md:flex-col">
        <p className="date text-pink-600 font-semibold text-4xl md:text-5xl" style={{ fontFamily: 'Inter' }}>DECEMBER 27-30, 2025 | NITJ</p>
        <p className="ii text-5xl md:text-6xl font-bold" style={{ fontFamily: 'Inter' }}>IIChE</p>
        <p className="chem text-7xl md:text-9xl font-bold" style={{ fontFamily: 'Inter' }}>CIVILCON</p>
        <p className="ii text-5xl md:text-6xl font-bold" style={{ fontFamily: 'Inter' }}>2025</p>
        <div className="info0 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-2 md:p-4 text-center rounded-full mt-2 md:mt-4 max-w-[500px] mx-auto md:mx-0" style={{ fontFamily: 'Inter' }}>
          <p className="text-lg md:text-2xl">Role of Chemical Engineering towards Development and Atmanirbhar bharat</p>
        </div>
      </div>
      <div className="organi md:flex md:flex-row md:items-center md:mt-2 md:space-y-2 md:space-x-0 ml-4">
        <p className="by font-light" style={{ fontFamily: 'Inter' }}>Organized by:</p>
        <div className="ml-4 flex flex-col justify-center">
          <p className="iic font-semibold" style={{ fontFamily: 'Inter' }}>Indian Institute of Chemical Engineers,<br /><span>Doaba Regional Centre NIT JALANDHAR</span></p>
        </div>
      </div>

      <div className="bg-white flex flex-col md:flex-row gap-2 md:gap-4 items-center max-w-[600px] mx-auto ml-10  bg-transparent">
        <div className="flex flex-col justify-center items-center max-w-[700px]">
          <p className="font-semibold text-center md:text-left" style={{ fontFamily: 'Inter' }}>
            <br />
            77<sup>th</sup> Annual Session
          </p>
          <img src="/logo77th.jpg" className="w-12 md:w-16" alt="" />
          <p className="font-bold text-center" style={{ fontFamily: 'Inter' }}>
            Indian Institute Of Chemical Engineers
          </p>
        </div>
        <div className="flex flex-col justify-center max-w-[500px] items-center " style={{ fontFamily: 'Inter' }}>
          <p className="font-semibold text-center md:text-left">
            <br />
            Organized At
          </p>
          <img src="/logo.png" className="w-12 md:w-16" alt="" />
          <p className="font-bold text-center" style={{ fontFamily: 'Inter' }}>
            Dr. B R Ambedkar National Institute of Technology, Jalandhar
          </p>
        </div>
      </div>

      <div className="button flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 ml-20">
        <div className="register bg-purple-700  px-5 text-white p-2 md:p-4 rounded-lg flex justify-center items-center hover:scale-110 transition-transform ml-12 text-2xl" style={{ fontFamily: 'Inter' }}>Register</div>
        <div className="view bg-white text-purple-700 py-3 border border-purple-700 p-2 md:p-4 rounded-lg flex justify-center items-center hover:scale-110 transition-transform ml-12 text-xl" style={{ fontFamily: 'Inter' }}>View Details</div>
      </div>

      <div className="contact1 flex items-center absolute text-white bottom-14 md:bottom-20 right-6 md:right-10 space-x-2">
        <FontAwesomeIcon icon={faPhone} />
        <p>+9888895253</p>
      </div>

      <div className="contact2 flex items-center text-white absolute bottom-4 md:bottom-10 right-6 md:right-10 space-x-2">
        <FontAwesomeIcon icon={faEnvelope} />
        <p>chemcon2024@gmail.com</p>
      </div>

      <div className="photo-animation absolute top-32 md:top-20 right-8 md:right-10 w-80 h-80 md:w-96 md:h-96 rounded-full shadow-lg overflow-hidden">
        <img src={photos[currentPhotoIndex]} alt="Photo" className="w-full h-full object-cover rounded-full transition-opacity duration-500 ease-in-out" />
      </div>

 </div>
  );
};

export default HeroSection;
