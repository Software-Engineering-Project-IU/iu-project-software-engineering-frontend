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
 * 	    Editiert von:		Kevin Krazius
 *	    Editiert am:		04-04-2024
 *      Info/Notizen:		Logik implementiert um auf Daten der Datenbank zuzugreifen und diese in UI integriert
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
  const [loading, setLoading] = useState(true); // Zustand für den Ladezustand
  const { user } = useAuth();

  useEffect(() => {
    const fetchQuestionsNeedingHelp = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/quiz/questions"
        );
        const helpRequests = response.data;

        // Filtere nur die Fragen, bei denen is_help_needed true ist
        const questionsNeedingHelpIds = helpRequests
          .filter((request) => request.is_help_needed)
          .map((request) => request.id);

        // Für jede Frage-ID eine Anfrage an die Datenbank senden, um Frage und Antworten abzurufen
        const questionsData = await Promise.all(
          questionsNeedingHelpIds.map(async (id) => {
            const questionResponse = await axios.get(
              `http://localhost:3001/quiz/questions/${id}`
            );
            const answersResponse = await axios.get(
              `http://localhost:3001/quiz/answers/${id}`
            );
            const questionData = questionResponse.data[0];
            const answersData = answersResponse.data;
            return { ...questionData, answers: answersData };
          })
        );

        setQuestionsNeedingHelp(questionsData);
        setLoading(false); // Setze den Ladezustand auf false, wenn die Daten geladen wurden
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

  // Wenn die Daten noch geladen werden, zeige den Ladezustand an
  if (loading) {
    return <div>Hilfsanfragen werden geladen...</div>;
  }

  // Wenn die Daten geladen wurden, rendere die Fragen
  return (
    <div className="catalog-block">
      <h2>DEINE HILFE WIRD BENÖTIGT:</h2>
      {questionsNeedingHelp.map((questionData, index) => (
        <div className="question-block" key={index}>
          <h3>
            {questionData.module_name}: {questionData.question_text}
          </h3>
          <div>
            {questionData.answers.map((answer, index) => (
              <p key={index}>{answer.answer_text}</p>
            ))}
          </div>
          <InputField
            label={`(Hilfskommentar schreiben)`}
            type="text"
            name={`helpComment_${questionData.id}`}
            value={helpComment[questionData.id] || ""}
            onChange={(e) =>
              handleHelpCommentChange(questionData.id, e.target.value)
            }
            isBig={true}
            height={100}
            width={300}
          />
          <p />
          <Button
            text="Hilfskommentar abschicken"
            onClick={() => handleSubmitHelpComment(questionData.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default HelpBlock;
