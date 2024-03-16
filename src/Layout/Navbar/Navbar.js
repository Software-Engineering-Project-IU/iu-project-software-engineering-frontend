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
import '../../scss/main.scss';
import WelcomeBanner from '../../Components/Banner/WelcomeBanner';
import Button from '../../Components/Buttons/Button';

const Navbar = () => {
    const { user, setUser } = useAuth();

    function logOutUser() {
        setUser(undefined);
    }

    return (
        <nav className="navbar">
            <div className="logo-section">
                <Link className="logo" to="/">IU-Quiz-App</Link>
            </div>
            <div className="navbar-right-section">
                <WelcomeBanner text="Welcome" username={user?.username??"username"} isLoggedIn={user!== undefined} />
                <ul className="navRight">
                    {!user?<><li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Sign up</Link></li></>:<li><Button text={"Logout"} onClick={logOutUser}/></li>}
            </ul>
            </div>
        </nav>
    );
}

export default Navbar;
