import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check if the user has explicitly set a preference
    const saved = localStorage.getItem('theme');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    // Default to true (dark mode)
    return true;
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDark));
    
    // Explicitly manipulate both body and html tags for Tailwind
    const html = document.documentElement;
    const body = document.body;
    
    if (isDark) {
      html.classList.add('dark');
      body.classList.add('bg-dark', 'text-white');
      body.classList.remove('bg-gray-50', 'text-gray-900');
    } else {
      html.classList.remove('dark');
      body.classList.add('bg-gray-50', 'text-gray-900');
      body.classList.remove('bg-dark', 'text-white');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
