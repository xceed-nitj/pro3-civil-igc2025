import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import axios from "axios";
import { useState, useEffect } from 'react';
import getEnvironment from "../getenvironment";
import Separator from "../components/common/Separator"; // Adjusted path

function Committee(props) {
    const confid = props.confid;
    const [data, setData] = useState([]);
    const apiUrl = getEnvironment();

    useEffect(() => {
        axios.get(`${apiUrl}/conferencemodule/committee/conference/${confid}`, {
            withCredentials: true
        })
            .then(res => {
                setData(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }, [confid, apiUrl]);

    return (
        <>
            <div className="top-0 w-screen z-40">
                <Navbar />
            </div>
            <div className="bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 py-12 lg:py-16">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="bg-white p-6 rounded-lg shadow-2xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Committee Members</h2>
                        <Separator />
                        <div className="min-h-[300px] lg:pt-[10px] pb-5">
                            {data.length > 0 ? data.map((item) => (
                                <div key={item._id} className="w-full mx-auto mb-6">
                                    <p className="text-lg font-sans font-bold text-gray-950 underline">
                                        {item.Type}
                                    </p>
                                    <div className="text-base text-justify font-sans font-base text-gray-800">
                                        <div className='mx-5 mb-5'>
                                            <p className='font-semibold'>{item.Subtype}</p>
                                            <p>{item.Name}</p>
                                            <p>{item.Designation}, {item.Institute}</p>
                                        </div>
                                    </div>
                                </div>
                            )) : (
                                <p className="text-center text-gray-600">No committee members found.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Committee;
