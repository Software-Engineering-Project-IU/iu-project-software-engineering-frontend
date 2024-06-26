/*
 *	HelpRequest.js
 *
 *	Ersteller:		    Kevin Krazius
 *	Erstellungsdatum:	03-29-2024
 *	Info/Notizen:		  Komponente um Hilfsanfragen eines Users anzuzeigen, falls vorhanden
 *
 *	Editiert von:     Kevin Krazius
 *	Editiert am:      04-02-2024
 *	Info/Notizen:     Axios implementiert, Fetching Anfragen für API
 *
 *  Editiert von:     Kevin Krazius
 *	Editiert am:      04-02-2024
 *	Info/Notizen:     API Anfragen ausgelagert, Code angepasst
 *
 */

import React, { useContext } from "react";
import { useAuth } from "../AuthProvider/AuthProvider";
import "../../scss/main.scss";
import Button from "../Buttons/Button";
import HelpContext from "../../Context/HelpContext";
import QuizContext from "../../Context/QuizContext";

const HelpRequests = () => {
  const { user } = useAuth();
  const { help, updateHelpRequest, deleteHelpRequest } =
    useContext(HelpContext);
  const { questions, deleteHelpNeeded } = useContext(QuizContext);

  console.log("from helpreq", help, user);

  const handleHelpful = async (requestId, questionId) => {
    // Logik für hilfreiche Hilfsanfragen
    alert("Kommentar wurde als hilfreich markiert!");
    updateHelpRequest(requestId);
    console.log(questionId);
    deleteHelpNeeded(questionId);
  };

  const handleUnhelpful = async (requestId) => {
    // Logik für nicht hilfreiche Hilfsanfragen
    alert("Die Hilfe wurde gelöscht!");
    deleteHelpRequest(requestId);
  };

  const getQuestionById = (questionId) => {
    return questions.find((question) => question.id === questionId);
  };

  return (
    <div>
      <h2>Hilfe zu deinen Anfragen:</h2>
      {user && help.length > 0 ? (
        help
          .filter(
            (request) => request.user_id === user.id && request.is_helpful === 0
          )
          .map((request, index) => {
            const question = getQuestionById(request.question_id);
            return (
              <div key={index}>
                <h4>Modul: {question.module_name}</h4>
                <p>Frage: {question.question_text}</p>
                {request.provided_help && (
                  <div className="home">
                    <h3>Hilfe wurde bereitgestellt:</h3>
                    <p>{request.provided_help}</p>
                    <div className="buttons-help-request">
                      <Button
                        text={"Hilfreich"}
                        onClick={() =>
                          handleHelpful(request.id, request.question_id)
                        }
                      />
                      <Button
                        text={"Nicht hilfreich"}
                        buttonColor="button-secondary"
                        onClick={() => handleUnhelpful(request.id)}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })
      ) : (
        <p>Keine Hilfe vorhanden.</p>
      )}
    </div>
  );
};

export default HelpRequests;
