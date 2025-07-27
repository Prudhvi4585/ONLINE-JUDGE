// import React from 'react'
// import {Link} from 'react-router-dom'

// function Footer() {
//   return (
//     <div>
      
      

//             <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
//                 <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
//                 <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
//                     <li>
//                         <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
//                     </li>
//                     <li>
//                         <Link to="/service/spr" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
//                     </li>
//                     <li>
//                         <Link to="/service/sam" className="hover:underline me-4 md:me-6">Licensing</Link>
//                     </li>
//                     <li>
//                         <Link to="/" className="hover:underline">Contact</Link>
//                     </li>
//                 </ul>
//                 </div>
//             </footer>

//     </div>
//   )
// }

// export default Footer
import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 border-t border-gray-700">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-lg font-semibold">Developed by Sangulge Prudhvi Raj</p>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-300">
          <a
            href="https://www.linkedin.com/in/sangulge-prudhvi-raj-b566602a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-blue-400 transition"
          >
            <FaLinkedin className="mr-2" />
          </a>
          <a
            href="mailto:sangulgeprudhvi@gmail.com"
            className="flex items-center hover:text-blue-400 transition"
          >
            <FaEnvelope className="mr-2" />
            sangulgeprudhvi@gmail.com
          </a>
          <a
            href="tel:+917671070913"
            className="flex items-center hover:text-blue-400 transition"
          >
            <FaPhone className="mr-2" />
            +91 7671070913
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
