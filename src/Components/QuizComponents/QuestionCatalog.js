/*
*	    QuestionCatalog.js	
*
*	    Ersteller:		      Kevin Krazius
*	    Erstellungsdatum:	  03-24-2024
*	    Info/Notizen:		    Komponente, welche Infos über Fragenkatalog aufruft und anzeigt
*
*	    Editiert von:		    Kevin Krazius
*	    Editiert am:		    03-26-2024
*     Info/Notizen:		    Auslagern der Testdaten, Funktion Gruppieren der Testdaten hinzu. Buttons hinzu  
*
*/

import React, { useState } from 'react';
import { testData } from '../../Data/testData';
import Button from '../Buttons/Button';

const QuestionCatalog = () => {
  // Zustände für die Anzeige der Module
  const [visibleModule, setVisibleModule] = useState('');

  // Funktion zum Umschalten der sichtbaren Module
  const toggleModuleVisibility = (moduleName) => {
    setVisibleModule(visibleModule === moduleName ? '' : moduleName);
  };

  // Gruppieren der Fragen nach Modulnamen
  const modules = testData.reduce((acc, question) => {
    acc[question.modulname] = acc[question.modulname] || [];
    acc[question.modulname].push(question);
    return acc;
  }, {});

  return (
    <div className='catalog-block'>
      {Object.keys(modules).map((modulname) => (
        <div key={modulname}>
          <Button 
          buttonColor={'secondary'}
          text={modulname} 
          onClick={() => toggleModuleVisibility(modulname)} 
          />

          {visibleModule === modulname && (
            <div className='question-container'>
              {modules[modulname].map((question) => (
                <div key={question.id}>
                  <h3>{question.frage}</h3>
                  {question.antworten.map((antwort, index) => (
                    <div key={index} className={`antwort ${antwort.isCorrect ? 'correct' : ''}`}>
                      <p>{antwort.text}</p>
                    </div>
                  ))}
                  <Button text={"Bearbeiten"} />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};


export default QuestionCatalog;
