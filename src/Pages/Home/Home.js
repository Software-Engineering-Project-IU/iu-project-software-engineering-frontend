/*
*	Home.js	
*
*	Ersteller:		    Kevin Krazius
*	Erstellungsdatum:	03-06-2024
*	Info/Notizen:		Erstellen einer Homepage-Komponente, hier wird angezeigt was unter Route "/" angezeigt wird
*
*	Editiert von:		<Name>
*	Editiert am:		<Datum>
*	Info/Notizen:		<Beschreibung der Änderung>
*
*/

import Button from '../../Components/Buttons/Button';
import Content from '../../Layout/Content/Content';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Components/AuthProvider/AuthProvider'
import '../../css/main.css';

const Home = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleQuizStart = () => {
        // Überprüfe ob der Benutzer eingeloggt ist
        if (user) {
            // Wenn eingeloggt, navigiere zum Quiz
            navigate('/runquiz');
        } else {
            // Wenn nicht eingeloggt, navigiere zur Login-Seite
            navigate('/login');
        }
    };

    return (
        <div>
        <Content>
            <div className="home">
                <Button text="Modul finden"/>
            </div>
        </Content>

        <Content>
            <div className="home">
            <Button text="Quiz starten" onClick={handleQuizStart}/>
            </div>
        </Content>
        </div>
    )
}

export default Home;