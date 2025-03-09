// // import AboutNews from "../components/AboutNews";
// // import axios from "axios";
// // import getEnvironment from "../getenvironment";
// // import { useState, useEffect } from "react";

// // const About = (props) => {
// //   const confid = props.confid;
// //   const [data, setData] = useState(null);
// //   const apiUrl = getEnvironment();

// //   useEffect(() => {
// //     axios
// //       .get(`${apiUrl}/conferencemodule/home/conf/${confid}`, {
// //         withCredentials: true,
// //       })
// //       .then((res) => {
// //         setData(res.data);
// //         console.log(res.data);
// //       })
// //       .catch((err) => console.log(err));
// //   }, [apiUrl, confid]);

// //   return (
// //     <section
// //       className="relative bg-cover bg-center text-black py-16 flex flex-col justify-center items-center min-h-screen"
// //       style={{ backgroundImage: 'url(123civilconabout.png)' }}
// //     >
// //       <div className="flex flex-col items-center space-y-8">
// //         <div className="w-full flex justify-center">
// //           <h1 className="text-[#12105F] text-4xl font-bold uppercase text-center">
// //             About
// //           </h1>
// //         </div>

// //         <div className="w-full flex justify-center">
// //           <h3 className="text-4xl font-bold text-center">
// //             INDIAN GEOTECHNICAL CONFERENCE 2025
// //           </h3>
// //         </div>

// //         <div className="w-full flex justify-center">
// //           <p className="text-base max-w-3xl mx-auto leading-relaxed text-justify">
// //             {data ? (
// //               <div dangerouslySetInnerHTML={{ __html: data.about[0].description }} />
// //             ) : (
// //               <div></div>
// //             )}
// //           </p>
// //         </div>

// //         <div className="w-full flex justify-center items-center">
// //           <AboutNews confid={props.confid} />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default About;
// import AboutNews from "../components/AboutNews";
// import axios from "axios";
// import getEnvironment from "../getenvironment";
// import { useState, useEffect } from "react";

// const About = (props) => {
//   const confid = props.confid;
//   const [data, setData] = useState(null);
//   const apiUrl = getEnvironment();

//   useEffect(() => {
//     axios
//       .get(`${apiUrl}/conferencemodule/home/conf/${confid}`, {
//         withCredentials: true,
//       })
//       .then((res) => {
//         setData(res.data);
//         console.log(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, [apiUrl, confid]);

//   return (
//     <section
//       className="relative bg-cover bg-center text-black py-16 flex justify-center items-center min-h-screen"
//       style={{ backgroundImage: 'url(123civilconabout.png)' }}
//     >
       
//       <div>
//       <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl px-6 space-y-6 md:space-y-0 md:space-x-8">
        
//         {/* About Section */}
//         <div className="w-full md:w-1/2">
//           <h3 className="text-3xl font-sans font-bold text-gray-950 text-center md:text-left mt-4">
//             INDIAN GEOTECHNICAL CONFERENCE 2025
//           </h3>
//           <p className="text-base leading-relaxed text-justify mt-4">
//             {data ? (
//               <div dangerouslySetInnerHTML={{ __html: data.about[0].description }} />
//             ) : (
//               <div>Loading...</div>
//             )}
//           </p>
//         </div>

//         {/* AboutNews Component */}
//         <div className="w-full md:w-1/2 flex justify-center">
//           <AboutNews confid={props.confid} />
//         </div>
        
//       </div>
//       </div>
//     </section>
//   );
// };

// export default About;
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
