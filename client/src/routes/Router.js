import { Routes, Route } from "react-router-dom";
import ProfilePage from "../views/ProfilePage/ProfilePage";
import RegistrationPage from "../views/RegistrationPage/RegistrationPage"
const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<RegistrationPage />} />
      <Route exact path="/profile" element={< ProfilePage/>} />
    </Routes>
  );
};

export default Routers;
