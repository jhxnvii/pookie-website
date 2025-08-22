// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Sun, Moon, Menu, X } from 'lucide-react';

// const Navbar = ({ darkMode, setDarkMode }:any) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);
  
//   const links = [
//     { name: 'Home', url: '#home' },
//     { name: 'Skills', url: '#skills' },
//     { name: 'Projects', url: '#projects' },
//     { name: 'Experience', url: '#experience' },
//     { name: 'Contact', url: '#contact' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <motion.nav 
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className={`fixed w-full z-40 transition-all duration-300 ${
//         scrolled 
//           ? darkMode 
//             ? 'bg-gray-900/90 backdrop-blur-sm shadow-lg' 
//             : 'bg-white/90 backdrop-blur-sm shadow-lg' 
//           : 'bg-transparent'
//       }`}
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <motion.a 
//               href="#home"
//               className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               TechTales by J
//             </motion.a>
//           </div>
          
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               {links.map((link) => (
//                 <motion.a
//                   key={link.name}
//                   href={link.url}
//                   className={`px-3 py-2 rounded-md text-sm font-medium ${
//                     darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
//                   } transition-colors duration-300`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {link.name}
//                 </motion.a>
//               ))}
//               {/* <motion.button
//                 onClick={() => setDarkMode(!darkMode)}
//                 className={`p-2 rounded-full ${
//                   darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-800'
//                 }`}
//                 whileHover={{ scale: 1.1, rotate: 15 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//               </motion.button> */}
//             </div>
//           </div>
          
//           <div className="md:hidden flex items-center">
//             <motion.button
//               onClick={() => setDarkMode(!darkMode)}
//               className={`p-2 mr-2 rounded-full ${
//                 darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-800'
//               }`}
//               whileHover={{ scale: 1.1, rotate: 15 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//             </motion.button>
//             <motion.button
//               onClick={toggleMenu}
//               className={`p-2 rounded-md ${
//                 darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-200'
//               }`}
//               whileTap={{ scale: 0.9 }}
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </motion.button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.2 }}
//           className={`md:hidden ${
//             darkMode ? 'bg-gray-800' : 'bg-white'
//           } shadow-lg`}
//         >
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {links.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.url}
//                 onClick={toggleMenu}
//                 className={`block px-3 py-2 rounded-md text-base font-medium ${
//                   darkMode 
//                     ? 'hover:bg-gray-700 hover:text-white' 
//                     : 'hover:bg-gray-200 hover:text-gray-900'
//                 }`}
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>
//         </motion.div>
//       )}
//     </motion.nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }:any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const links = [
    { name: 'Home', url: '#home' },
    { name: 'Skills', url: '#skills' },
    { name: 'Projects', url: '#projects' },
    { name: 'Experience', url: '#experience' },
    { name: 'Contact', url: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled 
          ? darkMode 
            ? 'bg-gray-900/90 backdrop-blur-sm shadow-lg' 
            : 'bg-white/90 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <motion.a 
              href="#home"
              className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              TechTales by J
            </motion.a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  className={`px-3 py-2 rounded-md text-base font-medium ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                  } transition-colors duration-300 ${
                    ['Home', 'Skills', 'Projects','Experience','Contact'].includes(link.name) ? 'text-lg' : ''
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.a>
              ))}
              {/* <motion.button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${
                  darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-800'
                }`}
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button> */}
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 mr-2 rounded-full ${
                darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-800'
              }`}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <motion.button
              onClick={toggleMenu}
              className={`p-2 rounded-md ${
                darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-200'
              }`}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className={`md:hidden ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-lg`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                onClick={toggleMenu}
                className={`block px-3 py-2 rounded-md font-medium ${
                  darkMode 
                    ? 'hover:bg-gray-700 hover:text-white' 
                    : 'hover:bg-gray-200 hover:text-gray-900'
                } ${
                  ['Home', 'Skills', 'Projects'].includes(link.name) ? 'text-lg' : 'text-base'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;