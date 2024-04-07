/*
 *	QuizContext.js
 *
 *	Ersteller:		    Kevin Krazius
 *	Erstellungsdatum:	03-07-2024
 *	Info/Notizen:		Komponente erstellt, welche die Quizdaten aus der API-Anfrage erstellt
 *
 *	Editiert von:
 *	Editiert am:
 *	Info/Notizen:
 *
 */

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// QuizContext erstellen
const QuizContext = createContext();

// QuizProvider Komponente erstellen, um Daten zu verwalten und bereitzustellen
export const QuizProvider = ({ children }) => {
  // Zustand für Fragen und Antworten
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  // Funktion zum Abrufen der Quizdaten
  useEffect(() => {
    const fetchData = async () => {
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
    };
    fetchData();
  }, []);

  // Funktion zum Zuordnen der Antworten zu den Fragen
  const getQuestionWithAnswers = () => {
    return questions.map((question) => {
      // Antworten zu dieser Frage filtern
      const questionAnswers = answers.filter(
        (answer) => answer.question_id === question.id
      );
      return { ...question, answers: questionAnswers };
    });
  };

  // Context-Objekt zurückgeben, das den Zustand und eine Methode zum Aktualisieren des Zustands enthält
  return (
    <QuizContext.Provider value={{ questions: getQuestionWithAnswers() }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
