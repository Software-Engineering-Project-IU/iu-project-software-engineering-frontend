/*
*	    CreateQuestionBlock.js	
*
*	    Ersteller:		    Kevin Krazius
*	    Erstellungsdatum:	03-16-2024
*	    Info/Notizen:		Komponente, welche der Fragenerstellung dient
*
*	    Editiert von:		Kevin Krazius
*	    Editiert am:		03-26-2024
*       Info/Notizen:		Toggle zum festlegen der Korrektheit der Antworten hinzu	    
*
*/

import React, { useState } from 'react';
import '../../scss/main.scss';
import InputField from '../InputFields/InputField';
import Button from '../Buttons/Button';

const CreateQuestionBlock = () => {
    // Zustand für das ausgewählte Modul
    const [selectedModule, setSelectedModule] = useState('');
    // Zustand für das Anzeigen der Eingabekomponente
    const [showInput, setShowInput] = useState(false);
    // Zustand für Fragentext
    const [questionText, setQuestionText] = useState("");
    // Zustand für Modultext
    const [moduleText, setModuleText] = useState("");
    // Zustand für Antworten
    const [answers, setAnswers] = useState([
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
        { text: '', isCorrect: false }
    ]);

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
        setSelectedModule('');
        setShowInput(true); // Eingabekomponente anzeigen
        // Logik zur Erstellung eines neuen Moduls hinzufügen
    };

    // Funktion welche prüft ob sämtliche Eingaben getätigt wurden, anschließend wird über API an Datenbank übertragen
    const createQuestion = () => {
        console.log("Erstelltes Modul: ", moduleText || selectedModule);
        console.log("Erstellte Frage: ", questionText);
        console.log("Erstellte Antworten: ", answers);
        // Logik zum Senden der Frage an die API
    };

    // Handler zum Aktualisieren der Antwort
    const handleAnswerChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index].text = value;
        setAnswers(newAnswers);
    };

    // Handler zum Umschalten der Antwortkorrektheit
    const handleToggleCorrectness = (index) => {
        const newAnswers = [...answers];
        newAnswers[index].isCorrect = !newAnswers[index].isCorrect;
        setAnswers(newAnswers);
    };

    return (
        <div className='content-create-question'>
            <h2>Modul auswählen:</h2>
            {/* verfügbare Module auflisten und auswählbar machen */}
            <ul>
                {["Modul 1", "Modul 2", "Modul 3", "Modul 4", "Modul 5", "Modul 6", "Modul 7", "Modul 8"].map((moduleName) => (
                    <div key={moduleName}>
                        <Button 
                            text={moduleName} 
                            onClick={() => handleSelectModule(moduleName)}
                            classNameParam={selectedModule === moduleName ? 'button selected' : 'button'}
                        />
                        <p/>
                    </div>
                ))}
            </ul>
            {/* Button für neues Modul erstellen -> Textfeld geht auf... */}
            <p/>
            <Button text={"Neues Modul erstellen"} onClick={handleCreateNewModule}/>
            {/* Zeige Eingabefeld, wenn showInput true ist */}
            {showInput && (
                <>
                    <h2>Neues Modul:</h2>
                    <InputField value={moduleText} onChange={e => setModuleText(e.target.value)}/>
                </>
            )}
            <h2>Frage eingeben:</h2>
            <InputField isBig={true} value={questionText} onChange={e => setQuestionText(e.target.value)}/>
            {/* Eingabefelder für Antworten und Toggle-Buttons */}
            <h2>Antworten eingeben:</h2>
            {answers.map((answer, index) => (
                <div key={index}>
                    <InputField 
                        label={`Antwort ${index + 1} eingeben: `}
                        value={answer.text}
                        onChange={e => handleAnswerChange(index, e.target.value)}
                    />
                    <p/>
                    <label>
                        <input 
                            type="checkbox"
                            checked={answer.isCorrect}
                            onChange={() => handleToggleCorrectness(index)}
                        />
                        Ist Antwort korrekt?
                    </label>
                    <p/>
                </div>
            ))}
            <Button text={"Frage erstellen"} onClick={createQuestion}/>
        </div>
    );
};

export default CreateQuestionBlock;
