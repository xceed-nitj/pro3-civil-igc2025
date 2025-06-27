import { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Separator from "../components/common/Separator"; // Optional: Add Separator if it aligns with your theme

function Sponsors() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // const data = [
    //     { category: 'Platinum Sponsorship', price: 3000000 },
    //     { category: 'Gold Sponsorship', price: 2000000 },
    //     { category: 'Silver Sponsorship', price: 1500000 },
    //     { category: 'Delegate Kit', price: 1000000 },
    //     { category: 'Lunch (each day)', price: 500000 },
    //     { category: 'Dinner (each day)', price: 500000 },
    //     { category: 'High Tea (First day or last day)', price: 200000 },
    //     { category: 'Breakfast (each day)', price: 200000 },
    //     { category: 'Tea during break', price: 50000 },
    //     { category: 'Plenary Lectures (each)', price: 100000 },
    //     { category: 'Parallel Sessions (each)', price: 100000 },
    //     { category: 'Poster Sessions (each)', price: 150000 },
    //     { category: 'Cultural Programs (each)', price: 200000 },
    //     { category: 'Conference Proceeding', price: 200000 },
    //     { category: 'Delegate Kit CD/Pen Drive', price: 100000 },
    //     { category: 'Banner of each event', price: 25000 },
    // ];
    const sponsorshipData = [
         { 
            category: "Title Sponsor", 
            fee: "15.00", 
            delegates: "7", 
            freeAd: "Full page: Color", 
            corporatePresentation: "Yes", 
            exhibitionSpace: "18'x9'" 
        },
        { 
            category: "Platinum", 
            fee: "10.00", 
            delegates: "6", 
            freeAd: "Full page: Color", 
            corporatePresentation: "Yes", 
            exhibitionSpace: "18'x9'" 
        },
        { 
            category: "Diamond", 
            fee: "5.00", 
            delegates: "4", 
            freeAd: "Full page: Color", 
            corporatePresentation: "Yes", 
            exhibitionSpace: "9'x9'" 
        },
        { 
            category: "Gold", 
            fee: "2.5", 
            delegates: "3", 
            freeAd: "Full page: Color", 
            corporatePresentation: "NA", 
            exhibitionSpace: "NA" 
        },
        { 
            category: "Silver", 
            fee: "1.00", 
            delegates: "2", 
            freeAd: "Full page: B&W", 
            corporatePresentation: "NA", 
            exhibitionSpace: "NA" 
        },
        { 
            category: "Bronze", 
            fee: "0.50", 
            delegates: "1", 
            freeAd: "Half page: B&W", 
            corporatePresentation: "NA", 
            exhibitionSpace: "NA" 
        },
        { 
            category: "Well Wisher", 
            fee: "0.25", 
            delegates: "1", 
            freeAd: "Qr page: B&W", 
            corporatePresentation: "NA", 
            exhibitionSpace: "NA" 
        },
    ];
    
    return (
        <>
            <div className="top-0 w-screen z-40 text-white">
                <Navbar />
            </div>

            <div className="bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 py-12 lg:py-16">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="bg-white p-6 rounded-lg shadow-2xl mt-5">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Sponsorship Rates</h2>
                        <Separator /> {/* Optional: Add Separator if it aligns with your theme */}
                        <p className="text-base text-justify font-sans font-base text-gray-800 mb-4">
                            The sponsors are entitled to nominate two complimentary
                            delegates along with availing of local hospitality during the
                            congress. They are also entitled to put hoardings/Banners at the
                            suitable locations provided by the organizers.
                        </p>
                        <div className="overflow-x-auto">
                            {/* <table className="min-w-full bg-white rounded-lg shadow-md">
                                <thead className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
                                    <tr>
                                        <th className="p-3 text-left text-xs md:text-sm font-semibold">Category</th>
                                        <th className="p-3 text-left text-xs md:text-sm font-semibold">Price in INR</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.length > 0 ? data.map((item, index) => (
                                        <tr key={index} className="hover:bg-purple-50 transition-colors duration-300">
                                            <td className="p-3 text-xs md:text-sm text-gray-800">{item.category}</td>
                                            <td className="p-3 text-xs md:text-sm text-gray-800">{item.price.toLocaleString()}</td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="2" className="p-3 text-center text-gray-600">No data available</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table> */}
                            <table className="min-w-full bg-white rounded-lg shadow-md">
    <thead className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <tr>
            <th className="p-2 text-sm font-semibold">Sponsorship</th>
            <th className="p-2 text-sm font-semibold">Fee (Rs. Lakh)</th>
            <th className="p-2 text-sm font-semibold">Free Delegates</th>
            <th className="p-2 text-sm font-semibold">Free Ad</th>
            <th className="p-2 text-sm font-semibold">Corporate Presentation</th>
            <th className="p-2 text-sm font-semibold">Exhibition Space</th>
        </tr>
    </thead>
    <tbody>
        {sponsorshipData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100 transition-colors">
                <td className="p-2 text-gray-800 text-sm">{item.category}</td>
                <td className="p-2 text-gray-800 text-sm">{item.fee}</td>
                <td className="p-2 text-gray-800 text-sm">{item.delegates}</td>
                <td className="p-2 text-gray-800 text-sm">{item.freeAd}</td>
                <td className="p-2 text-gray-800 text-sm">{item.corporatePresentation}</td>
                <td className="p-2 text-gray-800 text-sm">{item.exhibitionSpace}</td>
            </tr>
        ))}
    </tbody>
</table>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Sponsors;
