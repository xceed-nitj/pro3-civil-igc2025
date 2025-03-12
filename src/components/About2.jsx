const About2 = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        {/* Div 1: Main Container */}
        <div className="w-full max-w-6xl bg-white shadow-lg p-6 rounded-lg flex flex-col space-y-6 ">
          
          {/* Div 2: ABOUT (Full Width) */}
  
          {/* Div 3 & 4: Flex Container */}
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
            
            {/* Div 3: Conference Details */}
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-sans font-bold text-gray-950 text-center md:text-left mt-1">
              About NITJ
              </h3>
              <p className="text-base leading-relaxed text-justify mt-4">
              IGC-2025 will be held in the premises of Dr B R Ambedkar National 
Institute of Technology (NIT), Jalandhar. NIT Jalandhar (erstwhile REC 
Jalandhar), was established in the year 1987 and attained the status of 
National Institute of Technology on October 17, 2002. As NIT, the 
Institute has a responsibility of providing high quality technical 
education in Engineering and Technology to produce competent 
technical manpower for the country. The Institute offers B. Tech. 
programmes in 14 disciplines of Engineering and Technology along 
with the research programmes leading to MSc, MBA, MTech and PhD 
degrees. The Institute has signed Memorandum of Understanding 
(MoU) with many prestigious institutes such as Ecole Centrale de Lille, 
France, University of Johannesburg, South Africa, the University of 
Bolten, UK, and the University of South Alabama, USA for the mutual 
academic exchange program and further strengthening of the 
academics and research. </p>
            </div>
  
            {/* Div 4: News Section */}
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-sans font-bold text-gray-950 text-center md:text-left mt-1">
              About IGC chapter
              </h3>
              <p className="text-base leading-relaxed text-justify mt-4">
              IGS Jalandhar Chapter was established in February 2020 under the 
flagship of IGS New Delhi. The chapter was inaugurated by Prof. G.L.S. 
Siva Kumar Babu and Prof. N. K. Samadhiya (Past Presidents of Indian 
Geotechnical Society). Prof. Arvind K Agnihotri, the founder Chairman 
and Dr. Hemant Chore, the founder Secretary along with their executive 
committee members are putting in their best efforts to establish the 
chapter as the medium for disseminating knowledge in the field of 
Geotechnical Engineering and allied fields through workshops, 
seminars, short term courses by inviting the eminent personalities in 
the field from country as well as from abroad. 
              </p>
            </div>
  
          </div>
        </div>
      </div>
    );
  };
  
  export default About2;
  