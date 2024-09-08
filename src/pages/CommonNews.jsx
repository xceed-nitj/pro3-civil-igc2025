import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SecNavbar from '../components/SecNavbar';
import { useParams } from 'react-router-dom';
import getEnvironment from '../getenvironment';
import axios from 'axios';

function CommonNews() {
    const apiUrl = getEnvironment();
    const { newsid } = useParams();
    const [data, setData] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(`${apiUrl}/conferencemodule/announcements/${newsid}`, {
            withCredentials: true
        })
            .then(res => {
                setData(res.data);
            })
            .catch(err => console.log(err));
    }, [newsid, apiUrl]);

    return (
        <>
            <div className="fixed top-0 w-screen z-40 text-white">
            <Navbar />
            </div>
            <SecNavbar />

            <div className="bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 py-12 lg:py-16">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="bg-white p-6 rounded-lg shadow-2xl">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 underline">{data.title}</h1>
                        <p className="text-base text-justify font-sans text-gray-800">
                            <div dangerouslySetInnerHTML={{ __html: data.description }} />
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CommonNews;
