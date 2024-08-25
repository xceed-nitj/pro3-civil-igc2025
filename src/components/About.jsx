import { useState, useEffect } from 'react';
import AboutNews from "../components/AboutNews";

const About = (props) => {
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
    <section
      className="relative bg-cover bg-center text-black py-16 flex flex-col justify-center items-center h-screen"
      style={{ backgroundImage: 'url(123civilconabout.png)' }}
    >
      <div className="flex flex-col items-center mt-12">
        {/* About Heading */}
        <h1 className="text-purple-500 text-4xl font-bold uppercase mt-40 mb-2 sm:mb-4 text-center">
          About
        </h1>
        
        {/* Photo Animation */}
        <div className="photo-animation w-24 h-24 sm:w-30 sm:h-30 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full shadow-lg overflow-hidden mx-auto flex justify-center items-center mb-4">
          <img
            src={photos[currentPhotoIndex]}
            alt="Photo"
            className="w-full h-full object-cover rounded-full transition-opacity duration-500 ease-in-out"
          />
        </div>
        
        {/* Conference Title */}
        <h3 className="text-4xl font-bold text-center mb-4">
          Indian Geotechnical CONFERENCE 2024
        </h3>
        
        {/* Description Paragraph */}
        <p className="text-base max-w-3xl mx-auto leading-relaxed text-center -mb-32">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec dapibus orci. Interdum et malesuada fames ac ante ipsum primis in faucibus...
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        
        {/* AboutNews Component */}
        <div className="w-full flex justify-center items-center mb-16">
          <AboutNews confid={props.confId} />
        </div>
      </div>
    </section>
  );
};

export default About;
