/*
 *	    EditQuestion.js
 *
 *	    Ersteller:		    Kevin Krazius
 *	    Erstellungsdatum:	03-16-2024
 *	    Info/Notizen:		Komponente die aufgerufen wird wenn /editquestion aufgerufen wird
 *
 *	    Editiert von:		Kevin Krazius
 *	    Editiert am:		04-02-2024
 *      Info/Notizen:		Axios implementiert, Fetching Data from API
 *
 */

import { useParams } from "react-router-dom";
import Content from "../../Layout/Content/Content";
import axios from "axios";
import EditQuestionBlock from "../../Components/QuizComponents/EditQuestionBlock";
import { useState, useEffect } from "react";

const EditQuestions = () => {
  // ID aus der URL erhalten
  let { id } = useParams();

  // Zustand für die Frage
  const [question, setQuestion] = useState(null);

  // Daten der Frage mit der entsprechenden ID von der API laden
  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/quiz/${id}`);
        setQuestion(response.data);
      } catch (error) {
        console.error("Error fetching question:", error);
      }
    };
    fetchQuestion();
  }, [id]);

  // Überprüfen, ob die Frage gefunden wurde
  if (!question) {
    return (
      <div>
        <Content>
          <h1>Question not found!</h1>
        </Content>
      </div>
    );
  }

  // Ausgabe der Frage auf der Konsole
  console.log("Gefundene Frage:", question);

  return (
    <div>
      <Content>
        <EditQuestionBlock />
      </Content>
    </div>
  );
};

export default EditQuestions;
