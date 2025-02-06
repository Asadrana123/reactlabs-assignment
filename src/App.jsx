import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Counter from "./components/counter/Counter";
import AuthenticationPage from "./Pages/AuthenticationPage";
import { useSelector } from "react-redux";
function App() {
  const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);
  return (
    <Router>
      <Routes>
      <Route path="/" element={isAuthenticated ? <HomePage /> : <AuthenticationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
