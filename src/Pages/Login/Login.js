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

import { useState } from "react";
import { useAuth } from "../../Components/AuthProvider/AuthProvider";
import Button from "../../Components/Buttons/Button";
import InputField from "../../Components/InputFields/InputField";
import Content from "../../Layout/Content/Content";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../scss/main.scss";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  // Login-Request
  const handleLogin = async () => {
    try {
      // Prüfen, ob beide Felder befüllt sind
      if (!user || !password) {
        alert("Bitte füllen Sie alle Felder aus.");
        return;
      }

      // Abrufen der Benutzerdaten über eine GET-Anfrage
      const response = await axios.get("http://localhost:3001/users");

      // Überprüfen, ob die GET-Anfrage erfolgreich war
      if (response.status === 200) {
        // Überprüfen, ob ein Benutzer mit den eingegebenen Anmeldeinformationen gefunden wurde
        const foundUser = response.data.find(
          (userData) =>
            userData.userName === user && userData.password === password
        );

        if (foundUser) {
          // Wenn ein Benutzer mit den eingegebenen Anmeldeinformationen gefunden wurde
          console.log("Login successful:", foundUser);

          loginUser(foundUser);

          alert("Anmeldung erfolgreich!");
          navigate("/");
        } else {
          // Wenn kein Benutzer mit den eingegebenen Anmeldeinformationen gefunden wurde
          alert("Ungültige Anmeldeinformationen");
        }
      } else {
        // Wenn die GET-Anfrage fehlgeschlagen ist
        alert("Fehler beim Abrufen der Benutzerdaten");
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
