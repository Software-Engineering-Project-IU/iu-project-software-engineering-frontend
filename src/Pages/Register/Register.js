/*
*	Register.js	
*
*	Ersteller:		    Kevin Krazius
*	Erstellungsdatum:	03-11-2024
*	Info/Notizen:		Erstellen einer Register-Komponente, hier wird angezeigt was unter Route "/register" angezeigt wird
*
*	Editiert von:		<Name>
*	Editiert am:		<Datum>
*	Info/Notizen:		<Beschreibung der Änderung>
*
*/

import { useState } from 'react';
import { isValidEmail } from '../../Components/HelpFunctions/Utils';
import Button from '../../Components/Buttons/Button';
import InputField from '../../Components/InputFields/InputField';
import Content from '../../Layout/Content/Content';
import '../../css/main.css';

const Register = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {

        // Validate E-Mail
        if (!isValidEmail(email)) {
            alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
            return;
        }

        console.log("Login attempted with Email: ", email, " ,Password: ", password, " and Username: ", username);
        // API-Request
    }
    
    return (
        <div>
        <Content>
            <div className="form-container">
                <div className="input-group">
                    <InputField label="Username: " type="name" name="name" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="input-group">
                    <InputField label="E-Mail: " type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input-group">
                    <InputField label="Password: " type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <Button text="Sign up" onClick={handleRegister}/>
            </div>
        </Content>
        </div>
    )
}

export default Register;