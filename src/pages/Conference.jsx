 import { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Separator from "../components/common/Separator";

const speakersData = [{
  type: "PRECONFERENCE WORKSHOP SPEAKERS",
  members: [
    { name: "Prof. Robert Kayen, University of California, Berkeley, USA", image: "robert-kayen.jpg" },
    { name: "Prof. G Madhavi Latha, IISc Bengaluru", image: "madhavi-latha.jpg" },
    { name: "Prof. Neelima Satyam, IIT Indore", image: "neelima-satyam.jpg" },
    { name: "Dr. Jaykumar Shukla, Principal Engineer, Geodynamics, Vadodara", image: "jaykumar-shukla.jpg" }
  ]
}];

function Conference() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="top-0 w-screen z-40 text-white">
        <Navbar />
      </div>

      {/* Main Section */}
      <div className="bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow-2xl mt-5">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Pre-Conference Workshop
            </h2>
            <Separator />
            <h3 className="text-xl md:text-2xl font-semibold text-purple-800 mb-2">
              Earthquake Geotechnical Engineering
            </h3>

            <br />
            {speakersData.map((section, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-extrabold text-pink-600 mb-2 underline">
                  {section.type}
                </h3>
                <Separator />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.members.map((speaker, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-gray-100 rounded-md shadow hover:shadow-md transition flex items-start space-x-4"
                    >
                      <img
                        src={`/speakers/${speaker.image}`}
                        alt={speaker.name}
                        className="w-16 h-16 object-cover rounded-full border-2 border-violet-600"
                      />
                      <p className="text-gray-800 text-base font-medium">
                        {speaker.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <p className="text-gray-700 text-base font-medium mb-4">
              <strong>Date:</strong> 17th December 2025
            </p>

            <div className="bg-gray-100 p-4 rounded-md shadow-inner border-l-4 border-pink-500 mb-6 w-full">
              <p className="text-lg font-semibold text-gray-900">
                Registration Fee: <span className="text-pink-600">Rs. 1200</span>
              </p>
            </div>

            {/* Registration Link */}
            <div className="text-center mb-8">
              <a
                href="https://forms.gle/LCCmyz8AoaYGu9ve8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
              >
                Register Here
              </a>
            </div>

            {/* <p className="text-base text-justify font-sans text-gray-800">
              This pre-conference workshop on <strong>Earthquake Geotechnical Engineering</strong> aims to deepen the understanding of seismic soil behavior, foundation response under earthquakes, liquefaction, site characterization, and advanced mitigation strategies. 
              The workshop will be led by distinguished experts and will include technical sessions, case studies, and practical demonstrations.
            </p>

            <p className="text-base text-justify font-sans text-gray-800 mt-4">
              The workshop is open to students, researchers, faculty, and industry professionals. Certificates will be provided to all registered participants. Limited seats available, so early registration is encouraged.
            </p> */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Conference;
