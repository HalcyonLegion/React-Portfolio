import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../App.css";
import HomePage from "../pages/HomePage.js";
import Header from "../components/Header.js";
import ProjectsPage from "../pages/ProjectsPage.js";
import ContactPage from "../pages/ContactPage.js";

function App() {
  const [initialRoute] = useState("/home");

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;