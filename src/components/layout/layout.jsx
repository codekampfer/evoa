import { Outlet, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import Navbar from './navbar';

export default function Layout() {
  const location = useLocation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const authPages = ['/login', '/register', '/choice-role', '/forget-password', '/verify-otp', '/create-new-password', '/register/startup', '/register/investor', '/register/incubator', '/register/viewer'];
  const isAuthPage = authPages.includes(location.pathname);
  const dashboardPages = ['/startup', '/investor', '/incubator', '/viewer', '/explore', '/notifications'];
  const isDashboardPage = dashboardPages.includes(location.pathname);

  return (
    <div className={`transition-colors duration-300 ${
      isAuthPage 
        ? (isDark ? "bg-black h-screen" : "bg-white h-screen")
        : (isDark ? "bg-black min-h-screen" : "bg-white min-h-screen")
    }`}>
      {!isAuthPage && !isDashboardPage && <Navbar />}
      <main className={isAuthPage ? "flex flex-col h-screen " : ""}>
        <Outlet />
      </main>
    </div>
  );
}
