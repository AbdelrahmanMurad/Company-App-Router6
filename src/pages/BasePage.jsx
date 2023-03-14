import { Fragment } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "../resources/css/custom.css";
import { HomePage } from "./HomePage";
import logo from "../resources/img/logo.png"
import { AboutPage } from "./AboutPage";
import { ContactPage } from "./ContactPage";
import { ProjectPage } from "./ProjectPage";

export let BasePage = () => {
    return (
        <Fragment>
            <nav>
                <ul className="topnav">
                    <li><NavLink className={(props) => props.isActive ? "" : ""} to={"/"}><img src={logo} height="50" alt="" /></NavLink></li>
                    <div className="right">
                        <li><NavLink className={(props) => props.isActive ? "active" : ""} to={"/"}>Home</NavLink></li>
                        <li><NavLink className={(props) => props.isActive ? "active" : ""} to={"/about"}>About</NavLink></li>
                        <li><NavLink className={(props) => props.isActive ? "active" : ""} to={"/project"}>project</NavLink></li>
                        <li><NavLink className={(props) => props.isActive ? "active" : ""} to={"/contact"}>Contact</NavLink></li>
                    </div>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <footer>
                <div className="copyright">
                    Copyright 2022 . All Rights Reserved.
                </div>
            </footer>
        </Fragment>
    );
}