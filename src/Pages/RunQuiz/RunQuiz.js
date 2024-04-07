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

import React, { useState, useContext } from "react";
import Button from "../../Components/Buttons/Button";
import AnswerBlock from "../../Components/QuizComponents/AnswerBlock";
import QuestionBlock from "../../Components/QuizComponents/QuestionBlock";
import Content from "../../Layout/Content/Content";
import QuizContext from "../../Context/QuizContext";

const RunQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  // Zugriff auf Frage- und Antwortdaten aus dem QuizContext
  const { questions } = useContext(QuizContext);

  // Funktion zum Laden der nächsten Frage
  const loadNextQuestion = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    setIsAnswerSubmitted(false);
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  // Handler zum Auswählen einer Antwort
  const handleSelectAnswer = (answer) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(answer);
    }
  };

  // Handler zum Überprüfen der ausgewählten Antwort
  const handleSubmit = () => {
    const selectedQuestion = questions[currentQuestionIndex];
    const selectedAnswerObject = selectedQuestion.answers.find(
      (ans) => ans.answer_text === selectedAnswer
    );

    if (selectedAnswer) {
      setIsAnswerSubmitted(true);
      setIsCorrect(selectedAnswerObject.is_correct === 1);
    } else {
      alert("Wähle eine Antwort aus!");
    }
  };

  // Handler zum Anfordern von Hilfe
  const handleRequestHelp = () => {
    const selectedQuestion = questions[currentQuestionIndex];
    const helpRequest = {
      question_id: selectedQuestion.id,
      module_name: selectedQuestion.module_name,
      question_text: selectedQuestion.question_text,
      selected_answer: selectedAnswer,
    };

    // Hier kann die Logik für die Hilfsanforderung implementiert werden,
    // z.B. eine API-Anfrage an den Server senden oder eine Benachrichtigung anzeigen

    // Beispiel: Ausgabe einer Benachrichtigung mit den Informationen zur Hilfeanforderung
    alert(
      `Hilfe erfolgreich angefordert für:
    Modul: ${helpRequest.module_name}
    Frage: ${helpRequest.question_text}
    Ausgewählte Antwort: ${helpRequest.selected_answer}`
    );
  };

  // Wenn keine Fragen vorhanden sind, zeige eine Ladeanzeige an
  if (!questions.length) {
    return <div>Lade Quizdaten...</div>;
  }

  // Rendern der Quizkomponente
  return (
    <div>
      <Content>
        <QuestionBlock
          question={questions[currentQuestionIndex].question_text}
        />
        <AnswerBlock
          answers={questions[currentQuestionIndex].answers.map(
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
