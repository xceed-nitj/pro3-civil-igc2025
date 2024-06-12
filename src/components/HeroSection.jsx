// import { useState, useEffect } from 'react';
// import 'tailwindcss/tailwind.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// const HeroSection = () => {
//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
//   const photos = [
//     'https://cgu-odisha.ac.in/wp-content/uploads/2023/05/diversityandinclusionincivilengineering3.jpg',
//     'https://st.depositphotos.com/1154952/4624/i/450/depositphotos_46247795-stock-photo-engineer-working-table-plan-home.jpg',
//     'https://storables.com/wp-content/uploads/2023/11/why-is-it-called-civil-engineering-1699953005.jpg'
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [photos.length]);

//   return (
//     <div className="relative min-h-screen bg-cover bg-center p-2 md:p-4 pt-10 mt-20 ml-4 md:ml-32">
//       <div className="info md:flex md:flex-col mt-4">
//         <p className="date text-pink-600 font-semibold text-2xl md:text-3xl">DECEMBER 27-30, 2025 | NITJ</p>
//         <p className="ii text-3xl md:text-5xl font-bold mt-2 md:mt-4">Indian Geotechnical</p>
//         <p className="chem text-5xl md:text-7xl font-bold">CONFERENCE</p>
//         <p className="ii text-3xl md:text-5xl font-bold">2024</p>
//         <br />
//         <div className="info0 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-1 md:p-3 text-center rounded-full mt-2 md:mt-4 max-w-[500px] " style={{ fontFamily: 'Inter' }}>
//           <p className="text-lg md:text-2xl">
          
//             Role of Chemical Engineering towards Development and Atmanirbhar bharat</p>
//         </div>
//       </div>

//       <div className="organi md:flex md:flex-row md:items-center md:mt-2 ml-4">
//         <p className="by font-light">
//           <br />
//           Organized by:</p>
//         <div className="ml-4 flex flex-col justify-center">
//           <p className="iic font-semibold">
//             <br />
//             Indian Institute of Chemical Engineers,<br /><span>Doaba Regional Centre NIT JALANDHAR</span></p>
//         </div>
//       </div>

//       <div className="button flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 ml-4 md:ml-20 mt-7">
//         <div className="register bg-pink-500 px-6 text-white py-0.5 md:p-3 rounded-lg flex justify-center items-center hover:scale-110 transition-transform text-xl">Register</div>
//         <div className="view bg-white text-pink-500 py-0.5 px-6 border border-pink-500 p-3 md:p-3 rounded-lg flex justify-center items-center hover:scale-110 transition-transform text-xl">View Details</div>
//       </div>

//       <div className="bg-transparent flex flex-col md:flex-row gap-2 md:gap-4 items-center max-w-[600px] mt-5 ml-4 md:ml-20">
//         <div className="flex flex-col justify-center items-center max-w-[700px]">
//           <p className="font-semibold text-center">77<sup>th</sup> Annual Session</p>
//           <img src="/logo77th.jpg" className="w-12 md:w-16" alt="" />
//           <p className="font-bold text-center">Indian Institute Of Chemical Engineers</p>
//         </div>
//         <div className="flex flex-col justify-center max-w-[500px] items-center">
//           <p className="font-semibold text-center">Organized At</p>
//           <img src="/logo.png" className="w-12 md:w-16" alt="" />
//           <p className="font-bold text-center">Dr. B R Ambedkar National Institute of Technology, Jalandhar</p>
//         </div>
//       </div>
//       <div className="contact1 flex items-center absolute text-white bottom-14 md:bottom-20 right-6 md:right-10 space-x-2 hidden md:flex">
//         <FontAwesomeIcon icon={faPhone} />
//         <p>+9888895253</p>
//       </div>

//       <div className="contact2 flex items-center text-white absolute bottom-4 md:bottom-10 right-6 md:right-10 space-x-2 hidden md:flex">
//         <FontAwesomeIcon icon={faEnvelope} />
//         <p>chemcon2024@gmail.com</p>
//       </div>


//       {/* Conditionally render the photo animation */}
//       <div className="photo-animation absolute top-5 md:top-3 right-5 md:right-20 w-60 h-60 md:w-80 md:h-80 rounded-full shadow-lg overflow-hidden hidden md:block">
//         <img src={photos[currentPhotoIndex]} alt="Photo" className="w-full h-full object-cover rounded-full transition-opacity duration-500 ease-in-out" />
//       </div>
//     </div>
//   ); 
// };

// export default HeroSection;

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
<br />
     
      <div className="contact1 flex items-center absolute text-white bottom-14 md:bottom-20 right-6 md:right-10 space-x-2 hidden md:flex">
        <FontAwesomeIcon icon={faPhone} />
        <p>+9888895253</p>
      </div>

      <div className="contact2 flex items-center text-white absolute bottom-4 md:bottom-10 right-6 md:right-10 space-x-2 hidden md:flex">
        <FontAwesomeIcon icon={faEnvelope} />
        <p>chemcon2024@gmail.com</p>
      </div>
      <div className="photo-animation absolute top-30 md:top-20 right-100 md:right-20 w-96 h-96 md:w-120 md:h-120 rounded-full shadow-lg overflow-hidden hidden md:block">
  <img src={photos[currentPhotoIndex]} alt="Photo" className="w-50% h-full object-cover rounded-full transition-opacity duration-500 ease-in-out" />
</div>



    </div>
  ); 
};

export default HeroSection;
