/*
 *	    HelpBlock.js
 *
 *	    Ersteller:		    Kevin Krazius
 *	    Erstellungsdatum:	03-28-2024
 *	    Info/Notizen:		  Komponente, welche Hilfsanfragen anzeigt
 *
 *	    Editiert von:		Kevin Krazius
 *	    Editiert am:		04-02-2024
 *      Info/Notizen:		Axios implementiert - Fetching Data from API
 *
 */

import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../Buttons/Button";
import InputField from "../InputFields/InputField";
import { useAuth } from "../AuthProvider/AuthProvider";

const HelpBlock = () => {
  const [questionsNeedingHelp, setQuestionsNeedingHelp] = useState([]);
  const [helpComment, setHelpComment] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    const fetchQuestionsNeedingHelp = async () => {
      try {
        const response = await axios.get("http://localhost:3001/helpRequests");
        setQuestionsNeedingHelp(response.data);
      } catch (error) {
        console.error("Fehler beim Laden der Hilfsanfragen:", error);
      }
    };
    fetchQuestionsNeedingHelp();
  }, []);

  const handleHelpCommentChange = (id, value) => {
    // Aktualisiere den Zustand basierend auf der Frage-ID
    setHelpComment({
      ...helpComment,
      [id]: value,
    });
  };

  const handleSubmitHelpComment = (id) => {
    if (user) {
      if (!helpComment[id] || !helpComment[id].trim()) {
        alert("Bitte geben Sie einen Hilfskommentar ein.");
        return;
      }
      console.log(
        "Hilfskommentar abgeschickt für Frage ID",
        id,
        ":",
        helpComment[id]
      );
      // Optional: Kommentar nach dem Absenden löschen
      setHelpComment({
        ...helpComment,
        [id]: "",
      });
    } else {
      alert("Bitte melden Sie sich an.");
    }
  };

  return (
    <div className="catalog-block">
      <h2>DEINE HILFE WIRD BENÖTIGT:</h2>
      {questionsNeedingHelp.map((testData) => (
        <div className="question-block" key={testData.id}>
          <h3>
            {testData.modulname}: {testData.frage}
          </h3>
          <div>
            {testData.antworten.map((answer, index) => (
              <p key={index}>{answer.text}</p>
            ))}
          </div>
          <InputField
            label={`(Hilfskommentar schreiben)`}
            type="text"
            name={`helpComment_${testData.id}`}
            value={helpComment[testData.id] || ""}
            onChange={(e) =>
              handleHelpCommentChange(testData.id, e.target.value)
            }
            isBig={true}
            height={100}
            width={300}
          />
          <p />
          <Button
            text="Hilfskommentar abschicken"
            onClick={() => handleSubmitHelpComment(testData.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default HelpBlock;
