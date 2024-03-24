/*
*	    QuestionCatalog.js	
*
*	    Ersteller:		    Kevin Krazius
*	    Erstellungsdatum:	03-24-2024
*	    Info/Notizen:		Komponente, welche Infos über Fragenkatalog aufruft und anzeigt
*
*	    Editiert von:		<Name>
*	    Editiert am:		<Datum>
*       Info/Notizen:		<Beschreibung der Änderung>		    
*
*/

import React from 'react';

const QuestionCatalog = () => {
  const testData = [
    {
      "id": 1,
      "modulname": "Mathematik",
      "frage": "Was ist 2 + 2?",
      "antworten": [
        {"text": "3", "isCorrect": false},
        {"text": "4", "isCorrect": true},
        {"text": "5", "isCorrect": false},
        {"text": "6", "isCorrect": false}
      ]
    },
    {
      "id": 2,
      "modulname": "Geographie",
      "frage": "Was ist die Hauptstadt von Frankreich?",
      "antworten": [                                        // mehr Fragen möglich???
        {"text": "Berlin", "isCorrect": false},
        {"text": "Madrid", "isCorrect": false},
        {"text": "Paris", "isCorrect": true},
        {"text": "Rom", "isCorrect": false}
      ]
    },
    {
      "id": 3,
      "modulname": "Biologie",
      "frage": "Was ist Photosynthese?",
      "antworten": [
        {"text": "Ein Kochrezept", "isCorrect": false},
        {"text": "Ein Schlafzustand", "isCorrect": false},
        {"text": "Ein Pflanzenprozess", "isCorrect": true},
        {"text": "Ein chemisches Element", "isCorrect": false}
      ]
    },
    {
        "id": 4,
        "modulname": "Mathematik",
        "frage": "Was ist 2 + 2?",
        "antworten": [
          {"text": "3", "isCorrect": false},
          {"text": "4", "isCorrect": true},
          {"text": "5", "isCorrect": false},
          {"text": "6", "isCorrect": false}
        ]
      },
      {
        "id": 5,
        "modulname": "Geographie",
        "frage": "Was ist die Hauptstadt von Frankreich?",
        "antworten": [                                        // mehr Fragen möglich???
          {"text": "Berlin", "isCorrect": false},
          {"text": "Madrid", "isCorrect": false},
          {"text": "Paris", "isCorrect": true},
          {"text": "Rom", "isCorrect": false}
        ]
      },
      {
        "id": 6,
        "modulname": "Biologie",
        "frage": "Was ist Photosynthese?",
        "antworten": [
          {"text": "Ein Kochrezept", "isCorrect": false},
          {"text": "Ein Schlafzustand", "isCorrect": false},
          {"text": "Ein Pflanzenprozess", "isCorrect": true},
          {"text": "Ein chemisches Element", "isCorrect": false}
        ]
      }
  ]
  ;

  return (
    <div>
      {testData.map((datensatz) => (
        <div key={datensatz.id} className="quiz-block">
          <h3>{datensatz.modulname}</h3>
          <p>{datensatz.frage}</p>
          <div className="antworten">
            {datensatz.antworten.map((antwort, index) => (
              <button key={index} className={antwort.isCorrect ? 'correct' : ''}>
                {antwort.text}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionCatalog;
