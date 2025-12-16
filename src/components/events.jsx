// import { useState } from "react";

// const Events = () => {
//   // Inline event data
//   const events = [
//     {
//     },
//   ];

//   const [selectedDay, setSelectedDay] = useState(2); // Default to Day 2

//   // Filter events based on the selected day
//   const filteredEvents = events.filter((event) => event.day === selectedDay);

//   return (
//     <div className="bg-gray-100 py-8 px-4">
//       <div className="max-w-[870px] mx-auto text-center mb-8"> {/* Custom width */}
//         <h2 className="text-2xl font-bold text-purple-700 mb-4">
//           December 18-20, 2025
//         </h2>
//         <h3 className="text-xl font-semibold">OUR EVENTS</h3>
//         <div className="flex justify-center space-x-4 mt-4">
//           {[1, 2, 3].map((day) => (
//             <button
//               key={day}
//               className={`px-4 py-2 rounded-md text-white font-semibold ${
//                 selectedDay === day
//                   ? "bg-purple-700"
//                   : "bg-purple-400 hover:bg-purple-500"
//               }`}
//               onClick={() => setSelectedDay(day)}
//             >
//               Day {day}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="space-y-6">
//         {filteredEvents.length > 0 ? (
//           filteredEvents.map((event, index) => (
//             <div key={index} className="bg-white shadow-lg rounded-lg p-6">
//               <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
//                 {/* On mobile, image is below the text */}
//                 <img
//                   src={event.image}
//                   alt={event.title}
//                   className="w-24 h-24 object-cover rounded-full md:w-32 md:h-32"
//                 />
//                 <div className="flex-1">
//                   <h4 className="text-xl font-bold text-gray-800 mb-2">
//                     {event.title}
//                   </h4>
//                   <p className="text-gray-600 mb-4">{event.date}</p>
//                   <p className="text-gray-600">{event.description}</p>
//                   <a
//                     href={event.link}
//                     className="text-purple-600 font-semibold mt-2 inline-block"
//                   >
//                     More Information &rarr;
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-500">
//             To be updated soon...
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Events;
import { useState } from "react";

const Events = () => {
  const events = [
    /* ================= DAY 0 : 17-12-2025 (Pre-Conference Workshop) ================= */
{
  day: 0,
  time: "08:30 – 09:00",
  title: "Registration",
  venue: "NKN Hall, IT Park (2nd Floor)",
  description: "Participant registration for the Pre-Conference Workshop.",
},
{
  day: 0,
  time: "09:00 – 09:30",
  title: "Inauguration of Pre-Conference Workshop",
  venue: "NKN Hall, IT Park (2nd Floor)",
  description: "Formal inauguration of the Pre-Conference Workshop on Earthquake Geotechnical Engineering.",
},
{
  day: 0,
  time: "09:30 – 10:30",
  title: "Lecture #01",
  venue: "NKN Hall, IT Park (2nd Floor)",
  description:
    "Prof. Robert Kayen\nSeismic soil liquefaction triggering: Stress, Energy, and Probabilistic approaches",
},
{
  day: 0,
  time: "10:30 – 11:00",
  title: "Tea Break",
  venue: "NKN Hall, IT Park (2nd Floor)",
  description: "Tea break.",
},
{
  day: 0,
  time: "11:00 – 12:00",
  title: "Lecture #02",
  venue: "NKN Hall, IT Park (2nd Floor)",
  description:
    "Prof. Robert Kayen\nGeomatics methods for Earthquake Geotechnical Engineering: LiDAR, SfM, and InSAR",
},
{
  day: 0,
  time: "12:00 – 13:00",
  title: "Lecture #03",
  venue: "NKN Hall, IT Park (2nd Floor)",
  description:
    "Prof. G. Madhavi Latha\nSeismic design considerations of Chenab railway bridge",
},
{
  day: 0,
  time: "13:00 – 14:30",
  title: "Lunch",
  venue: "NKN Hall, IT Park (2nd Floor)",
  description: "Lunch break.",
},
{
  day: 0,
  time: "14:30 – 15:30",
  title: "Lecture #04",
  venue: "NKN Hall, IT Park (2nd Floor)",
  description:
    "Dr. Jaykumar Shukla\nRevisiting Seismic Hazard Assessment for Dam Safety Evaluation: A Case Study of an Aging Embankment Dam in Gujarat",
},
{
  day: 0,
  time: "15:30 – 16:00",
  title: "Certificate Distribution",
  venue: "NKN Hall, IT Park (2nd Floor)",
  description: "Certificate distribution to the participants.",
},
{
  day: 0,
  time: "16:00 – 16:30",
  title: "Tea",
  venue: "NKN Hall, IT Park (2nd Floor)",
  description: "Tea and informal interaction.",
},

    // ================= DAY 1 =================
    {
      day: 1,
      time: "09:00 – 10:30",
      title: "Inauguration",
      venue: "Central Seminar Hall",
      description: "Opening ceremony of IGC 2025.",
    },
    {
      day: 1,
      time: "10:30 – 11:00",
      title: "High Tea",
      venue: "Student Welfare Centre (SAC)",
      description: "Networking tea break.",
    },
    {
      day: 1,
      time: "11:00 – 12:00",
      title: "Annual Lecture",
      venue: "Central Seminar Hall",
      description:
        "Prof. Deepankar Choudhury (IIT Bombay)\nAdvances in Geotechnical Earthquake Engineering for Geo-Structures.",
    },
    {
      day: 1,
      time: "12:00 – 12:25",
      title: "Keynote Lecture 1",
      venue: "Central Seminar Hall",
      description:
        "Dr. Krishna R Reddy (University of Illinois at Chicago)\nSelecting Sustainable Geotechnical Solutions: Quantitative Assessment-Driven Approach.",
    },
    {
      day: 1,
      time: "12:25 – 12:35",
      title: "Corporate Presentation",
      venue: "Central Seminar Hall",
      description: "Industry presentation session.",
    },
    {
      day: 1,
      time: "12:35 – 13:00",
      title: "Keynote Lecture 2",
      venue: "Central Seminar Hall",
      description:
        "Prof. Manoj Datta (IIT Delhi)\nExcavating the Past: Learnings from Landfill Mining Operations at Legacy MSW Dumpsites in Delhi.",
    },
    {
      day: 1,
      time: "13:00 – 13:25",
      title: "Invited Lecture",
      venue: "Central Seminar Hall",
      description:
        "Mr. Ramesh Kulkarni\nRestoring and strengthening of 30 MW TG Foundations for Paras Thermal Power Station, MSEB Paras.",
    },
    {
      day: 1,
      time: "13:25 – 14:25",
      title: "Lunch",
      venue: "Student Welfare Centre (SAC)",
      description: "Lunch break.",
    },
    {
      day: 1,
      time: "14:30 – 16:10",
      title: "Technical Session 1",
      venue: "AKAM Lecture Theatre (ALT)",
      description:
        "Multiple parallel theme lectures:\n" +
  "• Foundations: Shallow and Deep\n" +
  "• Earth Retaining Structures, Slope Stability and Landslides\n" +
  "• Soil Dynamics and Soil–Structure Interaction\n" +
  "• Uncertainties, Risk and Reliability in Geotechnical Engineering\n" +
  "• Ground Improvement Techniques and Geosynthetics\n" +
  "• Transportation Geotechnics",    },
    {
      day: 1,
      time: "16:10 – 16:20",
      title: "Tea Break",
      venue: "Student Welfare Centre (SAC)",
      description: "Refreshment break.",
    },
    {
      day: 1,
      time: "16:20 – 18:00",
      title: "Technical Session 2",
      venue: "AKAM Lecture Theatre (ALT)",
      description:
        "Theme lectures & parallel sessions:\n"
       +
  "• Geoenvironmental Engineering\n" +
  "• Rock Mechanics, Tunneling and Underground Structures\n" +
  "• Physical & Numerical Modeling and AI&ML\n" +
  "• Sustainable Materials\n" +
  "• Case Studies & Forensic Geotechnical Engineering\n" +
  "• Ground Improvement Techniques & Geosynthetics",  },
    {
      day: 1,
      time: "16:20 – 18:00",
      title: "Poster Presentation – I",
      venue: "In front of AKAM Lecture Theatre",
      description: "Poster presentation session.",
    },
     {
      day: 1,
      time: "19:30 onwards",
      title: "Dinner ",
      venue: "SAC - Student Activity Center",
      // description: "Poster presentation session.",
    },

  /* ================= DAY 2 : 19-12-2025 ================= */
  {
    day: 2,
    time: "09:00 – 09:25",
    title: "Keynote Lecture 3",
    venue: "Central Seminar Hall",
    description:
      "Prof. N K Samadhiya, IIT Roorkee\nSynergistic Use of Geotechnical and Geospatial Technologies for Modelling and Monitoring of Himalayan Debris Slope Instabilities",
  },
  {
    day: 2,
    time: "09:25 – 09:35",
    title: "Corporate Presentation",
    venue: "Central Seminar Hall",
    description: "Industry presentation session.",
  },
  {
    day: 2,
    time: "09:35 – 10:00",
    title: "Keynote Lecture 4",
    venue: "Central Seminar Hall",
    description:
      "Prof. Gopal Madhabhushi, University of Cambridge\nOpening of New Research Avenues in Offshore Wind Turbine Foundations – Seismic Considerations",
  },
  {
    day: 2,
    time: "10:00 – 10:25",
    title: "Invited Lecture 2",
    venue: "Central Seminar Hall",
    description:
      "Dr. K Pituchmani\nMy Journey with Soil and Rock",
  },
  {
    day: 2,
    time: "10:30 – 10:55",
    title: "High Tea",
    venue: "Student Welfare Centre (SAC)",
    description: "Tea break.",
  },
  {
    day: 2,
    time: "11:00 – 11:25",
    title: "Keynote Lecture 5",
    venue: "Central Seminar Hall",
    description:
      "Prof. V A Sawant, IIT Roorkee\nLiquefaction Mitigation Methods: A Comparative Study",
  },
  {
    day: 2,
    time: "11:25 – 11:35",
    title: "Corporate Presentation",
    venue: "Central Seminar Hall",
    description: "Industry presentation session.",
  },
  {
    day: 2,
    time: "11:35 – 12:00",
    title: "Keynote Lecture 6",
    venue: "Central Seminar Hall",
    description:
      "Dr. C R Parthasarathy, Sarathy Geotech and Engineering Services\nNavigating Offshore Geotechnical Challenges – A Compass",
  },
  {
    day: 2,
    time: "12:00 – 12:05",
    title: "Corporate Presentation",
    venue: "Central Seminar Hall",
    description: "Industry presentation session.",
  },
  {
    day: 2,
    time: "12:05 – 12:30",
    title: "Keynote Lecture 7",
    venue: "Central Seminar Hall",
    description:
      "Dr. Dipanjan Basu, University of Waterloo\nSustainability in Geotechnical Engineering – Research, Practice, Design",
  },
  {
    day: 2,
    time: "12:30 – 13:00",
    title: "Keynote Lecture 8",
    venue: "Central Seminar Hall",
    description:
      "Mr. Govind Raj, Keller\nMoving Beyond Risk and Failure: Strategic Trajectories in Diaphragm Wall Design",
  },
  {
    day: 2,
    time: "13:00 – 14:00",
    title: "Lunch",
    venue: "Student Welfare Centre (SAC)",
    description: "Lunch break.",
  },
  {
    day: 2,
    time: "14:00 – 15:40",
    title: "Technical Session 3",
    venue: "AKAM Lecture Theatre (ALT)",
    description:
      "Parallel theme lectures:\n• Geoenvironmental Engineering\n• Foundations: Shallow & Deep\n• Retaining Structures & Slopes\n• Ground Improvement & Geosynthetics\n• Physical & Numerical Modelling\n• Transportation Geotechnics",
  },
  {
    day: 2,
    time: "15:40 – 15:55",
    title: "Tea Break",
    venue: "Student Welfare Centre (SAC)",
    description: "Refreshment break.",
  },
  {
    day: 2,
    time: "16:00 – 18:00",
    title: "Technical Session 4",
    venue: "AKAM Lecture Theatre (ALT)",
    description:
      "Parallel technical sessions:\n• Foundations\n• Rock Mechanics & Tunnelling\n• Sustainable Materials\n• Geoenvironmental Engineering\n• Soil Dynamics & SSI",
  },
  {
    day: 2,
    time: "18:00 – 19:00",
    title: "Panel Discussion",
    venue: "Central Seminar Hall",
    description:
      "Future of Geotechnical Engineering and Employment Opportunities",
  },
  {
    day: 2,
    time: "19:00 – 20:00",
    title: "Cultural Program",
    venue: "Central Seminar Hall",
    description: "Cultural evening program.",
  },
  {
    day: 2,
    time: "20:00 onwards",
    title: "Gala Dinner",
    venue: "Conference Venue",
    description: "Conference gala dinner.",
  },

  /* ================= DAY 3 : 20-12-2025 ================= */
  {
    day: 3,
    time: "09:00 – 09:25",
    title: "Keynote Lecture 9",
    venue: "Central Seminar Hall",
    description:
      "Prof. Robert Kayen, University of Berkeley\nRecent Advances in Probabilistic Stress and Energy-based Soil Liquefaction Triggering Procedures",
  },
  {
    day: 3,
    time: "09:25 – 09:35",
    title: "Corporate Presentation",
    venue: "Central Seminar Hall",
    description: "Industry presentation session.",
  },
  {
    day: 3,
    time: "09:35 – 10:00",
    title: "Keynote Lecture 10",
    venue: "Central Seminar Hall",
    description:
      "Prof. Rajesh Sathiyamoorthy, IIT Kanpur\nEmerging Trends and Innovations in Geosynthetic-encased Columns for Soft Soil Stabilization",
  },
  {
    day: 3,
    time: "10:00 – 10:25",
    title: "Keynote Lecture 11",
    venue: "Central Seminar Hall",
    description:
      "Prof. D K Baidya, Director, NIT Silchar\nA Few Geotechnical Engineering Problems and Its Solutions",
  },
  {
    day: 3,
    time: "10:30 – 10:55",
    title: "High Tea",
    venue: "Student Welfare Centre (SAC)",
    description: "Tea break.",
  },
  {
    day: 3,
    time: "11:00 – 11:25",
    title: "Keynote Lecture 12",
    venue: "Central Seminar Hall",
    description:
      "Shri Sharokh Bagli, Strata Geosystems (India) Pvt. Ltd.\nSustainability of Highway Structures Related to Flooding and Heavy Rainfall",
  },
  {
    day: 3,
    time: "11:35 – 12:00",
    title: "Springer Lecture",
    venue: "Central Seminar Hall",
    description:
      "Ms. Swati Meherishi",
  },
  {
    day: 3,
    time: "12:10 – 13:15",
    title: "Panel Discussion",
    venue: "Central Seminar Hall",
    description:
      "Navigating the Professional Challenges Women Face",
  },
  {
    day: 3,
    time: "13:15 – 14:30",
    title: "Lunch",
    venue: "Student Welfare Centre (SAC)",
    description: "Lunch break.",
  },
  {
    day: 3,
    time: "14:30 – 16:10",
    title: "Technical Session 5",
    venue: "AKAM Lecture Theatre (ALT)",
    description:
      "Parallel technical sessions:\n• Ground Improvement & Geosynthetics\n• Retaining Structures & Slopes\n• Transportation Geotechnics\n• Sustainable Materials\n• AI & ML\n• Soil Dynamics & SSI",
  },
  {
    day: 3,
    time: "16:10 – 16:30",
    title: "Spark Lecture",
    venue: "Central Seminar Hall",
    description:
      "Dr. Anindya Pain, CSIR-CBRI\nSurrogate-assisted Probabilistic Analysis of Geostructures",
  },
  {
    day: 3,
    time: "16:30 onwards",
    title: "Valedictory Ceremony",
    venue: "Conference Venue",
    description: "Valedictory function followed by tea.",
  },

  ];

  const [selectedDay, setSelectedDay] = useState(1);

  const filteredEvents = events.filter(
    (event) => event.day === selectedDay
  );

  return (
    <div className="bg-gradient-to-r from-[#12105F] via-purple-800 to-purple-800 py-10 px-4">
      <div className="max-w-[900px] mx-auto text-center mb-10 text-white">
        <h2 className="text-2xl font-bold mb-2">
          December 18 – 20, 2025
        </h2>
        <h3 className="text-xl font-semibold">Conference Schedule</h3>

        <div className="flex justify-center space-x-4 mt-6">
          {[0, 1, 2, 3].map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-5 py-2 rounded-md font-semibold transition ${
                selectedDay === day
                  ? "bg-white text-purple-800"
                  : "bg-purple-600 hover:bg-purple-700 text-white"
              }`}
            >
              Day {day}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[900px] mx-auto space-y-5">
        {filteredEvents.length >= 0 ? (
          filteredEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-5 border-l-4 border-purple-700"
            >
              <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <h4 className="text-lg font-bold text-gray-800">
                    {event.title}
                  </h4>
                  <p className="text-sm text-purple-700 font-semibold">
                    {event.time}
                  </p>
                </div>
                <p className="text-sm text-gray-600 mt-2 md:mt-0">
                  📍 {event.venue}
                </p>
              </div>

              <p className="text-gray-700 mt-3 whitespace-pre-line">
                {event.description}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-white">
            To be updated soon...
          </p>
        )}
      </div>
    </div>
  );
};

export default Events;
