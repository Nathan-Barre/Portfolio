import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Portfolio from "../pages/portfolio/Portfolio";
import Profile from "../pages/profile/Profile";
import EducationalBackground from "../pages/educational-background/EducationalBackground";
import Competencies from "../pages/competencies/Competencies";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/portfolio" element={<Portfolio />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/educational-background" element={<EducationalBackground />}/>
                <Route path="/competencies" element={<Competencies />}/>
                {/*if route doesn't exist*/}
                <Route path="*" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;