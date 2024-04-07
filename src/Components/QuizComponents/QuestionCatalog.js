/*
 *	    QuestionCatalog.js
 *
 *	    Ersteller:		      Kevin Krazius
 *	    Erstellungsdatum:	  03-24-2024
 *	    Info/Notizen:		    Komponente, welche Infos über Fragenkatalog aufruft und anzeigt
 *
 *	    Editiert von:		    Kevin Krazius
 *	    Editiert am:		    03-26-2024
 *      Info/Notizen:		    Auslagern der Testdaten, Funktion Gruppieren der Testdaten hinzu. Buttons hinzu
 *
 *	    Editiert von:		    Kevin Krazius
 *	    Editiert am:		    04-02-2024
 *      Info/Notizen:       Axios integriert, Fetching der Daten über API
 *
 *	    Editiert von:		    Kevin Krazius
 *	    Editiert am:		    04-05-2024
 *      Info/Notizen:       Logik implementiert um auf Daten der Datenbank zuzugreifen und diese in UI integriert
 *
 *     Editiert von:		    Kevin Krazius
 *	    Editiert am:		    04-07-2024
 *      Info/Notizen:       Auslagern von API-Anfrage, nutzen von QuizContext
 *
 */

import React, { useContext, useEffect, useState } from "react";
import Button from "../Buttons/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Components/AuthProvider/AuthProvider";
import QuizContext from "../../Context/QuizContext";

const QuestionCatalog = () => {
  // Zustände für die Anzeige der Module
  const [visibleModule, setVisibleModule] = useState("");
  const [groupedAnswers, setGroupedAnswers] = useState({});
  const navigate = useNavigate();
  const { user } = useAuth();
  const { questions, answers } = useContext(QuizContext);

  // Funktion zum Gruppieren der Antworten nach Frage-ID
  useEffect(() => {
    const groupedAnswersData = answers.reduce((acc, answer) => {
      acc[answer.question_id] = acc[answer.question_id] || [];
      acc[answer.question_id].push(answer);
      return acc;
    }, {});
    setGroupedAnswers(groupedAnswersData);
  }, [answers]);

  function routeNavigation(route) {
    // Überprüfe ob der Benutzer eingeloggt ist
    if (user) {
      // Wenn eingeloggt, navigiere
      navigate(route);
    } else {
      alert("Bitte melden Sie sich an.");
      return;
    }
  }

  // Funktion zum Umschalten der sichtbaren Module
  const toggleModuleVisibility = (moduleName) => {
    setVisibleModule(visibleModule === moduleName ? "" : moduleName);
  };

  return (
    <div className="catalog-block">
      <div className="module-buttons">
        {Array.from(
          new Set(questions.map((question) => question.module_name))
        ).map((moduleName, index) => (
          <Button
            key={index}
            buttonColor={visibleModule === moduleName ? "primary" : "secondary"}
            text={moduleName}
            onClick={() => toggleModuleVisibility(moduleName)}
          />
        ))}
      </div>
      {visibleModule && (
        <div className="question-container">
          {questions
            .filter((question) => question.module_name === visibleModule)
            .map((question, index) => (
              <div key={index} className="question-block">
                <h3>{question.question_text}</h3>
                {groupedAnswers[question.id] && (
                  <div>
                    {groupedAnswers[question.id].map((answer, index) => (
                      <div key={index}>
                        <p>{answer.answer_text}</p>
                      </div>
                    ))}
                  </div>
                )}
                <Button
                  text={"Bearbeiten"}
                  onClick={() =>
                    routeNavigation(`/editquestion/${question.id}`)
                  }
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default QuestionCatalog;
