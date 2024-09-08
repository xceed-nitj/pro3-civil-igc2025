import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

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

  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-12-27T00:00:00");
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return {
        days,
        hours,
        minutes,
        seconds
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="relative min-h-screen bg-cover bg-center p-4 flex flex-col md:flex-row items-center justify-center ml-0 md:ml-24 pt-20 md:pt-0">
      {/* Content Section */}
      <div className="content flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
        <p className="date text-pink-600 font-semibold text-2xl md:text-3xl">DECEMBER 27-30, 2025 | NITJ</p>
        <p className="ii text-3xl md:text-5xl font-bold mt-2 md:mt-4">Indian Geotechnical</p>
        <p className="chem text-5xl md:text-7xl font-bold">CONFERENCE</p>
        <p className="ii text-3xl md:text-5xl font-bold mt-2 md:mt-4">2024</p>
        <div className="info0 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-2 md:p-4 text-center rounded-full mt-4 max-w-lg mx-auto">
          <p className="text-lg md:text-2xl">Role of Chemical Engineering towards Development and Atmanirbhar Bharat</p>
        </div>
        <div className="button flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-8">
          <div className="register bg-pink-500 px-6 text-white py-2 md:py-3 rounded-lg flex justify-center items-center hover:scale-110 transition-transform text-xl">Register</div>
          <div className="view bg-white text-pink-500 py-2 px-6 border border-pink-500 rounded-lg flex justify-center items-center hover:scale-110 transition-transform text-xl">View Details</div>
        </div>
        <div className="organi text-center mt-8">
          <p className="by font-semibold text-pink-500">Organized by:</p>
          <p className="iic font-bold mt-2">Indian Institute of Chemical Engineers,<br /><span>Doaba Regional Centre NIT JALANDHAR</span></p>
        </div>
      </div>

      {/* Photo Animation Section */}
      <div className="photo-animation md:flex md:justify-center md:items-center md:ml-8 flex-grow">
        <div className="relative w-60 h-60 md:w-96 md:h-96 rounded-full shadow-lg overflow-hidden">
          <img src={photos[currentPhotoIndex]} alt="Photo" className="w-full h-full object-cover rounded-full transition-opacity duration-500 ease-in-out" />
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="countdown-container absolute bottom-4 right-4 p-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-opacity-50 text-white rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
        <div className="countdown-item flex flex-col items-center border-b border-white md:border-r md:border-b-0 pb-2 md:pb-0 px-4">
          <div className="font-semibold text-xl md:text-2xl">{timeLeft.days}</div>
          <div className="text-xs md:text-sm">Days</div>
        </div>
        <div className="countdown-item flex flex-col items-center border-b border-white md:border-r md:border-b-0 pb-2 md:pb-0 px-4">
          <div className="font-semibold text-xl md:text-2xl">{timeLeft.hours}</div>
          <div className="text-xs md:text-sm">Hrs</div>
        </div>
        <div className="countdown-item flex flex-col items-center border-b border-white md:border-r md:border-b-0 pb-2 md:pb-0 px-4">
          <div className="font-semibold text-xl md:text-2xl">{timeLeft.minutes}</div>
          <div className="text-xs md:text-sm">Mins</div>
        </div>
        <div className="countdown-item flex flex-col items-center pb-2 md:pb-0 px-4">
          <div className="font-semibold text-xl md:text-2xl">{timeLeft.seconds}</div>
          <div className="text-xs md:text-sm">Sec</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
