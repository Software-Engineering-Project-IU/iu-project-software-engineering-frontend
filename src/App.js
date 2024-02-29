import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import RunQuiz from './Pages/RunQuiz/RunQuiz';
import CreateQuestions from './Pages/CreateQuestion/CreateQuestion';
import EditQuestions from './Pages/EditQuestion/EditQuestion';

const App = () => {
  return (
    <BrowserRouter>
      <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/runquiz" element={<RunQuiz />} />
            <Route path="/createquestion" element={<CreateQuestions />} />
            <Route path="/editquestion" element={<EditQuestions />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;