/*
 *	    EditQuestion.js
 *
 *	    Ersteller:		    Kevin Krazius
 *	    Erstellungsdatum:	03-16-2024
 *	    Info/Notizen:		Komponente die aufgerufen wird wenn /editquestion aufgerufen wird
 *
 *	    Editiert von:		Kevin Krazius
 *	    Editiert am:		03-26-2024
 *       Info/Notizen:		<Beschreibung der Änderung>
 *
 */

import { useParams } from "react-router-dom";
import Content from "../../Layout/Content/Content";
import { testData } from "../../Data/testData";
import EditQuestionBlock from "../../Components/QuizComponents/EditQuestionBlock";

const EditQuestions = () => {
  // ID aus der URL erhalten
  let { id } = useParams();

  // Die entsprechende Frage finden
  // Später Anfrage an API
  const question = testData.find((question) => question.id === parseInt(id));

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
