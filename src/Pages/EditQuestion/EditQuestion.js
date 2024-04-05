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
 *	    Editiert von:		    Kevin Krazius
 *	    Editiert am:		    04-05-2024
 *      Info/Notizen:       Logik implementiert um auf Daten der Datenbank zuzugreifen und diese in UI integriert
 */

import { useParams } from "react-router-dom";
import Content from "../../Layout/Content/Content";
import axios from "axios";
import EditQuestionBlock from "../../Components/QuizComponents/EditQuestionBlock";
import { useState, useEffect } from "react";

const EditQuestions = () => {
  // ID aus der URL erhalten
  let { id } = useParams();

  // Zustand für die Frage, Antworten und Loading
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(true);

  // Daten der Frage mit der entsprechenden ID von der API laden
  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const responseQuestion = await axios.get(
          `http://localhost:3001/quiz/questions/${id}`
        );
        const responseAnswer = await axios.get(
          `http://localhost:3001/quiz/answers/${id}`
        );
        setQuestion(responseQuestion.data);
        setAnswer(responseAnswer.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching question:", error);
      }
    };
    fetchQuestion();
  }, [id]);

  // Überprüfen, ob die Frage gefunden wurde
  if (!question && !answer) {
    return (
      <div>
        <Content>
          <h1>Question/Answer not found!</h1>
        </Content>
      </div>
    );
  }

  // Überprüfen, ob die Frage gefunden wurde
  if (loading) {
    return (
      <div>
        <Content>
          <h1>Loading...</h1>
        </Content>
      </div>
    );
  }

  return (
    <div>
      <Content>
        <EditQuestionBlock />
      </Content>
    </div>
  );
};

export default EditQuestions;
