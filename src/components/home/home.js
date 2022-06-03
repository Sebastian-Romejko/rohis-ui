
import './home.css'
import Sidebar from '../sidebar/Sidebar';
import { BrowserRouter as Router, Route, useMatch, Link, Outlet } from 'react-router-dom';

export default function Home() {
    let path = useMatch("/home");
    return <div id="home-page">
        <Sidebar />
        <div id="main-window">
            <Outlet />
        </div>
    </div>
}