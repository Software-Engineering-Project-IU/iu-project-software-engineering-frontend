/*
 *	    EditQuestionBlock.js
 *
 *	    Ersteller:		    Kevin Krazius
 *	    Erstellungsdatum:	03-16-2024
 *	    Info/Notizen:		  Komponente die aufgerufen wird wenn /editquestion aufgerufen wird
 *
 *	    Editiert von:		Kevin Krazius
 *	    Editiert am:		04-02-2024
 *      Info/Notizen:		Axios implementiert - Fetching Data
 *
 *	    Editiert von:		    Kevin Krazius
 *	    Editiert am:		    04-05-2024
 *      Info/Notizen:       Logik implementiert um auf Daten der Datenbank zuzugreifen und diese in UI integriert
 *
 *      Editiert von:		    Kevin Krazius
 *	    Editiert am:		    04-07-2024
 *      Info/Notizen:       Auslagern von API-Anfrage, nutzen von QuizContext
 */

import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../scss/main.scss";
import InputField from "../InputFields/InputField";
import Button from "../Buttons/Button";
import QuizContext from "../../Context/QuizContext";

const EditQuestionBlock = () => {
  // ID aus der URL erhalten
  let { id } = useParams();
  const navigate = useNavigate();
  const { questions, answers, updateQuestion, updateAnswer } =
    useContext(QuizContext);

  // Zustände für Frage und Antworten initialisieren
  const [questionData, setQuestionData] = useState({});
  const [answerData, setAnswerData] = useState([]);

  // Daten aus dem QuizContext laden, wenn sie verfügbar sind
  useEffect(() => {
    // Funktion zum Laden der Frage und ihrer Antworten
    const loadQuestionAndAnswers = async () => {
      try {
        const selectedQuestion = questions.find(
          (question) => question.id === parseInt(id)
        );
        const selectedAnswers = answers.filter(
          (answer) => answer.question_id === parseInt(id)
        );

        // Setzen der Frage und Antworten im State
        setQuestionData(selectedQuestion);
        setAnswerData(selectedAnswers);
      } catch (error) {
        console.error("Fehler beim Laden der Frage und Antworten:", error);
      }
    };

    loadQuestionAndAnswers();
  }, [id, questions, answers]); // Dependency Array hinzufügen

  // Handler zum Aktualisieren der Antwort
  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answerData];
    newAnswers[index].answer_text = value;
    setAnswerData(newAnswers);
  };

  // Handler zum Umschalten der Antwortkorrektheit
  const handleToggleCorrectness = (index) => {
    const newAnswers = answerData.map((answer, idx) => ({
      ...answer,
      is_correct: idx === index ? !answer.is_correct : false,
    }));
    setAnswerData(newAnswers);
  };

  const handleUpdateQuestion = async () => {
    try {
      await updateQuestion(questionData.id, questionData);
      await Promise.all(
        answerData.map((answer) => updateAnswer(answer.id, answer))
      );
      navigate("/");
      alert("Frage wurde aktualisiert.");
    } catch (error) {
      console.error(
        "Fehler beim Aktualisieren der Frage und Antworten:",
        error
      );
    }
  };

  // Wenn Frage und Antworten noch geladen werden, zeige Ladezustand an
  if (!questionData || answerData.length === 0) {
    return <div>Laden...</div>;
  }

  return (
    <div className="content-create-question">
      <h2>Modul: {questionData.module_name}</h2>
      <h2>Frage bearbeiten:</h2>
      <InputField
        isBig={true}
        value={questionData.question_text}
        onChange={(e) =>
          setQuestionData({ ...questionData, question_text: e.target.value })
        }
      />

      {/* Eingabefelder für Antworten und Toggle-Buttons */}
      <h2>Antworten eingeben:</h2>
      {answerData.map((answer, index) => (
        <div key={index}>
          <InputField
            label={`Antwort ${index + 1} eingeben: `}
            value={answer.answer_text}
            onChange={(e) => handleAnswerChange(index, e.target.value)}
          />
          <p />
          <label>
            <input
              type="checkbox"
              checked={answer.is_correct}
              onChange={() => handleToggleCorrectness(index)}
            />
            Ist Antwort korrekt?
          </label>
          <p />
        </div>
      ))}
      <Button text={"Frage aktualisieren"} onClick={handleUpdateQuestion} />
    </div>
  );
};

export default EditQuestionBlock;
