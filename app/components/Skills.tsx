import React from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, Database, Server, Brain, Globe, Terminal } from 'lucide-react';

const Skills = ({ darkMode }: any) => {
  const skills = [
    {
      category: 'Cybersecurity & Information Security',
      icon: <Shield size={24} />,
      items: ['Netskope', 'Microsoft Purview & Defender', 'Mimecast', 'CASB', 'Palo Alto Prisma', 'DLP', 'SWG', 'SIEM', 'RBAC', 'IRM', 'EDR', 'OAuth', 'Incident Response', 'Email Security', 'Data Classification', 'PII Detection']
    },
    {
      category: 'Software Development',
      icon: <Code size={24} />,
      items: ['C', 'C++', 'Python', 'Java', 'OOPS', 'DSA', 'Linux', 'Software Engineering', 'HTML', 'CSS', 'JavaScript', 'Web Development']
    },
    {
      category: 'Data Science & Machine Learning',
      icon: <Brain size={24} />,
      items: ['Machine Learning', 'AI', 'Data Analytics', 'Big Data', 'Model Accuracy Metrics', 'Data Visualization', 'NumPy', 'Pandas', 'Matplotlib']
    },
    {
      category: 'Database Management',
      icon: <Database size={24} />,
      items: ['DBMS', 'MySQL', 'RDBMS', 'SQLite3']
    },
    {
      category: 'Cloud Computing & DevOps',
      icon: <Server size={24} />,
      items: ['Cloud Computing', 'AWS']
    },
    {
      category: 'Engineering & Technical Concepts',
      icon: <Terminal size={24} />,
      items: ['Computer Networks', 'Computer Architecture', 'Digital Electronics', 'Analog Electronic Circuits', 'High-Performance Computing']
    },
    {
      category: 'Soft Skills',
      icon: <Globe size={24} />,
      items: ['Critical Thinking', 'Time Management', 'Adaptability', 'Leadership', 'Professional Communication', 'Decision-Making', 'Teamwork', 'Presentation Skills']
    }
  ];

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
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent inline-block">
          Skills & Expertise
        </h2>
        <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          A diverse set of skills, technologies and tools I've worked with
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            className={`rounded-xl p-6 ${
              darkMode 
                ? 'bg-gray-800 hover:bg-gray-750 border border-gray-700' 
                : 'bg-white hover:bg-gray-50 border border-gray-200'
            } shadow-lg hover:shadow-xl transition-all duration-300 group`}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-4">
              <div className={`p-2 rounded-lg mr-3 ${
                darkMode ? 'bg-gray-700 text-indigo-400' : 'bg-indigo-100 text-indigo-600'
              } group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold">{skill.category}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, idx) => (
                <span 
                  key={idx} 
                  className={`px-3 py-1 rounded-full text-sm ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-indigo-900 hover:text-indigo-200' 
                      : 'bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-800'
                  } transition-colors duration-300`}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;