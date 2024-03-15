/*
*	Navbar.js	
*
*	Ersteller:		    Kevin Krazius
*	Erstellungsdatum:	03-03-2024
*	Info/Notizen:		Implementierung einer Navbar-Komponente
*
*	Editiert von:		Kevin Krazius
*	Editiert am:		03-13-2024
*	Info/Notizen:		Welcome Banner integriert
*
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Components/AuthProvider/AuthProvider'
import '../../css/main.css';
import WelcomeBanner from '../../Components/Banner/WelcomeBanner';

const Navbar = ({user}) => {
    const { isLoggedIn } = useAuth();

    return (
        <nav className="navbar">
            <div className="logo-section">
                <Link className="logo" to="/">IU-Quiz-App</Link>
            </div>
            <div className="navbar-right-section">
                {/* Hier wird die isLoggedIn Funktion genutzt um abzufragen ob der Nutzer angemeldet ist, Logik muss noch implementiert werden */}
                <WelcomeBanner text="Welcome" username={user?.username??"username"} isLoggedIn={isLoggedIn} />
                <ul className="navRight">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Sign up</Link></li>
            </ul>
            </div>
        </nav>
    );
}

export default Navbar;
