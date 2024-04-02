/*
 *	  Content.js
 *
 *	    Ersteller:		    Kevin Krazius
 *	    Erstellungsdatum:	03-06-2024
 *	    Info/Notizen:		Content-Komponente
 *
 *	    Editiert von:		<Name>
 *	    Editiert am:		<Datum>
 *       Info/Notizen:		<Beschreibung der Änderung>
 *
 */

import React from "react";
import "../../scss/main.scss";

const Content = ({ children }) => {
  return <div className="content">{children}</div>;
};

export default Content;
