// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';
// import Separator from "../components/common/Separator";

// const committeeData = [
//     {
//         type: "ADVISORY COMMITTEE",
//         members: [
//             "Anil Joseph, India", "N K Samadhiya, India", "R Ayothiraman, India", "BVS Viswanadham, India",
//             "D M Dewaiikar, India", "S K Verma, India", "Madhavi Latha G, India", "N Unnikrishnan, India",
//             "T Thyagaraj, India", "S K Prasad, India", "Ravikiran Vaidya, India", "B K Maheshwari India",
//             "G Sridevi, India", "Loizos Pelecanos, UK", "Anand Katti, India", "Sunil Basarkar, India",
//             "A P Singh, India", "Krishna R Reddy, USA", "G L S Babu, India", "R S Jakka, India",
//             "G R Dodagoudar", "Deepankar Choudhury, India", "Sanjay K Shukla, Australia", "Ashish Juneja, India",
//             "K Muthukumarana, India", "A Murali Krishna, India", "H N Ramesh, India", "N Sreenivasa Rao K, India",
//             "Arti Bhargava, India", "Hyungjoon Seo, UK", "Prabir Kolay, USA", "Sanjay Nimbalkar, Australia",
//         ]
//     },
//     {
//         type: "TECHNICAL COMMITTEE",
//         members: [
//             "S P Singh, India", "Raman Parti, India", "Annapurni Iyer, India", "Amit Srivastava, India",
//             "Jaspal Singh, India", "R K Sharma, India", "R K Bhasin, India", "Jasbir Singh, India",
//             "V A Sawant, India", "C H Solanki, India", "Neelima Satyam, India", "S K Tiwari, India",
//             "Umesh Sharma", "Sunita Kumari, India", "Rajeev Bhatia, India", "Harvinder Singh, India",
//         ]
//     }
// ];

// function Committee() {
//     return (
//         <>
//             {/* Navbar */}
//             <div className="top-0 w-screen z-40 text-white">
//                 <Navbar />
//             </div>

//             {/* Committee Section */}
//             <div className="bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 py-12 lg:py-16">
//                 <div className="container mx-auto px-4 lg:px-8">
//                     <div className="bg-white p-6 rounded-lg shadow-2xl mt-5">
//                         <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
//                             Committee Members
//                         </h2>
//                         <Separator />
//                         {committeeData.map((committee, index) => (
//                             <div key={index} className="mb-8">
//                                 {/* Committee Type */}
//                                 <h3 className="text-xl font-extrabold text-red-600 mb-2 underline">
//                                     {committee.type}
//                                 </h3>
//                                 <Separator />
//                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                                     {committee.members.map((member, idx) => (
//                                         <div
//                                             key={idx}
//                                             className="p-3 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 transition"
//                                         >
//                                             <p className="text-gray-800 text-base font-medium">
//                                                 {member}
//                                             </p>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* Footer */}
//             <Footer />
//         </>
//     );
// }

// export default Committee;




import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Separator from "../components/common/Separator";

const committeeData = [
    {
        type: "CHIEF PATRON",
        members: ["B K Kanaujia, Director, NIT Jalandhar"],
    },
    {
        type: "PATRON",
        members: ["President, IGS", "Secretary, IGS", "Head, CED, NIT Jalandhar"],
    },
    {
        type: "CHAIRMAN",
        members: [
            "Arvind K. Agnihotri, Professor, Department of Civil Engineering, NIT Jalandhar, India and Chairman IGS Jalandhar Chapter",
        ],
    },
    {
        type: "CO-CHAIRMAN & PRINCIPAL ORGANISING SECRETARY",
        members: ["H S Chore (Secretary IGS Jalandhar Chapter)"],
    },
    {
        type: "VICE-CHAIRMAN",
        members: ["Sanjeev Naval (Vice Chairman IGS Jalandhar Chapter)"],
    },
    {
        type: "ORGANISING SECRETARIES",
        members: ["S Rupali", "Kanish Kapoor", "K Senthil"],
    },
    {
        type: "JOINT ORGANISING SECRETARIES",
        members: ["Vinil K Gade", "Koteswaraarao Jadda", "Phibe Khalkho"],
    },
    {
        type: "CONFERENCE ACTIVITY COORDINATORS",
        subCategories: [
            {
                title: "Technical Sessions and Publication",
                members: ["S Rupali", "Vinil K Gade"],
            },
            {
                title: "Registration",
                members: ["Davinder Singh", "Shailja Bawa", "Koteswaraarao Jadda"],
            },
            {
                title: "Infrastructure and Exhibition",
                members: ["K Senthil", "Roop Kishor"],
            },
            {
                title: "Accommodation",
                members: ["Mahesh P", "Neelam Rani", "Abhishek Sharma"],
            },
            {
                title: "Transportation",
                members: ["Navdeep Singh", "Arya Anuj jee", "Prince KDS (KCET)"],
            },
            {
                title: "Food Catering",
                members: ["Kanish Kapoor", "Shashikant Sharma", "Phibe Khalkho"],
            },
        ],
    },
    {
        type: "ADVISORY COMMITTEE",
        members: [
            "Anil Joseph, India", "N K Samadhiya, India", "R Ayothiraman, India", "BVS Viswanadham, India",
            "D M Dewaiikar, India", "S K Verma, India", "Madhavi Latha G, India", "N Unnikrishnan, India",
            "T Thyagaraj, India", "S K Prasad, India", "Ravikiran Vaidya, India", "B K Maheshwari India",
            "G Sridevi, India", "Loizos Pelecanos, UK", "Anand Katti, India", "Sunil Basarkar, India",
            "A P Singh, India", "Krishna R Reddy, USA", "G L S Babu, India", "R S Jakka, India",
            "G R Dodagoudar", "Deepankar Choudhury, India", "Sanjay K Shukla, Australia", "Ashish Juneja, India",
            "K Muthukumarana, India", "A Murali Krishna, India", "H N Ramesh, India", "N Sreenivasa Rao K, India",
            "Arti Bhargava, India", "Hyungjoon Seo, UK", "Prabir Kolay, USA", "Sanjay Nimbalkar, Australia",
        ],
    },
    {
        type: "TECHNICAL COMMITTEE",
        members: [
            "S P Singh, India", "Raman Parti, India", "Annapurni Iyer, India", "Amit Srivastava, India",
            "Jaspal Singh, India", "R K Sharma, India", "R K Bhasin, India", "Jasbir Singh, India",
            "V A Sawant, India", "C H Solanki, India", "Neelima Satyam, India", "S K Tiwari, India",
            "Umesh Sharma", "Sunita Kumari, India", "Rajeev Bhatia, India", "Harvinder Singh, India",
        ],
    },
];

function Committee() {
    return (
        <>
            {/* Navbar */}
            <div className="top-0 w-screen z-40 text-white">
                <Navbar />
            </div>

            {/* Committee Section */}
            <div className="bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 py-12 lg:py-16">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="bg-white p-6 rounded-lg shadow-2xl mt-5">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Committee Members
                        </h2>
                        <Separator />
                        {committeeData.map((committee, index) => (
                            <div key={index} className="mb-8">
                                {/* Committee Type */}
                                <h3 className="text-xl font-extrabold text-pink-600 mb-2 underline">

                                    {committee.type}
                                </h3>
                                <Separator />
                                {/* Subcategories */}
                                {committee.subCategories ? (
                                    committee.subCategories.map((sub, subIndex) => (
                                        <div key={subIndex} className="ml-4 mb-4">
                                            <h4 className="text-lg font-semibold text-gray-700">
                                                {sub.title}
                                            </h4>
                                            <ul className="list-disc list-inside text-gray-600">
                                                {sub.members.map((member, idx) => (
                                                    <li key={idx}>{member}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {committee.members.map((member, idx) => (
                                            <div
                                                key={idx}
                                                className="p-3 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 transition"
                                            >
                                                <p className="text-gray-800 text-base font-medium">
                                                    {member}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}

export default Committee;
