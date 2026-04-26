import React, { useContext } from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <footer className={`relative ${isDark ? 'bg-gradient-to-b from-dark to-dark/80 border-t border-gray-800' : 'bg-gradient-to-b from-gray-900 to-gray-800'} text-white py-12 overflow-hidden`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center gap-8 mb-8">
          <div className="flex gap-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-800/50 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 hover:shadow-glow"
              title="GitHub"
            >
              <FiGithub size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-800/50 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 hover:shadow-glow"
              title="LinkedIn"
            >
              <FiLinkedin size={28} />
            </a>
          </div>

          <p className={`text-center text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-300'}`}>
            © 2024 Umar Khattak. All rights reserved. 🚀
          </p>
        </div>

        <div className={`text-center text-xs ${isDark ? 'text-gray-600' : 'text-gray-500'} pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-700'}`}>
          <p>Crafted with passion and powered by React, Tailwind CSS & Node.js</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
