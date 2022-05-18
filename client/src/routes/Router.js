import { Routes, Route } from "react-router-dom";
import BenefitsPage from "../views/BenefitsPage/BenefitsPage";
import EmployeeReportsPage from "../views/EmployeeReportsPage/EmployeeReportsPage";
import OFFBoardingPage from "../views/OFFBoardingPage/OFFBoardingPage";
import ONBoardingPage from "../views/ONBoardingPage/ONBoardingPage";
import ProfilePage from "../views/ProfilePage/ProfilePage";
import ProjectManagement from "../views/ProjectManagement/ProjectManagement";
import RegistrationPage from "../views/RegistrationPage/RegistrationPage";
import EmployeeSalariesPage from "../views/EmployeeSalariesPage/EmployeeSalariesPage";
import HelpDeskPage from "../views/HelpDeskPage/HelpDesk";
import AttendancePage from "../views/AttendancePage/AttendancePage";
import SalaryPage from "../views/SalaryPage/SalaryPage";
const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<RegistrationPage />} />
      <Route exact path="/profile" element={<ProfilePage />} />
      <Route exact path="/onboarding" element={<ONBoardingPage />} />
      <Route exact path="/offboarding" element={<OFFBoardingPage />} />
      <Route exact path="/benefits" element={<BenefitsPage />} />
      <Route exact path="/employeereports" element={<EmployeeReportsPage />} />
      <Route exact path ="/projects" element={<ProjectManagement/>}/>
      <Route exact path ="/salaries" element={<EmployeeSalariesPage/>}/>
      <Route exact path ="/helpdesk" element={<HelpDeskPage/>}/>
      <Route exact path ="/attendance" element={<AttendancePage/>}/>
      <Route exact path ="/payslip" element={<SalaryPage/>}/>
    </Routes>
  );
};

export default Routers;
