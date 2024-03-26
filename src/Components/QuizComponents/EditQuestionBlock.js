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

import { useParams } from 'react-router-dom';
import { testData } from '../../Data/testData';
import Inputfield from '../InputFields/InputField'

const EditQuestionBlock = () => {
    // ID aus der URL erhalten
    let { id } = useParams();

    // Die entsprechende Frage finden
    // Später Anfrage an API
    const question = testData.find(question => question.id === parseInt(id));

    // Überprüfen, ob die Frage gefunden wurde
    if (!question) {
        return (
            <div>
                    <h1>Question not found!</h1>
            </div>
        );
    }

    // Ausgabe der Frage auf der Konsole
    console.log("Gefundene Frage:", question);

    return (
        <div>
                <h1>Frage bearbeiten</h1>
                <h2>Modul: {question.modulname}</h2>
                <h2>Frage: {question.frage}</h2>
                <h3>Antworten:</h3>
                <ul>
                    {question.antworten.map((antwort, index) => (
                        <li key={index}>{antwort.text}</li>
                    ))}
                </ul>
        </div>
    );
}

export default EditQuestionBlock;

