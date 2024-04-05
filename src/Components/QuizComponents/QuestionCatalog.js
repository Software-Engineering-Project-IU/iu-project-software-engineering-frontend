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
 */

import React, { useEffect, useState } from "react";
import Button from "../Buttons/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Components/AuthProvider/AuthProvider";
import axios from "axios";

const QuestionCatalog = () => {
  // Zustände für die Anzeige der Module
  const [visibleModule, setVisibleModule] = useState("");
  const [questionData, setQuestionData] = useState([]);
  const [answerData, setAnswerData] = useState([]);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    // Funktion zum Abrufen der Questions
    const fetchQuestionData = async () => {
      try {
        const responseQuestions = await axios.get(
          "http://localhost:3001/quiz/questions"
        );
        const responseAnswers = await axios.get(
          "http://localhost:3001/quiz/answers"
        );
        setQuestionData(responseQuestions.data);
        setAnswerData(responseAnswers.data);
      } catch (error) {
        console.error("Fehler beim Abrufen der Testdaten:", error);
      }
    };

    fetchQuestionData();
  }, []);

  const groupedAnswers = answerData.reduce((acc, answer) => {
    acc[answer.question_id] = acc[answer.question_id] || [];
    acc[answer.question_id].push(answer);
    return acc;
  }, {});

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

  // Gruppieren der Fragen nach Modulnamen
  const modules = questionData.reduce((acc, question) => {
    acc[question.module_name] = acc[question.module_name] || [];
    acc[question.module_name].push(question);
    return acc;
  }, {});

  return (
    <div className="catalog-block">
      <div className="module-buttons">
        {Object.keys(modules).map((module_name, index) => (
          <Button
            key={index}
            buttonColor={
              visibleModule === module_name ? "primary" : "secondary"
            }
            text={module_name}
            onClick={() => toggleModuleVisibility(module_name)}
          />
        ))}
      </div>
      {visibleModule && (
        <div className="question-container">
          {modules[visibleModule].map((question, index) => (
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
                onClick={() => routeNavigation(`/editquestion/${question.id}`)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionCatalog;
