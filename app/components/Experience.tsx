import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = ({ darkMode }:any) => {
  const experiences = [
    {
      title: "Data Protection & Investigation",
      company: "Flipkart – InfoSec",
      location: "Bhubaneswar, India",
      period: "Current",
      description: "Engineered and optimized DLP, Email Security, CASB, and Endpoint Protection workflows using Microsoft Purview, Defender, and Netskope. Automated data compliance processes and reporting via Google Apps Script, improving efficiency and reducing manual effort. Built dynamic Flask dashboards to visualize incident data and support real-time threat analysis.",
      skills: ["DLP", "CASB", "Flask", "Microsoft Purview", "Netskope", "Security", "Automation"]
    },
    {
      title: "AI/ML Engineer",
      company: "RnP Soft Pvt. Ltd.",
      location: "India",
      period: "May 2024 - August 2024",
      description: "Led a project to develop a handwritten OCR model. Enhanced skills in machine learning, computer vision, project management, and team leadership. Successfully tackled complex technical challenges and drove successful outcomes.",
      skills: ["Machine Learning", "OCR", "Computer Vision", "Python", "Project Management", "Team Leadership"]
    },
    {
      title: "Summer Intern",
      company: "Wells Fargo Forage",
      location: "Virtual",
      period: "July 2023",
      description: "Completed a virtual software engineering internship. Created and implemented a data model. Honed technical skills in software engineering through practical tasks.",
      skills: ["Software Engineering", "Data Modeling", "Virtual Internship"]
    }
  ];

  const education = [
    {
      degree: "Bachelor's Degree",
      institution: "KIIT UNIVERSITY",
      location: "BHUBANESWAR",
      period: "2021 - 2025",
      description: "Currently pursuing a Bachelor's degree with a CGPA of 8.79. Focusing on computer science with interests in AI/ML and information security."
    },
    {
      degree: "Intermediate/+2",
      institution: "RYAN INTERNATIONAL SCHOOL",
      location: "GHAZIABAD",
      period: "2020 - 2021",
      description: "Completed intermediate education with 92.2%."
    },
    {
      degree: "Matriculation",
      institution: "RYAN INTERNATIONAL SCHOOL",
      location: "GHAZIABAD",
      period: "2018 - 2019",
      description: "Completed matriculation with 94.2%."
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent inline-block">
          Experience & Education
        </h2>
        <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          My professional journey and academic background
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Work Experience */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-6 flex items-center"
          >
            <Briefcase className="mr-2 text-indigo-500" size={24} />
            Work Experience
          </motion.h3>
          
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-6"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`p-6 rounded-xl ${
                  darkMode 
                    ? `bg-gray-800 ${index === 0 ? 'border-l-4 border-indigo-500' : 'border-l-4 border-gray-700'}` 
                    : `bg-white shadow-md ${index === 0 ? 'border-l-4 border-indigo-500' : 'border-l-4 border-gray-200'}`
                } relative`}
              >
                {index < experiences.length - 1 && (
                  <div className={`absolute w-1 h-16 bottom-0 left-6 transform translate-y-full ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}></div>
                )}
                
                <h4 className="text-xl font-semibold">{exp.title}</h4>
                <h5 className={`text-lg ${darkMode ? 'text-indigo-400' : 'text-indigo-600'} font-medium`}>
                  {exp.company}
                </h5>
                
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 mb-3">
                  <div className="flex items-center">
                    <MapPin size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                    <span className={`ml-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {exp.location}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                    <span className={`ml-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {exp.period}
                    </span>
                  </div>
                </div>
                
                <p className={`mt-3 mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className={`px-2 py-1 rounded-md text-xs ${
                        darkMode 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Education */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-6 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            Education
          </motion.h3>
          
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-6"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`p-6 rounded-xl ${
                  darkMode 
                    ? 'bg-gray-800 border-l-4 border-purple-500' 
                    : 'bg-white shadow-md border-l-4 border-purple-500'
                } relative`}
              >
                {index < education.length - 1 && (
                  <div className={`absolute w-1 h-16 bottom-0 left-6 transform translate-y-full ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}></div>
                )}
                
                <h4 className="text-xl font-semibold">{edu.degree}</h4>
                <h5 className={`text-lg ${darkMode ? 'text-purple-400' : 'text-purple-600'} font-medium`}>
                  {edu.institution}
                </h5>
                
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 mb-3">
                  <div className="flex items-center">
                    <MapPin size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                    <span className={`ml-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {edu.location}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                    <span className={`ml-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {edu.period}
                    </span>
                  </div>
                </div>
                
                <p className={`mt-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className={`mt-8 p-6 rounded-xl ${
              darkMode 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-white shadow-md border border-gray-100'
            }`}
          >
            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
            <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                AWS Cloud Practitioner (2024)
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Microsoft Azure Fundamentals (2023)
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Google Data Analytics Professional (2023)
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                CompTIA Security+ (2022)
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;