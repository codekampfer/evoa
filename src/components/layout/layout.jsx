import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './navbar';

export default function Layout() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className={isLoginPage ? "bg-white h-screen" : "bg-gray-100 min-h-screen"}>
      <Navbar isLoginPage={isLoginPage} />
      <main className={isLoginPage ? "flex flex-col h-screen pt-[56px]" : ""}>
        <Outlet />
      </main>
    </div>
  );
}
