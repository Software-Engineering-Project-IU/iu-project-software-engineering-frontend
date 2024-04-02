/*
 *	    CreateQuestion.js
 *
 *	    Ersteller:		    Kevin Krazius
 *	    Erstellungsdatum:	03-16-2024
 *	    Info/Notizen:		Komponente die aufgerufen wird wenn /createquestion aufgerufen wird
 *
 *	    Editiert von:		<Name>
 *	    Editiert am:		<Datum>
 *       Info/Notizen:		<Beschreibung der Änderung>
 *
 */

import CreateQuestionBlock from "../../Components/QuizComponents/CreateQuestionBlock";
import Content from "../../Layout/Content/Content";

const CreateQuestion = () => {
  return (
    <div>
      <Content>
        <CreateQuestionBlock />
      </Content>
    </div>
  );
};

export default CreateQuestion;
