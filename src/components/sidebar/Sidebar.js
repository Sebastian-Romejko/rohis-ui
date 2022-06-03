import React from "react";
import { Link } from 'react-router-dom';
import { IoStatsChart } from "react-icons/io5";
import { BsListTask } from "react-icons/bs";
import { MdOutlineDescription, MdOutlineHelpOutline, MdLogout } from "react-icons/md";
import logo from "../../assets/identyfikatorZHP-zielony.png";

export default function Sidebar() {
    return <div className="sidebar">
    <Link to='/' className="app_logo_div">
        <img className="app_logo_img" src={logo}/>
    </Link>
    <Link to='/home/projects'>
        <div className="menu-btn">
            <BsListTask />
            PROJEKTY
        </div>
    </Link>
    <Link to='/home/stats'>
        <div className="menu-btn">
        <IoStatsChart />
            STATYSTYKI
        </div>
    </Link>
    <Link to='/home/documents'>
        <div className="menu-btn">
            <MdOutlineDescription />
            DOKUMENTY
        </div>
    </Link>
    <Link to='/home/instruction'>
        <div className="menu-btn">
            <MdOutlineHelpOutline />
            INSTRUKCJA
        </div>
    </Link>
    <div id="logout-btn">
        <MdLogout className="rotated-icon" />
        WYLOGUJ
    </div>
</div>;
}