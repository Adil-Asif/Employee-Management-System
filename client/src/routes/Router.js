import { Routes, Route } from "react-router-dom";
import RegistrationPage from "../views/RegistrationPage/RegistrationPage"
const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<RegistrationPage />} />
      {/* <Route exact path="/profile" src={<RegistrationPage />} /> */}
    </Routes>
  );
};

export default Routers;
