import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import axios from "axios";
import getEnvironment from "../getenvironment";
import Separator from "../components/common/Separator"; // Add Separator for consistency if needed

function Location(props) {
    const confid = props.confid;
    const [data, setData] = useState(null);

    const apiUrl = getEnvironment();

    useEffect(() => {
        window.scrollTo(0, 0);

        axios.get(`${apiUrl}/conferencemodule/location/${confid}`, {
            withCredentials: true
        })
        .then(res => {
            setData(res.data);
            console.log(res.data);
        })
        .catch(err => console.log(err));
    }, [apiUrl, confid]);

    return (
        <>
            <div className="top-0 w-screen z-40 text-white">
                <Navbar />
            </div>
            <div className="bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 py-12 lg:py-16">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="bg-white p-6 rounded-lg shadow-2xl mt-5">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        CONFERENCE VENUE </h2>
                        <Separator /> {/* Optional: Add Separator if it aligns with your theme */}
                        <div className="text-base text-justify font-sans font-base text-gray-800">
                            {data ? (
                                <div dangerouslySetInnerHTML={{ __html: data.description }} />
                            ) : (
                                <p className="text-center text-gray-600">Conference will be held on the NIT campus, Dr B R Ambedkar 
                                National Institute of Technology, Jalandhar, Punjab (India)
                                144008. The institute is located on the G T Road bye pass at a 
                                distance of 15 kms from Jalandhar bus-stand, 12 kms from 
                                Jalandhar city railway station and 18 kms from Jalandhar Cantt 
                                railway station. Nearest airports are Amritsar (85km), 
                                Chandigarh (145km) and Delhi (350km) </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Location;
