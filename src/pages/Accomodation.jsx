import { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Separator from "../components/common/Separator"; // Add Separator for consistency if needed

function Accommodation() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="top-0 w-screen z-40 text-white">
                <Navbar />
            </div>
            <div className="bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 py-12 lg:py-16 ">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="bg-white p-6 rounded-lg shadow-2xl mt-5">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Accommodation</h2>
                        <Separator /> {/* Optional: Add Separator if it aligns with your theme */}
                        <div className="text-base text-justify font-sans font-base text-gray-800">
                            <p>
                            A list of nearby hotels and paid homestays in the city will be 
communicated on the conference website 
(www.igc2025nitj.com). Please note that the accommodation is 
not included in the conference fee and the delegates are 
responsible for their own accommodation.  </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Accommodation;
