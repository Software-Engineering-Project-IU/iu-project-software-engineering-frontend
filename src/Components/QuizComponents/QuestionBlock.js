/*
 *	    QuestionBlock.js
 *
 *	    Ersteller:		    Kevin Krazius
 *	    Erstellungsdatum:	03-14-2024
 *	    Info/Notizen:		Komponente, welche die Fragen anzeigt
 *
 *	    Editiert von:		<Name>
 *	    Editiert am:		<Datum>
 *       Info/Notizen:		<Beschreibung der Änderung>
 *
 */

import React from "react";
import "../../scss/main.scss";

const QuestionBlock = ({ question }) => {
  return (
    <div className="question-block-run-quiz">
      <h2>Frage:</h2>
      <p>{question}</p>
    </div>
  );
};

export default QuestionBlock;
