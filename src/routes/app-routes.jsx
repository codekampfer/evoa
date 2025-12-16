import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/layout';
import Landing from '../modules/landing/landingpage';
import Login from '../modules/auth/login';
import Register from '../modules/auth/register';
import ForgetPassword from '../modules/auth/forget-password';
import VerifyOTP from '../modules/auth/verify-otp';
import CreateNewPassword from '../modules/auth/create-new-password';
import ChoiceRole from '../modules/auth/choice-role';
import StartupRegistration from '../modules/auth/startup-registration';
import InvestorRegistration from '../modules/auth/investor-registration';
import IncubatorRegistration from '../modules/auth/incubator-registration';
import ViewerRegistration from '../modules/auth/viewer-registration';
import Startup from '../modules/startup/startup';
import Investor from '../modules/investor/investor';
import Incubator from '../modules/incubator/incubator';
import Viewer from '../modules/viewer/viewer';
import Explore from '../modules/explore/explore';
import Notifications from '../modules/notifications/notifications';
import ReelPitch from '../modules/pitch/reel-pitch';
import Blog from '../modules/pages/blog';
import PitchUs from '../modules/pages/pitch-us';
import Portfolio from '../modules/pages/portfolio';
import About from '../modules/pages/about';
import Contact from '../modules/pages/contact';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="register/startup" element={<StartupRegistration />} />
        <Route path="register/investor" element={<InvestorRegistration />} />
        <Route path="register/incubator" element={<IncubatorRegistration />} />
        <Route path="register/viewer" element={<ViewerRegistration />} />
        <Route path="choice-role" element={<ChoiceRole />} />
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route path="verify-otp" element={<VerifyOTP />} />
        <Route path="create-new-password" element={<CreateNewPassword />} />
        <Route path="startup" element={<Startup />} />
        <Route path="investor" element={<Investor />} />
        <Route path="incubator" element={<Incubator />} />
        <Route path="viewer" element={<Viewer />} />
        <Route path="explore" element={<Explore />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="pitch/:id" element={<ReelPitch />} />
        <Route path="blog" element={<Blog />} />
        <Route path="pitch-us" element={<PitchUs />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

