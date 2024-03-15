/*
*	Login.js	
*
*	Ersteller:		    Kevin Krazius
*	Erstellungsdatum:	03-10-2024
*	Info/Notizen:		Erstellen einer Login-Komponente, hier wird angezeigt was unter Route "/login" angezeigt wird
*
*	Editiert von:		Kevin Krazius
*	Editiert am:		03-11-2024
*	Info/Notizen:		Auslagern der isValidEmail-Komponente und importieren selbiger
*
*/

import { useState } from 'react';
import { isValidEmail } from '../../Components/HelpFunctions/Utils';
import { useAuth } from '../../Components/AuthProvider/AuthProvider'
import Button from '../../Components/Buttons/Button';
import InputField from '../../Components/InputFields/InputField';
import Content from '../../Layout/Content/Content';
import { useNavigate } from 'react-router-dom';
import '../../css/main.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setUser } = useAuth();

    // Login-Request
    const handleLogin = () => {
        
        // Validate E-Mail
        if (!isValidEmail(email)) {
            alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
            return;
        }

        console.log("Login attempted with Email: ", email, " and Password: ", password);
        // API-Request
        // Annahme: Hier beginnt dein API-Request User anlegen
        try {
            // Hier würde dein API-Request stehen. Dies ist nur ein Platzhalter.
            // const response = await myApi.createUser({ username, email, password });

            // Wenn die API-Anfrage erfolgreich war:
            alert('Anmeldung erfolgreich!');
            setUser({ id: 1 ,username: "Max" });
            //onLogin()
            navigate('/');
        } catch (error) {
            // Wenn es ein Problem mit der Registrierung gab, informiere den Benutzer
            alert('Es gab ein Problem bei der Anmeldung: ' + error.message);
        }       
    }

    return (
        <div>
        <Content>
            <div className="form-container">
                <div className="input-group">
                    <InputField label="E-Mail: " type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input-group">
                    <InputField label="Password: " type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <Button text="Login" onClick={handleLogin}/>
            </div>
        </Content>
        </div>
    )
}

export default Login;