/*
*	    HelpBlock.js	
*
*	    Ersteller:		    Kevin Krazius
*	    Erstellungsdatum:	03-28-2024
*	    Info/Notizen:		Komponente, welche Hilfsanfragen anzeigt
*
*	    Editiert von:		<Name>
*	    Editiert am:		<Datum>
*       Info/Notizen:		<Beschreibung der Änderung>		    
*
*/

import React from "react";
import { testData } from "../../Data/testData";
import Button from "../Buttons/Button";

const HelpBlock = () => {
    // Filtern der Fragen, für die Hilfe benötigt wird
    const questionsNeedingHelp = testData.filter(question => question.isHelpNeeded);

    return (
        <div>
            <h2>DEINE HILFE WIRD BENÖTIGT:</h2>
            {questionsNeedingHelp.map(testData => (
                <div key={testData.id}>
                    <p>{testData.modulname}: {testData.frage}</p>
                    <Button text="Hilfskommentar verfassen" />
                </div>
            ))}
        </div>
    );
};

export default HelpBlock;
