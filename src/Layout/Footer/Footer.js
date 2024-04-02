/*
*	    Footer.js	
*
*	    Ersteller:		      Kevin Krazius
*	    Erstellungsdatum:	  03-24-2024
*	    Info/Notizen:		  Footer Komponente

*	    Editiert von:		  <Name>
*	    Editiert am:		  <Datum>
*       Info/Notizen:		  <Beschreibung der Änderung>		    
*
*/

import React from "react";
import "../../scss/main.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <span>
          © {new Date().getFullYear()} IU-Software-Engineering-Project. Alle
          Rechte vorbehalten.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
