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
 *      Editiert von:		Kevin Krazius
 *	    Editiert am:		04-05-2024
 *      Info/Notizen:		An API-Anfrage angepasst, Name aus DB für Modulnamen übernommen, useState hinzu
 *
 *      Editiert von:		Kevin Krazius
 *	    Editiert am:		04-07-2024
 *      Info/Notizen:		Benutzen von QuizContext um API Anfragen auszulagern
 *
 */

import React, { useEffect, useState, useContext } from "react";
import "../../scss/main.scss";
import InputField from "../InputFields/InputField";
import Button from "../Buttons/Button";
import QuizContext from "../../Context/QuizContext";
import { useNavigate } from "react-router-dom";

const CreateQuestionBlock = () => {
  const navigate = useNavigate();
  const [selectedModule, setSelectedModule] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [questionText, setQuestionText] = useState("");
  const [moduleText, setModuleText] = useState("");
  const [answers, setAnswers] = useState([
    { text: "", isCorrect: false },
    { text: "", isCorrect: false },
    { text: "", isCorrect: false },
    { text: "", isCorrect: false },
  ]);
  // Quizdaten
  const { questions, createQuestion } = useContext(QuizContext);
  // Moduldaten
  const [modules, setModules] = useState([]);

  // Extrahiere Modulnamen
  useEffect(() => {
    const extractedModules = Array.from(
      new Set(questions.map((item) => item.module_name))
    );
    setModules(extractedModules);
  }, [questions]);

  // Funktion, die aufgerufen wird, wenn ein Modul ausgewählt wird
  const handleSelectModule = (moduleName) => {
    setSelectedModule(moduleName);

    setShowInput(false);
  };

  // Funktion zur Erstellung eines neuen Moduls (optional)
  const handleCreateNewModule = () => {
    setSelectedModule("");
    setShowInput(true);
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

  const handleCreateQuestion = () => {
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
    const questionData = {
      module_name: moduleText || selectedModule,
      question_text: questionText,
      answers: answers,
    };

    createQuestion(questionData);
    navigate("/");
    alert("Frage wurde gespeichert!");
  };

  return (
    <div className="content-create-question">
      <h2>Modul auswählen:</h2>
      {/* verfügbare Module auflisten und auswählbar machen */}
      <ul>
        {modules.map((module_name, index) => (
          <div key={index}>
            <Button
              text={module_name}
              onClick={() => handleSelectModule(module_name)}
              classNameParam={
                selectedModule === module_name ? "button selected" : "button"
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
      <Button text={"Frage erstellen"} onClick={handleCreateQuestion} />
    </div>
  );
};

export default CreateQuestionBlock;
