import PropTypes from "prop-types";
import React from "react";
import Answers from "../answers/answers";
import "./quiz.css";
export default function Quiz() {
  { /* TODO get from api.. */ }
  const question = "tha damm!";
  return (
    <div>
      <h1>Quiz Page</h1>
      <div className="quiz-container">
	<h3 className="question"> { question } </h3>
        <Answers question="what do u think?" questionType="Multiple Choice" numQuestions={4} />
      </div>
    </div>
  );
}
PropTypes.Quiz = {
  question: PropTypes.string.isRequired,
}
