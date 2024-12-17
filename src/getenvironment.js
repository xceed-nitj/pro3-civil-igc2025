// envUtils.js
// async function checkServer(url) {
//   try {
//     const response = await fetch(url, { method: 'HEAD' });
//     return response.ok;
//   } catch (error) {
//    // console.log("server is not ok"); //incase server is not ok it will return false
//     return false;
//   }
// }

function getEnvironment() {
    const currentURL = window.location.href;
    //const development = 'http://localhost:8010';
    const production = 'https://nitjtt.onrender.com';
     const nitjServer = 'https://xceed.nitj.ac.in';
  //for time being using nijtt server
    if (currentURL.includes('localhost')) {
      return production;
    } else if (currentURL.includes('nitjtt')) {
      return production;
    } else {
      // Default to a specific environment or handle other cases
      return nitjServer;
    }
  }

  // if (currentURL.includes('localhost')) {
  //   return production;
  // } else if (currentURL.includes('nitjtt')) {
  //   return Promise.resolve(production);
  // } else {
  //   return checkServer(nitjServer).then(isNitjServerUp => 
  //     isNitjServerUp ? nitjServer : production
  //   );
  //   // If nitjServer is not working, it will default to production.
  // }
  
  
// export default getEnvironment;
  
// async function checkServer(url) {
//   try {
//     const response = await fetch(url, { method: 'HEAD' });
//     return response.ok;
//   } catch (error) {
//     return false; // Server is not OK, return false
//   }
// }

// function getEnvironment() {
//   const currentURL = window.location.href;
//   const production = 'https://nitjtt.onrender.com';
//   const nitjServer = 'https://xceed.nitj.ac.in';

//   if (currentURL.includes('localhost')) {
//     return production;
//   } else if (currentURL.includes('nitjtt')) {
//     return Promise.resolve(production);
//   } else {
//     return checkServer(nitjServer).then((isNitjServerUp) =>
//       isNitjServerUp ? nitjServer : production
//     );
//   }
// }

export default getEnvironment;
