import React from "react";
import { Navigate } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, children }) {
  return user ? <Navigate to={loggedInPath} replace /> : children;
}

export function ProtectedRoute({ user, children, redirectPath }) {
  return user ? children : <Navigate to={redirectPath} replace />;
}
