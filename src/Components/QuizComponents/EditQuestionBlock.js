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
 */

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../scss/main.scss";
import InputField from "../InputFields/InputField";
import Button from "../Buttons/Button";
import axios from "axios";

const EditQuestionBlock = () => {
  // ID aus der URL erhalten
  let { id } = useParams();
  const navigate = useNavigate();

  // Zustand für die Frage und Antworten
  const [questionData, setQuestionData] = useState([]);
  const [answerData, setAnswerData] = useState([]);

  // Daten der Frage mit der entsprechenden ID von der API abrufen
  useEffect(() => {
    const fetchQuestionData = async () => {
      try {
        const responseQuestion = await axios.get(
          `http://localhost:3001/quiz/questions/${id}`
        );
        const responseAnswer = await axios.get(
          `http://localhost:3001/quiz/answers/${id}`
        );
        setQuestionData(responseQuestion.data);
        setAnswerData(responseAnswer.data);
      } catch (error) {
        console.error("Fehler beim Laden der Frage:", error);
      }
    };
    fetchQuestionData();
  }, [id]);

  // Handler zum Aktualisieren der Antwort
  const handleAnswerChange = (index, value) => {
    const newAnswers = [...questionData.antworten];
    newAnswers[index].text = value;
    setQuestionData({
      ...questionData,
      antworten: newAnswers,
    });
  };

  // Handler zum Umschalten der Antwortkorrektheit
  const handleToggleCorrectness = (index) => {
    const newAnswers = questionData.antworten.map((answer, idx) => ({
      ...answer,
      isCorrect: idx === index ? !answer.isCorrect : false, // Setze nur die gewählte Antwort auf true, alle anderen auf false
    }));
    setQuestionData({
      ...questionData,
      antworten: newAnswers,
    });
  };

  const handleUpdateQuestion = () => {
    alert("Frage wurde aktualisiert.");
    navigate("/");
  };

  return (
    <div className="content-create-question">
      {questionData.map((question, index) => (
        <div key={index}>
          <h2>Modul: {question.module_name}</h2>
          <h2>Frage bearbeiten:</h2>

          <InputField
            isBig={true}
            value={question.question_text}
            onChange={(e) =>
              setQuestionData({ ...questionData, frage: e.target.value })
            }
          />
        </div>
      ))}

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
