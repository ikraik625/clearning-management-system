import MultiStepForm from "./form-steps/MultiStepForm";

import { Routes, Route } from "react-router-dom";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import MesReservations from "./pages/MesReservations";
import Clients from "./pages/Clients";
import Infos from "./pages/Infos";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MultiStepForm />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/MesReservations" element={<MesReservations />} />
        <Route path="/Clients" element={<Clients />} />
        <Route path="/Infos" element={<Infos />} />
      </Routes>
    </div>
  );
}

export default App;
