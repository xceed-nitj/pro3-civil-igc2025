// // import  { useState, useEffect } from 'react';
// // import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// // import { RxDotFilled } from 'react-icons/rx';
// // import axios from "axios";
// // import getEnvironment from "../getenvironment";

// // function Slider(props) {
// //   const apiUrl = getEnvironment();
// //   const [slides, setSlides] = useState([]); // Initialize slides state with an empty array
// //   const confid = props.confid;
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   useEffect(() => {
// //     axios.get(`${apiUrl}/conferencemodule/images/conference/${confid}`, {
// //       withCredentials: true
// //     })
// //       .then(res => {
// //         setSlides(res.data || []); // Ensure slides is initialized even if response.data is undefined
// //         console.log(res.data);
// //       })
// //       .catch(err => console.log(err));
// //   }, [apiUrl, confid]); // Add apiUrl and confid to the dependency array

// //   useEffect(() => {
// //     // Set up an interval to call nextSlide every 15 seconds
// //     const intervalId = setInterval(() => {
// //       nextSlide();
// //     }, 2500);

// //     // Clean up the interval when the component is unmounted or on dependency change
// //     return () => clearInterval(intervalId);
// //   }, [currentIndex]);

// //   const prevSlide = () => {
// //     const isFirstSlide = currentIndex === 0;
// //     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
// //     setCurrentIndex(newIndex);
// //   };

// //   const nextSlide = () => {
// //     const isLastSlide = currentIndex === slides.length - 1;
// //     const newIndex = isLastSlide ? 0 : currentIndex + 1;
// //     setCurrentIndex(newIndex);
// //   };

// //   const goToSlide = (slideIndex) => {
// //     setCurrentIndex(slideIndex);
// //   };

// //   return (
// //      <div className="bg-transparent container space-y-8 lg:max-w-7xl mx-auto px-8 sm:px-10 lg:px-8 md:pb-5">
// //       <div className='h-[420px] w-full md:h-[520px] lg:h-[680px] m-auto py-16 relative group'>
// //         <h2 className="text-4xl text-white font-sans font-bold text-center text-gray-950 mb-5">Image Gallery</h2>
// //         {slides.length > 0 && ( // Check if slides array is not empty before accessing its properties
// //           <div
// //             style={{ backgroundImage: `url(${slides[currentIndex].imgLink})` }}
// //             className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
// //           >
// //             <div className="absolute text-2xl font-sans font-medium bottom-0 left-0 right-0 bg-black/50 text-white text-center p-2">
// //               {slides[currentIndex].name}
// //             </div>
// //           </div>
// //         )}
// //         <div className='hidden group-hover:block absolute top-[50%] -translate-x-0  left-5 text-2xl rounded-full p-2 bg-black/30 text-white hover:bg-white hover:text-black  cursor-pointer'>
// //           <BsChevronCompactLeft onClick={prevSlide} size={30} />
// //         </div>
// //         <div className='hidden group-hover:block absolute top-[50%] -translate-x-0  right-5 text-2xl rounded-full p-2 bg-black/30 text-white hover:bg-white hover:text-black  cursor-pointer'>
// //           <BsChevronCompactRight onClick={nextSlide} size={30} />
// //         </div>
// //         <div className='flex top-4 justify-center py-2'>
// //           {slides.map((slide, slideIndex) => (
// //             <div
// //               key={slideIndex}
// //               onClick={() => goToSlide(slideIndex)}
// //               className={`text-3xl cursor-pointer ${
// //                 currentIndex === slideIndex ? 'text-accent-500' : ''
// //               }`}
// //             >
// //               <RxDotFilled />
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>

// //   );
// // }

// // export default Slider;
// import { useState, useEffect } from 'react';
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { RxDotFilled } from 'react-icons/rx';
// import axios from 'axios';
// import getEnvironment from '../getenvironment';

// function Slider(props) {
//   const apiUrl = getEnvironment();
//   const [slides, setSlides] = useState([]);
//   const confid = props.confid;
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     axios
//       .get(`${apiUrl}/conferencemodule/images/conference/${confid}`, {
//         withCredentials: true,
//       })
//       .then((res) => {
//         setSlides(res.data || []);
//       })
//       .catch((err) => console.error(err));
//   }, [apiUrl, confid]);

//   useEffect(() => {
//     const intervalId = setInterval(nextSlide, 2500);
//     return () => clearInterval(intervalId);
//   }, [currentIndex]);

//   const prevSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? slides.length - 1 : prev - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === slides.length - 1 ? 0 : prev + 1
//     );
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   return (
//     <div className="relative bg-gray-100 py-8 lg:py-16">
//       <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">
//         Image Gallery
//       </h2>
//       <div className="relative max-w-full mx-auto overflow-hidden rounded-2xl">
//         {slides.length > 0 && (
//           <div
//             className="w-full h-[250px] sm:h-[350px] md:h-[420px] lg:h-[520px] bg-center bg-cover duration-500"
//             style={{ backgroundImage: `url(${slides[currentIndex].imgLink})` }}
//           >
//             <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center p-2">
//               <p className="text-sm sm:text-base">
//                 {slides[currentIndex].name}
//               </p>
//             </div>
//           </div>
//         )}
//         <div className="absolute top-1/2 -translate-y-1/2 left-5 z-10 hidden group-hover:block lg:flex items-center">
//           <button
//             className="text-2xl rounded-full p-2 bg-black/30 text-white hover:bg-white hover:text-black"
//             onClick={prevSlide}
//             aria-label="Previous Slide"
//           >
//             <BsChevronCompactLeft size={30} />
//           </button>
//         </div>
//         <div className="absolute top-1/2 -translate-y-1/2 right-5 z-10 hidden group-hover:block lg:flex items-center">
//           <button
//             className="text-2xl rounded-full p-2 bg-black/30 text-white hover:bg-white hover:text-black"
//             onClick={nextSlide}
//             aria-label="Next Slide"
//           >
//             <BsChevronCompactRight size={30} />
//           </button>
//         </div>
//         <div className="flex justify-center space-x-2 mt-4">
//           {slides.map((_, slideIndex) => (
//             <button
//               key={slideIndex}
//               onClick={() => goToSlide(slideIndex)}
//               className={`text-2xl cursor-pointer ${
//                 currentIndex === slideIndex ? 'text-accent-500' : 'text-gray-500'
//               }`}
//               aria-label={`Go to slide ${slideIndex + 1}`}
//             >
//               <RxDotFilled />
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Slider;
import { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import axios from 'axios';
import getEnvironment from '../getenvironment';

function Slider(props) {
  const apiUrl = getEnvironment();
  const confid = props.confid;
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch backend images and prepend civil.jpeg
  useEffect(() => {
    axios
      .get(`${apiUrl}/conferencemodule/images/conference/${confid}`, {
        withCredentials: true,
      })
      .then((res) => {
        const backendSlides = res.data || [];
        const staticSlide = {
          name: 'Welcome to IGC 2025',
          imgLink: '/civil.jpeg', // must be in public folder
        };
        setSlides([staticSlide, ...backendSlides]);
      })
      .catch((err) => console.error(err));
  }, [apiUrl, confid]);

  // Auto-slide effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(intervalId);
  }, [slides]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative bg-gray-100 py-8 lg:py-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">
        Image Gallery
      </h2>
      <div className="relative max-w-full mx-auto overflow-hidden rounded-2xl group">
        {slides.length > 0 && (
          <div
            className="w-full h-[250px] sm:h-[350px] md:h-[420px] lg:h-[520px] bg-center bg-cover duration-500"
            style={{ backgroundImage: `url(${slides[currentIndex].imgLink})` }}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center p-2">
              <p className="text-sm sm:text-base">{slides[currentIndex].name}</p>
            </div>
          </div>
        )}

        {/* Navigation arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-5 z-10 hidden group-hover:block">
          <button
            className="text-2xl rounded-full p-2 bg-black/30 text-white hover:bg-white hover:text-black"
            onClick={prevSlide}
            aria-label="Previous Slide"
          >
            <BsChevronCompactLeft size={30} />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-5 z-10 hidden group-hover:block">
          <button
            className="text-2xl rounded-full p-2 bg-black/30 text-white hover:bg-white hover:text-black"
            onClick={nextSlide}
            aria-label="Next Slide"
          >
            <BsChevronCompactRight size={30} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-4">
          {slides.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer ${
                currentIndex === slideIndex ? 'text-accent-500' : 'text-gray-500'
              }`}
              aria-label={`Go to slide ${slideIndex + 1}`}
            >
              <RxDotFilled />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
