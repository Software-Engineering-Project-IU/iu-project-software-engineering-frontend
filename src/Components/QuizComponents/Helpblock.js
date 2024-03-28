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

import React, { useState } from "react";
import { testData } from "../../Data/testData";
import Button from "../Buttons/Button";
import InputField from "../InputFields/InputField";

const HelpBlock = () => {
    // Filtern der Fragen, für die Hilfe benötigt wird
    const questionsNeedingHelp = testData.filter(question => question.isHelpNeeded);

    const [helpComment, setHelpComment] = useState("");

    const handleHelpCommentChange = (e) => {
        setHelpComment(e.target.value);
    };

    const handleSubmitHelpComment = () => {
        // Hier könnte die Logik für das Absenden des Hilfskommentars implementiert werden
        console.log("Hilfskommentar abgeschickt:", helpComment);
        // Zurücksetzen des Eingabefelds nach dem Absenden
        setHelpComment("");
    };

    return (
        <div className="catalog-block">
            <h2>DEINE HILFE WIRD BENÖTIGT:</h2>
            {questionsNeedingHelp.map(testData => (
                <div className="question-block" key={testData.id}>
                    <h3>{testData.modulname}: {testData.frage}</h3>
                    <div>
                        {testData.antworten.map((answer, index) => (
                            <p key={index}>{answer.text}</p>
                        ))}
                    </div>
                    <InputField
                        label={`(Hilfskommentar schreiben)`}
                        type="text"
                        name={`helpComment_${testData.id}`}
                        value={helpComment}
                        onChange={handleHelpCommentChange}
                        isBig={true}
                        height={100}
                        width={300}
                    />
                    <p/>
                    <Button text="Hilfskommentar abschicken" onClick={handleSubmitHelpComment} />
                </div>
            ))}
        </div>
    );
};

export default HelpBlock;
