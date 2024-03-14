/*
*	WelcomeBanner.js	
*
*	Ersteller:		    Kevin Krazius
*	Erstellungsdatum:	03-13-2024
*	Info/Notizen:		Implementierung eines Banners
*
*	Editiert von:		
*	Editiert am:		
*	Info/Notizen:		<Beschreibung der Änderung>
*
*/


import React from 'react';
import '../../css/main.css';

const WelcomeBanner = ({ text, username, isLoggedIn }) => {
    return (
        <div className={`welcome-banner ${isLoggedIn ? 'active' : 'inactive'}`}>
            <h2>{isLoggedIn ? `${text}, ${username}` : text}</h2>
        </div>
    );
};

export default WelcomeBanner;