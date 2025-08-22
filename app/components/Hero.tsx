// import React from 'react';
// import { motion } from 'framer-motion';
// import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

// const Hero = ({ darkMode }:any) => {
//   return (
//     <section id="home" className="min-h-screen flex flex-col justify-center pt-16">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="space-y-6"
//         >
//           <motion.p 
//             className="text-lg md:text-xl font-medium text-indigo-500"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             Hello, I'm
//           </motion.p>
//           <motion.h1 
//             className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             Your Name
//           </motion.h1>
//           <motion.h2 
//             className={`text-2xl md:text-3xl font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//           >
//             Full Stack Developer & UI/UX Designer
//           </motion.h2>
//           <motion.p 
//             className={`text-base md:text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//           >
//             I craft responsive and performant web applications with beautiful interfaces. 
//             Focused on building products that provide meaningful experiences.
//           </motion.p>
          
//           <motion.div 
//             className="flex space-x-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1 }}
//           >
//             <motion.a 
//               href="#contact" 
//               className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Get in Touch
//             </motion.a>
//             <motion.a 
//               href="#projects" 
//               className={`px-6 py-3 border ${darkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-300 hover:border-gray-400'} font-medium rounded-lg transition-all duration-300`}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               View Projects
//             </motion.a>
//           </motion.div>
          
//           <motion.div 
//             className="flex space-x-4 pt-2"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.2 }}
//           >
//             <motion.a 
//               href="https://github.com/yourusername" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}
//               whileHover={{ scale: 1.1, y: -2 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <Github size={20} />
//             </motion.a>
//             <motion.a 
//               href="https://linkedin.com/in/yourusername" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}
//               whileHover={{ scale: 1.1, y: -2 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <Linkedin size={20} />
//             </motion.a>
//             <motion.a 
//               href="mailto:your.email@example.com" 
//               className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}
//               whileHover={{ scale: 1.1, y: -2 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <Mail size={20} />
//             </motion.a>
//           </motion.div>
//         </motion.div>
        
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="flex justify-center lg:justify-end"
//         >
//           <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full border-4 ${darkMode ? 'border-indigo-500' : 'border-purple-600'} overflow-hidden relative`}>
//             {/* Replace with your avatar/image */}
//             <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl">
//               Your Photo
//             </div>
//           </div>
//         </motion.div>
//       </div>
      
//       <motion.div 
//         className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
//       >
//         <a href="#skills" className="flex flex-col items-center">
//           <span className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Scroll Down</span>
//           <ArrowDown className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`} size={20} />
//         </a>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;


import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = ({ darkMode }: any) => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.p 
            className="text-lg md:text-xl font-medium text-indigo-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.p>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Jhanvi Jain
          </motion.h1>
          <motion.h2 
            className={`text-2xl md:text-3xl font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Currently Data Protection & Investigation Trainee
          </motion.h2>
          <motion.p 
            className={`text-base md:text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Results-driven professional passionate about computer science, AI/ML, and information security. 
            With hands-on experience in data protection, security frameworks, privacy solutions, building tools with Gen AI and Machine Learning.

          </motion.p>
          
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.a 
              href="#contact" 
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a 
              href="#projects" 
              className={`px-6 py-3 border ${darkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-300 hover:border-gray-400'} font-medium rounded-lg transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="flex space-x-4 pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.a 
              href="https://github.com/jhxnvii" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/jhanvi-jain-40394823b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              href="mailto:jhanvijain052003@gmail.com" 
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full border-4 ${darkMode ? 'border-indigo-500' : 'border-purple-600'} overflow-hidden relative`}>
            {/* Replace with your avatar/image */}
            <div
  className="w-full h-full flex items-center justify-center text-white text-xl"
  // style={{ backgroundImage: 'url(./official.jpg)', backgroundSize: 'full', backgroundPosition: 'center' }}
>
<img
    src="/official.jpg"
    alt="Background"
    className="absolute top-0 left-0 antialiased object-cover h-full "
  />
</div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <a href="#skills" className="flex flex-col items-center">
          <span className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Scroll Down</span>
          <ArrowDown className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`} size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;