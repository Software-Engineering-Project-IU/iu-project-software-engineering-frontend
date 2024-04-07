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
 *      Editiert von:		Kevin Krazius
 *	    Editiert am:		04-07-2024
 *      Info/Notizen:		Axios Anfrage ausgelagert in QuizContext
 *
 */

import React, { useContext, useEffect, useState } from "react";
import Button from "../Buttons/Button";
import InputField from "../InputFields/InputField";
import { useAuth } from "../AuthProvider/AuthProvider";
import QuizContext from "../../Context/QuizContext";

const HelpBlock = () => {
  const [questionsNeedingHelp, setQuestionsNeedingHelp] = useState([]);
  const [helpComment, setHelpComment] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { questions } = useContext(QuizContext);

  useEffect(() => {
    const fetchQuestionsNeedingHelp = async () => {
      try {
        // Filtere nur die Fragen, bei denen is_help_needed true ist
        const filteredQuestions = questions.filter(
          (question) => question.is_help_needed
        );

        // Setze den Fragenzustand entsprechend
        setQuestionsNeedingHelp(filteredQuestions);
        setLoading(false); // Setze den Ladezustand auf false, wenn die Daten geladen wurden
      } catch (error) {
        console.error("Fehler beim Laden der Hilfsanfragen:", error);
      }
    };

    fetchQuestionsNeedingHelp();
  }, [questions]);

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
