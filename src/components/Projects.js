import React, { useState, useEffect, useContext } from 'react';
import { FiGithub, FiStar } from 'react-icons/fi';
import { ThemeContext } from '../context/ThemeContext';
import axios from 'axios';

const Projects = () => {
  const { isDark } = useContext(ThemeContext);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const username = process.env.REACT_APP_GITHUB_USERNAME || 'umarkhattak';
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        );
        setRepos(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching repos:', error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className={`py-20 ${isDark ? 'bg-gradient-to-br from-darkCard/30 via-dark to-darkCard/30' : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-5xl font-bold mb-16 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Featured <span className="text-gradient bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
        </h2>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className={`animate-spin rounded-full h-12 w-12 border-4 border-transparent border-t-blue-500 border-r-purple-500`}></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group card-shadow p-6 rounded-xl transition-all duration-300 overflow-hidden relative ${isDark ? 'bg-dark/40 border border-gray-800 hover:border-blue-500/50' : 'bg-white/50 border border-gray-200 hover:border-blue-500/50'}`}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className={`text-xl font-bold group-hover:text-blue-500 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {repo.name}
                    </h3>
                    <FiGithub className={`text-2xl group-hover:scale-110 transition-transform ${isDark ? 'text-gray-400 group-hover:text-blue-400' : 'text-gray-600 group-hover:text-blue-500'}`} />
                  </div>

                  <p className={`text-sm mb-6 line-clamp-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {repo.description || 'No description provided'}
                  </p>

                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-2">
                      <FiStar className={`${isDark ? 'text-yellow-400' : 'text-amber-500'}`} />
                      <span className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {repo.stargazers_count}
                      </span>
                    </div>
                    {repo.language && (
                      <span className="text-xs px-3 py-1 rounded-full font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30">
                        {repo.language}
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
