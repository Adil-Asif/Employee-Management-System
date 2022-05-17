import { Routes, Route } from "react-router-dom";
import Benefits from "../views/Benefits/Benefits";
import OFFBoardingPage from "../views/OFFBoardingPage/OFFBoardingPage";
import ONBoardingPage from "../views/ONBoardingPage/ONBoardingPage";
import ProfilePage from "../views/ProfilePage/ProfilePage";
import RegistrationPage from "../views/RegistrationPage/RegistrationPage";
const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<RegistrationPage />} />
      <Route exact path="/profile" element={<ProfilePage />} />
      <Route exact path="/onboarding" element={<ONBoardingPage />} />
      <Route exact path="/offboarding" element={<OFFBoardingPage />} />
      <Route exact path="/benefits" element={<Benefits />} />
    </Routes>
  );
};

export default Routers;
