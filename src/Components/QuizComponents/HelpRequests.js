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

import React, { useState } from "react";
import { userData } from "../../Data/userTestData";
import { useAuth } from "../AuthProvider/AuthProvider";
import "../../scss/main.scss";
import Button from "../Buttons/Button";

const HelpRequests = ({ userName }) => {
  const currentUser = userData.find((user) => user.userName === userName);
  const [isHelpVisible, setIsHelpVisible] = useState(true);

  function handleHelpful() {}

  function handleUnhelpful() {}

  return (
    <div>
      <h2>Deine Hilfsanfragen:</h2>
      {isHelpVisible &&
      currentUser &&
      currentUser.helpRequests &&
      currentUser.helpRequests.length > 0 ? (
        currentUser.helpRequests.map((request, index) => (
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
