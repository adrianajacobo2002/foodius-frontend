import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import type { ReactNode } from "react";

interface PrivateRouteProps {
  children: ReactNode;
  roles?: string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, roles }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
