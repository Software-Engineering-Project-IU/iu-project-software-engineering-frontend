/*
 *	Button.js
 *
 *	Ersteller:		    Kevin Krazius
 *	Erstellungsdatum:	03-06-2024
 *	Info/Notizen:		Implementierung einer einfachen Button-Komponente
 *
 *	Editiert von:		<Name>
 *	Editiert am:		<Datum>
 *	Info/Notizen:		<Beschreibung der Änderung>
 *
 */

import React from "react";
import "../../scss/main.scss";

const Button = ({ text, onClick, classNameParam, buttonColor = "primary" }) => {
  const buttonClass = `button ${
    buttonColor === "primary" ? "button-primary" : "button-secondary"
  } ${classNameParam || ""}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
