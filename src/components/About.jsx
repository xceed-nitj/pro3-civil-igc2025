import { useState, useEffect } from "react";
import axios from "axios";
import getEnvironment from "../getenvironment";
import AboutNews from "../components/AboutNews";

const About = (props) => {
  const confid = props.confid;
  const [data, setData] = useState(null);
  const apiUrl = getEnvironment();

  useEffect(() => {
    axios
      .get(`${apiUrl}/conferencemodule/home/conf/${confid}`, {
        withCredentials: true,
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [apiUrl, confid]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Div 1: Main Container */}
      <div className="w-full max-w-6xl bg-white shadow-lg p-6 rounded-lg flex flex-col space-y-6 ">
        
        {/* Div 2: ABOUT (Full Width) */}
        {/* <div className="bg-[#12105F] text-white text-center text-4xl font-bold uppercase py-4 rounded-md">
          ABOUT
        </div> */}

        {/* Div 3 & 4: Flex Container */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
          
          {/* Div 3: Conference Details */}
          <div className="w-full md:w-1/2">
          {/* <h3 className="text-Black text-4xl font-bold uppercase py-4 rounded-md">
            ABOUT
          </h3> */}
            <h3 className="text-3xl font-sans font-bold text-gray-950 text-center md:text-left mt-1">
            About Conference
            </h3>
            <p className="text-base leading-relaxed text-justify mt-4">
              {data ? (
                <div dangerouslySetInnerHTML={{ __html: data.about[0].description }} />
              ) : (
                <div>Loading...</div>
              )}
            </p>
          </div>

          {/* Div 4: News Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <AboutNews confid={props.confid} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
