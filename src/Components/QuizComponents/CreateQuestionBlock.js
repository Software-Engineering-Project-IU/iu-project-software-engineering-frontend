/*
*	    CreateQuestionBlock.js	
*
*	    Ersteller:		    Kevin Krazius
*	    Erstellungsdatum:	03-16-2024
*	    Info/Notizen:		Komponente, welche der Fragenerstellung dient
*
*	    Editiert von:		<Name>
*	    Editiert am:		<Datum>
*       Info/Notizen:		<Beschreibung der Änderung>		    
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
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");
    // Zustand für die Korrektheit der Antwort
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

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
        console.log("Erstellte Antwort: ", answer1);
        console.log("Erstellte Frage: ", answer2);
        console.log("Erstellte Frage: ", answer3);
        console.log("Erstellte Frage: ", answer4);
        // Logik zum Senden der Frage an die API
    };

    // Handler zum Umschalten der Antwortkorrektheit
    const handleToggleCorrectness = () => {
        setIsCorrectAnswer(prevState => !prevState);
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
            <p/>
            <InputField label={"Antwort 1 eingeben: "} value={answer1} onChange={e => setAnswer1(e.target.value)}/>
            <label>
                <input 
                    type="checkbox"
                    checked={isCorrectAnswer}
                    onChange={handleToggleCorrectness}
                />
                Ist Antwort korrekt?
            </label>
            <p/>
            <InputField label={"Antwort 2 eingeben: "} value={answer2} onChange={e => setAnswer2(e.target.value)}/>
            <label>
                <input 
                    type="checkbox"
                    checked={isCorrectAnswer}
                    onChange={handleToggleCorrectness}
                />
                Ist Antwort korrekt?
            </label>
            <p/>
            <InputField label={"Antwort 3 eingeben: "} value={answer3} onChange={e => setAnswer3(e.target.value)}/>
            <label>
                <input 
                    type="checkbox"
                    checked={isCorrectAnswer}
                    onChange={handleToggleCorrectness}
                />
                Ist Antwort korrekt?
            </label>
            <p/>
            <InputField label={"Antwort 4 eingeben: "} value={answer4} onChange={e => setAnswer4(e.target.value)}/>
            <label>
                <input 
                    type="checkbox"
                    checked={isCorrectAnswer}
                    onChange={handleToggleCorrectness}
                />
                Ist Antwort korrekt?
            </label>
            <p/>
            <Button text={"Frage erstellen"} onClick={createQuestion}/>
        </div>
    );
};

export default CreateQuestionBlock;
