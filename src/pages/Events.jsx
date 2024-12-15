// import { useEffect } from 'react';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';
// import Separator from "../components/common/Separator"; // Optional: Add Separator if it aligns with your theme

// const data = [
//   { dimension: '6m x 6m (Central Hall)', price: 100000 },
//   { dimension: '3m x 3m', price: 30000 },
//   { dimension: '3m x 2m', price: 25000 },
// ];

// function Events() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <>
//       <div className="top-0 w-screen z-40 text-white">
//         <Navbar />
//       </div>

//       <div className="bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 py-12 lg:py-16">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="bg-white p-6 rounded-lg shadow-2xl mt-5">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Technical Sessions</h2>
//             <Separator /> {/* Optional: Add Separator if it aligns with your theme */}
//             <p className="text-base text-justify font-sans font-base text-gray-800 mb-4">
//               Technical Sessions will focus on the theme of the Congress and
//               the following broad themes will be covered with interaction through
//               Plenary Sessions, Invited Lectures, Paper Presentations, and
//               Poster Sessions. There will be three best paper awards each in
//               Oral and Poster presentations in each session. Awards will be
//               given to the top two papers presented in each session in both Oral
//               and Poster presentations. The following topics but not limited to
//               are to be covered:
//             </p>
//             <ul className="list-disc list-inside md:grid md:grid-cols-2 gap-4 mb-6">
//               <li>Chemical Process Safety Management</li>
//               <li>Green Technology</li>
//               <li>Novel Separation Techniques</li>
//               <li>New and Renewable Energy</li>
//               <li>Sustainable Development</li>
//               <li>Hydrocarbon and other fossil fuels</li>
//               <li>Energy and Environmental Policy Issues</li>
//               <li>Modelling, Simulation and Scale-up</li>
//               <li>Nanotechnology</li>
//               <li>Process Development</li>
//               <li>Chemical and Fertilizer Technology</li>
//               <li>Nuclear and Thermal Power</li>
//               <li>Chemical Engineering in the New Century</li>
//               <li>Agrochemical Technology</li>
//               <li>Membrane Separation Processes</li>
//               <li>Mining and Mineral</li>
//               <li>Biochemical and Bioprocessing</li>
//               <li>Industrial Biotechnology</li>
//               <li>Process Intensification</li>
//               <li>Process Systems Engineering</li>
//               <li>Waste Water Treatment</li>
//               <li>Solid Waste Management</li>
//             </ul>

//             <section id="targetSection" className="mb-8 p-4 bg-white shadow-md rounded-lg">
//               <h3 className="text-2xl font-semibold text-gray-900 mb-4">Sri Dhirubhai Ambani Commemoration Day</h3>
//               <p className="text-base text-justify font-sans font-base text-gray-800 mb-4">
//                 Shri Dhirubhai Ambani Commemoration Day will be celebrated on
//                 December 28, 2024, as a tribute to the great visionary.
//               </p>
//             </section>

//             <section className="mb-8 p-4 bg-white shadow-md rounded-lg">
//               <h3 className="text-2xl font-semibold text-gray-900 mb-4">International Symposium</h3>
//               <p className="text-base text-justify font-sans font-base text-gray-800 mb-4">
//                 International Joint Symposiums related to the theme will be held
//                 as part of CHEMCON 2024.
//               </p>
//             </section>

//             <section className="mb-8 p-4 bg-white shadow-md rounded-lg">
//               <h3 className="text-2xl font-semibold text-gray-900 mb-4">Exhibition</h3>
//               <p className="text-base text-justify font-sans font-base text-gray-800 mb-4">
//                 An exhibition of Chemical Engineering and allied businesses
//                 including safety, technology providers, consultants, institutions, tour
//                 packages, and communication, Equipment, Instruments, Books
//                 and Journals, etc. is proposed during CHEMCON 2024. Interested
//                 organizations will be allotted space of the following dimensions in
//                 the form of exhibition stalls with all facilities like furniture, power,
//                 etc., at a cost given below:
//               </p>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white rounded-lg shadow-md">
//                   <thead className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
//                     <tr>
//                       <th className="p-3 text-left text-xs md:text-sm font-semibold">Dimension</th>
//                       <th className="p-3 text-left text-xs md:text-sm font-semibold">Price in INR</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {data.length > 0 ? data.map((item, index) => (
//                       <tr key={index} className="hover:bg-purple-50 transition-colors duration-300">
//                         <td className="p-3 text-xs md:text-sm text-gray-800">{item.dimension}</td>
//                         <td className="p-3 text-xs md:text-sm text-gray-800">{item.price.toLocaleString()}</td>
//                       </tr>
//                     )) : (
//                       <tr>
//                         <td colSpan="2" className="p-3 text-center text-gray-600">No data available</td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             </section>

//             <section className="mb-8 p-4 bg-white shadow-md rounded-lg">
//               <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quiz Competition</h3>
//               <p className="text-base text-justify font-sans font-base text-gray-800">
//                 Quiz Competition will be conducted for the student delegates
//                 based on the GATE 2024 syllabus. Prizes will be distributed to the
//                 winners.
//               </p>
//             </section>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default Events;


import { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Separator from "../components/common/Separator"; // Optional: Add Separator if it aligns with your theme

const data = [
  { dimension: '6m x 6m (Central Hall)', price: 100000 },
  { dimension: '3m x 3m', price: 30000 },
  { dimension: '3m x 2m', price: 25000 },
];

const conferenceThemes = [
  "Foundations – Shallow and Deep",
  "Geoenvironmental Engineering",
  "Site Investigations and Explorations",
  "Earth Retaining Structures",
  "Geosynthetics and Reinforced Soil Structures",
  "Forensic Geotechnical Engineering",
  "Soil Dynamics and Geotechnical Earthquake Engineering",
  "Ground Improvement Techniques",
  "Physical and Numerical Modelling",
  "Geotechnics for Sustainable Cities",
  "Rock Mechanics, Tunneling and Underground Structures",
  "Slope Stability and Landslides",
  "Transportation Geotechnics",
  "Soil Structure Interaction",
  "Uncertainties, Risk and Reliability in Geotechnical Engineering",
  "AI/ML/DL Application in Geotechnical Engineering",
  "Geomaterial Characterization",
  "Case Studies",
];

function Events() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="top-0 w-screen z-40 text-white">
        <Navbar />
      </div>

      <div className="bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow-2xl mt-5">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Conference Themes</h2>
            <Separator /> {/* Optional: Add Separator if it aligns with your theme */}
            <p className="text-base text-justify font-sans text-gray-800 mb-6">
              The conference will focus on, but will not be limited to, the following sub-themes:
            </p>
            <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
              {conferenceThemes.map((theme, index) => (
                <li key={index} className="text-gray-700 font-medium">
                  {theme}
                </li>
              ))}
            </ul>

            <section className="mb-8 p-4 bg-white shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Exhibition</h3>
              <p className="text-base text-justify font-sans text-gray-800 mb-4">
                An exhibition of Geotechnical Engineering and allied fields will feature equipment,
                instruments, case studies, and technology innovations. Exhibition stalls will have
                all necessary facilities at the following rates:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-md">
                  <thead className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
                    <tr>
                      <th className="p-3 text-left text-xs md:text-sm font-semibold">Dimension</th>
                      <th className="p-3 text-left text-xs md:text-sm font-semibold">Price in INR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr key={index} className="hover:bg-purple-50 transition-colors duration-300">
                        <td className="p-3 text-xs md:text-sm text-gray-800">{item.dimension}</td>
                        <td className="p-3 text-xs md:text-sm text-gray-800">{item.price.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Events;
