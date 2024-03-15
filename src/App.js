import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import RunQuiz from './Pages/RunQuiz/RunQuiz';
import CreateQuestions from './Pages/CreateQuestion/CreateQuestion';
import EditQuestions from './Pages/EditQuestion/EditQuestion';
import Navbar from './Layout/Navbar/Navbar'
import '../src/css/main.css';
import { AuthProvider } from './Components/AuthProvider/AuthProvider';
import { useState } from 'react';

const App = () => {

  const [user, setUser] = useState(undefined);
  async function loginUser(email, pw) {
    // REST-API Anfrage

    const user = { id: 1 ,username: "Max" };
    // await api.get("/v1/auth/login", {
    //   params: { email, password: pw },
    // });
    setUser(user);
  }

  return (
    <BrowserRouter>
      <AuthProvider>
      <div>
        <Navbar user={user}/>
          <div className="routes">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={loginUser}/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/runquiz" element={<RunQuiz />} />
            <Route path="/createquestion" element={<CreateQuestions />} />
            <Route path="/editquestion" element={<EditQuestions />} />
          </Routes>
          </div>
      </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;