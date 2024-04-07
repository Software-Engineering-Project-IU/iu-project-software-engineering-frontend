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
  // Zustand für die Frage und Antworten
  const [questionData, setQuestionData] = useState([]);
  const [answerData, setAnswerData] = useState([]);

  const questionDataRequest = "http://localhost:3001/quiz/questions";
  const answerDataRequest = "http://localhost:3001/quiz/answers";

  useEffect(() => {
    // Funktion zum Abrufen der Quizdaten
    const fetchData = async () => {
      try {
        const [questionResponse, answerResponse] = await Promise.all([
          axios.get(questionDataRequest),
          axios.get(answerDataRequest),
        ]);
        setQuestionData(questionResponse.data);
        // Antwortdatenstruktur anpassen, um sie mit der Frage verknüpft zu halten
        const formattedAnswerData = {};
        answerResponse.data.forEach((answer) => {
          if (!formattedAnswerData[answer.question_id]) {
            formattedAnswerData[answer.question_id] = [];
          }
          formattedAnswerData[answer.question_id].push(answer);
        });
        setAnswerData(formattedAnswerData);
      } catch (error) {
        console.error("Fehler beim Abrufen der Quizdaten:", error);
      }
    };
    fetchData();
  }, []);

  // Nächste Frage laden
  const loadNextQuestion = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    setIsAnswerSubmitted(false);
    setCurrentQuestionIndex(
      (prevIndex) => (prevIndex + 1) % questionData.length
    ); // Loop durch Fragen
  };

  // Antworten sind nur auswählbar wenn noch nicht auf antworten geklickt wurde
  const handleSelectAnswer = (answer) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(answer);
    }
  };

  // Was passiert wenn auf Antworten geklickt wurde
  const handleSubmit = () => {
    const selectedAnswerObject = answerData[
      questionData[currentQuestionIndex].id
    ].find((answer) => answer.answer_text === selectedAnswer);

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
        questionData[currentQuestionIndex].question_text
    );
  };

  if (!questionData.length) {
    return <div>Lade Quizdaten...</div>;
  }

  console.log(questionData);
  console.log(answerData);
  return (
    <div>
      <Content>
        <QuestionBlock
          question={questionData[currentQuestionIndex].question_text}
        />
        <AnswerBlock
          answers={answerData[questionData[currentQuestionIndex].id].map(
            (ans) => ans.answer_text
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
