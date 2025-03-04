import { useState, useEffect } from "react";
import axios from "axios";
import Separator from "./common/Separator";
import getEnvironment from "../getenvironment";
import formatDate from "../utility/formatDate";

export default function Timeline(props) {
  const confid = props.confid;
  const [datesData, setDatesData] = useState([]);
  const apiUrl = getEnvironment();

  useEffect(() => {
    axios
      .get(`${apiUrl}/conferencemodule/eventDates/conference/${confid}`, {
        withCredentials: true,
      })
      .then((res) => {
        setDatesData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [apiUrl, confid]);

  return (
    <section
      className="bg-cover bg-center text-black py-16 flex flex-col justify-center items-center min-h-screen relative"
      style={{ backgroundImage: "url(imagegallery.jpg)" }}
    >
      <div className="bg-transparent container max-w-7xl flex flex-col items-center lg:flex-row lg:justify-between lg:items-start mx-auto px-5 sm:px-10 py-16 lg:px-8 lg:py-16 relative z-0">
        <div className="w-full lg:w-full md:max-w-[full] pr-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl text-white mb-4">Timeline</h2>
            <h3 className="text-xl font-medium leading-relaxed text-gray-800 lg:w-2/3 mx-auto"></h3>
          </div>
          <div className="relative py-5">
            <div
              className="w-10 md:w-12 absolute top-0 left-0 bottom-0 flex flex-col justify-center lg:left-1/2 lg:-ml-6"
              aria-hidden="true"
            >
              <div className="mx-auto w-1 h-2.5 grow-0 bg-gradient-to-b from-transparent to-accent-100 rounded-t" />
              <div className="mx-auto w-1 grow bg-accent-100" />
              <div className="mx-auto w-1 h-2.5 grow-0 bg-gradient-to-t from-transparent to-accent-100 rounded-b" />
            </div>

            <ul className="relative space-y-4 pl-10 md:pl-12 lg:pl-0">
              {datesData.map((item, index) => (
                <li
                  key={index}
                  className={`relative lg:w-1/2 ${
                    index % 2 === 0
                      ? "lg:pr-6 lg:mr-auto"
                      : "lg:pl-6 lg:ml-auto"
                  } flex flex-col`}
                >
                  <div
                    className={`w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 ${
                      index % 2 === 0
                        ? "lg:translate-x-6 lg:left-auto lg:right-0"
                        : "lg:-translate-x-6"
                    }`}
                  >
                    <div className="w-3 h-3 bg-accent-500 rounded-full ring ring-accent-100 ring-opacity-100 ring-offset-2" />
                  </div>
                  <div className="bg-gray-100 hover:ring hover:ring-gray-100 hover:ring-offset-2 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                  </div>
                  <div
                    className={`px-4 py-2 lg:w-40 lg:absolute lg:top-0 lg:bottom-0 lg:flex lg:flex-col lg:mt-4 lg:py-0 ${
                      index % 2 === 0
                        ? "lg:right-0 lg:translate-x-full"
                        : "lg:left-0 lg:-translate-x-full lg:text-right"
                    }`}
                  >
                    <p className="font-medium text-sm text-white">
                      {formatDate(item.date)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-0 md:w-[0px] lg:w-0 px-4 lg:px-0 mt-10 lg:mt-0 mx-auto lg:pl-5 lg:mx-0">
          <Separator />
          <p className="text-base text-justify font-sans font-base text-white">
            {/* Additional content can be placed here */}
          </p>
        </div>
      </div>
    </section>
  );
}
