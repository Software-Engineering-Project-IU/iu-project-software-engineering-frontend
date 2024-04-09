/*
 *	QuizContext.js
 *
 *	Ersteller:		    Kevin Krazius
 *	Erstellungsdatum:	03-07-2024
 *	Info/Notizen:		Komponente erstellt, welche die Quizdaten aus der API-Anfrage erstellt
 *
 *	Editiert von:     Kevin Krazius
 *	Editiert am:      04-09-2024
 *	Info/Notizen:     fetchData() benutzt callBack um in anderen Funktionen aufgerufen zu werden, somit aktualisiert die App ihre Daten beim ändern von Datensätzen
 *
 */

import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

// QuizContext erstellen
const QuizContext = createContext();

// QuizProvider Komponente erstellen, um Daten zu verwalten und bereitzustellen
export const QuizProvider = ({ children }) => {
  // Zustand für Fragen und Antworten
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  // Funktion zum Abrufen der Quizdaten
  const fetchData = useCallback(async () => {
    try {
      // Alle Fragen abrufen
      const questionResponse = await axios.get(
        "http://localhost:3001/quiz/questions"
      );
      setQuestions(questionResponse.data);

      // Alle Antworten abrufen
      const answerResponse = await axios.get(
        "http://localhost:3001/quiz/answers"
      );
      setAnswers(answerResponse.data);
    } catch (error) {
      console.error("Fehler beim Abrufen der Quizdaten:", error);
    }
  }, []);

  // Funktion zum Abrufen der Quizdaten
  useEffect(() => {
    fetchData(); // Daten beim ersten Rendern abrufen
  }, [fetchData]); // useEffect neu auslösen, wenn fetchData sich ändert

  // Funktion zum updaten der Frage
  const updateQuestion = async (questionId, questionData) => {
    try {
      await axios.put(
        `http://localhost:3001/quiz/update-questions/${questionId}`,
        questionData
      );
      fetchData();
      // Frage nach dem Update erneut abrufen und den Zustand aktualisieren
      const updatedQuestionResponse = await axios.get(
        `http://localhost:3001/quiz/questions/${questionId}`
      );
      const updatedQuestion = updatedQuestionResponse.data;
      setQuestions((prevQuestions) =>
        prevQuestions.map((question) =>
          question.id === questionId ? updatedQuestion : question
        )
      );
    } catch (error) {
      console.error("Fehler beim Aktualisieren der Frage:", error);
    }
  };

  // Funktion zum updaten der Antworten
  const updateAnswer = async (answerId, answerData) => {
    try {
      await axios.put(
        `http://localhost:3001/quiz/update-answers/${answerId}`,
        answerData
      );
      fetchData();
      // Antwort nach dem Update erneut abrufen und den Zustand aktualisieren
      const updatedAnswerResponse = await axios.get(
        `http://localhost:3001/quiz/answers/${answerId}`
      );
      const updatedAnswer = updatedAnswerResponse.data;
      setAnswers((prevAnswers) =>
        prevAnswers.map((answer) =>
          answer.id === answerId ? updatedAnswer : answer
        )
      );
    } catch (error) {
      console.error("Fehler beim Aktualisieren der Antwort:", error);
    }
  };

  // Funktion zum Erstellen einer neuen Frage mit Antworten
  const createQuestion = async (questionData) => {
    try {
      // POST-Anfrage zum Erstellen der Frage mit Antworten
      const response = await axios.post(
        "http://localhost:3001/quiz/create-question",
        questionData
      );

      if (response.status === 201) {
        // Bei Erfolg: Daten erneut abrufen, um den aktualisierten Zustand zu erhalten
        fetchData();
      }
    } catch (error) {
      console.error("Fehler beim Erstellen der Frage:", error);
    }
  };

  const helpNeeded = async (selectedQuestion, helpRequest) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/quiz/help-needed/${selectedQuestion.id}`,
        helpRequest
      );
      fetchData();
    } catch (error) {
      console.error("Fehler beim Aktualisieren der Hilfe:", error);
    }
  };

  // Funktion zum Zuordnen der Antworten zu den Fragen
  const getQuestionWithAnswers = useCallback(() => {
    return questions.map((question) => {
      // Antworten zu dieser Frage filtern
      const questionAnswers = answers.filter(
        (answer) => answer.question_id === question.id
      );
      return { ...question, answers: questionAnswers };
    });
  }, [questions, answers]);

  // Context-Objekt zurückgeben, das den Zustand und eine Methode zum Aktualisieren des Zustands enthält
  return (
    <QuizContext.Provider
      value={{
        questions: getQuestionWithAnswers(),
        answers,
        updateAnswer,
        updateQuestion,
        createQuestion,
        helpNeeded,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
