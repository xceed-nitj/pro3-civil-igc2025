import { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Separator from "../components/common/Separator";

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
            <p className="text-gray-700 text-base font-medium mb-4">
              <strong>Date:</strong> 17th December 2025
            </p>

            <div className="bg-gray-100 p-4 rounded-md shadow-inner border-l-4 border-pink-500 mb-6 w-full">
              <p className="text-lg font-semibold text-gray-900">
                Registration Fee: <span className="text-pink-600">Rs. 1200</span>
              </p>
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
