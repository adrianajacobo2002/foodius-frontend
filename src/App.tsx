import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicNavbar from "./layouts/PublicNavbar";
import LandingPage from "./pages/Public/LandingPage";
import RegisterForm from "./forms/Register";
import LoginForm from "./forms/Login";




const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
};

export default App;
