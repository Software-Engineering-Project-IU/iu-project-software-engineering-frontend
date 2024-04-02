/*
 *	    CreateQuestionBlock.js
 *
 *	    Ersteller:		    Kevin Krazius
 *	    Erstellungsdatum:	03-16-2024
 *	    Info/Notizen:		Komponente, welche der Fragenerstellung dient
 *
 *	    Editiert von:		Kevin Krazius
 *	    Editiert am:		03-26-2024
 *      Info/Notizen:		Toggle zum festlegen der Korrektheit der Antworten hinzu
 *
 *      Editiert von:		Kevin Krazius
 *	    Editiert am:		04-02-2024
 *      Info/Notizen:		Axios integriert, Fetching der Quizdata
 *
 */

import React, { useEffect, useState } from "react";
import "../../scss/main.scss";
import InputField from "../InputFields/InputField";
import Button from "../Buttons/Button";
import axios from "axios";

const CreateQuestionBlock = () => {
  // Zustand für das ausgewählte Modul
  const [selectedModule, setSelectedModule] = useState("");
  // Zustand für das Anzeigen der Eingabekomponente
  const [showInput, setShowInput] = useState(false);
  // Zustand für Fragentext
  const [questionText, setQuestionText] = useState("");
  // Zustand für Modultext
  const [moduleText, setModuleText] = useState("");
  // Zustand für Antworten
  const [answers, setAnswers] = useState([
    { text: "", isCorrect: false },
    { text: "", isCorrect: false },
    { text: "", isCorrect: false },
    { text: "", isCorrect: false },
  ]);
  // Quizdaten
  const [quizData, setQuizData] = useState([]);

  // Extrahiere Modulnamen
  const modules = Array.from(new Set(quizData.map((item) => item.modulname)));

  // Funktion, um Quizdaten von der API abzurufen
  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/quizdata");
        setQuizData(response.data);
      } catch (error) {
        console.error("Fehler beim Abrufen der Quizdaten:", error);
      }
    };
    fetchQuizData();
  }, []);

  // Funktion, die aufgerufen wird, wenn ein Modul ausgewählt wird
  const handleSelectModule = (moduleName) => {
    setSelectedModule(moduleName);
    console.log("Ausgewähltes Modul: ", moduleName);

    // Verstecke das Eingabefeld, wenn ein Modul ausgewählt wird
    setShowInput(false);
  };

  // Funktion zur Erstellung eines neuen Moduls (optional)
  const handleCreateNewModule = () => {
    console.log("Erstelle neues Modul");
    setSelectedModule("");
    setShowInput(true); // Eingabekomponente anzeigen
    // Logik zur Erstellung eines neuen Moduls hinzufügen
  };

  // Funktion welche prüft ob sämtliche Eingaben getätigt wurden, anschließend wird über API an Datenbank übertragen
  const createQuestion = () => {
    if (!(selectedModule || moduleText)) {
      alert("Bitte wählen Sie ein Modul aus oder benennen Sie ein neues.");
      return;
    }
    if (!questionText) {
      alert("Bitte geben Sie einen Fragetext ein.");
      return;
    }
    if (answers.some((answer) => answer.text === "")) {
      alert("Bitte geben Sie alle Antworten ein.");
      return;
    }
    if (answers.filter((answer) => answer.isCorrect).length !== 1) {
      alert("Bitte markieren Sie genau eine Antwort als korrekt.");
      return;
    }

    console.log("Erstelltes Modul: ", moduleText || selectedModule);
    console.log("Erstellte Frage: ", questionText);
    console.log("Erstellte Antworten: ", answers);
    // Logik zum Senden der Frage an die API oder was auch immer als nächstes kommt
  };

  // Handler zum Aktualisieren der Antwort
  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index].text = value;
    setAnswers(newAnswers);
  };

  // Handler zum Umschalten der Antwortkorrektheit
  const handleToggleCorrectness = (index) => {
    // Aktualisiere alle Antworten, sodass nur die ausgewählte Antwort als korrekt markiert wird
    const updatedAnswers = answers.map((answer, idx) => ({
      ...answer,
      isCorrect: idx === index ? !answer.isCorrect : false, // Nur die ausgewählte Antwort kann umgeschaltet werden, alle anderen sind falsch
    }));
    setAnswers(updatedAnswers);
  };

  return (
    <div className="content-create-question">
      <h2>Modul auswählen:</h2>
      {/* verfügbare Module auflisten und auswählbar machen */}
      <ul>
        {modules.map((moduleName) => (
          <div key={moduleName}>
            <Button
              text={moduleName}
              onClick={() => handleSelectModule(moduleName)}
              classNameParam={
                selectedModule === moduleName ? "button selected" : "button"
              }
            />
            <p />
          </div>
        ))}
      </ul>
      {/* Button für neues Modul erstellen -> Textfeld geht auf... */}
      <p />
      <Button text={"Neues Modul erstellen"} onClick={handleCreateNewModule} />
      {/* Zeige Eingabefeld, wenn showInput true ist */}
      {showInput && (
        <>
          <h2>Neues Modul:</h2>
          <InputField
            value={moduleText}
            onChange={(e) => setModuleText(e.target.value)}
          />
        </>
      )}
      <h2>Frage eingeben:</h2>
      <InputField
        isBig={true}
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        height={200}
        width={750}
      />
      {/* Eingabefelder für Antworten und Toggle-Buttons */}
      <h2>Antworten eingeben:</h2>
      {answers.map((answer, index) => (
        <div key={index}>
          <InputField
            label={`Antwort ${index + 1} eingeben: `}
            value={answer.text}
            onChange={(e) => handleAnswerChange(index, e.target.value)}
          />
          <p />
          <label>
            <input
              type="checkbox"
              checked={answer.isCorrect}
              onChange={() => handleToggleCorrectness(index)}
            />
            Antwort korrekt?
          </label>
          <p />
        </div>
      ))}
      <Button text={"Frage erstellen"} onClick={createQuestion} />
    </div>
  );
};

export default CreateQuestionBlock;
