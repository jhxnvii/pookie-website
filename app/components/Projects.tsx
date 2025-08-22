import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Maximize2, X, Shield, MessageSquare } from 'lucide-react';

const Projects = ({ darkMode }: any) => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      title: "PII Chrome Extension",
      description: "A Chrome extension that detects personally identifiable information (PII) on websites using keyword matching and regex patterns.",
      image: "2.png",
      stack: ["JavaScript", "HTML", "CSS", "Flask", "SQLite3", "Regex"],
      github: "https://github.com/jhxnvii/PII-CHROME-EXTENSION",
      demo: null,
      details: "This Chrome extension monitors websites for personally identifiable information (PII) using sophisticated keyword matching and regex pattern recognition. It features real-time monitoring and logging of PII exposure on various platforms including email services and generative AI websites like Chat GPT, Claude, and Quillbot. The backend is powered by a Flask-based dashboard that stores and audits detection logs in an SQLite3 database, providing comprehensive visibility into potential data exposure risks."
    },
    {
      title: "Chatbot NLP with RAG Model",
      description: "An NLP-based chatbot using Gemma 2B with Retrieval Augmented Generation (RAG) for enhanced conversational abilities.",
      image: "chatbot.png",
      stack: ["Python", "NLP", "Gemma 2B", "Machine Learning", "RAG"],
      github: "https://github.com/jhxnvii/Chatbot-NLP",
      demo: null,
      details: "This project implements a sophisticated chatbot leveraging Natural Language Processing (NLP) techniques with Google's Gemma 2B model. The chatbot utilizes Retrieval Augmented Generation (RAG) to enhance its conversational abilities by retrieving relevant information from a knowledge base before generating responses. This approach results in more accurate, contextually appropriate, and informative interactions with users. The project demonstrates advanced implementation of transformer-based language models and information retrieval techniques."
    },
    {
      title: "Handwritten OCR Detection Model",
      description: "Led the development of a TROCR model for converting handwritten text into digital format with enhanced accuracy.",
      image: "image.png",
      stack: ["Python", "Machine Learning", "Computer Vision", "OCR", "TROCR"],
      github: null,
      demo: null,
      details: "At RnP Soft, I led the development of a handwritten OCR (Optical Character Recognition) detection model using TROCR technology. The model utilizes advanced machine learning algorithms and computer vision techniques to convert handwritten text into digital format with exceptional accuracy. This solution addresses the challenges of varying handwriting styles, maintaining text formatting, and handling diverse document types. The implementation demonstrates expertise in both machine learning model training and practical application development."
    },
    {
      title: "Email Classifier System",
      description: "A classifier system that detects Confidential, PII, and Internal emails using rule-based and keyword-scoring techniques.",
      image: "1.png",
      stack: ["Python", "Google Colab", "Gradio", "NLP", "Classification Algorithms"],
      github: null,
      demo: null,
      details: "This email classification system categorizes emails into Confidential, PII-containing, and Internal classifications using a combination of rule-based processing and keyword-scoring techniques. Built on Google Colab, the system performs thorough risk assessment of email content to identify sensitive information and potential security risks. It features an interactive Gradio interface that provides visual representation of classification results and confidence scores, making it easier for users to understand the classification decisions."
    },
    {
      title: "Python-powered Squid Game",
      description: "An engaging Squid Game simulation with diverse game mechanics and functionalities implemented in Python.",
      image: "squid_game.png",
      stack: ["Python", "Game Development", "Object-Oriented Programming"],
      github: null,
      demo: null,
      details: "This project is a Python-based simulation of the popular Squid Game series, incorporating various game mechanics and functionalities from the show. I took the lead in designing and implementing multiple game elements to create an engaging user experience. The implementation showcases strong object-oriented programming principles, game logic development, and user interface design. Each mini-game within the simulation presents unique challenges and mechanics, providing users with a diverse gaming experience."
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
  };

  const openModal = (project:any) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  // Custom icon selection based on project type
  const getProjectIcon = (project:any) => {
    if (project.title.includes("PII") || project.title.includes("Email Classifier")) {
      return <Shield size={16} />;
    } else if (project.title.includes("Chatbot")) {
      return <MessageSquare size={16} />;
    } else {
      return <ExternalLink size={16} />;
    }
  };

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent inline-block">
          Featured Projects
        </h2>
        <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Showcasing my best work in cybersecurity, ML/AI, and software development
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}
            whileHover={{ y: -8 }}
          >
            <div className="relative overflow-hidden group">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                <div className="flex space-x-2">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900/80 hover:bg-gray-800 rounded-full text-white transition-colors duration-300"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900/80 hover:bg-gray-800 rounded-full text-white transition-colors duration-300"
                    >
                      {getProjectIcon(project)}
                    </a>
                  )}
                </div>
                <button 
                  onClick={() => openModal(project)}
                  className="p-2 bg-indigo-600/90 hover:bg-indigo-700 rounded-full text-white transition-colors duration-300"
                >
                  <Maximize2 size={16} />
                </button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className={`mb-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.slice(0, 4).map((tech, idx) => (
                  <span 
                    key={idx} 
                    className={`px-2 py-1 rounded-md text-xs ${
                      darkMode 
                        ? 'bg-gray-700 text-indigo-300' 
                        : 'bg-indigo-50 text-indigo-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
                {project.stack.length > 4 && (
                  <span 
                    className={`px-2 py-1 rounded-md text-xs ${
                      darkMode 
                        ? 'bg-gray-700 text-indigo-300' 
                        : 'bg-indigo-50 text-indigo-700'
                    }`}
                  >
                    +{project.stack.length - 4}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <motion.div 
           className={`max-w-4xl w-full rounded-2xl overflow-hidden ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-2xl mx-4`}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors duration-300"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {selectedProject.details}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className={`px-3 py-1 rounded-full text-sm ${
                        darkMode 
                          ? 'bg-gray-700 text-indigo-300' 
                          : 'bg-indigo-50 text-indigo-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                {selectedProject.github && (
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors duration-300"
                  >
                    <Github size={18} className="mr-2" />
                    View Code
                  </a>
                )}
                {selectedProject.demo && (
                  <a 
                    href={selectedProject.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-300"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;