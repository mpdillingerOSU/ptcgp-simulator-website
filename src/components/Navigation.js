import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { MdDarkMode, MdLogout, MdLogin } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";

//TODO: have the nav bar remain fixed at the top (things like toggles currently show through when attempting this)
//TODO: have the dropdown menu close upon clicking outside of it
function Navigation() {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toHome = () => {
        navigate("/");
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const changeTheme = () => {
        toggleDropdown();
        //TODO: allow for shift between light and dark mode
    }

    const toSettings = () => {
        toggleDropdown();
        //TODO: allow for move to settings page
    }

    return (
        <>
            <nav className="app-nav">
                <button className="nav-option home-button" onClick={() => toHome()}>PTCGP Simulator</button>
                <button className="nav-option profile-button" onClick={() => toggleDropdown()}><FaRegUserCircle /></button>
            </nav>
            {isDropdownOpen && (
                <div className="dropdown-menu">
                    <button className="dropdown-menu-option" onClick={() => changeTheme()}><MdDarkMode /><div className="mini-horizontal-spacer"></div>Theme</button>
                    <button className="dropdown-menu-option last-option" onClick={() => toSettings()}><IoSettingsSharp /><div className="mini-horizontal-spacer"></div>Settings</button>
                </div>
            )}
        </>
  );
}

export default Navigation;