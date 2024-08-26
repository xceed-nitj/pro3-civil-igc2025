// import Separator from "./common/Separator";

// function SponsorShip() {
//     const data1 = [
//         { category: 'Platinum Sponsorship', price: 3000000 },
//         { category: 'Gold Sponsorship', price: 2000000 },
//         { category: 'Silver Sponsorship', price: 1500000 },
//         { category: 'Delegate Kit', price: 1000000 },
//         { category: 'Lunch (each day)', price: 500000 },
//         { category: 'Dinner (each day)', price: 500000 },
//         { category: 'High Tea (First day or last day)', price: 200000 },
//         { category: 'Breakfast (each day)', price: 200000 },
//         { category: 'Tea during break', price: 50000 },
//         { category: 'Plenary Lectures (each)', price: 100000 },
//         { category: 'Parallel Sessions (each)', price: 100000 },
//         { category: 'Poster Sessions (each)', price: 150000 },
//         { category: 'Cultural Programs (each)', price: 200000 },
//         { category: 'Conference Proceeding', price: 200000 },
//         { category: 'Delegate Kit CD/Pen Drive', price: 100000 },
//         { category: 'Banner of each event', price: 25000 },
//     ];

//     const halfLength = Math.ceil(data1.length / 2);
//     const firstHalf = data1.slice(0, halfLength);
//     const secondHalf = data1.slice(halfLength);
//     const array = firstHalf.map((value1, index) => ({
//         value1,
//         value2: secondHalf[index]
//     }));

//     const data2 = [
//         { location: 'Multicolor Back page', price: 150000 },
//         { location: 'Multicolor Back inside gatefold', price: 100000 },
//         { location: 'Multicolor Front inside gatefold', price: 60000 },
//         { location: 'Multicolor Full page', price: 25000 },
//         { location: 'Multicolor Half page', price: 15000 },
//         { location: 'Black & White Full Page', price: 15000 },
//         { location: 'Black & White half Page', price: 7500 },
//     ];

//     return (
//         <div className="bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 to-purple-800 py-16 lg:py-24">
//             <div className="container mx-auto px-4 lg:px-8">
//                 <div className="grid gap-12 lg:grid-cols-2">
//                     {/* Sponsorship Rates Section */}
//                     <div className="bg-white p-8 rounded-lg shadow-2xl h-full">
//                         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sponsorship Rates</h2>
//                         <Separator />
//                         <p className="text-gray-700 text-lg leading-relaxed mb-6">
//                             Sponsors receive two complimentary delegate passes and enjoy local hospitality during the congress. Additionally, hoardings and banners can be displayed at locations designated by the organizers.
//                         </p>
//                         <div className="overflow-x-auto">
//                             <table className="min-w-full bg-white rounded-lg shadow-md">
//                                 <thead className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
//                                     <tr>
//                                         <th className="p-4 text-left text-sm font-semibold">Category</th>
//                                         <th className="p-4 text-left text-sm font-semibold">Price in INR</th>
//                                         <th className="p-4 text-left text-sm font-semibold">Category</th>
//                                         <th className="p-4 text-left text-sm font-semibold">Price in INR</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {array.length > 0 ? array.map((item, index) => (
//                                         <tr key={index} className="hover:bg-purple-50 transition-colors duration-300">
//                                             <td className="p-4 text-gray-800">{item.value1.category}</td>
//                                             <td className="p-4 text-gray-800">{item.value1.price.toLocaleString()}</td>
//                                             <td className="p-4 text-gray-800">{item.value2?.category || ''}</td>
//                                             <td className="p-4 text-gray-800">{item.value2?.price.toLocaleString() || ''}</td>
//                                         </tr>
//                                     )) : (
//                                         <tr>
//                                             <td colSpan="4" className="p-4 text-center text-gray-600">No data available</td>
//                                         </tr>
//                                     )}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>

//                     {/* Souvenir Section */}
//                     <div className="bg-white p-8 rounded-lg shadow-2xl h-full">
//                         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Souvenir</h2>
//                         <Separator />
//                         <p className="text-gray-700 text-lg leading-relaxed mb-6">
//                             An informative souvenir will be provided to all delegates. Contributions are sought for advertisements to support CHEMCON-2024. The rates are listed below:
//                         </p>
//                         <div className="overflow-x-auto">
//                             <table className="min-w-full bg-white rounded-lg shadow-md">
//                                 <thead className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
//                                     <tr>
//                                         <th className="p-4 text-left text-sm font-semibold">Location</th>
//                                         <th className="p-4 text-left text-sm font-semibold">Price in INR</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody className="max-h-64 overflow-y-auto">
//                                     {data2.length > 0 ? data2.map((item, index) => (
//                                         <tr key={index} className="hover:bg-purple-50 transition-colors duration-300">
//                                             <td className="p-4 text-gray-800">{item.location}</td>
//                                             <td className="p-4 text-gray-800">{item.price.toLocaleString()}</td>
//                                         </tr>
//                                     )) : (
//                                         <tr>
//                                             <td colSpan="2" className="p-4 text-center text-gray-600">No data available</td>
//                                         </tr>
//                                     )}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SponsorShip;
import Separator from "./common/Separator";

function SponsorShip() {
    const data1 = [
        { category: 'Platinum Sponsorship', price: 3000000 },
        { category: 'Gold Sponsorship', price: 2000000 },
        { category: 'Silver Sponsorship', price: 1500000 },
        { category: 'Delegate Kit', price: 1000000 },
        { category: 'Lunch (each day)', price: 500000 },
        { category: 'Dinner (each day)', price: 500000 },
        { category: 'High Tea (First day or last day)', price: 200000 },
        { category: 'Breakfast (each day)', price: 200000 },
        { category: 'Tea during break', price: 50000 },
        { category: 'Plenary Lectures (each)', price: 100000 },
        { category: 'Parallel Sessions (each)', price: 100000 },
        { category: 'Poster Sessions (each)', price: 150000 },
        { category: 'Cultural Programs (each)', price: 200000 },
        { category: 'Conference Proceeding', price: 200000 },
        { category: 'Delegate Kit CD/Pen Drive', price: 100000 },
        { category: 'Banner of each event', price: 25000 },
    ];

    const halfLength = Math.ceil(data1.length / 2);
    const firstHalf = data1.slice(0, halfLength);
    const secondHalf = data1.slice(halfLength);
    const array = firstHalf.map((value1, index) => ({
        value1,
        value2: secondHalf[index]
    }));

    const data2 = [
        { location: 'Multicolor Back page', price: 150000 },
        { location: 'Multicolor Back inside gatefold', price: 100000 },
        { location: 'Multicolor Front inside gatefold', price: 60000 },
        { location: 'Multicolor Full page', price: 25000 },
        { location: 'Multicolor Half page', price: 15000 },
        { location: 'Black & White Full Page', price: 15000 },
        { location: 'Black & White half Page', price: 7500 },
    ];

    return (
        <div className="bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 py-12 lg:py-16">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-2">
                    {/* Sponsorship Rates Section */}
                    <div className="bg-white p-6 rounded-lg shadow-2xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Sponsorship Rates</h2>
                        <Separator />
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                            Sponsors receive two complimentary delegate passes and enjoy local hospitality during the congress. Additionally, hoardings and banners can be displayed at locations designated by the organizers.
                        </p>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white rounded-lg shadow-md">
                                <thead className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
                                    <tr>
                                        <th className="p-3 text-left text-xs md:text-sm font-semibold">Category</th>
                                        <th className="p-3 text-left text-xs md:text-sm font-semibold">Price in INR</th>
                                        <th className="p-3 text-left text-xs md:text-sm font-semibold">Category</th>
                                        <th className="p-3 text-left text-xs md:text-sm font-semibold">Price in INR</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {array.length > 0 ? array.map((item, index) => (
                                        <tr key={index} className="hover:bg-purple-50 transition-colors duration-300">
                                            <td className="p-3 text-xs md:text-sm text-gray-800">{item.value1.category}</td>
                                            <td className="p-3 text-xs md:text-sm text-gray-800">{item.value1.price.toLocaleString()}</td>
                                            <td className="p-3 text-xs md:text-sm text-gray-800">{item.value2?.category || ''}</td>
                                            <td className="p-3 text-xs md:text-sm text-gray-800">{item.value2?.price.toLocaleString() || ''}</td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="4" className="p-3 text-center text-gray-600">No data available</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Souvenir Section */}
                    <div className="bg-white p-6 rounded-lg shadow-2xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Souvenir</h2>
                        <Separator />
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                            An informative souvenir will be provided to all delegates. Contributions are sought for advertisements to support CHEMCON-2024. The rates are listed below:
                        </p>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white rounded-lg shadow-md">
                                <thead className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
                                    <tr>
                                        <th className="p-3 text-left text-xs md:text-sm font-semibold">Location</th>
                                        <th className="p-3 text-left text-xs md:text-sm font-semibold">Price in INR</th>
                                    </tr>
                                </thead>
                                <tbody className="max-h-64 overflow-y-auto">
                                    {data2.length > 0 ? data2.map((item, index) => (
                                        <tr key={index} className="hover:bg-purple-50 transition-colors duration-300">
                                            <td className="p-3 text-xs md:text-sm text-gray-800">{item.location}</td>
                                            <td className="p-3 text-xs md:text-sm text-gray-800">{item.price.toLocaleString()}</td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="2" className="p-3 text-center text-gray-600">No data available</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SponsorShip;
