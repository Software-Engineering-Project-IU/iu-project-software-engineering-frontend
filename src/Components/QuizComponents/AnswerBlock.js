/*
 *	    AnswerBlock.js
 *
 *	    Ersteller:		    Kevin Krazius
 *	    Erstellungsdatum:	03-14-2024
 *	    Info/Notizen:		Komponente, welche die Antwortmöglichkeiten anzeigt
 *
 *	    Editiert von:		<Name>
 *	    Editiert am:		<Datum>
 *       Info/Notizen:		<Beschreibung der Änderung>
 *
 */

import React from "react";
import "../../scss/main.scss";

const AnswerBlock = ({
  answers,
  onSelectAnswer,
  selectedAnswer,
  isCorrect,
}) => {
  return (
    <div className="answer-block">
      <h2>Antwortmöglichkeiten:</h2>
      <ul>
        {answers.map((answer, index) => {
          // Bestimme die Klasse basierend auf dem Zustand der Antwort
          let className = "";
          if (answer === selectedAnswer) {
            className = "selected";
            if (isCorrect !== null) {
              className += isCorrect ? " correct" : " incorrect";
            }
          }
          return (
            <li
              key={index}
              onClick={() => onSelectAnswer(answer)}
              className={className}
            >
              {answer}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AnswerBlock;
