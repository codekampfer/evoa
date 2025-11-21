import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/layout';
import Landing from '../modules/landing/landing';
import Login from '../modules/auth/login';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

