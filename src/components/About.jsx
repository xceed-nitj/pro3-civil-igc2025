import AboutNews from "../components/AboutNews";
import axios from "axios";
import getEnvironment from "../getenvironment";
import { useState, useEffect } from "react";

const About = (props) => {

  const confid = props.confid;
  const [data , setData] = useState(null);
  const apiUrl = getEnvironment();

  useEffect(() => {
    axios.get(`${apiUrl}/conferencemodule/home/conf/${confid}`, {
      withCredentials: true
    })
      .then(res => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));    
  }, [apiUrl, confid]);

  return (
    <section
      className="relative bg-cover bg-center text-black py-16 flex flex-col justify-center items-center min-h-screen"
      style={{ backgroundImage: 'url(123civilconabout.png)' }}
    >
      <div className="flex flex-col items-center space-y-8">
        <div className="w-full flex justify-center">
          <h1 className="text-[#12105F] text-4xl font-bold uppercase text-center">
            About
          </h1>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-24 h-24 sm:w-30 sm:h-30 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full shadow-lg overflow-hidden flex justify-center items-center">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/004/988/366/small_2x/safety-helmet-with-gear-and-wrench-free-vector.jpg" // Update this path to your logo file location
              alt="Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <h3 className="text-4xl font-bold text-center">
          INDIAN GEOTECHNICAL CONFERENCE 2025
          </h3>
        </div>

        <div className="w-full flex justify-center">
          <p className="text-base max-w-3xl mx-auto leading-relaxed text-center">
          {data ? <div dangerouslySetInnerHTML={{ __html: data.about[0].description }} /> : <div ></div>}
          </p>
        </div>

        <div className="w-full flex justify-center items-center">
          <AboutNews confid={props.confid} />
        </div>
      </div>
    </section>
  );
};

export default About;
