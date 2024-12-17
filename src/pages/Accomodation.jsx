// import { useEffect } from 'react';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';
// import Separator from "../components/common/Separator"; // Add Separator for consistency if needed

// function Accommodation() {
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     return (
//         <>
//             <div className="top-0 w-screen z-40 text-white">
//                 <Navbar />
//             </div>
//             <div className="bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 py-12 lg:py-16 ">
//                 <div className="container mx-auto px-4 lg:px-8">
//                     <div className="bg-white p-6 rounded-lg shadow-2xl mt-5">
//                         <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Accommodation</h2>
//                         <Separator /> {/* Optional: Add Separator if it aligns with your theme */}
//                         <div className="text-base text-justify font-sans font-base text-gray-800">
//                             <p>
//                             A list of nearby hotels and paid homestays in the city will be 
// communicated on the conference website 
// (www.igc2025nitj.com). Please note that the accommodation is 
// not included in the conference fee and the delegates are 
// responsible for their own accommodation.  </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// }

// export default Accommodation;


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
            <div className="bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 py-12 lg:py-16">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="bg-white p-6 rounded-lg shadow-2xl mt-5">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Accommodation</h2>
                        <Separator /> {/* Optional: Add Separator if it aligns with your theme */}
                        <div className="text-base text-justify font-sans text-gray-800">
                            <p className="mb-4">
                            
                                
                                Please note that the accommodation is not included in the conference fee, and delegates are responsible for their own accommodation.
                            </p>
                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Hotels in and around Jalandhar (10–15 km from NIT Jalandhar):</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full table-auto border-collapse border border-gray-300 shadow-md">
                                    <thead>
                                        <tr className="bg-gray-200 text-gray-700">
                                            <th className="border border-gray-300 px-4 py-2 text-left">Hotel Name</th>
                                            <th className="border border-gray-300 px-4 py-2 text-left">Hotel Name</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-800">
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">WJ Grand Hotel</td>
                                            <td className="border border-gray-300 px-4 py-2">Golden Tulip</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Best Western Plus Jalandhar</td>
                                            <td className="border border-gray-300 px-4 py-2">The Maya</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">The Inn</td>
                                            <td className="border border-gray-300 px-4 py-2">Classic</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Sarovar Portico</td>
                                            <td className="border border-gray-300 px-4 py-2">President</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Radisson Jalandhar</td>
                                            <td className="border border-gray-300 px-4 py-2">Residency</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Ambassador Hotel</td>
                                            <td className="border border-gray-300 px-4 py-2">Dolphin</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Ramada Encore</td>
                                            <td className="border border-gray-300 px-4 py-2">Ramada Wyndham</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Leo Fort</td>
                                            <td className="border border-gray-300 px-4 py-2">Aveda Kamal Palace</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Comfort Inn</td>
                                            <td className="border border-gray-300 px-4 py-2">Citadines</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Country Inn and Suites</td>
                                            <td className="border border-gray-300 px-4 py-2">Sky Lark</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Down Town</td>
                                            <td className="border border-gray-300 px-4 py-2">Mariton Hotel</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Accommodation;
