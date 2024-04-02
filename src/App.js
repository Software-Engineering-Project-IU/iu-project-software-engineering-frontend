/*
*	    App.js	
*
*	    Ersteller:		      Kevin Krazius
*	    Erstellungsdatum:	  02-29-2024
*	    Info/Notizen:		    App-Komponente. Definiert den Aufbau der Web-Applikation

*	    Editiert von:		    <Name>
*	    Editiert am:		    <Datum>
*     Info/Notizen:		    <Beschreibung der Änderung>		    
*
*/

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import RunQuiz from "./Pages/RunQuiz/RunQuiz";
import CreateQuestions from "./Pages/CreateQuestion/CreateQuestion";
import EditQuestions from "./Pages/EditQuestion/EditQuestion";
import Navbar from "./Layout/Navbar/Navbar";
import "./scss/main.scss";
import { AuthProvider } from "./Components/AuthProvider/AuthProvider";
import Footer from "./Layout/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="app-container">
          <Navbar />
          <div className="routes">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/runquiz" element={<RunQuiz />} />
              <Route path="/createquestion" element={<CreateQuestions />} />
              <Route path="/editquestion/:id" element={<EditQuestions />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
