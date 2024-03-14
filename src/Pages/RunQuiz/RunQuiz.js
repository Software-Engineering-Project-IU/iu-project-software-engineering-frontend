/*
*	    RunQuiz.js	
*
*	    Ersteller:		    Kevin Krazius
*	    Erstellungsdatum:	03-14-2024
*	    Info/Notizen:		Komponente, die Frage und Antworten anzeigt.
*
*	    Editiert von:		<Name>
*	    Editiert am:		<Datum>
*       Info/Notizen:		<Beschreibung der Änderung>		    
*
*/

import React, { useState} from "react";
import AnswerBlock from "../../Components/QuizComponents/AnswerBlock";
import QuestionBlock from "../../Components/QuizComponents/QuestionBlock";
import Content from "../../Layout/Content/Content";
import Button from "../../Components/Buttons/Button";

const RunQuiz = () => {
    // Beispiel-Daten / API-Aufruf
    const question = "Du denkst, dein Allgemeinwissen ist unschlagbar? Kennst du die Antwort auf jede Frage? Dann teste dein Allgemeinwissen direkt an diesen 10 Fragen! Klicke auf das Auge, um dir die richtige Antwort anzeigen zu lassen.";
    const answers = ["Welcher Berg ist der höchste Berg der Welt1Welcher Berg ist der höchste Berg der Welt1Welcher Berg ist der höchste Berg der Welt1Welcher Berg ist der höchste Berg der Welt1?",
                    "Welcher Berg ist der höchste Berg der Welt2?",
                    "Welcher Berg ist der höchste Berg der Welt3?",
                    "Welcher Berg ist der höchste Berg der Welt4?"];

                    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleSelectAnswer = (answer) => {
        console.log("Ausgewählte Antwort:", answer);
        setSelectedAnswer(answer); // Setze die ausgewählte Antwort
     };

     const handleSubmit = () => {
        console.log("Antwort überprüfen: " + selectedAnswer); // Hier kannst du Logik hinzufügen, um die Antwort zu überprüfen
    };

    return (
        <div>
        <div>
            <Content>
                <QuestionBlock question={question} />
                <AnswerBlock 
                    answers={answers} 
                    onSelectAnswer={handleSelectAnswer} 
                    selectedAnswer={selectedAnswer} 
                    onSubmit={handleSubmit} 
                />
            </Content>
        </div>
        </div>
    )
}

export default RunQuiz;