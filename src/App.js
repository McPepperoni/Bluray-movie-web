import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signup, Signin } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helper/routes";
import { useAuthListener } from "./hooks";
import Watch from "./pages/watch";

export default function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Routes>
        <Route
          path={ROUTES.SIGN_IN}
          element={
            <IsUserRedirect loggedInPath={ROUTES.BROWSE} user={user}>
              <Signin />
            </IsUserRedirect>
          }
        />
        <Route
          path={ROUTES.SIGN_UP}
          element={
            <IsUserRedirect loggedInPath={ROUTES.BROWSE} user={user}>
              <Signup />
            </IsUserRedirect>
          }
        />
        <Route
          path={ROUTES.HOME}
          element={
            <IsUserRedirect loggedInPath={ROUTES.BROWSE} user={user}>
              <Home />
            </IsUserRedirect>
          }
        />
        <Route
          path={ROUTES.BROWSE}
          element={
            <ProtectedRoute user={user} redirectPath={ROUTES.SIGN_IN}>
              <Browse />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.WATCH}
          element={
            <ProtectedRoute user={user} redirectPath={ROUTES.SIGN_IN}>
              <Watch />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
