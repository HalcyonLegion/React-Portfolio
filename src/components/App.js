import React from "react";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import "../App.css";
import Header from "../components/Header.js";
import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import ContactPage from "../pages/ContactPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/contact" component={ContactPage} />
      </Routes>
    </Router>
  );
}

export default App;