/*
*	    EditQuestionBlock.js	
*
*	    Ersteller:		    Kevin Krazius
*	    Erstellungsdatum:	03-16-2024
*	    Info/Notizen:		Komponente die aufgerufen wird wenn /editquestion aufgerufen wird
*
*	    Editiert von:		Kevin Krazius
*	    Editiert am:		03-26-2024
*       Info/Notizen:		<Beschreibung der Änderung>		    
*
*/

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../scss/main.scss';
import InputField from '../InputFields/InputField';
import Button from '../Buttons/Button';
import { testData } from '../../Data/testData';

const EditQuestionBlock = () => {
    // ID aus der URL erhalten
    let { id } = useParams();

    // Zustand für die Frage
    const [questionData, setQuestionData] = useState({
        modulname: '',
        frage: '',
        antworten: [
            { text: '', isCorrect: false },
            { text: '', isCorrect: false },
            { text: '', isCorrect: false },
            { text: '', isCorrect: false }
        ]
    });

    // Daten der Frage mit der entsprechenden ID aus den Testdaten laden
    useEffect(() => {
        // Hier müsste die Logik für den Datenabruf aus der Datenbank implementiert werden
        const fetchData = async () => {
            try {
                // Annahme: testData ist eine Funktion, die die Testdaten lädt
                // const testData = await testData();
                const question = testData.find(q => q.id === parseInt(id));
                if (question) {
                    setQuestionData(question);
                } else {
                    console.log("Frage nicht gefunden!");
                }
            } catch (error) {
                console.error('Fehler beim Laden der Daten:', error);
            }
        };
        fetchData();
    }, [id]);

    // Handler zum Aktualisieren der Antwort
    const handleAnswerChange = (index, value) => {
        const newAnswers = [...questionData.antworten];
        newAnswers[index].text = value;
        setQuestionData({
            ...questionData,
            antworten: newAnswers
        });
    };

    // Handler zum Umschalten der Antwortkorrektheit
    const handleToggleCorrectness = (index) => {
        const newAnswers = questionData.antworten.map((answer, idx) => ({
            ...answer,
            isCorrect: idx === index ? !answer.isCorrect : false // Setze nur die gewählte Antwort auf true, alle anderen auf false
        }));
        setQuestionData({
            ...questionData,
            antworten: newAnswers
        });
    };

    return (
        <div className='content-create-question'>
            <h2>Modul: {questionData.modulname}</h2>
            <h2>Frage bearbeiten:</h2>
            <InputField isBig={true} value={questionData.frage} onChange={e => setQuestionData({...questionData, frage: e.target.value})}/>
            {/* Eingabefelder für Antworten und Toggle-Buttons */}
            <h2>Antworten eingeben:</h2>
            {questionData.antworten.map((answer, index) => (
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
            <Button text={"Frage aktualisieren"} onClick={() => console.log("Daten aktualisiert:", questionData)}/>
        </div>
    );
};

export default EditQuestionBlock;
