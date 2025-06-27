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
      <div className="w-full max-w-6xl bg-white shadow-lg p-6 rounded-lg flex flex-col space-y-6">
        
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-8">
          
          {/* About Section */}
          <div className="w-full md:w-1/2 mt-2">
            <h3 className="text-3xl font-bold text-blue-900 underline underline-offset-4 mb-4 text-center md:text-left">
              About Conference
            </h3>
            <div className="text-base leading-relaxed text-justify">
              {data ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.about[0].description,
                  }}
                />
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </div>

          {/* News Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mt-2">
            <h3 className="text-3xl font-bold text-blue-900 underline underline-offset-4 mb-4 text-center md:text-left">
              News
            </h3>
            <AboutNews confid={props.confid} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
