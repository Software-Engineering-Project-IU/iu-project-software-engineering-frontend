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
 *	Editiert von:		Kevin Krazius
 *	Editiert am:		03-29-2024
 *	Info/Notizen:		Importieren der User-Testdaten, implementieren der Logik für das anmelden
 */

import { useState } from "react";
import { useAuth } from "../../Components/AuthProvider/AuthProvider";
import Button from "../../Components/Buttons/Button";
import InputField from "../../Components/InputFields/InputField";
import Content from "../../Layout/Content/Content";
import { useNavigate } from "react-router-dom";
import { userData } from "../../Data/userTestData";
import "../../scss/main.scss";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  // Login-Request
  const handleLogin = () => {
    // Prüfen, ob beide Felder befüllt sind
    if (!user || !password) {
      alert("Bitte füllen Sie alle Felder aus.");
      return;
    }

    //Suchen nach User in Testdaten
    const foundUser = userData.find((userData) => userData.userName === user);

    // Prüfen, ob Nutzer und Passwort übereinstimmen
    if (foundUser && foundUser.password === password) {
      console.log(
        "Login attempted with Username: ",
        user,
        " and Password: ",
        password
      );
      alert("Anmeldung erfolgreich!");

      loginUser(foundUser);

      navigate("/");
    } else {
      alert("Ungültige Anmeldeinformationen");
      return;
    }
  };

  return (
    <div>
      <Content>
        <div className="form-container">
          <div className="input-group">
            <InputField
              label="Username: "
              type="name"
              name="username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
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
          <Button text="Login" onClick={handleLogin} />
        </div>
      </Content>
    </div>
  );
};

export default Login;
