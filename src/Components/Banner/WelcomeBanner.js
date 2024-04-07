/*
 *	WelcomeBanner.js
 *
 *	Ersteller:		    Kevin Krazius
 *	Erstellungsdatum:	03-13-2024
 *	Info/Notizen:		Implementierung eines Banners
 *
 *	Editiert von:		<Name>
 *	Editiert am:		<Datum>
 *	Info/Notizen:		<Beschreibung der Änderung>
 *
 */

import React from "react";
import "../../scss/main.scss";

const WelcomeBanner = ({ username, isLoggedIn }) => {
  return (
    <div className={`welcome-banner ${isLoggedIn ? "active" : "inactive"}`}>
      <h2>{isLoggedIn ? `Welcome, ${username}` : "Welcome"}</h2>
    </div>
  );
};

export default WelcomeBanner;
