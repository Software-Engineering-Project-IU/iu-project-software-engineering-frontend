/*
 *	Register.js
 *
 *	Ersteller:		    Kevin Krazius
 *	Erstellungsdatum:	03-11-2024
 *	Info/Notizen:		Erstellen einer Register-Komponente, hier wird angezeigt was unter Route "/register" angezeigt wird
 *
 *	Editiert von:		Kevin Krazius
 *	Editiert am:		03-14-2024
 *	Info/Notizen:		Try-Catch-Block mit Weiterleitung an Login Seite hinzu
 *
 *	Editiert von:		Kevin Krazius
 *	Editiert am:		03-29-2024
 *	Info/Notizen:		Funktionalität wird ausgesetzt
 *
 */

import { useState } from "react";
import Button from "../../Components/Buttons/Button";
import InputField from "../../Components/InputFields/InputField";
import Content from "../../Layout/Content/Content";
// import { useNavigate } from 'react-router-dom';
import "../../scss/main.scss";
// import { useAuth } from '../../Components/AuthProvider/AuthProvider';

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();
  // const { setUser } = useAuth();

  const handleRegister = () => {
    // // Validate E-Mail
    // if (!isValidEmail(email)) {
    //     alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
    //     return;
    // }
    // console.log("Registering attempted with Email: ", email, " ,Password: ", password, " and Username: ", username);
    // // Annahme: Hier beginnt dein API-Request User anlegen
    // try {
    //     // Hier würde dein API-Request stehen. Dies ist nur ein Platzhalter.
    //     // const response = await myApi.createUser({ username, email, password });
    //     // Wenn die API-Anfrage erfolgreich war:
    //     alert('Registrieren erfolgreich! Sie werden jetzt zur Homepage weitergeleitet.');
    //     setUser({username, email, id: 1})
    //     navigate('/');
    // } catch (error) {
    //     // Wenn es ein Problem mit der Registrierung gab, informiere den Benutzer
    //     alert('Es gab ein Problem bei der Registrierung: ' + error.message);
    // }
  };

  return (
    <div>
      <Content>
        <div className="form-container">
          <div className="input-group">
            <InputField
              label="Username: "
              type="name"
              name="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <InputField
              label="E-Mail: "
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <InputField
              label="Password: "
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button text="Sign up" onClick={handleRegister} />
        </div>
      </Content>

      <Content>
        <h1>Die Funktionalität wurde für den Prototyp ausgesetzt.</h1>
      </Content>
    </div>
  );
};

export default Register;
