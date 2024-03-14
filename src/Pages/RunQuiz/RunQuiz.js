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
import Button from "../../Components/Buttons/Button";
import AnswerBlock from "../../Components/QuizComponents/AnswerBlock";
import QuestionBlock from "../../Components/QuizComponents/QuestionBlock";
import Content from "../../Layout/Content/Content";
//import { useNavigate } from 'react-router-dom';

const RunQuiz = () => {
    // Beispiel-Daten / API-Aufruf
    const question = "Du denkst, dein Allgemeinwissen ist unschlagbar? Kennst du die Antwort auf jede Frage? Dann teste dein Allgemeinwissen direkt an diesen 10 Fragen! Klicke auf das Auge, um dir die richtige Antwort anzeigen zu lassen.";
    const answers = ["Welcher Berg ist der höchste Berg der Welt1Welcher Berg ist der höchste Berg der Welt1Welcher Berg ist der höchste Berg der Welt1Welcher Berg ist der höchste Berg der Welt1?",
                    "Welcher Berg ist der höchste Berg der Welt2?",
                    "Welcher Berg ist der höchste Berg der Welt3?",
                    "Welcher Berg ist der höchste Berg der Welt4?"
    ];
    const correctAnswer = "Welcher Berg ist der höchste Berg der Welt2?";

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
    //const navigate = useNavigate();

    // Was passiert wenn der Hilfe-Button geklickt wird
    const handleRequestHelp = () => {
        console.log("Hilfe anfordern...")
        // Logik für Hilfsanforderung
    }

    // Antworten sind nur auswählbar wenn noch nicht auf antworten geklickt wurde
    const handleSelectAnswer = (answer) => {
        if(!isAnswerSubmitted) {
            console.log("Ausgewählte Antwort:", answer);
            setSelectedAnswer(answer); // Setze die ausgewählte Antwort
        }
     };

    // Was passiert wenn auf Antworten geklickt wurde
    const handleSubmit = () => {
        console.log("Antwort überprüfen: " + selectedAnswer); 
        setIsAnswerSubmitted(true);

        const correct = selectedAnswer === correctAnswer;
        setIsCorrect(correct);

        if(correct){
            // Nächste Frage
        }
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
                    isCorrect={isCorrect} 
                />
                {selectedAnswer && <Button text="Antworten" onClick={handleSubmit} />}
                {isCorrect === false && <Button text="Hilfe anfordern" onClick={handleRequestHelp} />}
            </Content>
        </div>
        </div>
    )
}

export default RunQuiz;