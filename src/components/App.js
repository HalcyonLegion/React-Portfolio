import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../App.css";
import Header from "../components/Header.js";
import HomePage from "../pages/HomePage.js";
import ProjectsPage from "../pages/ProjectsPage.js";
import ContactPage from "../pages/ContactPage.js";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    );
}

export default App;