/*
*	Home.js	
*
*	Ersteller:		    Kevin Krazius
*	Erstellungsdatum:	03-06-2024
*	Info/Notizen:		Erstellen einer Homepage-Komponente, hier wird angezeigt was unter Route "/" angezeigt wird
*
*	Editiert von:		Kevin Krazius
*	Editiert am:		03-24-2024
*	Info/Notizen:		routeNavigation erstellt und über Parameter wiederverwendbar gemacht, neuen Content hinzu für Fragenkatalog
*
*   Editiert von:		Kevin Krazius
*	Editiert am:		03-24-2024
*	Info/Notizen:		useState importiert, QuestionCatalog importiert und integriert
*/

import React, { useState } from 'react';
import Button from '../../Components/Buttons/Button';
import Content from '../../Layout/Content/Content';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Components/AuthProvider/AuthProvider';
import '../../scss/main.scss';
import QuestionCatalog from '../../Components/QuizComponents/QuestionCatalog';

const Home = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [ showQuestionCatalog, setShowQuestionCatalog ] = useState(false);

    function routeNavigation(route) {
        // Überprüfe ob der Benutzer eingeloggt ist
        if (user) {
            // Wenn eingeloggt, navigiere zum Quiz
            navigate(route);
        } else {
            alert('Bitte melden Sie sich an.');
            return;
        }
    };

    return (
        <div>
        <Content>
            <div className="home">
                <Button text="Frage hinzufügen" onClick={() => routeNavigation('/createquestion')}/>
            </div>
        </Content>

        <Content>
            <div className="home">
                <Button text="Quiz starten" onClick={() => routeNavigation('/runquiz')}/>
            </div>
        </Content>

        <Content>
            <div className="home">
                <Button text="Fragenkatalog" onClick={() => setShowQuestionCatalog(!showQuestionCatalog)}/>
            </div>
            {showQuestionCatalog && <QuestionCatalog />}
        </Content>
        </div>
    )
}

export default Home;
