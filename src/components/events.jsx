import { useState } from "react";

const Events = () => {
  // Inline event data
  const events = [
    {
      day: 2,
      title: "SRI DHIRUBHAI AMBANI COMMEMORATION DAY",
      date: "December 28, 2025",
      description:
        "SRI DHIRUBHAI AMBANI COMMEMORATION DAY WILL BE CELEBRATED ON DECEMBER 28, 2025 AS A TRIBUTE TO THE GREAT VISIONARY.",
      image: "dhirubhai.jpg",
      link: "/event-details/sri-dhirubhai-ambani",
    },
    {
      day: 2,
      title: "EXHIBITION",
      date: "December 28, 2025",
      description:
        "AN EXHIBITION OF CHEMICAL ENGINEERING AND ALLIED BUSINESSES INCLUDING SAFETY, TECHNOLOGY SHOWCASES, CONSULTANTS, INSTRUMENTATION, TURNKEY PACKAGES AND COMMUNICATION, EQUIPMENT, INSTRUMENTS, BOOKS AND JOURNALS, ETC. IS PROPOSED DURING CHEMCON 2024.",
      image: "exhibition.jpg",
      link: "/event-details/exhibition",
    },
    {
      day: 2,
      title: "TECHNICAL SESSIONS",
      date: "December 28, 2025",
      description:
        "TECHNICAL SESSIONS WILL FOCUS ON THE THEME OF THE CONGRESS AND THE FOLLOWING BROAD THEMES WILL BE COVERED WITH INTERACTION THROUGH PLENARY SESSIONS, INVITED LECTURES, PAPER PRESENTATIONS AND POSTER SESSIONS.",
      image: "technical.jpeg",
      link: "/event-details/technical-sessions",
    },
  ];

  const [selectedDay, setSelectedDay] = useState(2); // Default to Day 2

  // Filter events based on the selected day
  const filteredEvents = events.filter((event) => event.day === selectedDay);

  return (
    <div className="bg-gray-100 py-8 px-4">
      <div className="max-w-[870px] mx-auto text-center mb-8"> {/* Custom width */}
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          December 27-30, 2025
        </h2>
        <h3 className="text-xl font-semibold">OUR EVENTS</h3>
        <div className="flex justify-center space-x-4 mt-4">
          {[1, 2, 3, 4].map((day) => (
            <button
              key={day}
              className={`px-4 py-2 rounded-md text-white font-semibold ${
                selectedDay === day
                  ? "bg-purple-700"
                  : "bg-purple-400 hover:bg-purple-500"
              }`}
              onClick={() => setSelectedDay(day)}
            >
              Day {day}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                {/* On mobile, image is below the text */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-24 h-24 object-cover rounded-full md:w-32 md:h-32"
                />
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {event.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{event.date}</p>
                  <p className="text-gray-600">{event.description}</p>
                  <a
                    href={event.link}
                    className="text-purple-600 font-semibold mt-2 inline-block"
                  >
                    More Information &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No events available for this day.
          </p>
        )}
      </div>
    </div>
  );
};

export default Events;
