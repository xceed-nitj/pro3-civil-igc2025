import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Separator from "./common/Separator"; // Adjust the path based on where your Separator component is located
import getEnvironment from "../getenvironment"; // Adjust the path based on where getEnvironment is defined

const AboutNews = (props) => {
  const apiUrl = getEnvironment();
  const [isMouseOver, setIsMouseOver] = useState(false);
  const confid = props.confid;
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}/conferencemodule/announcements/conf/${confid}`, {
      withCredentials: true
    })
      .then(res => {
        setNewsData(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, [apiUrl, confid]);

  return (
    <div className="bg-transparent container max-w-screen-lg flex flex-col items-center lg:flex-row lg:justify-evenly lg:items-start mx-auto px-5 sm:px-10 lg:px-8 py-20">
      <div className="w-screen max-w-screen-lg px-5 py-10 lg:py-20">
        <h2 className="text-4xl font-sans font-bold text-gray-950 mb-3  lg:mb-4">News</h2>
        <Separator />
        <div
          id="news"
          className="w-full h-[150px] overflow-auto bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 to-purple-800 rounded-xl p-4"
        >
          <div
            className={`space-y-4 ${isMouseOver ? "animate-none cursor-default" : "animate-wiggle"}`}
            onMouseOver={() => setIsMouseOver(true)}
            onMouseOut={() => setIsMouseOver(false)}
          >
            {newsData.map((item) => (
              <Link key={item._id} target="_blank" rel="noopener noreferrer" to={item.link !== "" ? item.link : `/news/${item._id}`}>
                {!item.hidden && (
                  <div className="relative p-4 my-4 rounded-xl hover:shadow-md hover:shadow-accent-600/50 bg-white space-y-4 border-solid border-2 border-amber-400">
                    <div className="w-2 h-2 animate-ping bg-accent-600 absolute -left-1 -top-1 rounded-full"></div>
                    <div className='flex flex-row'>
                      <p className="text-base font-medium text-accent-600">{item.title}</p>
                      {item.new && (
                        <span className='absolute mr-10 right-0 flex flex-row animate-bounce'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 stroke-amber-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                          </svg>
                          <p className="text-amber-400 text-sm ml-1 font-semibold">NEW</p>
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-sans border-solid border-l-4 border-amber-400 pl-4">
                      {item.metaDescription}
                    </p>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutNews;
