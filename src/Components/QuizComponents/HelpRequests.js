/*
 *	HelpRequest.js
 *
 *	Ersteller:		    Kevin Krazius
 *	Erstellungsdatum:	03-29-2024
 *	Info/Notizen:		Komponente um Hilfsanfragen eines Users anzuzeigen, falls vorhanden
 *
 *	Editiert von:
 *	Editiert am:
 *	Info/Notizen:
 *
 */

import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthProvider/AuthProvider";
import "../../scss/main.scss";
import Button from "../Buttons/Button";
import axios from "axios";

const HelpRequests = () => {
  const { user } = useAuth();
  const [helpRequest, setHelpRequest] = useState([]);

  useEffect(() => {
    if (user) {
      // Funktion zum Abrufen der Hilfsanfragen des Benutzers
      const fetchHelpRequests = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3001/user/${user.id}`
          );
          setHelpRequest(response.data.helpRequests); // Setze die erhaltenen Hilfsanfragen in den Zustand
        } catch (error) {
          console.error("Fehler beim Abrufen der Hilfsanfragen:", error);
        }
      };

      // Hilfsanfragen beim Laden der Komponente abrufen
      fetchHelpRequests();
    }
  }, [user]);

  const handleHelpful = () => {
    // Logik für hilfreiche Hilfsanfragen
    console.log("Hilfreich geklickt.");
  };

  const handleUnhelpful = () => {
    // Logik für nicht hilfreiche Hilfsanfragen
    console.log("Nicht hilfreich geklickt.");
  };

  return (
    <div>
      <h2>Deine Hilfsanfragen:</h2>
      {user && helpRequest.length > 0 ? (
        helpRequest.map((request, index) => (
          <div key={index}>
            <p>Modul: {request.modulname}</p>
            <p>Frage: {request.frage}</p>
            {request.providedHelp && (
              <div className="home">
                <h3>Hilfe wurde bereitgestellt:</h3>
                <p>{request.providedHelp}</p>
                <div className="buttons-help-request">
                  <Button text={"Hilfreich"} onClick={handleHelpful} />
                  <Button
                    text={"Nicht hilfreich"}
                    buttonColor="button-secondary"
                    onClick={handleUnhelpful}
                  />
                </div>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>Keine Hilfsanfragen.</p>
      )}
    </div>
  );
};

export default HelpRequests;
