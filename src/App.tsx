import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicNavbar from "./layouts/PublicNavbar";
import AdminNavbar from "./layouts/AdminNavbar";
import ClientNavbar from "./layouts/ClienteNavbar";
import BusinessNavbar from "./layouts/NegocioNavbar";
import LandingPage from "./pages/Public/LandingPage";
import RegisterForm from "./forms/Register";
import LoginForm from "./forms/Login";
import AdminDashboard from "./pages/Administrador/Home";
import ClientDashboard from "./pages/Cliente/Home";
import BusinessDashboard from "./pages/Negocio/Home";
import { AuthProvider, AuthContext } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import FoodiusPartner from "./pages/Public/FoodiusPartner"
import 'leaflet/dist/leaflet.css';
import Administrar from "./pages/Negocio/Administrar";
import Menu from "./pages/Negocio/Menu";
import Ordenes from "./pages/Negocio/Ordenes";
import Horarios from "./pages/Negocio/Horarios";


const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
};

export default App;

const AppRoutes: React.FC = () => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return null;
  }

  return (
    <>
      {user ? (
        user.role === "ADMIN" ? (
          <AdminNavbar />
        ) : user.role === "CLIENT" ? (
          <ClientNavbar />
        ) : user.role === "BUSINESS" ? (
          <BusinessNavbar />
        ) : null
      ) : (
        <PublicNavbar />
      )}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/foodius-partner" element={<FoodiusPartner />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />

        <Route path="/admin" element={
          <PrivateRoute roles={["ADMIN"]}><AdminDashboard /></PrivateRoute>
        } />

        <Route path="/client" element={
          <PrivateRoute roles={["CLIENT"]}><ClientDashboard /></PrivateRoute>
        } />

        <Route path="/business" element={
          <PrivateRoute roles={["BUSINESS"]}><BusinessDashboard /></PrivateRoute>
        } />
        <Route path="/business/administrar" element={
          <PrivateRoute roles={["BUSINESS"]}><Administrar /></PrivateRoute>
        } />

        <Route path="/business/menu" element={
          <PrivateRoute roles={["BUSINESS"]}><Menu /></PrivateRoute>
        } />

        <Route path="/business/ordenes" element={
          <PrivateRoute roles={["BUSINESS"]}><Ordenes /></PrivateRoute>
        } />

        <Route path="/business/horarios" element={
          <PrivateRoute roles={["BUSINESS"]}><Horarios /></PrivateRoute>
        } />
      </Routes>
    </>
  );
};
