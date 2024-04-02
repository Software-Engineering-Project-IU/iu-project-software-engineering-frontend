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
 *	    Editiert am:		    04-2-2024
 *      Info/Notizen:       Axios integriert, Fetching der Daten über API
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
  const [testData, setTestData] = useState([]);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    // Funktion zum Abrufen der Testdaten
    const fetchTestData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/quizdata");
        setTestData(response.data);
      } catch (error) {
        console.error("Fehler beim Abrufen der Testdaten:", error);
      }
    };

    // Testdaten beim Laden der Komponente abrufen
    fetchTestData();
  }, []);

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
  const modules = testData.reduce((acc, question) => {
    acc[question.modulname] = acc[question.modulname] || [];
    acc[question.modulname].push(question);
    return acc;
  }, {});

  return (
    <div className="catalog-block">
      <div className="module-buttons">
        {Object.keys(modules).map((modulname) => (
          <Button
            key={modulname}
            buttonColor={visibleModule === modulname ? "primary" : "secondary"}
            text={modulname}
            onClick={() => toggleModuleVisibility(modulname)}
          />
        ))}
      </div>
      {visibleModule && (
        <div className="question-container">
          {modules[visibleModule].map((question) => (
            <div key={question.id} className="question-block">
              <h3>{question.frage}</h3>
              {question.antworten.map((antwort, index) => (
                <div key={index}>
                  <p>{antwort.text}</p>
                </div>
              ))}
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
