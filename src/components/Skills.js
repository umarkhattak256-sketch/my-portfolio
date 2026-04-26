import React, { useContext } from 'react';
import { FaJs, FaReact, FaHtml5, FaCss3Alt, FaPython, FaPhp, FaNodeJs } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const Skills = () => {
  const { isDark } = useContext(ThemeContext);

  const skills = [
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
    { name: 'React', icon: FaReact, color: 'text-blue-400' },
    { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'Python', icon: FaPython, color: 'text-blue-600' },
    { name: 'PHP', icon: FaPhp, color: 'text-purple-500' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  ];

  return (
    <section id="skills" className={`py-20 ${isDark ? 'bg-gradient-to-br from-dark via-darkCard/30 to-dark' : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-5xl font-bold mb-16 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Skills & <span className="text-gradient bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Technologies</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`group card-shadow flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 overflow-hidden relative cursor-pointer ${isDark ? 'bg-dark/40 border border-gray-800 hover:border-blue-500/50' : 'bg-white/50 border border-gray-200 hover:border-blue-500/50'}`}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/15 group-hover:to-purple-500/15 transition-all duration-300"></div>
                
                <div className="relative z-10 text-center">
                  <Icon className={`${skill.color} text-5xl mb-3 mx-auto group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-300`} />
                  <p className={`text-sm font-bold ${isDark ? 'text-gray-200' : 'text-gray-800'} group-hover:text-blue-500 transition-colors duration-300`}>
                    {skill.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
