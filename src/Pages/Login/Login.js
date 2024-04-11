/*
 *	Login.js
 *
 *	Ersteller:		    Kevin Krazius
 *	Erstellungsdatum:	03-10-2024
 *	Info/Notizen:		  Erstellen einer Login-Komponente, hier wird angezeigt was unter Route "/login" angezeigt wird
 *
 *	Editiert von:		Kevin Krazius
 *	Editiert am:		03-11-2024
 *	Info/Notizen:		Auslagern der isValidEmail-Komponente und importieren selbiger
 *
 *	Editiert von:		Kevin Krazius
 *	Editiert am:		03-29-2024
 *	Info/Notizen:		Importieren der User-Testdaten, implementieren der Logik für das anmelden
 *
 *  Editiert von:		Kevin Krazius
 *	Editiert am:		04-02-2024
 *	Info/Notizen:		Axios integriert, Login-Anfrage angepasst
 *
 */

import { useState, useContext } from "react";
import { useAuth } from "../../Components/AuthProvider/AuthProvider";
import Button from "../../Components/Buttons/Button";
import InputField from "../../Components/InputFields/InputField";
import Content from "../../Layout/Content/Content";
import { useNavigate } from "react-router-dom";
import "../../scss/main.scss";
import UserContext from "../../Context/UserContext";
import HelpContext from "../../Context/HelpContext";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { loginUser } = useAuth();
  const { users } = useContext(UserContext);
  const { fetchData } = useContext(HelpContext);

  // Login-Request
  const handleLogin = () => {
    try {
      // Prüfen, ob beide Felder befüllt sind
      if (!user || !password) {
        alert("Bitte füllen Sie alle Felder aus.");
        return;
      }

      // Überprüfen, ob ein Benutzer mit den eingegebenen Anmeldeinformationen gefunden wurde
      const foundUser = users.find(
        (userData) =>
          userData.user_name === user && userData.password === password
      );

      if (foundUser) {
        // Wenn ein Benutzer mit den eingegebenen Anmeldeinformationen gefunden wurde

        loginUser(foundUser);
        alert("Anmeldung erfolgreich!");
        fetchData();
        navigate("/");
      } else {
        // Wenn kein Benutzer mit den eingegebenen Anmeldeinformationen gefunden wurde
        alert("Ungültige Anmeldeinformationen");
      }
    } catch (error) {
      console.error("Fehler beim Anmelden:", error);
      alert("Fehler beim Anmelden. Bitte versuchen Sie es erneut.");
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
