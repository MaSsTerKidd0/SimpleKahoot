import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "./components/quiz/quiz";
import QuizList from "./components/quizList/quizList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quizzes" element={<QuizList/>} />

      </Routes>
    </Router>
  );
}

export default App;
