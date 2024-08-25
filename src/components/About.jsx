// src/components/About.jsx
// import React from 'react';

const About = () => {
  return (
    <section className="bg-cover bg-center text-black py-16 flex flex-col justify-center items-center h-screen" style={{ backgroundImage: 'url(123civilconabout.png)' }}>
      <h2 className="text-purple-500 font-bold uppercase mb-4">About</h2>
      <h3 className="text-4xl font-bold mb-6">Indian Geotechnical CONFERENCE 2024</h3>
      <img src="" alt="Conference" className="mx-auto mb-6" />
      <p className="text-base max-w-2xl mx-auto leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec dapibus orci. Interdum et malesuada fames ac ante ipsum primis in faucibus...
      </p>
    </section>
  );
};

export default About;
