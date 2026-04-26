import React, { useContext } from 'react';
import { FiDownload, FiMail } from 'react-icons/fi';
import { ThemeContext } from '../context/ThemeContext';

const Hero = () => {
  const { isDark } = useContext(ThemeContext);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br ${isDark ? 'from-dark via-darkCard to-dark' : 'from-gray-50 via-white to-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className={`text-6xl md:text-7xl font-bold mb-6 animate-fade-in ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Hi, I'm <span className="text-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Umar</span>
        </h1>
        <p className={`text-2xl md:text-3xl mb-4 font-light ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Full Stack Developer
        </p>
        <p className={`text-lg mb-12 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
          I build beautiful and functional web applications using React, Node.js, and modern web technologies. Let's create something amazing together!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="/cv.pdf"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-glow-lg hover:scale-105 group"
            download
          >
            <FiDownload className="group-hover:animate-bounce" /> Download CV
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className={`flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2 ${isDark ? 'bg-transparent border-gray-700 hover:bg-gray-800/50 text-gray-300' : 'bg-transparent border-gray-300 hover:bg-gray-100 text-gray-700'}`}
          >
            <FiMail /> Contact Me
          </button>
        </div>

        {/* Animated scroll indicator */}
        <div className="mt-16 animate-float">
          <svg className={`w-6 h-6 mx-auto ${isDark ? 'text-gray-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
