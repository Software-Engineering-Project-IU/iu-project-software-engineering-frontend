/*
 *	    RunQuiz.js
 *
 *	    Ersteller:		    Kevin Krazius
 *	    Erstellungsdatum:	03-14-2024
 *	    Info/Notizen:		Komponente, die Frage und Antworten anzeigt.
 *
 *	    Editiert von:		Kevin Krazius
 *	    Editiert am:		03-29-2024
 *      Info/Notizen:		Test-Daten integriert
 *
 *      Editiert von:		Kevin Krazius
 *	    Editiert am:		04-2-2024
 *      Info/Notizen:		Axios integriert
 *
 */

import React, { useState, useEffect } from "react";
import Button from "../../Components/Buttons/Button";
import AnswerBlock from "../../Components/QuizComponents/AnswerBlock";
import QuestionBlock from "../../Components/QuizComponents/QuestionBlock";
import Content from "../../Layout/Content/Content";
import axios from "axios";

const RunQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [quizData, setQuizData] = useState(null);

  useEffect(() => {
    // Funktion zum Abrufen der Quizdaten
    const fetchQuizData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/quizdata");
        setQuizData(response.data);
      } catch (error) {
        console.error("Fehler beim Abrufen der Quizdaten:", error);
      }
    };

    // Quizdaten beim Laden der Komponente abrufen
    fetchQuizData();
  }, []);

  // Nächste Frage laden
  const loadNextQuestion = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    setIsAnswerSubmitted(false);
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % quizData.length); // Loop durch Fragen
  };

  // Antworten sind nur auswählbar wenn noch nicht auf antworten geklickt wurde
  const handleSelectAnswer = (answer) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(answer);
    }
  };

  // Was passiert wenn auf Antworten geklickt wurde
  const handleSubmit = () => {
    const selectedAnswerObject = quizData[currentQuestionIndex].antworten.find(
      (answer) => answer.text === selectedAnswer
    );

    if (selectedAnswer) {
      setIsAnswerSubmitted(true);
      setIsCorrect(selectedAnswerObject.isCorrect);
    } else {
      alert("Wähle eine Antwort aus!");
    }
  };

  // Was passiert wenn der Hilfe-Button geklickt wird
  const handleRequestHelp = () => {
    console.log("Hilfe anfordern...");
    // Logik für Hilfsanforderung

    alert(
      "Hilfe erfolgreich angefordert für die Frage: " +
        quizData[currentQuestionIndex].frage
    );
  };

  if (!quizData) {
    return <div>Lade Quizdaten...</div>;
  }

  return (
    <div>
      <Content>
        <QuestionBlock question={quizData[currentQuestionIndex].frage} />
        <AnswerBlock
          answers={quizData[currentQuestionIndex].antworten.map(
            (ans) => ans.text
          )}
          onSelectAnswer={handleSelectAnswer}
          selectedAnswer={selectedAnswer}
          isCorrect={isCorrect && isAnswerSubmitted}
        />
        <p />
        {!isAnswerSubmitted && (
          <Button text="Antworten" onClick={handleSubmit} />
        )}
        {isAnswerSubmitted && (
          <Button text="Nächste Frage" onClick={loadNextQuestion} />
        )}
        <p />
        {isCorrect === false && isAnswerSubmitted && (
          <Button text="Hilfe anfordern" onClick={handleRequestHelp} />
        )}
      </Content>
    </div>
  );
};

export default RunQuiz;
