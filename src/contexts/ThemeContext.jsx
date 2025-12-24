import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Safely get theme from localStorage or default to 'dark'
    // Check if we're in browser environment before accessing localStorage
    if (typeof window !== 'undefined') {
      try {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'dark';
      } catch (error) {
        console.warn('Failed to access localStorage:', error);
        return 'dark';
      }
    }
    return 'dark';
  });

  useEffect(() => {
    // Apply theme to document root
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      try {
        localStorage.setItem('theme', theme);
      } catch (error) {
        console.warn('Failed to save theme to localStorage:', error);
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

