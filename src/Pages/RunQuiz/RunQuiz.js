/*
*	    RunQuiz.js	
*
*	    Ersteller:		    Kevin Krazius
*	    Erstellungsdatum:	03-14-2024
*	    Info/Notizen:		Komponente, die Frage und Antworten anzeigt.
*
*	    Editiert von:		Kevin Krazius
*	    Editiert am:		03-29-2024
*       Info/Notizen:		Test-Daten integriert	    
*
*/

import React, { useState, useEffect } from "react";
import Button from "../../Components/Buttons/Button";
import AnswerBlock from "../../Components/QuizComponents/AnswerBlock";
import QuestionBlock from "../../Components/QuizComponents/QuestionBlock";
import Content from "../../Layout/Content/Content";
import { testData } from "../../Data/testData";

const RunQuiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

    // Lade die aktuelle Frage basierend auf dem Index
    const quizData = testData[currentQuestionIndex];
    const correctAnswer = quizData.antworten.find(answer => answer.isCorrect).text;

    // Nächste Frage laden
    const loadNextQuestion = () => {
        setSelectedAnswer(null);
        setIsCorrect(null);
        setIsAnswerSubmitted(false);
        setCurrentQuestionIndex(prevIndex => (prevIndex + 1) % testData.length); // Loop durch Fragen
    };

    // Antworten sind nur auswählbar wenn noch nicht auf antworten geklickt wurde
    const handleSelectAnswer = (answer) => {
        if (!isAnswerSubmitted) {
            setSelectedAnswer(answer);
        }
    };

    // Was passiert wenn auf Antworten geklickt wurde
    const handleSubmit = () => {
        if(selectedAnswer) {
            setIsAnswerSubmitted(true);
            setIsCorrect(selectedAnswer === correctAnswer);
        } else {
            alert("Wähle eine Antwort aus!")
        }
    };

    // Was passiert wenn der Hilfe-Button geklickt wird
    const handleRequestHelp = () => {
        console.log("Hilfe anfordern...")
        // Logik für Hilfsanforderung
    }

    return (
        <div>
            <Content>
                <QuestionBlock question={quizData.frage} />
                <AnswerBlock
                    answers={quizData.antworten.map(ans => ans.text)}
                    onSelectAnswer={handleSelectAnswer}
                    selectedAnswer={selectedAnswer}
                    isCorrect={isCorrect && isAnswerSubmitted}
                />
                <p/>
                {!isAnswerSubmitted && <Button text="Antworten" onClick={handleSubmit} />}
                {isAnswerSubmitted && <Button text="Nächste Frage" onClick={loadNextQuestion} />}
                <p/>
                {isCorrect === false && isAnswerSubmitted && <Button text="Hilfe anfordern" onClick={handleRequestHelp} />}
            </Content>
        </div>
    );
};

export default RunQuiz;
