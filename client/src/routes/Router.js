import { Routes, Route } from "react-router-dom";
import BenefitsPage from "../views/BenefitsPage/BenefitsPage";
import EmployeeReportsPage from "../views/EmployeeReportsPage/EmployeeReportsPage";
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
      <Route exact path="/benefits" element={<BenefitsPage />} />
      <Route exact path="/employeereports" element={<EmployeeReportsPage />} />
    </Routes>
  );
};

export default Routers;
