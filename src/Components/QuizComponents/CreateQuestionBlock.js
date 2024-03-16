/*
*	    CreateQuestionBlock.js	
*
*	    Ersteller:		    Kevin Krazius
*	    Erstellungsdatum:	03-16-2024
*	    Info/Notizen:		Komponente welche der Fragenerstellung dient
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


    return (
        <div>
            <h2>Modul auswählen:</h2>
            {/* verfügbare Module auflisten und auswählbar machen */}
            <ul>
                {["Modul 1", "Modul 2", "Modul 3", "Modul 4"].map((moduleName) => (
                    <div key={moduleName}>
                        <Button 
                            text={moduleName} 
                            onClick={() => handleSelectModule(moduleName)}
                            classNameParam={selectedModule === moduleName ? 'button selected' : 'button'}
                        />
                    </div>
                ))}
            </ul>
            {/* Button für neues Modul erstellen -> Textfeld geht auf... */}
            <Button text={"Neues Modul erstellen"} onClick={handleCreateNewModule}/>
            {/* Zeige Eingabefeld, wenn showInput true ist */}
            {showInput && (
                <>
                    <h2>Neues Modul:</h2>
                    <InputField placeholder="Modulname eingeben" />
                </>
            )}
            <h2>Frage eingeben:</h2>
            <InputField/>
        </div>
    );
};

export default CreateQuestionBlock;
