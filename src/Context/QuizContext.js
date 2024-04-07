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

// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";

// // QuizContext erstellen
// const QuizContext = createContext();

// // QuizProvider Komponente erstellen, um Daten zu verwalten und bereitzustellen
// export const QuizProvider = ({ children }) => {
//   // Zustand für Fragen und Antworten
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState([]);

//   // Funktion zum Abrufen der Quizdaten
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [questionResponse, answerResponse] = await Promise.all([
//           axios.get("http://localhost:3001/quiz/questions"),
//           axios.get("http://localhost:3001/quiz/answers"),
//         ]);
//         setQuestions(questionResponse.data);
//         setAnswers(answerResponse.data);
//       } catch (error) {
//         console.error("Fehler beim Abrufen der Quizdaten:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   // Context-Objekt zurückgeben, das den Zustand und eine Methode zum Aktualisieren des Zustands enthält
//   return (
//     <QuizContext.Provider value={{ questions, answers }}>
//       {children}
//     </QuizContext.Provider>
//   );
// };

// export default QuizContext;
