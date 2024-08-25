// import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useEffect } from 'react';

const data = [
  { dimension: '6m x 6m (Central Hall)', price: 100000 },
  { dimension: '3m x 3m', price: 30000 },
  { dimension: '3m x 2m', price: 25000 },
];

function Events() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className=" top-0 w-screen z-40 "> 
      <Navbar />      
      </div>
      

      <div className=" bg-white container max-w-7xl mx-auto px-5 sm:px-10  lg:px-8 pt-[58px] lg:pt-[10px] pb-5">
                <div className="w-full mx-auto  md:w-[700px] px-4 lg:w-full" >
          <p className="text-2xl font-sans font-bold mb-2 text-accent-500 underline ">
            Technical Sessions
          </p>
          <p className="text-base  text-justify font-sans font-base text-gray-800">
            Technical Sessions will focus on the theme of the Congress and
            the following broad themes will be covered with interaction through
            Plenary Sessions, Invited Lectures, Paper Presentations and
            Poster Sessions. There will be three best paper awards each in
            Oral and Poster presentations in each session. Award will be
            given to the top two papers presented in each session in both Oral
            and Poster presentations. The following topics but not limited to
            are to be covered:
            <ul className='list-disc list-inside md:grid md:grid-cols-2 '>
              <li >Chemical Process Safety Management</li>  <li> Green Technology
              </li>
              <li>Novel Separation Techniques
              </li> <li>New and Renewable Energy </li>
              <li>Sustainable Development </li>
              <li>Hydrocarbon and other fossil fuels</li>
              <li>Energy and Environmental Policy Issues</li>
              <li>Modelling, Simulation and Scale-up</li>
              <li> Nanotechnology </li>
              <li>Process Development</li>
              <li>Chemical and Fertilizer Technology</li>
              <li>Nuclear and Thermal Power</li>
              <li> Chemical Engineering in the New Century</li>
              <li> Agrochemical Technology</li>
              <li>Membrane Separation Processes</li>
              <li>Mining and Mineral</li>
              <li>Biochemical and Bioprocessing</li>
              <li> Industrial Biotechnology</li>
              <li>Process Intensification</li>
              <li>Process Systems Engineering</li>
              <li> Waste Water Treatment</li>
              <li>Solid Waste Management</li>

            </ul>
          </p>
        </div>
<section id="targetSection">
        <div className="m-5 " >
          <p className="text-2xl font-sans font-bold mb-2 text-accent-500 underline ">
            Sri Dhirubhai Ambani Commemoration Day
          </p>
          <p className="text-base  text-justify font-sans font-base text-gray-800">
            Shri Dhirubhai Ambani Commemoration day will be celebrated on
            December 28, 2024 as a tribute to the great visionary.
          </p>

        </div>
        </section>
        <div className="m-5 ">
          <p className="text-2xl font-sans font-bold mb-2 text-accent-500 underline ">
            International Symposium
          </p>
          <p className="text-base  text-justify font-sans font-base text-gray-800">
            International Joint Symposiums related to the theme will be held
            as part of CHEMCON 2024.

          </p>

        </div>

        <div className="m-5 ">
          <p className="text-2xl font-sans font-bold mb-2 text-accent-500 underline ">
            Exhibition
          </p>
          <p className="text-base  text-justify font-sans font-base text-gray-800">
            An exhibition of Chemical Engineering and allied businesses
            including safety, technology providers, consultants, institution, tour
            packages and communication, Equipment, Instruments, Books
            and Journals, etc. is proposed during CHEMCON 2024. Interested
            organizations will be allotted space of the following dimensions in
            the form of exhibition stalls with all facilities like furniture, power,
            etc., at a cost given below:
            <table className="mt-3  border-collapse box-border md:w-[400px]">
              <thead>
                <tr className="border-[2px] bg-accent-100  border-accent-500">
                  <th className="p-1 pl-4 text-left">Dimension</th>
                  <th className="p-1 pl-4 text-left">Price in INR</th>

                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? data.map((item, index) => (
                  <tr key={index} className="border-[1px] font-serif border-accent-500">
                    <td className="p-1 md:pl-4 text-left">{item.dimension}</td>
                    <td className="p-1 md:pl-4 text-left">{item.price}</td>

                  </tr>
                )) : (
                  <tr>
                    <td colSpan="2" className="p-1 text-center">No data available</td>
                  </tr>

                )}
              </tbody>
            </table>

          </p>

        </div>
        <div className="m-5 ">
          <p className="text-2xl font-sans font-bold mb-2 text-accent-500 underline ">
            Quiz Competition           </p>
          <p className="text-base  text-justify font-sans font-base text-gray-800">
            Quiz Competition will be conducted for the student delegates
            based on GATE 2024 syllabus. The prizes will be distributed to the
            winners
          </p>

        </div>
      </div >
      <Footer />

    </>
  )
}

export default Events
// import { Link } from "react-router-dom";

// // Data for events
// const data = [
//   {
//     title: "Technical Sessions",
//     content: `
//       <p>
//         Technical Sessions will focus on the theme of the Congress and
//         the following broad themes will be covered with interaction through
//         Plenary Sessions, Invited Lectures, Paper Presentations, and
//         Poster Sessions. There will be three best paper awards each in
//         Oral and Poster presentations in each session. Award will be
//         given to the top two papers presented in each session in both Oral
//         and Poster presentations. The following topics but not limited to
//         are to be covered:
//         <ul class="list-disc pl-5">
//           <li>Chemical Process Safety Management</li>
//           <li>Green Technology</li>
//           <li>Novel Separation Techniques</li>
//           <li>New and Renewable Energy</li>
//           <li>Sustainable Development</li>
//           <li>Hydrocarbon and other fossil fuels</li>
//           <li>Energy and Environmental Policy Issues</li>
//           <li>Modelling, Simulation, and Scale-up</li>
//           <li>Nanotechnology</li>
//           <li>Process Development</li>
//           <li>Chemical and Fertilizer Technology</li>
//           <li>Nuclear and Thermal Power</li>
//           <li>Chemical Engineering in the New Century</li>
//           <li>Agrochemical Technology</li>
//           <li>Membrane Separation Processes</li>
//           <li>Mining and Mineral</li>
//         </ul>
//       </p>
//     `,
//     bg: "bg-blue-900 text-white",
//   },
//   {
//     title: "Sri Dhirubhai Ambani Commemoration Day",
//     content: "Shri Dhirubhai Ambani Commemoration Day will be celebrated on December 28, 2024, as a tribute to the great visionary.",
//     bg: "bg-purple-800 text-white",
//   },
//   {
//     title: "International Symposium",
//     content: "International Joint Symposiums related to the theme will be held as part of CHEMCON 2024.",
//     bg: "bg-purple-900 text-white",
//   },
//   {
//     title: "Exhibition",
//     content: "An exhibition of Chemical Engineering and allied businesses including safety, technology providers, consultants, institutions, tour packages, and communication, Equipment, Instruments, Books, and Journals, etc., is proposed during CHEMCON 2024. Interested organizations will be allotted space in the form of exhibition stalls with all facilities like furniture, power, etc.",
//     bg: "bg-pink-600 text-white",
//   },
//   {
//     title: "Quiz Competition",
//     content: "A Quiz Competition will be conducted for student delegates based on the GATE 2024 syllabus. Prizes will be distributed to the winners.",
//     bg: "bg-pink-700 text-white",
//   },
// ];

// function OurEvents() {
//   const commonStyles = {
//     fontFamily: 'Roboto, sans-serif',
//   };

//   return (
//     <div className="bg-gray-200 container mx-auto px-4 sm:px-6 lg:px-8 py-16" style={commonStyles}>
//       <section className="text-center mb-12">
//         <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Our Events</h2>
//       </section>
      
//       <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {data.map((item, index) => (
//           <article
//             className={`p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl ${item.bg} ${
//               index % 3 === 0 ? "md:col-span-2 lg:col-span-2" : ""
//             }`}
//             key={index}
//             aria-labelledby={`event-title-${index}`}
//           >
//             <h3 id={`event-title-${index}`} className="text-2xl font-bold mb-4">{item.title}</h3>
//             <div className="text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: item.content }} />
//           </article>
//         ))}
//       </section>
      
//       <section className="text-center mt-12">
//         <Link to="/events">
//           <button className="bg-blue-700 text-white py-3 px-8 rounded-lg hover:bg-blue-800 transition duration-300 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500">
//             View All Events
//           </button>
//         </Link>
//       </section>
//     </div>
//   );
// }

// export default OurEvents;
