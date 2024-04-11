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
 *	    Editiert am:		04-02-2024
 *      Info/Notizen:		Axios integriert
 *
 *      Editiert von:		Kevin Krazius
 *	    Editiert am:		04-07-2024
 *      Info/Notizen:		Auslagern der API-Anfragen, nutzen von QuizContext
 *
 */

import React, { useState, useContext } from "react";
import Button from "../../Components/Buttons/Button";
import AnswerBlock from "../../Components/QuizComponents/AnswerBlock";
import QuestionBlock from "../../Components/QuizComponents/QuestionBlock";
import Content from "../../Layout/Content/Content";
import QuizContext from "../../Context/QuizContext";
import { useAuth } from "../../Components/AuthProvider/AuthProvider";
import HelpContext from "../../Context/HelpContext";

const RunQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [displayedHelp, setDisplayedHelp] = useState(null);
  const { user } = useAuth();

  // Zugriff auf Frage- und Antwortdaten aus dem QuizContext
  const { questions, helpNeeded } = useContext(QuizContext);
  const { help } = useContext(HelpContext);

  // Funktion zum Laden der nächsten Frage
  const loadNextQuestion = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    setIsAnswerSubmitted(false);
    setDisplayedHelp(null);
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

  // Handler zum Anzeigen der bereitgestellten Hilfe
  const handleShowHelp = () => {
    const selectedQuestionId = questions[currentQuestionIndex].id;
    const helpForQuestion = help.filter(
      (helpItem) => helpItem.question_id === selectedQuestionId
    );
    setDisplayedHelp(helpForQuestion);
  };

  // Handler zum Anfordern von Hilfe
  const handleRequestHelp = () => {
    const selectedQuestion = questions[currentQuestionIndex];

    const helpRequest = {
      question_id: selectedQuestion.id,
      module_name: selectedQuestion.module_name,
      question_text: selectedQuestion.question_text,
      selected_answer: selectedAnswer,
      is_help_needed: true,
      user_needing_help: user.id,
    };
    helpNeeded(selectedQuestion, helpRequest);

    alert(
      `Hilfe erfolgreich angefordert für:
    Modul: ${helpRequest.module_name}
    Frage: ${helpRequest.question_text}
    Ausgewählte Antwort: ${helpRequest.selected_answer}`
    );
    loadNextQuestion();
  };

  // Wenn keine Fragen vorhanden sind, zeige eine Ladeanzeige an
  if (!questions.length) {
    return <div>Lade Quizdaten...</div>;
  }

  // Bestimme, ob Hilfe für die aktuelle Frage verfügbar ist
  const helpAvailable = displayedHelp && displayedHelp.length > 0;

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
          <Button
            buttonColor="button-secondary"
            text="Antworten"
            onClick={handleSubmit}
          />
        )}
        {isAnswerSubmitted && (
          <Button
            buttonColor="button-secondary"
            text="Nächste Frage"
            onClick={loadNextQuestion}
          />
        )}
        <p />
        {isCorrect === false && isAnswerSubmitted && (
          <Button text="Hilfe anfordern" onClick={handleRequestHelp} />
        )}
        <p />
        {
          <Button
            buttonColor="button-secondary"
            text="Hilfe anzeigen"
            onClick={handleShowHelp}
          />
        }

        {displayedHelp && (
          <div className="help-in-quiz">
            <h2>Bereitgestellte Hilfe:</h2>
            {displayedHelp.map((helpItem, index) => (
              <div key={index}>
                <h3>{helpItem.provided_help}</h3>
              </div>
            ))}
          </div>
        )}
      </Content>
    </div>
  );
};

export default RunQuiz;
