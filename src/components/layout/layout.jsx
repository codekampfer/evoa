import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './navbar';

export default function Layout() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className={isLoginPage ? "bg-[#0B1812] h-screen" : "bg-[#253D32] min-h-screen"}>
      <Navbar isLoginPage={isLoginPage} />
      <main className={isLoginPage ? "flex flex-col h-screen " : ""}>
        <Outlet />
      </main>
    </div>
  );
}
