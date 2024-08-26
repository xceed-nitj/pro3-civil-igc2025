import { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Separator from '../components/common/Separator'; // Optional: Add Separator if it aligns with your theme

function Registration() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const data = [
        { title: 'IICHE Member', price: 5000 },
        { title: 'Non Member / Industrial Personnel', price: 6200 },
        { title: 'Research Scholar / PG Student (IICHE Member)', price: 4500 },
        { title: 'UG Student (Student Member / Non Member)', price: 2500 },
        { title: 'Research Scholar / PG Student (Non IICHE Member)', price: 5000 },
        { title: 'Foreign Delegates (IICHE Member)', price: 'USD 250' },
        { title: 'Accompanying Spouse (Foreign) (IICHE Member)', price: 'USD 250' },
        { title: 'Industrial Personnel’s (IICHE Member/ Non IICHE Member)', price: 6500 },
        { title: 'Others (IICHE Member/ Non IICHE Member)', price: 3200 },
        { title: 'Senior Member (Over 65 Years) (IICHE Member/ Non IICHE Member)', price: 3200 },
        { title: 'Accompanying Spouse (India, All Categories) (IICHE Member/ Non IICHE Member)', price: 2000 },
    ];

    return (
        <>
            <div className="top-0 w-screen z-40">
                <Navbar />
            </div>

            <div className="bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 py-12 lg:py-16">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="bg-white p-6 rounded-lg shadow-2xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Registration Fee</h2>
                        <Separator /> {/* Optional: Add Separator if it aligns with your theme */}
                        <p className="text-base text-justify font-sans text-gray-800 mb-4">
                            Below is the registration fee structure:
                        </p>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white rounded-lg shadow-md">
                                <thead className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
                                    <tr>
                                        <th className="p-3 text-left text-xs md:text-sm font-semibold">Categories of Membership</th>
                                        <th className="p-3 text-left text-xs md:text-sm font-semibold">Amount in INR (Excluding Taxes)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.length > 0 ? data.map((item, index) => (
                                        <tr key={index} className="hover:bg-purple-50 transition-colors duration-300">
                                            <td className="p-3 text-xs md:text-sm text-gray-800">{item.title}</td>
                                            <td className="p-3 text-xs md:text-sm text-gray-800">{item.price}</td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="2" className="p-3 text-center text-gray-600">No data available</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-4 text-base text-justify font-sans text-gray-800">
                            Includes fees towards life membership of IIChE subject to the production of proof of eligibility.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Registration;
