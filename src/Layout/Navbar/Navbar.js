import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/main.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-section">
                <Link className="logo" to="/">Quiz-App</Link>
            </div>
            <ul className="navLeft">
                <li><Link to="/runquiz">Start Quiz</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Anmelden</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
