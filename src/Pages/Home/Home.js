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
import '../../css/main.css';

const Home = () => {
    return (
        <div>
        <Content>
            <div className="home">
                <Button text="Modul finden"/>
            </div>
        </Content>

        <Content>
            <div className="home">
            <Button text="Quiz starten"/>
            </div>
        </Content>
        </div>
    )
}

export default Home;