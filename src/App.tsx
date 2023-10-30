import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/login";
import Dashboard from "./component/dashboard";
import PrivateRoutes from "./PrivateRoute";
import { AuthProvider } from "./authHelper";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<AuthProvider><PrivateRoutes /></AuthProvider>}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
