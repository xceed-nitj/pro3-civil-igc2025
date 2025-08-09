import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Separator from "../components/common/Separator";

const speakersData = [
  {
    type: "47th ANNUAL LECTURE",
    members: [
      {
        name: "Prof. Deepankar Choudhury, Professor, Department of Civil Engineering, IIT Bombay",
        image: "deepankar-choudhury.jpg"
      }
    ]
  },
  {
    type: "KEYNOTE SPEAKERS",
    members: [
      { name: "Prof. Krishna R Reddy, UIC, USA", image: "krishna-reddy.jpg" },
      { name: "Prof. Robert Kayen, University of California, Berkeley, USA", image: "robert-kane.jpg" },
      { name: "Prof. Gopal Madhabhushi, University of Cambridge, UK", image: "gopal-madhabhushi.jpg" },
      { name: "Prof. Dipanjan Basu, University of Waterloo, Canada", image: "dipanjan-basu.jpg" },
      { name: "Dr. Sanjay Shukla, Edith Cowan University, Australia", image: "sanjay-shukla.jpg" },
      { name: "Prof. Manoj Datta, Emeritus Prof, IIT Delhi", image: "manoj-datta.jpg" },
      { name: "Prof. N K Samadhiya, IIT Roorkee", image: "n-k-samadhiya.jpg" },
      { name: "Prof. Vishwas A Sawant, IIT Roorkee", image: "vishwas-sawant.jpg" },
      { name: "Prof. D K Baidya, IIT Kharagpur and Director, NIT Silchar", image: "d-k-baidya.jpg" },
      { name: "Prof. Rajesh Sathiyamoorthy, IIT Kanpur", image: "rajesh-sathiyamoorthy.jpg" },
      { name: "Dr. C R Parthasarathy, Sarathy Geotech and Engineering Services", image: "c-r-parthasarathy.jpg" },
      { name: "Mr. Shahrokh P Bagli, Tech. Advisor, Strata Geosystems", image: "shahrokh-bagli.jpg" }
    ]
  },
  {
    type: "THEME SPEAKERS",
    members: [
      { name: "Prof. Milind V Khire, University of North Carolina, Charlotte, USA", image: "milind-khire.jpg" },
      { name: "Dr. N Ravichandran, Associate Professor, Clemson University, USA", image: "n-ravichandran.jpg" },
      { name: "Prof. R S Jakka, IIT Roorkee", image: "r-s-jakka.jpg" },
      { name: "Prof. Ravi K Sharma, NIT Hamirpur", image: "ravi-k-sharma.jpg" },
      { name: "Mr. Ravi Sundaram, Director, Cengrs Geotechnica", image: "ravi-sundaram.jpg" },
      { name: "Prof. S K Singh, Punjab Engineering College, Chandigarh", image: "s-k-singh.jpg" },
      { name: "Prof. C H Solanki, SVNIT, Surat", image: "c-h-solanki.jpg" },
      { name: "Prof. A Trivedi, Delhi Technical University, Delhi", image: "a-trivedi.jpg" },
      { name: "Prof. P. Hari Prasad Reddy, NIT Warangal", image: "hari-prasad-reddy.jpg" },
      { name: "Dr. Ambika Behl, CSIR-CRRI", image: "ambika-behl.jpg" },
      { name: "Dr. Anand Hulagaballi, Manager - Geoquest", image: "anand-hulagaballi.jpg" },
      { name: "Prof. Pijush Samui, NIT Patna", image: "pijush-samui.jpg" },
      { name: "Dr. Arindam Dey, IIT Guwahati", image: "arindam-dey.jpg" },
      { name: "Dr. B Janki Ramaiah, Associate Professor, IIT Tirupati", image: "janki-ramaiah.jpg" },
      { name: "Dr. P V Divya, Associate Professor, IIT Palakkad", image: "p-v-divya.jpg" },
      { name: "Ms. Annapoorni Iyer, Engosym Consultants", image: "annapoorni-iyer.jpg" }
    ]
  }
];

function Speakers() {
  return (
    <>
      <div className="top-0 w-screen z-40 text-white">
        <Navbar />
      </div>

      <div className="bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow-2xl mt-5">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Invited Speakers
            </h2>
            <Separator />
            {speakersData.map((section, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-extrabold text-pink-600 mb-2 underline">
                  {section.type}
                </h3>
                <Separator />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.members.map((speaker, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-gray-100 rounded-md shadow hover:shadow-md transition flex items-start space-x-4"
                    >
                      <img
                        src={`/speakers/${speaker.image}`}
                        alt={speaker.name}
                        className="w-16 h-16 object-cover rounded-full border-2 border-violet-600"
                      />
                      <p className="text-gray-800 text-base font-medium">
                        {speaker.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Speakers;
