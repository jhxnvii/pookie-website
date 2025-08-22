import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Mail, ExternalLink, Code, Coffee, Phone, MapPin } from 'lucide-react';

const Footer = ({ darkMode }: any) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();
  
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <footer>
      <div className="container mx-auto">
        {/* Bento Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Brand Tile */}
          <motion.div 
            variants={itemVariants}
            className={`md:col-span-2 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } p-8 rounded-3xl shadow-sm border ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Jhanvi Jain
              </span>
            </h3>
            <div>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${
                  darkMode ? 'bg-gray-700' : 'bg-indigo-50'
                } mr-4`}>
                  <Mail className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} size={16} />
                </div>
                <div className="flex items-center" >
                  <h4 className="text-lg font-medium mb-1">Email : </h4>
                  <a 
                    href="mailto:jhanvijain052003@gmail.com" 
                    className={`${darkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'} transition-colors duration-300`}
                  >
                    &nbsp; jhanvijain052003@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${
                  darkMode ? 'bg-gray-700' : 'bg-indigo-50'
                } mr-4`}>
                  <Phone className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} size={16} />
                </div>
                <div className='flex items-center'> 
                  <h4 className="text-lg font-medium mb-1"> Phone :  </h4> 
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  &nbsp; 9910007140
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${
                  darkMode ? 'bg-gray-700' : 'bg-indigo-50'
                } mr-4`}>
                  <MapPin className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} size={16} />
                </div>
                <div className='flex items-center'>
                  <h4 className="text-lg font-medium mb-1">Location : </h4>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                     &nbsp; India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4">Social Media</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/jhxnvii" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`p-3 rounded-lg ${
                    darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  } transition-colors duration-300`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/in/jhanvi-jain-40394823b/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`p-3 rounded-lg ${
                    darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  } transition-colors duration-300`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a 
                  href="https://x.com/Jhxnvii_e" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`p-3 rounded-lg ${
                    darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  } transition-colors duration-300`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          </motion.div>
          
          {/* Quick Links Tile */}
          <motion.div 
            variants={itemVariants}
            className={`${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } p-8 rounded-3xl shadow-sm border ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}
          >
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className={`flex items-center ${
                      darkMode 
                        ? 'text-gray-400 hover:text-indigo-400' 
                        : 'text-gray-600 hover:text-indigo-600'
                    } transition-colors duration-300`}
                  >
                    <ExternalLink size={14} className="mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Newsletter Tile */}
          <motion.div 
            variants={itemVariants}
            className={`${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } p-8 rounded-3xl shadow-sm border ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}
          >
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Stay Updated
            </h3>
            <p className={`mb-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Subscribe for the latest updates and insights.
            </p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className={`w-full px-4 py-3 rounded-xl ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white focus:border-indigo-500' 
                    : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-indigo-500'
                } border focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all`}
                required
              />
              <button 
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-xl transition-colors duration-300 flex items-center justify-center"
              >
                <Mail size={16} className="mr-2" />
                Subscribe
              </button>
            </form>
          </motion.div>
          
          {/* Stats Tile */}
          <motion.div 
            variants={itemVariants}
            className={`flex ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } p-8 rounded-3xl shadow-sm border ${
              darkMode ? 'border-gray-700 border-opacity-50' : 'border-gray-200'
            } md:col-span-2`}
          >
            <div className="grid grid-cols-2 gap-6 w-full">
              <div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Education</p>
                <h4 className={`text-3xl font-bold mt-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>KIIT University</h4>
              </div>
              <div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Projects Completed</p>
                <h4 className={`text-3xl font-bold mt-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>4+</h4>
              </div>
              <div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Work Experience</p>
                <h4 className={`text-3xl font-bold mt-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Flipkart InfoSec</h4>
              </div>
              <div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>CGPA</p>
                <h4 className={`text-3xl font-bold mt-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>8.79</h4>
              </div>
            </div>
          </motion.div>
          
          {/* Tech Stack Tile */}
          <motion.div 
            variants={itemVariants}
            className={`${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } p-8 rounded-3xl shadow-sm border ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Code className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} size={20} />
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Tech Stack
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Python', 'C++', 'Java', 'React', 'ML', 'AWS', 'MySQL'].map((tech) => (
                <span 
                  key={tech}
                  className={`px-3 py-1 text-xs rounded-full ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300' 
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
          
          {/* Support Tile */}
          <motion.div 
            variants={itemVariants}
            className={`${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } p-8 rounded-3xl shadow-sm border ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}
          >
            <div className="flex items-center space-x-2 mb-3">
              <Coffee className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} size={20} />
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Support My Work
              </h3>
            </div>
            <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              If you appreciate my work, consider buying me a coffee.
            </p>
            <a 
              href="https://buymeacoffee.com/jhanvijain" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl transition-colors duration-300 text-sm font-medium"
            >
              <Coffee size={16} className="mr-2" />
              Buy me a coffee
            </a>
          </motion.div>
        </motion.div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-10">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'} mb-4 md:mb-0`}
          >
            © {currentYear} Jhanvi Jain. All rights reserved. Made with <Heart className="inline h-4 w-4 text-red-500" /> in India.
          </motion.p>
          
          <motion.button
            whileHover={{ y: -3, transition: { type: 'spring', stiffness: 400 } }}
            whileTap={{ y: 0 }}
            onClick={scrollToTop}
            className={`p-3 rounded-full ${
              darkMode 
                ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                : 'bg-white hover:bg-gray-100 border border-gray-200 shadow-md'
            } transition-all duration-300`}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className={darkMode ? 'text-gray-300' : 'text-gray-700'} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;