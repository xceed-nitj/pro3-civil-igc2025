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

  // Calculate the remaining time until the specified date
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-12-27T00:00:00"); // December 27, 2025
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
  });

  return (
    <div className="relative min-h-screen bg-cover bg-center p-2 md:p-4 pt-10 mt-10 ml-4 md:ml-32">
      <div className="info md:flex md:flex-col mt-4 text-bold">
        <p className="date text-pink-600 font-semibold text-2xl md:text-3xl">DECEMBER 27-30, 2025 | NITJ</p>
        <p className="ii text-3xl md:text-5xl font-bold mt-2 md:mt-4">Indian Geotechnical</p>
        <p className="chem text-5xl md:text-7xl font-bold">CONFERENCE</p>
        <p className="ii text-3xl md:text-5xl font-bold">2024</p>
        <br />
        <div className="info0 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-1 md:p-3 text-center rounded-full mt-2 md:mt-4 max-w-[500px]" >
          <p className="text-lg md:text-2xl">Role of Chemical Engineering towards Development and Atmanirbhar bharat</p>
        </div>
      </div>
      <br />
      <div className="button flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 ml-4 md:ml-20 mt-7">
        <div className="register bg-pink-500 px-6 text-white py-0.5 md:p-3 rounded-lg flex justify-center items-center hover:scale-110 transition-transform text-xl">Register</div>
        <div className="view bg-white text-pink-500 py-0.5 px-6 border border-pink-500 p-3 md:p-3 rounded-lg flex justify-center items-center hover:scale-110 transition-transform text-xl">View Details</div>
      </div>
   
      <div className="organi md:flex md:flex-row md:items-center md:mt-2 ml-4">
        <p className="by font-semibold text-pink-500">
          <br />
          <br />
          Organized by:</p>

        <div className="ml-4 flex flex-col justify-center">
        <br />
          <p className="iic font-bold">
          <br />
            Indian Institute of Chemical Engineers,<br /><span>Doaba Regional Centre NIT JALANDHAR</span></p>
        </div>
      </div>
      
      {/* Countdown Timer */}
      <div className="countdown-container mt-4 text-2xl text-white flex items-end absolute bottom-14 md:bottom-20 right-6 md:right-10 space-x-4 hidden md:flex" style={{backgroundColor: 'rgba(255, 192, 203, 0.6)', borderRadius: '10px', padding: '10px', maxWidth: '300px', paddingLeft: '10px', paddingRight: '10px'}}>
        <div className="countdown-item border-r border-white pr-4">
          <div className="font-semibold">{timeLeft.days}</div>
          <div>Days</div>
        </div>
        <div className="countdown-item border-r border-white pr-4">
          <div className="font-semibold">{timeLeft.hours}</div>
          <div>Hrs</div>
        </div>
        <div className="countdown-item border-r border-white pr-4">
          <div className="font-semibold">{timeLeft.minutes}</div>
          <div>Mins</div>
        </div>
        <div className="countdown-item">
          <div className="font-semibold">{timeLeft.seconds}</div>
          <div>Sec</div>
        </div>
      </div>

      <div className="photo-animation absolute top-30 md:top-20 right-100 md:right-60 w-96 h-96 md:w-160 md:h-160 rounded-full shadow-lg overflow-hidden hidden md:block">
        <img src={photos[currentPhotoIndex]} alt="Photo" className="w-full h-full object-cover rounded-full transition-opacity duration-500 ease-in-out" />
      </div>
    </div>
  ); 
};

export default HeroSection;
