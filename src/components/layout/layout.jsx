import { Outlet, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import Navbar from './navbar';

export default function Layout() {
  const location = useLocation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const isLoginPage = location.pathname === '/login';

  return (
    <div className={`transition-colors duration-300 ${
      isLoginPage 
        ? (isDark ? "bg-black h-screen" : "bg-white h-screen")
        : (isDark ? "bg-black min-h-screen" : "bg-white min-h-screen")
    }`}>
      <Navbar isLoginPage={isLoginPage} />
      <main className={isLoginPage ? "flex flex-col h-screen " : ""}>
        <Outlet />
      </main>
    </div>
  );
}
