/*
*	    AnswerBlock.js	
*
*	    Ersteller:		    Kevin Krazius
*	    Erstellungsdatum:	03-14-2024
*	    Info/Notizen:		Komponente welche die Antwortmöglichkeiten anzeigt
*
*	    Editiert von:		<Name>
*	    Editiert am:		<Datum>
*       Info/Notizen:		<Beschreibung der Änderung>		    
*
*/

import React from 'react';
import Button from '../Buttons/Button';
import '../../css/main.css'; // Stelle sicher, dass der Pfad korrekt ist

const AnswerBlock = ({ answers, onSelectAnswer, selectedAnswer, onSubmit }) => {
    return (
        <div className="answer-block">
            <h2>Antwortmöglichkeiten:</h2>
            <ul>
                {answers.map((answer, index) => (
                    <li 
                        key={index} 
                        onClick={() => onSelectAnswer(answer)}
                        className={answer === selectedAnswer ? 'selected' : ''}
                    >
                        {answer}
                    </li>
                ))}
            </ul>
            {selectedAnswer && <Button text="Antworten" onClick={onSubmit} />}
        </div>
    );
};

export default AnswerBlock;
