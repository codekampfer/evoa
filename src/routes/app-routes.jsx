import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/layout';
import Landing from '../modules/landing/landing';
import Login from '../modules/auth/login';
import Register from '../modules/auth/register';
import ForgetPassword from '../modules/auth/forget-password';
import VerifyOTP from '../modules/auth/verify-otp';
import CreateNewPassword from '../modules/auth/create-new-password';
import ChoiceRole from '../modules/auth/choice-role';
import Startup from '../modules/startup/startup';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="startup" element={<Startup />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="choice-role" element={<ChoiceRole />} />
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route path="verify-otp" element={<VerifyOTP />} />
        <Route path="create-new-password" element={<CreateNewPassword />} />
      </Route>
    </Routes>
  );
}

